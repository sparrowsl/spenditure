import drizzle from "$lib/server/db/drizzle.js";
import { recordsTable } from "$lib/server/db/schema.js";

/** @type {import("./$types").PageServerLoad} */
export async function load({}) {
	const records = await drizzle.query.recordsTable.findMany({ orderBy: recordsTable.created });

	return { records };
}
