/**
 * @typedef {import('../page/page.js').default} Page
 */
import { ArpaElement } from '@arpadroid/ui';

class PageElement extends ArpaElement {
    $initialize() {
        this._initializePage();
    }
    
    _initializePage() {
        /** @type {Page} */
        this.page = /** @type {Page} */ (this.closest('arpa-page, .arpaPage'));
        return this.page;
    }

    async $initializeNodes() {
        return true;
    }
}

export default PageElement;
