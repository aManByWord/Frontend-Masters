<script>
const { label = 'A Very Important Checkbox', id = 'checkbox', ...props } = $props();
</script>

<div>
  <input id={id} {...props} type="checkbox" />
  <label for={id}>{label}</label>
</div>
