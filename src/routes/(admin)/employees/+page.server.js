import prisma from '../../../lib/utils/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const employees = await prisma.employee.findMany();
	return { employees };
}
