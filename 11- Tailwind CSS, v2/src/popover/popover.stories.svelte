<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Popover from './popover.svelte';

  const { Story } = defineMeta({
    title: 'Popover',
    component: Popover,
  });
</script>

<Story name="Default" />
