<script>
	import Button from '../lib/components/shared/Button.svelte';
	import Input from '../lib/components/shared/Input.svelte';
</script>

<main class="grid h-screen place-content-center">
	<form action="" class="rounded bg-white p-5 shadow-md">
		<legend class="text-center text-xl font-bold">Login</legend>

		<fieldset class="flex flex-col gap-5 p-10">
			<div>
				<label for="" class="block">Username</label>
				<Input placeholder="john" name="username" required="true" />
			</div>

			<div>
				<label for="" class="block">Password</label>
				<Input type="password" placeholder="********" name="password" required="true" />
			</div>

			<Button type="submit" classes="text-center w-full text-sm p-2 rounded bg-gray-600 text-white">
				Login
			</Button>
		</fieldset>
	</form>
</main>
