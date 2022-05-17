<script>
  import { items } from "../stores/store.js";

  // $: total = choosenDate.items.reduce((totalPrice, currentItem) => {
  //   return totalPrice + currentItem.itemPrice;
  // }, 0); // 0 is the start value of totalPrice

  function deleteItem(item) {
    $items = $items.filter((it) => it.id !== item.id);
  }

  function editItem(item) {
    console.log(item);
  }
</script>

<section class="mt-4 overflow-x-scroll">
  <table class="w-full table-auto border-collapse">
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
          <td class="px-4 py-2 text-blue-400" on:click={() => editItem(item)}
            ><i class="gg-pen" /></td
          >
          <td class="px-4 py-2 text-red-500" on:click={() => deleteItem(item)}
            ><i class="gg-close-o" /></td
          >
        </tr>
      {/each}
      <!-- <tr>
            <td>Total</td>
            <td />
            <td>{total.toFixed(2)}</td>
          </tr> -->
    </tbody>
  </table>
</section>

<style>
</style>
