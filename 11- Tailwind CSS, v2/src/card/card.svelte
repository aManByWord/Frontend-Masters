<script>
const { title = 'Card Title', description = '' } = $props();
</script>

<div class="w-fit rounded-md bg-gray-200 p-4 outline-1 outline-yellow-700">
  <h2 class="font-mono text-2xl font-bold">{title}</h2>
  <p>{description}</p>
</div>
