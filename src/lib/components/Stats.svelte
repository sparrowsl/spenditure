<script>
	import { items } from '../stores/store.js';

	// Re-calculates the total price everytime an item is added/updated
	// '0' is the starting default value of totalPrice
	$: total = $items.reduce((totalPrice, item) => totalPrice + item.price, 0);
</script>

<section class="grid grid-cols-3 gap-3 p-4">
	<!-- Total cash spent -->
	<div class="rounded bg-white p-8 shadow-sm">
		<h3 class="mb-2 text-gray-800">
			<sup class="text-sm font-light">Le</sup>
			<span class="text-4xl font-bold">
				{total.toLocaleString('en-US')}
			</span>
		</h3>
		<p class="font-light text-gray-600">Total Cash Spent</p>
	</div>

	<!-- Items accounted for -->
	<div class="rounded bg-white p-8 shadow-sm">
		<h3 class="mb-2 text-4xl font-bold text-gray-800">{$items.length}</h3>
		<p class="font-light text-gray-600">Items bought</p>
	</div>

	<!-- lorem ipsum dolor sit amet -->
	<div class="rounded bg-white p-8 shadow-sm">
		<h3 class="mb-2 text-4xl font-bold text-gray-800">126</h3>
		<p class="font-light text-gray-600">lorem ipsum dolor sit amet.</p>
	</div>
</section>
