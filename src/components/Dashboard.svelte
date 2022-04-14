<script>
  import { spenditures } from "./../stores/store.js";

  let user = [];
  let number;

  function getUserData(userID) {
    user = $spenditures.find((spendings) => spendings.id === userID);
    console.log(user);
  }
  $: getUserData(parseInt(number));
</script>

<div>
  <select name="" id="" bind:value={number}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</div>

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
          {#each user.spendings as userData}
            <tr>
              <td>{userData.itemID}</td>
              <td>{userData.itemName}</td>
              <td>{userData.itemPrice}</td>
            </tr>
          {/each}
        </tbody>
      {/if}
    </table>
  {:else}
    <p>no User found in the database</p>
  {/if}
</section>

<style>
  caption {
    width: fit-content;
  }
</style>
