/**
 * @typedef {import('./page.js').default} Page
 */
import { attrString } from '@arpadroid/tools';
import { within } from '@storybook/test';
const html = String.raw;

const PageStory = {
    title: 'Page',
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
    playSetup: async canvasElement => {
        await customElements.whenDefined('arpa-page');
        const canvas = within(canvasElement);
        const pageNode = canvasElement.querySelector('arpa-page');
        await pageNode.promise;
        return { canvas, pageNode };
    },
    play: async ({ canvasElement }) => {
        await Default.playSetup(canvasElement);
    },
    render: args => {
        // Home
        // About
        // Services
        // Blog
        // Contact
        // FAQ

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
