import PageElement from '../pageElement/pageElement';

const html = String.raw;

class PageContent extends PageElement {
    getTemplate() {
        return html`{leftColumn} {contentBody} {rightColumn}`;
    }

    getTemplateVars() {
        return {
            leftColumn: this.renderLeftColumn(),
            contentBody: this.renderContentBody(),
            rightColumn: this.renderRightColumn()
        };
    }

    renderLeftColumn() {
        if (!this.hasContent('left-column')) return '';
        return html`<aside class="page__leftColumn" zone="left-column"></aside>`;
    }

    renderContentBody() {
        if (!this.hasContent('content-body')) return '';
        return html`<section class="page__contentBody" zone="content-body"></section>`;
    }

    renderRightColumn() {
        if (!this.hasContent('right-column')) return '';
        return html`<aside class="page__rightColumn" zone="right-column"></aside>`;
    }
}

customElements.define('page-content', PageContent);

export default PageContent;
