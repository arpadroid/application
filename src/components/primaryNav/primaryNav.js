import { defineCustomElement } from '@arpadroid/tools';
import PageElement from '../pageElement/pageElement.js';
import { NavList } from '@arpadroid/navigation';

class PrimaryNav extends NavList {
    _initialize() {
        this.page = PageElement.prototype._initializePage.call(this);
    }
}

defineCustomElement('primary-nav', PrimaryNav);

export default PrimaryNav;
