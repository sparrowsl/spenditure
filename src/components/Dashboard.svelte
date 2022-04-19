<script>
  import { dates, selectedDate } from "./../stores/store.js";

  $: choosenDate = $dates.find((date) => date.date === $selectedDate);
  $: total = choosenDate.items.reduce((totalPrice, currentItem) => {
    return totalPrice + currentItem.itemPrice;
  }, 0); // 0 is the start value of totalPrice

  function deleteItem(itemToDelete) {
    // console.log(itemToDelete);

    $dates.forEach((date) => {

      if (date.date === choosenDate.date) {
        // Get the items that were not deleted
        const filtered = date.items.filter((item) => item.itemID !== itemToDelete.itemID)
        date.items = filtered // Update the items in the list

        // Set date to empty string then set it to the current selected date. Works like auto-refresh
        $selectedDate = "";
        $selectedDate = date.date;
      }
    });
  }
</script>

<section>
  {#if selectedDate}
    <table>
      <caption>Spenditure items for {$selectedDate}</caption>
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      {#if choosenDate.items}
        <tbody>
          {#each choosenDate.items as dateItems (dateItems.itemID)}
            <tr>
              <td>{dateItems.itemID}</td>
              <td>{dateItems.itemName}</td>
              <td>{dateItems.itemPrice}</td>
              <td class="delete" on:click={() => deleteItem(dateItems)}>X</td>
            </tr>
          {/each}
          <tr>
            <td>Total</td>
            <td />
            <td>{total.toFixed(2)}</td>
          </tr>
        </tbody>
      {/if}
    </table>
  {/if}
</section>

<style>
  caption {
    width: fit-content;
  }
  .delete {
    font-weight: bold;
    color: red;
    padding-left: 2em;
  }
  .delete:hover {
    cursor: pointer;
  }
</style>
