import { redirect } from '@sveltejs/kit';
import prisma from '../lib/utils/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		const employee = await prisma.employee.findFirst({
			where: {
				email: username,
				password
			}
		});

		if (!employee) return { error: 'Invalid login details, try again!!' };

		cookies.set('session', employee.id, {
			path: '/',
			sameSite: 'strict',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7
		});

		if (employee.isAdmin) throw redirect(302, '/dashboard');

		throw redirect(302, '/sales');
	}
};
