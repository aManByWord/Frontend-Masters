<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checkbox from './checkbox.svelte';

  const { Story } = defineMeta({
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
      label: {
        control: 'text',
        description: 'Checkbox label',
      },
      id: {
        control: 'text',
        description: 'Checkbox ID',
      },
      checked: {
        control: 'boolean',
        description: 'Checkbox checked state',
      },
    },
    args: {
      label: 'A Very Important Checkbox',
      id: 'checkbox',
      checked: false,
    },
  });
</script>

<Story name="Default" />
