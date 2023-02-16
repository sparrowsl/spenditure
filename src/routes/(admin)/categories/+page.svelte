<script>
	import { categories } from '../../../lib/stores/categories.js';
</script>

<section class="min-h-screen bg-white p-5">
	<h1 class="mb-5 text-3xl font-bold text-gray-700">Categories</h1>

	<table class="mt-10 w-full table-auto">
		<caption class="mb-3 max-w-4xl text-xs text-white">
			<a href="/categories" class="ml-auto block w-fit rounded-sm bg-gray-600 p-2">Add Category</a>
		</caption>

		<thead>
			<tr class="text-left text-gray-700">
				<th>ID</th>
				<th>Name</th>
				<th>Products</th>
			</tr>
		</thead>

		<tbody>
			{#each $categories as category, index}
				<tr class="">
					<td class="py-3 text-sm text-gray-600">{index + 1}</td>
					<td class="py-3 text-sm text-gray-600">{category.name}</td>
					<td class="py-3 text-sm text-gray-600">{category.numberOfProducts}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
