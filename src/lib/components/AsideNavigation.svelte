<script>
	import { page } from '$app/stores';

	$: path = $page.url.pathname;

	const links = [
		{ href: '/dashboard', text: 'Home' },
		{ href: '/employees', text: 'Employees' },
		{ href: '/products', text: 'Products' },
		{ href: '/sales', text: 'Sales' }
	];
</script>

<aside class="h-screen max-w-full bg-white p-5 pl-14">
	<!-- Logo -->
	<a href="/" class="block text-xl text-gray-700">Spenditure</a>

	<!-- Sidebar Menu -->
	<section class="mt-10">
		<h3 class="mb-3 text-xs uppercase text-gray-400">Menu</h3>

		<div class="grid gap-1">
			{#each links as { text, href }}
				<a
					{href}
					class="{path === href
						? 'rounded-sm bg-blue-700 text-white'
						: 'text-gray-600 hover:bg-gray-100'} block p-2 text-sm "
				>
					{text}
				</a>
			{/each}
		</div>
	</section>
</aside>
