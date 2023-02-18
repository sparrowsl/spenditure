<script>
	import { products } from '../../../lib/stores/products';
	import { categories } from '../../../lib/stores/categories';
	import StatsCard from '../../../lib/components/StatsCard.svelte';

	// Re-calculates the total price everytime an item is added/updated
	// '0' is the default value of totalPrice
	$: total = $products.reduce((totalPrice, item) => totalPrice + item.price, 0);

	export let data;
	const { totalEmployees, totalProducts } = data;
</script>

<section class="mx-auto grid max-w-6xl gap-5 p-5 md:grid-cols-2 lg:grid-cols-4">
	<StatsCard label="Cash Spent" text={total.toLocaleString('en-US')} />
	<StatsCard label="Products" text={totalProducts} />
	<StatsCard label="Employees" text={totalEmployees} />
	<StatsCard label="Product Categories" text={$categories.length} />
</section>
