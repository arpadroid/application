/**
 * @typedef {import('./pageTitle.types.js').PageTitleConfigType} PageTitleConfigType
 */
import { defineCustomElement } from '@arpadroid/tools';
import PageElement from '../pageElement/pageElement.js';

const html = String.raw;

class PageTitle extends PageElement {
    getDefaultConfig() {
        /** @type {PageTitleConfigType} */
        const config = {
            className: 'pageTitle',
            templateChildren: {
                lhs: {},
                icon: { tag: 'arpa-icon', content: () => this.getIcon() },
                content: { tag: 'h1', content: () => this.getContent(), zoneName: 'page-title' },
                iconRight: { tag: 'arpa-icon', content: () => this.getIconRight() },
                rhs: {}
            }
        };
        return super.getDefaultConfig(config);
    }

    _getTemplate() {
        return html`{lhs}{icon}{content}{iconRight}{rhs}`;
    }

    getIcon() {
        return this.page?.getProperty('title-icon') || this.getProperty('icon') || '';
    }

    getIconRight() {
        return this.page?.getProperty('title-icon-right') || this.getProperty('icon-right') || '';
    }

    getContent() {
        return this.page?.getProperty('title') || this.getProperty('content') || this._content || '';
    }
}

defineCustomElement('page-title', PageTitle);

export default PageTitle;
