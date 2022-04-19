<script>
  import { spenditures, currentChoosenID } from "./../stores/store.js";
  import Button from "./shared/Button.svelte";

  const generateItemId = () => Math.ceil(Math.random() * 1000);

  let newItem = {};
  let isError;

  function addItem(item = {}, addToID) {
    // Add a random id to the item
    item.itemID = generateItemId();

    $spenditures.forEach((user) => {
      if (user.id === addToID) {
        // Update the user's spending items
        user.spendings.push(item);
        // changed to 0 so Item can be displayed when changed back to the correct id
        // Works like auto-refresh
        $currentChoosenID = 0;
        $currentChoosenID = addToID;
      }
    });

    newItem = {};  // Reset form input
  }
</script>

<form on:submit|preventDefault={() => addItem(newItem, $currentChoosenID)}>
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

  {#if isError}
    <p class="error">
      <small>please fill out all the fields!</small>
    </p>
  {/if}
</form>

<style>
  p.error {
    color: red;
    margin: 0;
    padding: 0;
    font-style: italic;
  }
</style>
