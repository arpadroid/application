/**
 * @typedef {import('./page.js').default} Page
 * @typedef {import('@arpadroid/module/node_modules/@storybook/types').StepFunction} StepFunction
 * @typedef {import('./page.types.js').PageConfigType} PageConfigType
 */
import { attrString } from '@arpadroid/tools'; // @ts-ignore
import { within } from '@storybook/test';
const html = String.raw;

const PageStory = {
    title: 'Application/Page',
    tags: [],
    args: {
        id: 'page'
    },
    parameters: {
        // layout: 'fullscreen'
    },
    getArgTypes: (category = 'Page Props') => {
        return {
            id: { control: { type: 'text' }, table: { category } },
            path: { control: { type: 'text' }, table: { category } },
            title: { control: { type: 'text' }, table: { category } },
            className: { control: { type: 'text' }, table: { category } }
        };
    }
};

export const Default = {
    name: 'Render',
    argTypes: PageStory.getArgTypes(),
    parameters: {
        // layout: 'fullscreen'
    },
    args: {
        ...PageStory.args,
        id: 'page'
        // title: 'Page title'
    },
    /**
     * Setup the test environment.
     * @param {HTMLElement} canvasElement
     * @returns {Promise<{canvas: any, pageNode: any}>} The canvas and page node.
     */
    playSetup: async canvasElement => {
        await customElements.whenDefined('arpa-page');
        const canvas = within(canvasElement);
        /** @type {Page | null} */
        const pageNode = canvasElement.querySelector('arpa-page');
        pageNode?.promise && (await pageNode?.promise);
        return { canvas, pageNode };
    },
    /**
     * Plays the test scenario.
     * @param {{ canvasElement: HTMLElement, step: StepFunction, args: Record<string, any> }} options
     * @returns {Promise<void>}
     */
    play: async ({ canvasElement }) => {
        await Default.playSetup(canvasElement);
    },
    /**
     * Renders the page component.
     * @param {PageConfigType} args
     * @returns {string}
     */
    render: args => {
        return html`
            <arpa-page ${attrString(args)}>
                <zone name="logo">Logo</zone>
                <zone name="title">Title</zone>
                <zone name="primary-nav">
                    <nav-link link="/home">Home</nav-link>
                    <nav-link link="/about">About</nav-link>
                    <nav-link link="/services">Services</nav-link>
                    <nav-link link="/blog">Blog</nav-link>
                    <nav-link link="/contact">Contact</nav-link>
                    <nav-link link="/faq">FAQ</nav-link>
                </zone>
                <zone name="content">Content</zone>
                <zone name="footer">Footer Content</zone>
            </arpa-page>
        `;
    }
};

export default PageStory;
