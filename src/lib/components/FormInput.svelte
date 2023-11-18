<script>
	export let type = "text";
	export let required = true;
	/** @type {number|string} */
	export let value = "";
	export let placeholder = "";
	export let name = "";
	export let id = "";
	export let label = "";
	export let disabled = false;
</script>

<label for={id || name}>
	{#if label.trim()}
		<span class="text-sm text-gray-600 block">{label}</span>
	{/if}

	<input
		{type}
		{required}
		{name}
		{value}
		id={id || name}
		{disabled}
		on:input={(/** @type {any} */ e) => (value = e?.target?.value)}
		{placeholder}
		class="{$$props.class} block w-full rounded border border-gray-200 p-2 text-sm text-gray-600"
	/>
</label>
