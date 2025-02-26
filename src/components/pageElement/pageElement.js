/**
 * @typedef {import('../page/page.js').default} Page
 */
import { ArpaElement } from '@arpadroid/ui';

class PageElement extends ArpaElement {

    _initialize() {
        /** @type {Page} */
        this.page = /** @type {Page} */ (this.closest('arpa-page, .page'));
    }
}

export default PageElement;
