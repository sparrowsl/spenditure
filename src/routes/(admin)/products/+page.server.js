import prisma from '../../../lib/utils/prisma';
/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const products = await prisma.product.findMany();
	return { products };
}
