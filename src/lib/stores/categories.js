import { writable } from 'svelte/store';

export const categories = writable([
	{
		name: 'Foods',
		numberOfProducts: 10
	},
	{
		name: 'Drinks',
		numberOfProducts: 100
	}
]);
