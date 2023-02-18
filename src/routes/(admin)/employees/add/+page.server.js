import prisma from '../../../../lib/utils/prisma';

/** @type {import('./$types').PageLoad} */
export async function load({}) {
	const employees = await prisma.employee.findMany();
	console.log(employees);
	return { employees };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		const name = form.get('name');
		const email = form.get('email');
		const contact = form.get('contact');
		const address = form.get('address');

		// console.log({ name, email, contact, address });

		const employee = await prisma.employee.create({
			data: {
				name,
				email,
				address,
				contact,
				isAdmin: true
			}
		});
		console.log(employee);
		return { employee };
	}
};
