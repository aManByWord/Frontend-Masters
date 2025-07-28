<script>
const { label = 'A Very Important Checkbox', id = 'checkbox', ...props } = $props();
</script>

<div
  class=" group w-fit gap-2.5 rounded border bg-slate-200 p-4 outline-offset-4 outline-sky-400 transition-colors focus-within:bg-sky-200 has-checked:flex has-checked:flex-col has-checked:outline-2 has-checked:outline-green-700"
>
  <div>
    <input id={id} {...props} type="checkbox" class="peer accent-purple-400" />
    <label for={id} class="group-has-checked:line-through">{label}</label>
  </div>

  <div class="hidden gap-3 group-has-checked:flex group-has-checked:flex-col">
    <label required>What is your reason?</label>
    <input
      class="rounded p-1 ring-2 ring-amber-300 outline-0 focus:ring-amber-500"
      required
      type="text"
      placeholder="Enter Your Reason"
    />

    <button
      class="rounded-md bg-black px-1.5 py-1.5 text-white shadow-md shadow-gray-500
      group-has-invalid:hidden hover:bg-black group-has-checked:hover:bg-red-700"
      type="submit">Submit</button
    >
  </div>
</div>
