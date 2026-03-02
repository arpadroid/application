/**
 * @typedef {import('./pageTitle.types').PageTitleConfigType} PageTitleConfigType
 * @typedef {import('./pageTitle.js').default} PageTitle
 * @typedef {import('@storybook/web-components-vite').ArgTypes} ArgTypes
 */

import { within } from 'storybook/test';

/**
 * Returns the arg types for the page title component.
 * @param {string} [category='Page Title Props'] - The category for the arg types.
 * @returns {ArgTypes} The arg types for the page title component.
 */
export function getArgTypes(category = 'Page Title Props') {
    return {
        id: { control: { type: 'text' }, table: { category } },
        path: { control: { type: 'text' }, table: { category } },
        title: { control: { type: 'text' }, table: { category } },
        className: { control: { type: 'text' }, table: { category } }
    };
}

/**
 * Setup the test environment.
 * @param {HTMLElement} canvasElement
 * @returns {Promise<{canvas: any, pageTitleNode: any}>} The canvas and page node.
 */
export async function playSetup(canvasElement) {
    await customElements.whenDefined('arpa-page');
    const canvas = within(canvasElement);
    /** @type {PageTitle | null} */
    const pageTitleNode = canvasElement.querySelector('page-title');

    pageTitleNode?.promise && (await pageTitleNode?.promise);
    return { canvas, pageTitleNode };
}
