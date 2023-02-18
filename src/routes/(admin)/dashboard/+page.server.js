import prisma from '../../../lib/utils/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	return {
		totalEmployees: await prisma.employee.count(),
		totalProducts: await prisma.product.count()
	};
}
