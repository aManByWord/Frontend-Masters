import '../src/index.css';

/** @type { import('@storybook/svelte-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Light and dark mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;

      // Apply dark class to the preview container
      const previewElement = document.querySelector('.sb-show-main');
      if (previewElement) {
        if (theme === 'dark') {
          previewElement.classList.add('dark');
          previewElement.classList.add('bg-slate-950');
          previewElement.classList.add('text-white');
        } else {
          previewElement.classList.remove('dark');
          previewElement.classList.remove('bg-slate-950');
          previewElement.classList.remove('text-white');
        }
      }

      // Also apply to the document element for consistency
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.add('bg-slate-950');
        document.documentElement.classList.add('text-white');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.remove('bg-slate-950');
        document.documentElement.classList.remove('text-white');
      }

      return Story();
    },
  ],
};

export default preview;
