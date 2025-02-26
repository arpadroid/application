import { defineCustomElement } from '@arpadroid/tools';
import PageElement from '../pageElement/pageElement.js';

const html = String.raw;

class PageTitle extends PageElement {
    getTemplate() {
        return html`{icon} {title} {iconRight}`;
    }

    getTemplateVars() {
        return {
            icon: this.renderIcon(),
            title: this.renderTitle(),
            iconRight: this.renderIconRight()
        };
    }

    renderIcon() {
        if (!this.hasContent('icon')) return '';
        return html`<arpa-icon class="pageTitle__icon">
            ${this.page?.getProperty('title-icon') || ''}
        </arpa-icon>`;
    }

    renderTitle(title = this.page?.getProperty('title') || '') {
        if (!this.page?.hasContent('title')) return '';
        return html`<h1 class="pageTitle__content" zone="title">${title}</h1>`;
    }

    renderIconRight() {
        if (!this.hasContent('iconRight')) return '';
        return html`<arpa-icon class="pageTitle__iconRight">
            ${this.page?.getProperty('title-icon-right') || ''}
        </arpa-icon>`;
    }
}

defineCustomElement('page-title', PageTitle);

export default PageTitle;
