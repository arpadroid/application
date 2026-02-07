/**
 * @typedef {import('./pageTitle.types').PageTitleConfigType} PageTitleConfigType
 * @typedef {import('@storybook/web-components-vite').Meta} Meta
 * @typedef {import('@storybook/web-components-vite').StoryObj} StoryObj
 * @typedef {import('@storybook/web-components-vite').StoryContext} StoryContext
 * @typedef {import('@storybook/web-components-vite').Args} Args
 */
import { attrString } from '@arpadroid/tools';
import { within } from 'storybook/test';
import PageTitle from './pageTitle';
const html = String.raw;

/** @type {Meta} */
const PageStory = {
    title: 'Application/Components/Page/Title',
    tags: [],
    args: {
        id: 'page'
    },
    parameters: {
        // layout: 'fullscreen'
    },
    getArgTypes: (category = 'Page Title Props') => {
        return {
            id: { control: { type: 'text' }, table: { category } },
            path: { control: { type: 'text' }, table: { category } },
            title: { control: { type: 'text' }, table: { category } },
            className: { control: { type: 'text' }, table: { category } }
        };
    },
    /**
     * Renders the page component.
     * @param {PageTitleConfigType} args
     * @returns {string}
     */
    render: args => {
        const content = args.content;
        delete args.content;
        return html`<page-title ${attrString(args)}>
            <zone name="lhs">lhs</zone>
            ${content}
            <zone name="rhs">rhs</zone>
        </page-title>`;
    }
};

/** @type {StoryObj} */
export const Default = {
    name: 'Render',
    argTypes: PageStory.getArgTypes(),
    parameters: {
        // layout: 'fullscreen'
    },
    args: {
        ...PageStory.args,
        id: 'page-title',
        icon: 'home',
        content: 'Page Title',
        iconRight: 'star'
        // title: 'Page title'
    },
    /**
     * Setup the test environment.
     * @param {HTMLElement} canvasElement
     * @returns {Promise<{canvas: any, pageTitleNode: any}>} The canvas and page node.
     */
    playSetup: async canvasElement => {
        await customElements.whenDefined('arpa-page');
        const canvas = within(canvasElement);
        /** @type {PageTitle | null} */
        const pageTitleNode = canvasElement.querySelector('page-title');

        pageTitleNode?.promise && (await pageTitleNode?.promise);
        return { canvas, pageTitleNode };
    },
    /**
     * Plays the test scenario.
     * @param {{ canvasElement: HTMLElement, step: StepFunction, args: Record<string, any> }} options
     * @returns {Promise<void>}
     */
    play: async ({ canvasElement }) => {
        await Default.playSetup(canvasElement);
    }
};

export default PageStory;
