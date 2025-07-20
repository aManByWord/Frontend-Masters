<script>
const { id = 'input', label, description, error, ...props } = $props();
const descriptionId = description ? `${id}-description` : undefined;
const errorId = error ? `${id}-error` : undefined;
</script>

<div class="w-fit space-y-1">
  <label class="text-lg font-medium text-slate-500" for={id}>{label}: </label>
  <input
    class="rounded p-1 outline-1 outline-slate-500"
    id={id}
    aria-describedby={descriptionId}
    aria-invalid={!!error}
    aria-errormessage={errorId}
    {...props}
  />
  {#if description}
    <p id={descriptionId}>{description}</p>
  {/if}
  {#if error}
    <p id={errorId}>{error}</p>
  {/if}
</div>
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>
<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button>
