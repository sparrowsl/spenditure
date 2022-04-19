<script>
  import { dates, selectedDate } from "./../stores/store.js";
</script>

<div>
  <select bind:value={$selectedDate} on:change={() => console.log($dates)}>
    {#each $dates as option (option.date)}
      <option value={option.date}>{option.date}</option>
    {/each}
  </select>
</div>
