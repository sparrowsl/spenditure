<script>
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import FormInput from "$lib/components/FormInput.svelte";
	import { notifier } from "@beyonk/svelte-notifications";
</script>

<section>
	<a href="/records" class="block">back</a>

	<form
		action=""
		method="post"
		use:enhance={({}) => {
			return async ({ update, result }) => {
				// @ts-ignore
				if (result.type === "success") notifier.success(result?.data?.message, 3000);
				// @ts-ignore
				if (result.type === "failure") notifier.danger(result?.data?.message, 3000);

				update({ reset: false });
			};
		}}
	>
		<legend class="font-bold text-xl">Add New Record</legend>
		<fieldset class="container grid py-10 px-20 gap-3">
			<FormInput label="Full Name" name="name" class="max-w-md" />
			<FormInput label="Email" type="email" name="email" class="max-w-md" />
			<FormInput label="Contact" type="tel" name="contact" class="max-w-md" />
			<FormInput label="Address" name="address" class="max-w-md" />
			<FormInput label="City" name="city" class="max-w-md" />
			<input type="hidden" name="created" value={new Date().toISOString()} />

			<Button class="bg-teal text-white text-sm py-2 px-6">Add Record</Button>
		</fieldset>
	</form>
</section>
