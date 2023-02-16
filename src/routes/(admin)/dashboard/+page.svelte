<script>
	import { items } from '../../../lib/stores/store';
	import StatsCard from '../../../lib/components/StatsCard.svelte';

	// Re-calculates the total price everytime an item is added/updated
	// '0' is the default value of totalPrice
	$: total = $items.reduce((totalPrice, item) => totalPrice + item.price, 0);
</script>

<section class="mx-auto grid max-w-6xl grid-cols-4 gap-5 p-5">
	<StatsCard label="Cash Spent" text={(total + 200).toLocaleString('en-US')} />
	<StatsCard label="Products" />
	<StatsCard label="Employees" />
	<StatsCard label="Categories" />
</section>
