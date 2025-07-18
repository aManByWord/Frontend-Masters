<script>
  const { name = 'Product Name', description = 'Product description goes here.', price } = $props();
</script>

<div>
  <img src="https://picsum.photos/seed/picsum/600/400" alt={name} />
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <button>{price}</button>
  </div>
</div>
