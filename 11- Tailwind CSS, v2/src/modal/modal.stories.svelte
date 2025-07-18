<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Modal from './modal.svelte';

  const { Story } = defineMeta({
    title: 'Modal',
    component: Modal,
    argTypes: {
      title: {
        control: 'text',
        description: 'Modal title',
      },
      content: {
        control: 'text',
        description: 'Modal content',
      },
    },
    args: {
      title: 'Modal Title',
      content: 'This is the content of the modal dialog.',
    },
  });
</script>

<Story name="Default" />