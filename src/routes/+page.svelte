<script>
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import Input from "$lib/components/Input.svelte";

	/** @type {import("./$types").PageData}*/
	export let data;
</script>

<main class="h-screen grid place-content-center">
	<form
		action=""
		method="POST"
		class="bg-white rounded shadow-md p-5"
		use:enhance={({ formElement }) => {
			return async ({ result, update }) => {
				if (result.type === "success") formElement.reset();
				// if (result.type === "invalid") await applyAction(form);
				update();
			};
		}}
	>
		<legend class="font-bold text-center text-xl">Login</legend>

		<fieldset class="flex flex-col p-10 gap-5">
			<div>
				<label for="">Username</label>
				<Input placeholder="john" name="username" />
			</div>

			<div>
				<label for="">Password</label>
				<Input type="password" placeholder="********" name="password" />
			</div>

			{#if data?.error}
				<p class="text-sm text-red-500">{data?.error}</p>
			{/if}

			<Button type="submit" classes="text-center w-full text-sm p-2 rounded bg-gray-600 text-white">Login</Button>
		</fieldset>
	</form>
</main>
