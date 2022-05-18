<script>
  import { items, itemToEdit, showEditModal } from "../stores/store.js";
  let newItems = [];

  function updateItem() {
    $items.forEach((item) => {
      if (item.id === itemToEdit.id) {
        item = itemToEdit;
      }
      newItems.push(item);
    });

    // update the items in the list
    $items = [...newItems];
    $showEditModal = false;
  }
</script>

<div
  class="fixed top-0 bottom-0 left-0 right-0 grid min-h-screen items-center justify-center
  bg-[rgba(0,_0,_0,_0.5)]"
>
  <div class="modal container relative w-96 rounded-md bg-white p-4 shadow-lg">
    <!-- Close the modal -->
    <div
      class="close absolute top-0 right-0 mt-4 mr-4 cursor-pointer rounded-sm
      bg-red-100 py-1 px-2 text-red-600 shadow-md"
      on:click={() => ($showEditModal = false)}
    >
      Close
    </div>

    <form
      on:submit|preventDefault={() => updateItem()}
      class="mt-12 grid justify-center gap-4"
    >
      <div>
        <label for="" class="block text-gray-600">Name of the Item</label>
        <input
          type="text"
          bind:value={$itemToEdit.name}
          required
          placeholder="Item name"
          class="rounded bg-slate-200 py-2 px-4 shadow-sm"
        />
      </div>

      <div>
        <label for="" class="block text-gray-600">Price of the Item</label>
        <input
          type="number"
          bind:value={$itemToEdit.price}
          placeholder="Item price"
          min="0"
          class="rounded bg-slate-200 py-2 px-4 shadow-sm"
        />
      </div>

      <button
        type="submit"
        class="max-w-fit rounded-lg bg-slate-600 py-2 px-4 font-medium text-white shadow-sm hover:bg-slate-500"
        >Save Changes</button
      >
    </form>
  </div>
</div>

<style></style>
