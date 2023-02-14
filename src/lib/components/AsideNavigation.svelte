<script>
	const navItems = ['Dashboard', 'Add Item', 'All Items', 'Settings'];
	let activeItem = navItems[0];
</script>

<aside class="block h-screen max-w-full bg-white p-5 pl-14">
	<!-- Logo -->
	<div class="text-xl text-gray-700">
		<a href="/">Spenditure</a>
	</div>

	<!-- Sidebar menu -->
	<div class="mt-10">
		<h3 class="mb-3 text-xs uppercase text-gray-400">Menu</h3>

		<ul class="grid gap-2">
			{#each navItems as item}
				<li>
					<a
						href="/dashboard"
						class="{activeItem === item
							? 'rounded bg-blue-500 text-white hover:bg-blue-700'
							: 'text-gray-600'} block p-2 text-sm"
					>
						{item}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>
