<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Disclosure from './disclosure.svelte';

  const { Story } = defineMeta({
    title: 'Disclosure',
    component: Disclosure,
    argTypes: {
      title: {
        control: 'text',
        description: 'Disclosure title',
      },
      details: {
        control: 'text',
        description: 'Disclosure details content',
      },
    },
    args: {
      title: 'Click to expand',
      details: 'This is the expanded content that shows when the disclosure is opened.',
    },
  });
</script>

<Story name="Default" />
