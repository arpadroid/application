import PageElement from '../pageElement/pageElement';
const html = String.raw;
class PageLogo extends PageElement {
    getTemplate() {
        let content = '';
        const url = this.getProperty('url');
        if (url) {
            content += html`<arpa-image class="page__logo" src="${url}"></arpa-image>`;
        }
        return content;
    }
}

customElements.define('page-logo', PageLogo);

export default PageLogo;
