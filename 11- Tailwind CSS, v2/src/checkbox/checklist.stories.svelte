<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Checklist from './checklist.svelte';

  const { Story } = defineMeta({
    title: 'Checklist',
    component: Checklist,
    argTypes: {
      items: {
        control: 'object',
        description: 'Array of checklist items',
      },
    },
    args: {
      items: [
        { id: 'task-1', label: 'First task' },
        { id: 'task-2', label: 'Second task' },
        { id: 'task-3', label: 'Third task' },
      ],
    },
  });
</script>

<Story name="Default" />
