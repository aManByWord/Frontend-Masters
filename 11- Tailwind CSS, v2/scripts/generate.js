#!/usr/bin/env node
import chalk from 'chalk';
import { kebabCase, pascalCase } from 'change-case';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const template = await readFile(join(__dirname, 'story.template.svelte.txt'), 'utf-8');

const [, , arg] = process.argv;

if (!arg) {
  console.error(chalk.red('Uh oh!'), 'Please provide a component name (e.g. "button").');
  console.error('Example:', chalk.magenta('npm run create button'));
  process.exit(1);
}

const componentName = pascalCase(arg);
const filename = kebabCase(arg);
const directory = join(__dirname, `../src/${filename}/${filename}`);

const content = template
  .replace(/ComponentName/g, componentName)
  .replace(/component-name/g, filename);

await mkdir(`src/${filename}`, { recursive: true });

await writeFile(`${directory}.svelte`, `<div>Hello, ${componentName}!</div>`);
await writeFile(`${directory}.stories.svelte`, content);

console.log(
  chalk.green(
    `Successfully created ${chalk.magenta(componentName)} component in ${chalk.blue(directory)}!`,
  ),
);
