<script>
  import { dates, selectedDate } from "./../stores/store.js";
  import Button from "./shared/Button.svelte";

  let newItem = {};
  const generateItemId = () => Math.ceil(Math.random() * 1000);

  function addItem(item = {}) {
    item.itemID = generateItemId(); // Add a random id to the item

    $dates.forEach((date) => {
      if (date.date === $selectedDate) {
        date.items.push(item); // Update the user's spending items

        // Set date to empty string then set it to the current selected date. Works like auto-refresh
        $selectedDate = "";
        $selectedDate = date.date;
      }
    });

    newItem = {}; // Reset form input
  }
</script>

<form on:submit|preventDefault={() => addItem(newItem)}>
  <input
    type="text"
    bind:value={newItem.itemName}
    required
    placeholder="Item name"
  />
  <br />
  <input
    type="number"
    bind:value={newItem.itemPrice}
    placeholder="Item price"
  />
  <br />
  <Button type="submit">Add Item</Button>
</form>

<style></style>
