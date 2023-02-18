<script>
	import { products } from '../../../lib/stores/products';
	import SearchProduct from './SearchProduct.svelte';
</script>

<section class="min-h-screen bg-white p-5">
	<h1 class="mb-5 text-3xl font-bold text-gray-700">Products</h1>

	<SearchProduct />

	<table class="mt-10 w-full table-auto">
		<caption class="mb-3 max-w-4xl text-xs text-white">
			<a href="/products/add" class="ml-auto block w-fit rounded-sm bg-gray-600 p-2">Add Product</a>
		</caption>

		<thead>
			<tr class="text-left text-gray-700">
				<th>ID</th>
				<th>Name</th>
				<th>Price <small>(Le)</small></th>
				<th>In Stock</th>
				<th>Category</th>
			</tr>
		</thead>

		<tbody>
			{#each $products as product, index}
				<tr class="">
					<td class="py-3 text-sm text-gray-600">{index + 1}</td>
					<td class="py-3 text-sm text-gray-600">{product.name}</td>
					<td class="py-3 text-sm text-gray-600">{product.price}</td>
					<td class="py-3 text-sm text-gray-600">{product.inStock}</td>
					<td class="py-3 text-sm text-gray-600">{product.category}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
