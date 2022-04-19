<script>
  import { dates, selectedDate } from "./../stores/store.js";

  $: choosenDate = $dates.find((date) => date.date === $selectedDate);
  $: total = choosenDate.items.reduce((totalPrice, currentItem) => {
    return totalPrice + currentItem.itemPrice;
  }, 0); // 0 is the start value of totalPrice

  // $: console.log(choosenDate);
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
          {#each choosenDate.items as dateItems}
            <tr>
              <td>{dateItems.itemID}</td>
              <td>{dateItems.itemName}</td>
              <td>{dateItems.itemPrice}</td>
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
</style>
