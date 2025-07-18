<script>
  import PrimaryButton from '../button/primary-button.svelte';
  import Input from '../input/input.svelte';

  const { ...props } = $props();
</script>

<form {...props}>
  <Input id="email" label="Email" type="text" placeholder="Email Address" required />
  <Input id="password" label="Password" type="password" placeholder="Password" required />
  <div>
    <PrimaryButton type="submit">Log In</PrimaryButton>
  </div>
</form>
