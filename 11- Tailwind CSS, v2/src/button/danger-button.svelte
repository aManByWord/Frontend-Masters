<script>
  const { label = 'Button', ...props } = $props();
</script>

<button {...props}>{label}</button>