<script>
	import AsideNavigation from '../../lib/components/AsideNavigation.svelte';
</script>

<div class="grid grid-cols-[max-content,1fr]">
	<AsideNavigation />

	<main>
		<nav class="flex min-h-[10vh] items-center justify-between bg-white px-5">
			<h3 class="font-bold text-gray-700">Welcome Admin!</h3>
			<a href="/admin" class="text-sm text-red-600">logout</a>
		</nav>
		<slot />
	</main>
</div>
