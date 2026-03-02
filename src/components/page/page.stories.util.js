/**
 * @typedef {import('./page.js').default} Page
 * @typedef {import('./page.types.js').PageConfigType} PageConfigType
 * @typedef {import('@storybook/web-components-vite').ArgTypes} ArgTypes
 * @typedef {import('@storybook/web-components-vite').Args} Args
 */

import { within } from 'storybook/test';

/**
 * Returns the arg types for the page component.
 * @param {string} [category='Page Props']
 * @returns {ArgTypes}
 */
export function getArgTypes(category = 'Page Props') {
    return {
        id: { control: { type: 'text' }, table: { category } },
        path: { control: { type: 'text' }, table: { category } },
        title: { control: { type: 'text' }, table: { category } },
        className: { control: { type: 'text' }, table: { category } }
    };
}

/**
 * Sets up the test scenario for the page component.
 * @param {HTMLElement} canvasElement
 * @returns {Promise<{canvas: ReturnType<typeof within>, pageNode: Page | null}>}
 */
export async function playSetup(canvasElement) {
    await customElements.whenDefined('arpa-page');
    const canvas = within(canvasElement);
    /** @type {Page | null} */
    const pageNode = canvasElement.querySelector('arpa-page');
    pageNode?.promise && (await pageNode?.promise);
    return { canvas, pageNode };
}
