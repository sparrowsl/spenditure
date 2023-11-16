import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	throw redirect(302, "/");
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies }) => {
		cookies.delete("session");
		throw redirect(302, "/");
	},
};
