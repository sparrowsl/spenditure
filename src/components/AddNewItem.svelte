<script>
  import { items, getCurrentDate } from "../stores/store.js";

  let newItem = {};
  const generateItemId = () => Math.ceil(Math.random() * 1000);

  function addItem(item) {
    item.id = generateItemId(); // Add a random id to the item
    // if item does not have a price, set it to 0
    item.price = item.price ? item.price : 0;
    item.date = getCurrentDate(); // add the current date to the item

    // Add item to items
    $items = [item, ...$items];
    // newItem = {}; // Reset form input
  }
</script>

<form
  on:submit|preventDefault={() => addItem(newItem)}
  class="flex flex-col gap-3"
>
  <div>
    <label for="" class="block text-gray-600">Name of the Item</label>
    <input
      type="text"
      bind:value={newItem.name}
      required
      placeholder="Item name"
      class="rounded bg-slate-200 py-2 px-4 shadow-sm"
    />
  </div>

  <div>
    <label for="" class="block text-gray-600">Price of the Item</label>
    <input
      type="number"
      bind:value={newItem.price}
      placeholder="Item price"
      min="0"
      class="rounded bg-slate-200 py-2 px-4 shadow-sm"
    />
  </div>

  <button
    type="submit"
    class="max-w-fit rounded-lg bg-slate-600 py-2 px-4 font-medium text-white shadow-sm hover:bg-slate-500"
    >Add Item</button
  >
</form>

<style></style>
