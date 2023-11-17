<script>
	import { enhance } from "$app/forms";
	import { notifier } from "@beyonk/svelte-notifications";
	import Button from "$lib/components/Button.svelte";
	import FormInput from "$lib/components/FormInput.svelte";

	// /** @type {import("./$types").PageData}*/
	// export let data;
	/** @type {import("./$types").ActionData} */
	export let form;

	$: {
		if (form?.message) notifier.danger(form?.message, 3000);
	}
</script>

<main class="h-screen bg-gray-200 grid place-content-center">
	<form
		action=""
		method="POST"
		class="bg-white rounded shadow-md p-5"
		use:enhance={({ formElement }) => {
			return async ({ result, update }) => {
				if (result.type === "success") formElement.reset();
				// notifier.success("Successful hmmmm", 2000);
				// if (result.type === "failure") notifier.danger(result?.data?.message, 3000);
				// if (result.type === "invalid") await applyAction(form);
				update();
			};
		}}
	>
		<legend class="font-bold text-center text-xl">Register</legend>

		<fieldset class="flex flex-col p-10 gap-5">
			<FormInput label="Email" type="email" name="email" />
			<FormInput label="Password" type="password" name="password" />
			<Button type="submit" class="bg-gray-600 bg-teal-500 text-white w-full p-2">Register</Button>
		</fieldset>
	</form>
</main>
