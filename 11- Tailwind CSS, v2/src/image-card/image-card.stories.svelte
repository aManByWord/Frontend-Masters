<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ImageCard from './image-card.svelte';

  const { Story } = defineMeta({
    title: 'ImageCard',
    component: ImageCard,
    argTypes: {
      name: {
        control: 'text',
        description: 'Product name',
      },
      description: {
        control: 'text',
        description: 'Product description',
      },
      price: {
        control: 'text',
        description: 'Product price',
      },
    },
    args: {
      name: 'Product Name',
      description: 'Product description goes here.',
      price: '$29.99',
    },
  });
</script>

<Story name="Default" />
