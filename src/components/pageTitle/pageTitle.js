import PageElement from '../pageElement/pageElement';

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
        return html`<arpa-icon class="pageTitle__icon">{icon}</arpa-icon>`;
    }

    renderTitle(title = this.page.getProperty('title') || '') {
        if (!this.page?.hasContent('title')) return '';
        return html`<h1 class="pageTitle__content" zone="title">${title}</h1>`;
    }

    renderIconRight() {
        if (!this.hasContent('iconRight')) return '';
        return html`<arpa-icon class="pageTitle__iconRight">{iconRight}</arpa-icon>`;
    }
}

customElements.define('page-title', PageTitle);

export default PageTitle;
