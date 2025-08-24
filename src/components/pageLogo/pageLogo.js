import { defineCustomElement, mergeObjects } from '@arpadroid/tools';
import PageElement from '../pageElement/pageElement.js';
const html = String.raw;
class PageLogo extends PageElement {
    getDefaultConfig() {
        return mergeObjects(super.getDefaultConfig(), {
            image: undefined,
            link: undefined,
            text: 'Site logo'
        });
    }

    _getTemplate() {
        let content = this.getLogoText();

        const logoImage = this.getLogoImage();
        if (logoImage) {
            content += html`<arpa-image
                className="pageLogo__image"
                src="${logoImage}"
                alt="${this.getProperty('text')}"
            ></arpa-image>`;
        }
        const logoLink = this.getLogoLink();
        if (logoLink) {
            content = html`<a className="pageLogo__link" href="${logoLink}">${content}</a>`;
        }

        return content;
    }

    getLogoText() {
        return this.page?._config?.logo || this.getProperty('text') || '';
    }

    getLogoImage() {
        return this.page?._config?.logoImage || this.getProperty('image');
    }

    getLogoLink() {
        return this.page?._config?.logoLink || this.getProperty('link');
    }
}

defineCustomElement('page-logo', PageLogo);

export default PageLogo;
