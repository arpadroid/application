import { defineCustomElement } from '@arpadroid/tools';
import PageElement from '../pageElement/pageElement.js';
import { IconMenu } from '@arpadroid/navigation';

class SecondaryNav extends IconMenu {
    _initialize() {
        this.page = PageElement.prototype._initializePage.call(this);
    }
}

defineCustomElement('secondary-nav', SecondaryNav);

export default SecondaryNav;
