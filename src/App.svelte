<script>
	import { spenditures } from "./stores/store.js";
	import AddNewItem from "./components/AddNewItem.svelte";
	import Dashboard from "./components/Dashboard.svelte";
	import SelectId from "./components/SelectID.svelte"
</script>

<main>
	<AddNewItem />
	<SelectId/>
	<Dashboard user={$spenditures} />
</main>

<style>
</style>
