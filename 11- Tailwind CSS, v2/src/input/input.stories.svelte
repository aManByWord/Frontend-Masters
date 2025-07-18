<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Input from './input.svelte';

  const { Story } = defineMeta({
    title: 'Input',
    component: Input,
    argTypes: {
      label: {
        control: 'text',
        description: 'The label for the input field',
      },
      description: {
        control: 'text',
        description: 'Additional information about the input field',
      },
      error: {
        control: 'text',
        description: 'Error message displayed when input is invalid',
      },
      type: {
        control: 'select',
        options: ['text', 'email', 'password', 'number', 'url'],
        description: 'The type of the input field',
      },
      placeholder: {
        control: 'text',
        description: 'Placeholder text for the input field',
      },
      required: {
        control: 'boolean',
        description: 'Indicates if the input is required',
      },
      disabled: {
        control: 'boolean',
        description: 'Disables the input field when true',
      },
      readonly: {
        control: 'boolean',
        description: 'Makes the input field read-only when true',
      },
      minlength: {
        control: 'number',
        description: 'Minimum length of the input value',
      },
      maxlength: {
        control: 'number',
        description: 'Maximum length of the input value',
      },
      pattern: {
        control: 'text',
        description:
          'Regular expression pattern that the input value must match',
      },
      title: {
        control: 'text',
        description:
          'Tooltip text displayed when hovering over the input field',
      },
      min: {
        control: 'number',
        description: 'Minimum value for number inputs',
      },
      max: {
        control: 'number',
        description: 'Maximum value for number inputs',
      },
      onclick: {
        action: 'clicked',
        description: 'Function to call when the input is clicked',
      },
    },
    args: {
      label: 'Input Label',
      type: 'text',
      placeholder: 'Enter text',
      required: false,
      disabled: false,
      readonly: false,
      description: '',
      error: '',
      onclick: fn(),
    },
  });
</script>

<Story name="Input" />

<Story
  name="Required Input"
  args={{
    label: 'Required Input',
    required: true,
  }}
/>

<Story
  name="Email Input"
  args={{
    label: 'Email Address',
    type: 'email',
    placeholder: 'Your Email',
  }}
/>

<Story
  name="Input with Placeholder"
  args={{
    placeholder: 'Enter text here',
  }}
/>

<Story
  name="Input with Description"
  args={{
    label: 'Email Address',
    type: 'email',
    placeholder: 'Your Email',
    description: 'Give us your email address so we can send you spam.',
  }}
/>

<Story
  name="Input with Error"
  args={{
    label: 'Email Address',
    type: 'email',
    placeholder: 'Your Email',
    error: 'That is not a valid email.',
  }}
/>

<Story
  name="Password Input"
  args={{
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  }}
/>

<Story
  name="Number Input"
  args={{
    label: 'Quantity',
    type: 'number',
    placeholder: '0',
    min: 0,
    max: 100,
  }}
/>

<Story
  name="URL Input"
  args={{
    label: 'Website URL',
    type: 'url',
    placeholder: 'https://example.com',
  }}
/>

<Story
  name="Disabled Input"
  args={{
    disabled: true,
    value: 'This input is disabled',
  }}
/>
