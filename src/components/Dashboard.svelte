<script>
  import { spenditures, currentChoosenID } from "./../stores/store.js";

  export let user = [];

  function getUserData(userID) {
    return $spenditures.find((spendings) => spendings.id === userID);
  }
  $: user = getUserData($currentChoosenID);
  $: total = user.spendings.reduce((totalPrice, currentItem) => {
    return totalPrice + currentItem.itemPrice;
  }, 0);  // 0 is the start value of totalPrice
</script>

<section>
  {#if user}
    <table>
      <caption>Spenditure items for {user.name}</caption>
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      {#if user.spendings}
        <tbody>
          {#each user.spendings as userData (userData.itemID)}
            <tr>
              <td>{userData.itemID}</td>
              <td>{userData.itemName}</td>
              <td>{userData.itemPrice}</td>
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
