<script>
  import { dates, selectedDate } from "./../stores/store.js";
</script>

<select bind:value={$selectedDate}>
  {#each $dates as option (option.date)}
    <option value={option.date}>{option.date}</option>
  {/each}
</select>
