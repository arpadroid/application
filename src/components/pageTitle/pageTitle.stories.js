/**
 * @typedef {import('./pageTitle.types').PageTitleConfigType} PageTitleConfigType
 * @typedef {import('@storybook/web-components-vite').Meta} Meta
 * @typedef {import('@storybook/web-components-vite').StoryObj} StoryObj
 * @typedef {import('@storybook/web-components-vite').StoryContext} StoryContext
 * @typedef {import('@storybook/web-components-vite').Args} Args
 */
import { attrString } from '@arpadroid/tools';
import { getArgTypes, playSetup } from './pageTitle.stories.util';

const html = String.raw;

/** @type {Meta} */
const PageStory = {
    title: 'Application/Components/Page/Title',
    tags: [],
    args: {
        id: 'page'
    },
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
export const Render = {
    argTypes: getArgTypes(),
    args: {
        ...PageStory.args,
        id: 'page-title',
        icon: 'home',
        content: 'Page Title',
        iconRight: 'star'
        // title: 'Page title'
    },
    play: async ({ canvasElement }) => {
        await playSetup(canvasElement);
    }
};

export default PageStory;
