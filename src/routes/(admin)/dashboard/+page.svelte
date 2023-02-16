<script>
	import { products } from '../../../lib/stores/products';
	import { employees } from '../../../lib/stores/employees';
	import StatsCard from '../../../lib/components/StatsCard.svelte';

	// Re-calculates the total price everytime an item is added/updated
	// '0' is the default value of totalPrice
	$: total = $products.reduce((totalPrice, item) => totalPrice + item.price, 0);
</script>

<section class="mx-auto grid max-w-6xl grid-cols-4 gap-5 p-5">
	<StatsCard label="Cash Spent" text={(total + 200).toLocaleString('en-US')} />
	<StatsCard label="Products" text={$products.length} />
	<StatsCard label="Employees" text={employees.length} />
	<StatsCard label="Product Categories" text={2} />
</section>
