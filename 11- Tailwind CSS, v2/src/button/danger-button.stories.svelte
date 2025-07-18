<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Button from './danger-button.svelte';

  const { Story } = defineMeta({
    title: 'Button/Danger',
    component: Button,
    argTypes: {
      label: {
        control: 'text',
        description: 'The text displayed on the button',
      },
      disabled: {
        control: 'boolean',
        description: 'Disables the button when true',
      },
    },
    args: {
      label: 'Button',
      disabled: false,
      onclick: fn(),
    },
  });
</script>

<Story name="Danger Button" />