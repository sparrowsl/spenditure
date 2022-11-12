<script>
	import '../app.css';
	import AsideNavigation from '../lib/components/AsideNavigation.svelte';
</script>

<div class="grid grid-cols-[17rem,1fr]">
	<AsideNavigation />
	<main class="overflow-y-scroll p-3">
		<slot />
	</main>
</div>
