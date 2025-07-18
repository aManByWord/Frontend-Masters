<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import LoginForm from './login-form.svelte';

  const { Story } = defineMeta({
    title: 'LoginForm',
    component: LoginForm,
    args: {
      onsubmit: fn(),
    },
  });
</script>

<Story name="Default" />
