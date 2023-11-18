<script>
	/** @type {"button"|"submit"|"reset"} */
	export let type = "submit";
	export let disabled = false;
	export let formaction = "";
</script>

<button on:click {type} {formaction} {disabled} class="{$$props.class} block text-center text-sm rounded">
	<slot>Click Me</slot>
</button>
