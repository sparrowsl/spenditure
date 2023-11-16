/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const session = event.cookies.get("session");

	if (!session) return await resolve(event);

	// const employee = await prisma.employee.findUnique({
	// 	where: {id: session}
	// });

	// if (employee) event.locals.user = employee;

	return await resolve(event);
};
