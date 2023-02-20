<script>
	import AsideNavigation from '../../lib/components/AsideNavigation.svelte';
	import Button from '../../lib/components/shared/Button.svelte';
</script>

<div class="grid grid-cols-[minmax(200px,max-content),1fr]">
	<AsideNavigation />

	<main class="h-screen overflow-y-scroll">
		<nav class="flex min-h-[10vh] items-center justify-between bg-white px-5">
			<h3 class="font-bold text-gray-700">Welcome Admin!</h3>
			<form action="/logout" method="POST">
				<Button type="submit" classes="text-sm text-red-600">logout</Button>
			</form>
		</nav>
		<slot />
	</main>
</div>
