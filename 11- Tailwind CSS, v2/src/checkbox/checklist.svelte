<script>
  import Checkbox from './checkbox.svelte';
  const { items } = $props();
</script>

<div>
  {#each items as item}
    <Checkbox id={item.id} label={item.label} />
  {/each}
</div>
