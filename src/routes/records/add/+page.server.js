import drizzle from "$lib/server/db/drizzle.js";
import { recordsTable } from "$lib/server/db/schema.js";
import { fail } from "@sveltejs/kit";
import { z } from "zod";

const recordSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	email: z.string().email(),
	contact: z.string(),
	address: z.string(),
	city: z.string(),
	created: z.date({ coerce: true }),
});

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = Object.fromEntries(await request.formData());
		/** @type {import("$lib/types").Record} */
		let record;

		try {
			record = recordSchema.parse(form);
		} catch (/** @type {any} */ e) {
			const { fieldErrors: errors } = e.flatten();
			return fail(400, { message: Object.values(errors).map((err) => err[0])[0] });
		}

		const created = await drizzle
			.insert(recordsTable)
			// @ts-ignore
			.values({ id: crypto.randomUUID(), ...record })
			.returning();
		if (!created) return fail(400, { error: "Can't create/add record!!" });

		return { message: "Successfully updated data" };
	},
};
