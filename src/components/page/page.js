/**
 * @typedef {import('./page.types').PageConfigType} PageConfigType
 */
import { ArpaElement } from '@arpadroid/ui';
import { defineCustomElement } from '@arpadroid/tools';

const html = String.raw;
class Page extends ArpaElement {
    /** @type {PageConfigType} */
    _config = this._config;
    /**
     * Returns the default config.
     * @returns {PageConfigType}
     */
    getDefaultConfig() {
        /** @type {PageConfigType} */
        const config = {
            id: undefined,
            title: '',
            className: 'arpaPage',
            logoLink: '/',
            logo: 'Page logo',
            templateChildren: {
                logo: { tag: 'page-logo' },
                title: { tag: 'page-title', canRender: true },
                headerRhs: {},
                primaryNav: { tag: 'primary-nav', id: 'primary-nav' },
                // userNav: { tag: 'user-nav' },
                mobileNav: { tag: 'mobile-nav' },
                lhsNav: { tag: 'nav-list', id: 'lhs-nav' },
                rhsNav: { tag: 'nav-list', id: 'rhs-nav' },
                leftColumn: { canRender: true, tag: 'aside' },
                content: { tag: 'page-content', attr: { role: 'main' } },
                rightColumn: { tag: 'aside' },
                footerNav: { tag: 'nav-list', id: 'footer-nav' },
                footerContent: {},
                messages: { tag: 'arpa-messages', id: 'notifications', canRender: true }
            }
        };
        return super.getDefaultConfig(config);
    }

    _getTemplate() {
        return html`<div class="arpaPage__layout" zone="layout">
            {header}
            <div class="arpaPage__body" zone="layout-body">
                {lhsNav}
                <div class="arpaPage__body__frame">
                    {messages}
                    <div class="arpaPage__body__content">
                        {leftColumn}
                        <div class="arpaPage__content" zone="layout-body">
                            <div class="arpaPage__content__header">{title}</div>
                            <div class="arpaPage__content__body">{content}</div>
                            <div class="arpaPage__content__footer">{contentFooter}</div>
                        </div>
                        {rightColumn}
                    </div>
                </div>

                {rhsNav}
            </div>
            {footer}
        </div>`;
    }

    renderHeader() {
        return html`<header class="arpaPage__header" zone="header">
            {logo}{primaryNav}{headerRhs}{mobileNav}
        </header>`;
    }

    renderFooter() {
        return html`<footer class="arpaPage__footer" zone="footer">{footerContent}{footerNav}</footer>`;
    }

    renderMessages() {
        return html`<arpa-messages id="notifications" class="page__messages" zone="notifications">
            <info-message>This is a notification message</info-message>
        </arpa-messages>`;
    }

    getTemplateVars() {
        return {
            header: this.renderHeader(),
            footer: this.renderFooter()
        };
    }

    renderMobileNav() {
        return this.renderChild('mobileNav');
    }
}

defineCustomElement('arpa-page', Page);

export default Page;
