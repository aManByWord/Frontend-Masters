<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Navigation from './navigation.svelte';

  const { Story } = defineMeta({
    title: 'Navigation',
    component: Navigation,
  });
</script>

<Story name="Default" />
