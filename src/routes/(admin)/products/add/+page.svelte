<script>
	import Input from '../../../../lib/components/shared/Input.svelte';
	import Button from '../../../../lib/components/shared/Button.svelte';
	import { categories } from '../../../../lib/stores/categories';
</script>

<section class="min-h-[90vh] bg-white p-5">
	<h1 class="mb-5 text-3xl font-bold text-gray-700">Add Product</h1>

	<form action="" method="POST" class="max-w-xl">
		<fieldset class="grid gap-3">
			<div>
				<label for="" class="text-gray-700">Name</label>
				<Input name="name" placeholder="Product Name" required="true" />
			</div>

			<div>
				<label for="" class="text-gray-700">Price</label>
				<Input type="number" name="price" placeholder="Product price" required="true" />
			</div>

			<div>
				<label for="" class="text-gray-700">In Stock</label>
				<Input type="number" name="in_stock" placeholder="How many in stock" required="true" />
			</div>

			<div>
				<label for="" class="text-gray-700">Category</label>
				<select
					name="category"
					id=""
					class="block w-full rounded border border-gray-200 p-2 text-sm text-gray-600"
				>
					{#each $categories as category}
						<option value={category.name}>{category.name}</option>
					{/each}
				</select>
				<!-- <Input type="tel" name="contact" placeholder="Contact" /> -->
			</div>

			<div class="flex gap-10">
				<a href="/products" class="mt-5 w-fit rounded bg-teal-700 py-2 px-4 text-sm text-white">
					Back
				</a>
				<Button type="submit" classes="bg-gray-700 w-fit text-sm text-white p-2 rounded mt-5">
					Add Product
				</Button>
			</div>
		</fieldset>
	</form>
</section>
