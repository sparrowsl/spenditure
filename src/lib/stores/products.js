import { writable } from 'svelte/store';

export const products = writable([
	{
		id: 0,
		name: 'Chocolate',
		price: 200,
		// sellingPrice: price - 5,
		category: 'Foods',
		inStock: 10
	},
	{
		id: 1,
		name: 'Pen',
		price: 10.5,
		// sellingPrice: price - 5,
		category: 'Accessories',
		inStock: 10
	},
	{
		id: 2,
		name: 'Tonic',
		price: 300,
		// sellingPrice: price - 5,
		category: 'Drinks',
		inStock: 10
	},
	{
		id: 3,
		name: 'Sugar',
		price: 100.06,
		// sellingPrice: price - 5,
		category: 'Foods',
		inStock: 10
	}
]);
