<script>
	/** @type {"button"|"submit"|"reset"} */
	export let type = "button";
	export let disabled = false;
</script>

<button on:click {type} {disabled} class="{$$props.class} block">
	<slot>Click Me</slot>
</button>
