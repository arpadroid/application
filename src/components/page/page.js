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
            logo: 'Page logo'
            // nodesConfig: {
            //     title: { tag: 'page-title', canRender: true },
            //     headerRhs: {},
            //     headerLhs: {},
            //     primaryNav: { tag: 'primary-nav', id: 'primary-nav' },
            //     secondaryNav: { tag: 'secondary-nav', id: 'secondary-nav' },
            //     // userNav: { tag: 'user-nav' },
            //     mobileNav: { tag: 'mobile-nav' },
            //     lhsNav: { tag: 'side-nav', id: 'lhs-nav' },
            //     rhsNav: { tag: 'side-nav', id: 'rhs-nav' },
            //     leftColumn: { canRender: true, tag: 'aside' },
            //     content: { tag: 'page-content', attr: { role: 'main' } },
            //     rightColumn: { tag: 'aside' },
            //     footerNav: { tag: 'nav-list', id: 'footer-nav' },
            //     footerContent: {},
            //     messages: { tag: 'arpa-messages', id: 'notifications', canRender: true }
            // }
        };
        return super.getDefaultConfig(config);
    }

    $renderBlueprint2() {
        return html` <arpa-node name="layout"> </arpa-node> `;
    }

    $renderBlueprint() {
        return html`
            <arpa-node tag="header" name="header">
                <arpa-node name="headerTop">
                    <arpa-node name="logo" tag="page-logo"></arpa-node>

                    <arpa-node name="headerLhs"></arpa-node>

                    <arpa-node name="primaryNav" tag="primary-nav" id="primary-nav"></arpa-node>

                    <arpa-node name="headerRhs"></arpa-node>
                </arpa-node>
                <arpa-node name="headerBottom">
                    <arpa-node name="secondaryNav" tag="secondary-nav" id="secondary-nav"></arpa-node>
                    <arpa-node name="tertiaryNav" tag="tertiary-nav" id="tertiary-nav"></arpa-node>
                </arpa-node>

                <arpa-node name="mobileNav" tag="mobile-nav"></arpa-node>
            </arpa-node>

            <arpa-node name="body">
                <arpa-node name="lhsNav" tag="side-nav" id="lhs-nav"></arpa-node>

                <arpa-node name="bodyFrame">
                    <arpa-node name="messages" tag="arpa-messages" id="notifications" must-render></arpa-node>

                    <arpa-node name="bodyLayout">
                        <arpa-node name="leftColumn" tag="aside"></arpa-node>

                        <arpa-node name="bodyContent" role="main">
                            <arpa-node name="contentHeader">
                                <arpa-node name="title" tag="page-title"></arpa-node>
                            </arpa-node>
                            <arpa-node
                                name="content"
                                tag="section"
                                class="pageContent__body"
                                zone="content-body"
                                is-content
                            ></arpa-node>

                            <arpa-node name="contentFooter"></arpa-node>
                        </arpa-node>

                        <arpa-node name="rightColumn" tag="aside"></arpa-node>
                    </arpa-node>
                    <arpa-node name="bodyFooter"></arpa-node>
                </arpa-node>
                <arpa-node name="rhsNav" tag="side-nav" id="rhs-nav"></arpa-node>
            </arpa-node>
            <arpa-node name="footer" tag="footer">
                <arpa-node name="footerContent"> </arpa-node>
                <arpa-node name="footerNav"></arpa-node>
            </arpa-node>
        `;
    }

    $renderTemplate() {
        return html`
            <arpa-node name="layout"> {header} {body} {footer} </arpa-node>
            <arpa-node name="overlay"></arpa-node>
        `;
    }

    // renderMobileNav() {
    //     return this.renderChild('mobileNav');
    // }
}

defineCustomElement('arpa-page', Page);

export default Page;
