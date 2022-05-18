<script>
  import { onMount } from "svelte";

  import {
    items,
    itemToEdit,
    showEditModal,
    getLocal,
  } from "../stores/store.js";

  let data = getLocal("spenditures");
  if (data === null) data = [];
  console.log(data);

  let total = 0;
  // $: if ($items !== []) {
  //   total = $items.reduce((totalPrice, item) => {
  //     return totalPrice + item.price;
  //   }, 0); // 0 is the start value of totalPrice
  // }

  function deleteItem(item) {
    $items = $items.filter((it) => it.id !== item.id);
  }

  function editItem(item) {
    $showEditModal = true;
    $itemToEdit = item;
  }
</script>

<section class="mt-4 overflow-x-scroll">
  <table class="w-full table-auto border-collapse">
    <caption class="py-2 text-left text-lg text-gray-600"
      >Total cash spent: {total.toLocaleString("en-US")}</caption
    >
    <thead class="bg-slate-100">
      <tr class="text-left">
        <th class="p-2">Name</th>
        <th class="p-2">Price</th>
        <th class="p-2">Date</th>
        <th class="p-2" />
        <th class="p-2" />
      </tr>
    </thead>

    <tbody class="">
      {#each $items as item (item.id)}
        <tr class="text-sm md:text-lg">
          <td class="p-2">{item.name}</td>
          <td class="p-2">{item.price.toLocaleString("en-US")}</td>
          <td class="p-2">{item.date}</td>
          <td class="px-4 py-2 text-blue-500" on:click={() => editItem(item)}
            ><i class="gg-pen" />edit</td
          >
          <td class="px-4 py-2 text-red-500" on:click={() => deleteItem(item)}
            ><i class="gg-close-o" />delete</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>
</style>
