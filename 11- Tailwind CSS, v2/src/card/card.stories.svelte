<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Card from './card.svelte';

  const { Story } = defineMeta({
    title: 'Card',
    component: Card,
    argTypes: {
      title: {
        control: 'text',
        description: 'Card title',
      },
      description: {
        control: 'text',
        description: 'Card description',
      },
    },
    args: {
      title: 'Card Title',
      description: 'This is a description for the card component.',
    },
  });
</script>

<Story name="Default" />
