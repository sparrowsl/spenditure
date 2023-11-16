<script>
	// @ts-nocheck
	export let type = "text";
	export let required = true;
	export let value = "";
	export let placeholder = "";
	export let name = "";
	export let id = "";
	export let label = "";
	export let disabled = false;
</script>

<label for={id || name}>
	{#if label}<span class="block text-sm">{label}</span>{/if}

	<input
		{type}
		{required}
		{name}
		id={id || name}
		{disabled}
		on:input={(e) => (value = e?.target?.value)}
		{placeholder}
		class="{$$props.class} block w-full rounded border border-gray-200 p-2 text-sm text-gray-600"
	/>
</label>
