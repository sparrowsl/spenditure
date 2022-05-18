<script>
  import "./tailwind.css";
  import { showEditModal } from "./stores/store.js";
  import AddNewItem from "./components/AddNewItem.svelte";
  import Dashboard from "./components/Dashboard.svelte";
  import EditItem from "./components/EditItem.svelte";
</script>

<main class="">
  <div class="container mx-auto max-w-[960px] px-4 py-3">
    <AddNewItem />
    <Dashboard />
  </div>
</main>

{#if $showEditModal}
  <EditItem />
{/if}

<style>
</style>
