import { redirect } from '@sveltejs/kit';
import prisma from '../../../../lib/utils/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({}) {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const name = form.get('name');
		const email = form.get('email');
		const contact = form.get('contact');
		const address = form.get('address');
		const password = form.get('password');

		await prisma.employee.create({
			data: {
				name,
				email,
				address,
				contact,
				password
				// isAdmin: true
			}
		});
		throw redirect(302, '/employees');
	}
};
