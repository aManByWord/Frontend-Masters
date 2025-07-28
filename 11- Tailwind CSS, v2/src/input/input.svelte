<script>
const { id = 'input', label, description, error, ...props } = $props();
const descriptionId = description ? `${id}-description` : undefined;
const errorId = error ? `${id}-error` : undefined;
</script>

<div class="group w-fit space-y-1 p-4 ring-indigo-400 focus-within:ring-8">
  <label
    class="text-lg font-medium text-slate-500 after:text-red-600 group-has-[input:required]:after:content-['*']"
    for={id}
    >{label}:
  </label>
  <input
    class="group-has- rounded p-1 ring-amber-300 outline-1 outline-slate-500 user-invalid:outline-red-600 focus-within:ring-8"
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

<!-- <div class="group mt-8 space-y-1">
  <label
    class="block font-medium text-slate-500 after:ml-2 after:block after:h-2 after:w-2 after:text-red-600 group-has-[input:required]:after:content-['Required']"
    for={id}
    >{label}:
  </label>
  <input
    class="block w-full rounded bg-white px-2 py-1 placeholder-slate-500 outline outline-slate-600 placeholder:font-light invalid:outline-2
    invalid:outline-red-600
    focus:outline-2 focus:outline-blue-600"
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
</div> -->
