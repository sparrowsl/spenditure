<script>
	import { enhance } from '$app/forms';
	import Input from '../../../../lib/components/shared/Input.svelte';
	import Button from '../../../../lib/components/shared/Button.svelte';
</script>

<section class="min-h-[90vh] bg-white p-5">
	<h1 class="mb-5 text-3xl font-bold text-gray-700">Add Employee</h1>

	<form action="" method="POST" class="max-w-xl" use:enhance>
		<fieldset class="grid gap-3">
			<div>
				<label for="" class="text-gray-700">Name</label>
				<Input name="name" placeholder="Full name" />
			</div>

			<div>
				<label for="" class="text-gray-700">Email</label>
				<Input type="email" name="email" placeholder="Email (optional)" required={false} />
			</div>

			<div>
				<label for="" class="text-gray-700">Address</label>
				<Input name="address" placeholder="Address (optional)" required={false} />
			</div>

			<div>
				<label for="" class="text-gray-700">Contact</label>
				<Input type="tel" name="contact" placeholder="Contact" />
			</div>

			<div>
				<label for="" class="text-gray-700">Password</label>
				<Input type="password" name="password" placeholder="********" />
			</div>

			<div class="flex gap-10">
				<a href="/employees" class="mt-5 w-fit rounded bg-teal-700 py-2 px-4 text-sm text-white">
					Back
				</a>
				<Button type="submit" classes="bg-gray-700 w-fit text-sm text-white p-2 rounded mt-5">
					Add Employee
				</Button>
			</div>
		</fieldset>
	</form>
</section>
