<script>
  let items = [
    {
      id: 1,
      name: "Cheese",
      price: 200,
    },
    {
      id: 2,
      name: "Chocolate",
      price: 100,
    },
  ];
  let newItemName;
  let newItemPrice;
  let isError;

  function addItemToList() {
    if (!(newItemName && newItemPrice)) {
      isError = true;
      console.log(newItemName, newItemPrice, isError);
      return;
    }
    items = [
      ...items,
      {
        id: items.length + 1,
        name: newItemName,
        price: newItemPrice,
      },
    ];

    // Clear input fields
    newItemName = "";
    newItemPrice = "";
    // Hide error message
    isError = false;
  }
</script>

<form on:submit|preventDefault={addItemToList}>
  <input type="text" bind:value={newItemName} />
  <br />
  <input type="number" bind:value={newItemPrice} />
  <br />
  <button type="submit">Add Item</button>

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
