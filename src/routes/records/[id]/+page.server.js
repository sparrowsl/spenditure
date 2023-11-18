import drizzle from "$lib/server/db/drizzle.js";
import { recordsTable } from "$lib/server/db/schema.js";
import { fail, redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const record = await drizzle.query.recordsTable.findFirst({ where: eq(recordsTable.id, params.id) });

	if (!record) throw redirect(302, `/records`);

	return { record };
}

/** @type {import('./$types').Actions} */
export const actions = {
	updateRecord: async ({ request, params, url }) => {
		const form = Object.fromEntries(await request.formData());

		const updated = await drizzle.update(recordsTable).set(form).where(eq(recordsTable.id, params.id)).returning();
		if (!updated[0]) return fail(400, { error: "Can't update data currently!!" });

		return { message: "Successfully updated data" };
	},

	deleteRecord: async ({ params }) => {
		const deleted = (await drizzle.delete(recordsTable).where(eq(recordsTable.id, params.id)).returning()).at(0);
		if (!deleted) return fail(400, { error: "Can't delete this data currently!!" });

		throw redirect(307, "/records");
	},
};
