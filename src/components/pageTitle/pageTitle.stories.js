/**
 * @typedef {import('./pageTitle.types').PageTitleConfigType} PageTitleConfigType
 */
import { attrString } from '@arpadroid/tools';

const html = String.raw;

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
            <arpa-zone name="lhs">lhs</arpa-zone>
            ${content}
            <arpa-zone name="rhs">rhs</arpa-zone>
        </page-title>`;
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
        id: 'page-title',
        icon: 'home',
        content: 'Page Title',
        iconRight: 'star'
        // title: 'Page title'
    }
    // play: async ({ canvasElement }) => {
    //     await playSetup(canvasElement);
    // }
};

export default PageStory;
