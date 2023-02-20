<script>
	import StatsCard from '../../../lib/components/StatsCard.svelte';

	export let data;
	const { totalEmployees, totalProducts, totalCashSpent } = data;

	// Re-calculates the total price everytime an item is added/updated
	// '0' is the default value of totalPrice
	$: total = totalCashSpent.reduce((totalPrice, item) => totalPrice + item.price, 0);
</script>

<section class="mx-auto grid max-w-6xl gap-5 p-5 md:grid-cols-2 lg:grid-cols-4">
	<StatsCard label="Total Cash Spent" text={total.toLocaleString('en-US')} />
	<StatsCard label="Products" text={totalProducts} />
	<StatsCard label="Employees" text={totalEmployees} />
	<StatsCard label="Total Sales" text={0} />
</section>
