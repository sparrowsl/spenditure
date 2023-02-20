<script>
	import dayjs from 'dayjs';
</script>

<section class="min-h-screen p-5">
	<h1 class="mb-5 text-3xl font-bold text-gray-700">Sales Log</h1>

	<div class="grid gap-2">
		{#each ['', '', '', ''] as _}
			<p class="rounded bg-white p-2 text-sm shadow-sm">
				John Doe sold 6 banana on {dayjs(new Date()).format('MMMM DD, YYYY')} at
				{dayjs(new Date()).format('HH:mm A')}
			</p>
		{/each}
	</div>
</section>
