import prisma from './lib/utils/prisma';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (!session) return await resolve(event);

	const user = await prisma.employee.findUnique({
		where: {
			id: session
		}
	});

	if (user) event.locals.user = user;

	return await resolve(event);
};
