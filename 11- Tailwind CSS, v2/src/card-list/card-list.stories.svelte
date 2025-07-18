<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import CardList from './card-list.svelte';

  const { Story } = defineMeta({
    title: 'Card List',
    component: CardList,
  });
</script>

<Story name="Default" />
