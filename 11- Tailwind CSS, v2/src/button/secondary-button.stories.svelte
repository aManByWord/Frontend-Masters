<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import { fn } from 'storybook/test';
import Button from './secondary-button.svelte';

const { Story } = defineMeta({
  title: 'Button/Secondary Button',
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
    label: 'Seconadary Button',
    disabled: false,
    onclick: fn(),
  },
});
</script>

<Story name="Button" />
