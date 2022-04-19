<script>
  import { spenditures, currentChoosenID } from "./../stores/store.js";
</script>

<div>
  <select name="" id="" bind:value={$currentChoosenID} on:change="{() => console.log($spenditures)}">
    {#each $spenditures as option}
      <option value={option.id}>{option.id}</option>
    {/each}
  </select>
</div>
