<script>
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import FormInput from "$lib/components/FormInput.svelte";
	import { notifier } from "@beyonk/svelte-notifications";

	/** @type {import("./$types").PageData} */
	export let data;
	$: record = data.record;
</script>

<section>
	<!-- <a href="/records" class="block">back</a> -->

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
		<fieldset class="container grid py-10 px-20 gap-3">
			<FormInput label="Full Name" name="name" bind:value={record.name} class="max-w-md" />
			<FormInput label="Email" name="email" value={record.email} class="max-w-md" />
			<FormInput label="Contact" name="contact" value={record.contact} class="max-w-md" />
			<FormInput label="Address" name="address" value={record.address} class="max-w-md" />
			<FormInput label="City" name="city" value={record.city} class="max-w-md" />
			<FormInput label="Created At" name="created" value={record.created} disabled={true} class="max-w-md" />

			<div class="flex gap-8 items-center">
				<Button formaction="?/updateRecord" class="bg-teal text-white text-sm py-2 px-6">Update</Button>
				<Button formaction="?/deleteRecord" class="bg-red text-white text-sm py-2 px-6">Delete</Button>
			</div>
		</fieldset>
	</form>
</section>
