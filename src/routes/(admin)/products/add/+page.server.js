import { redirect } from '@sveltejs/kit';
import prisma from '../../../../lib/utils/prisma';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const name = form.get('name');
		const price = form.get('price');
		const inStock = form.get('inStock');
		const category = form.get('category');

		await prisma.product.create({
			data: {
				name,
				price: Number(price),
				category,
				inStock: Number(inStock)
			}
		});

		throw redirect(302, '/products');
	}
};
