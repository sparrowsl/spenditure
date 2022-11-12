<script>
	import Icon from '@iconify/svelte';
	import { items, editModal } from '../stores/store.js';
</script>

<section class="mt-2">
	<table class="w-full table-auto">
		<caption class="py-2 text-left text-gray-600">
			<button
				type="button"
				class="ml-auto mr-5 block rounded bg-blue-600 px-4 py-1 text-sm text-white"
			>
				Add Item
			</button>
		</caption>
		<thead class="bg-white">
			<tr class="text-left">
				<th class="p-2 text-gray-700">Name</th>
				<th class="p-2 text-gray-700">Price</th>
				<th class="p-2 text-gray-700">Date</th>
				<th class="p-2" />
			</tr>
		</thead>

		<tbody class="">
			{#each $items as item (item.id)}
				<tr class="hover:bg-gray-300">
					<td class="p-2 text-sm text-gray-700">{item.name}</td>
					<td class="p-2 text-sm text-gray-700">{item.price.toLocaleString('en-US')}</td>
					<td class="p-2 text-sm text-gray-700">{item.date}</td>
					<td class="">
						<button type="button" class="block p-2">
							<Icon
								icon="el:trash-alt"
								class="text-xl text-red-300 hover:cursor-pointer hover:text-red-500"
							/>
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>
