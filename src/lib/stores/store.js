import { writable } from 'svelte/store';

export const itemToEdit = writable({});
export const editModal = writable(false);
export const items = writable([
	{
		id: 0,
		name: 'Chocolate',
		price: 200,
		date: '2022-04-01'
	},
	{
		id: 1,
		name: 'Pen',
		price: 10.5,
		date: '2022-03-12'
	},
	{
		id: 2,
		name: 'Milk',
		price: 300,
		date: '2012-04-12'
	},
	{
		id: 3,
		name: 'Sugar',
		price: 100.06,
		date: '2022-04-12'
	}
]);
