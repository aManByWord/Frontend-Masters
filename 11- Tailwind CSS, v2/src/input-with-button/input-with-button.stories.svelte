<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import InputWithButton from './input-with-button.svelte';

  const { Story } = defineMeta({
    title: 'InputWithButton',
    component: InputWithButton,
    args: {
      onsubmit: fn(),
    },
  });
</script>

<Story name="Default" />
