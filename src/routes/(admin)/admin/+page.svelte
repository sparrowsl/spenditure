<script>
	import { items } from '../../../lib/stores/store';
	import StatsCard from '../../../lib/components/StatsCard.svelte';

	// Re-calculates the total price everytime an item is added/updated
	// '0' is the starting default value of totalPrice
	$: total = $items.reduce((totalPrice, item) => totalPrice + item.price, 0);
</script>

<section class="flex gap-3 p-4">
	<StatsCard label="Total Cash Spent" price={(total + 2000).toLocaleString('en-US')} />
	<StatsCard label="Total Products" />
	<StatsCard label="Total Employees" />
	<StatsCard label="Total Categories" />
</section>
