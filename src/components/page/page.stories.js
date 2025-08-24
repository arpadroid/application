/**
 * @typedef {import('./page.js').default} Page
 * @typedef {import('@arpadroid/module/node_modules/@storybook/types').StepFunction} StepFunction
 * @typedef {import('./page.types.js').PageConfigType} PageConfigType
 */
import { attrString } from '@arpadroid/tools';
import { within } from '@storybook/test';
const html = String.raw;

const PageStory = {
    title: 'Application/Components/Page',
    tags: [],
    args: {
        id: 'page'
    },
    parameters: {
        layout: 'fullscreen'
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
                <zone name="page-title">Test Title</zone>
                <zone name="headerRhs">Header RHS</zone>
                <zone name="primaryNav">
                    <nav-link link="/home">Home</nav-link>
                    <nav-link link="/about">
                        About
                        <zone name="submenu">
                            <nav-link link="/about/mission">Mission</nav-link>
                            <nav-link link="/about/team">Team</nav-link>
                            <nav-link link="/about/company">Company</nav-link>
                        </zone>
                    </nav-link>
                    <nav-link link="/services">Services</nav-link>
                    <nav-link link="/blog">Blog</nav-link>
                    <nav-link link="/contact">Contact</nav-link>
                    <nav-link link="/faq">FAQ</nav-link>
                </zone>
                <zone name="lhsNav">
                    <nav-link link="/settings">Settings</nav-link>
                    <nav-link link="/profile">Profile</nav-link>
                    <nav-link link="/help">Help</nav-link>
                </zone>

                <zone name="leftColumn">
                    Left column content
                </zone>

                <zone name="content">
                    Many cultures have their own mythical origins on the creation of music.[34][35] Specific
                    figures are sometimes credited with inventing music, such as Jubal in Christian
                    mythology,[26] the legendary Shah Jamshid in Persian/Iranian mythology,[36] the goddess
                    Saraswati in Hinduism,[37] and the muses in Ancient Greek mythology.[35] Some cultures
                    credit multiple originators of music; ancient Egyptian mythology associates it with
                    numerous deities, including Amun, Hathor, Isis and Osiris, but especially Ihy.[38] There
                    are many stories relating to music's origins in Chinese mythology,[39][n 5] but the most
                    prominent is that of the musician Ling Lun, who—on the orders of the Yellow Emperor
                    (Huangdi)—invented bamboo flute by imitating the song of the mythical fenghuang birds.[40]
                </zone>

                <zone name="rightColumn">
                    right column content
                </zone>

                <zone name="rhsNav">
                    <nav-link link="/notifications">Notifications</nav-link>
                    <nav-link link="/messages">Messages</nav-link>
                    <nav-link link="/tasks">Tasks</nav-link>
                </zone>
                <zone name="footerNav">
                    <nav-link link="/privacy">Privacy Policy</nav-link>
                    <nav-link link="/terms">Terms of Service</nav-link>
                    <nav-link link="/cookies">Cookie Policy</nav-link>
                    <nav-link link="/help">Help</nav-link>
                </zone>
                <zone name="footerContent" zone="footer">
                    Following the advent of writing, literate civilizations are termed part of the ancient
                    world, the first of which is Sumerian literature of Abu Salabikh (now Southern Iraq) of
                    c. 2600 BCE.[63]
                </zone>
                
            </arpa-page>
        `;
    }
};

export default PageStory;
