/**
 * @typedef {import('./page.js').default} Page
 * @typedef {import('./page.types.js').PageConfigType} PageConfigType
 * @typedef {import('@storybook/web-components-vite').Meta} Meta
 * @typedef {import('@storybook/web-components-vite').StoryObj} StoryObj
 * @typedef {import('@storybook/web-components-vite').StoryContext} StoryContext
 * @typedef {import('@storybook/web-components-vite').Args} Args
 */

import { Story, DefaultStory } from './stories.util.js';
const html = String.raw;

/** @type {Meta} */
const PageStory = { ...Story };

/** @type {StoryObj} */
export const Default = { ...DefaultStory };

export default PageStory;
