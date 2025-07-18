# Tailwind Skatepark

A collection of simple Svelte components with Storybook stories designed for teaching TailwindCSS concepts. This is supplemental material to Steve's [Tailwind course](https://stevekinney.com/courses/tailwind) for [Frontend Masters](https://frontendmasters.com).

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the Storybook development server:

```bash
npm run dev
```

This will launch Storybook at `http://localhost:6006` where you can view and interact with all components.

## Creating New Components

Use the built-in generator to create new components:

```bash
npm run create <component-name>
```

For example:

```bash
npm run create badge
```

This will generate:

- `src/badge/badge.svelte` - The component file
- `src/badge/badge.stories.svelte` - The Storybook stories

## Available Scripts

- `npm run dev` - Start Storybook development server
- `npm run build` - Build Storybook for production
- `npm run create <name>` - Generate new component
- `npm run format` - Format code with Prettier
