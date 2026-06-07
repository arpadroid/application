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

    $renderTemplate() {
        let content = this.getLogoText();

        const logoImage = this.getLogoImage();
        if (logoImage) {
            content += html`<arpa-image
                className="pageLogo__image"
                src="${logoImage}"
                alt="${this.getProp('text')}"
            ></arpa-image>`;
        }
        const logoLink = this.getLogoLink();
        if (logoLink) {
            content = html`<a className="pageLogo__link" href="${logoLink}">${content}</a>`;
        }

        return content;
    }

    getLogoText() {
        return this.page?._config?.logo || this.getProp('text') || '';
    }

    getLogoImage() {
        return this.page?._config?.logoImage || this.getProp('image');
    }

    getLogoLink() {
        return this.page?._config?.logoLink || this.getProp('link');
    }
}

defineCustomElement('page-logo', PageLogo);

export default PageLogo;
