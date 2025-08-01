<script>
const { title = 'Card Title', description = '' } = $props();
</script>

<div class="m-auto w-fit rounded-md bg-gray-200 p-4 outline-1 outline-teal-500 dark:bg-gray-800">
  <h2 class="font-mono text-2xl font-bold dark:text-white">{title}</h2>
  <p class="dark:text-white">{description}</p>
</div>
