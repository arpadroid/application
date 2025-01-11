import { ArpaElement } from '@arpadroid/ui';

const html = String.raw;
class Page extends ArpaElement {
    getDefaultConfig() {
        return super.getDefaultConfig({
            title: '',
            className: 'pageComponent'
        });
    }

    getTemplate() {
        return html`<div class="page__layout" zone="layout">
            <header class="page__header" zone="header">
                {logo} {title} {primaryNav} {headerRhs} {mobileNav}
            </header>
            {messages}
            <div class="page__contentFrame" zone="content-frame">{lhsNav} {content} {rhsNav}</div>
            <footer class="page__footer" zone="footer"></footer>
        </div>`;
    }

    getTemplateVars() {
        return {
            logo: this.renderLogo(),
            title: this.renderTitle(),
            primaryNav: this.renderPrimaryNav(),
            headerRhs: this.renderHeaderRhs(),
            mobileNav: this.renderMobileNav(),
            lhsNav: this.renderLhsNav(),
            content: this.renderContent(),
            rhsNav: this.renderRhsNav(),
            footerNav: this.renderFooterNav(),
            messages: this.renderMessages()
        };
    }

    renderMessages() {
        return html`<arpa-messages
            id="notifications"
            class="page__messages"
            zone="notifications"
        ></arpa-messages>`;
    }

    renderLogo() {
        if (!this.hasContent('logo')) return '';
        return html`<page-logo class="page__logo" zone="logo"></page-logo>`;
    }

    renderTitle() {
        if (!this.hasContent('title')) return '';
        return html`<page-title class="page__title"></page-title>`;
    }

    renderHeaderRhs() {
        if (!this.hasContent('header-rhs')) return '';
        return html`<div class="page__headerRhs" zone="header-rhs"></div>`;
    }

    renderPrimaryNav() {
        if (!this.hasContent('primary-nav')) return '';
        return html`<nav-list class="page__primaryNav" zone="primary-nav"></nav-list>`;
    }

    renderMobileNav() {
        if (!this.hasContent('mobile-nav')) return '';
        return html`<mobile-nav class="page__mobileNav" zone="mobile-nav"></mobile-nav>`;
    }

    renderLhsNav() {
        if (!this.hasContent('lhs-nav')) return '';
        return html`<nav-list class="page__lhsNav" zone="lhs-nav"></nav-list>`;
    }

    renderContent() {
        if (!this.hasContent('content')) return '';
        return html`<page-content role="main" class="page__content" zone="content"></page-content>`;
    }

    renderRhsNav() {
        if (!this.hasContent('rhs-nav')) return '';
        return html`<nav-list class="page__rhsNav" zone="rhs-nav"></nav-list>`;
    }

    renderFooterNav() {
        if (!this.hasContent('footer-nav')) return '';
        return html`<footer-nav class="page__footerNav" zone="footer-nav"></footer-nav>`;
    }
}

customElements.define('arpa-page', Page);

export default Page;
