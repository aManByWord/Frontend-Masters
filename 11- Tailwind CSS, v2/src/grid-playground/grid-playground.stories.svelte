<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import GridPlayground from './grid-playground.svelte';

  const { Story } = defineMeta({
    title: 'Grid Playground',
    component: GridPlayground,
  });
</script>

<Story name="Default" />
