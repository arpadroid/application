/**
 * @typedef {import('./applicationServiceInterface.js').ApplicationInterface} ApplicationInterface
 * @typedef {import('./applicationServiceInterface.js').ContextInterface} ContextInterface
 */
import { ObserverTool, mergeObjects } from '@arpadroid/tools';
import Router from '../router/router.js';
import MessageResource from '@arpadroid/resources/src/resources/messageResource/messageResource.js';
import CONSTANTS from '../../include/constants.js';
// import AccessibilityService from '../../../../services/accessibility/accessibilityService.js';
// import I18n from '../../../../services/i18n/i18n.js';
// import UIService from '../../../../services/ui-service/UIService.js';;
// import DialogContext from '../../../dialog/contexts/dialogContext.js';
// import AppUserResource from '../../../user/resources/appUserResource/appUserResource.js';
// import KeyboardTool from '../../../../utils/keyboardTool.js';
// import NotFoundPage from '../../pages/notFoundPage/notFoundPage.js';
// import UserService from '../../../user/services/userService.js';
// import PageAdminService from '../../../page/services/pageAdminService.js';

/** @type {ContextInterface} */
export const Context = {};

class ApplicationService {
    /** @type {ApplicationInterface} _config - Main configuration. */
    _config;
    /** @type {ApplicationInterface} _defaultConfig - Default configuration. */
    _defaultConfig = {};
    /** @type {Promise<Response>} _promise - App promise. */
    _promise;
    // /** @type {AppUserResource} */
    user;

    /** @type {(property: string, value: unknown) => void} signal */
    signal;
    /** @type {(property: string, callback: () => unknown) => () => void} listen */
    listen;

    constructor(config = {}) {
        ObserverTool.mixin(this);
        Context.Application = this;
        this.setConfig(config);
        this._initialize();
    }

    /**
     * Returns the default config.
     * @returns {ApplicationInterface}
     */
    getDefaultConfig() {
        return {
            id: 'application',
            basePath: '/',
            MODE: 'development',
            promises: [],
            container: document.body,
            appComponent: 'app-component',
            fetchDbRoutes: true,
            services: {
                // I18n,
                // DialogContext,
                Router,
                Messages: MessageResource
                // AccessibilityService,
                // UIService,
                // AppUserResource
            }
        };
    }

    setConfig(config) {
        /** @type {ApplicationInterface} this._config */
        this._config = mergeObjects(this.getDefaultConfig(), config);
        CONSTANTS.MODE = this._config.MODE;
    }

    /**
     * Initializes Application.
     */
    _initialize() {
        this._initializeServices();
        const { id, appComponent } = this._config;
        this.appComponent = document.createElement(appComponent, { id });
    }

    initialize() {
        this.router.initialize();
        this._render();
        this._promise = this.load()
            .then(response => {
                requestAnimationFrame(() => this.signal('LOAD_COMPLETE', response));
                return Promise.resolve(response);
            })
            .catch(response => {
                this.signal('LOAD_ERROR', response);
                return Promise.reject(response);
            });
        return this._promise;
    }

    _render() {
        const node = this.appComponent.render();
        this._config.container.appendChild(node);
    }

    _initializeServices() {
        // Context.KeyboardTool = new KeyboardTool();
        this._initializeUser();
        this._initializeI18n();
        this._initializeRouter();
        this._initializeAccessibility();
        this._initializeUIService();
        this._initializeMessages();
        this._initializeDialogContext();
    }

    _initializeUser() {
        if (this._config?.services?.AppUserResource) {
            Context.User = new this._config.services.AppUserResource();
            this.user = Context.User;
        }
    }

    _initializeI18n() {
        if (this._config?.services?.I18n) {
            Context.I18n = new this._config.services.I18n({
                context: Context
            });
            this.i18n = Context.I18n;
        }
    }

    _initializeAccessibility() {
        if (this._config.MODE === 'development' && this._config?.services?.AccessibilityService) {
            Context.Accessibility = new this._config.services.AccessibilityService();
            this.accessibilityService = Context.Accessibility;
        }
    }

    _initializeRouter() {
        if (this._config?.services?.Router) {
            Context.Router = new this._config.services.Router({
                basePath: '/',
                context: Context
            });
            this.router = Context.Router;
        }
    }

    _initializeDialogContext() {
        if (this._config?.services?.DialogContext) {
            Context.Dialogs = new this._config.services.DialogContext();
        }
    }

    _initializeUIService() {
        if (this._config?.services?.UIService) {
            Context.UIService = new this._config.services.UIService();
            this.uiService = Context.UIService;
        }
    }

    _initializeMessages() {
        if (this._config?.services?.Messages) {
            Context.Messages = new this._config.services.Messages();
            this.messages = Context.Messages;
        }
    }

    /**
     * Loads Resources.
     * @returns {Promise<Response>}
     */
    load() {
        const promises = this._getPromises();
        this._promise = Promise.allSettled(promises);
        return this._promise;
    }

    _getPromises() {
        const { fetchDbRoutes } = this._config;
        const promises = [...this._config.promises, this.appComponent._config.load];
        if (this?.user?.promise) {
            promises.push(this.user.promise);
        }
        if (fetchDbRoutes) {
            promises.push(this.router.fetchRoutes());
        }
        return promises;
    }

    async addDefaultRoutes(config) {
        console.log('addDefaultRoutes', config);
        const promise = Context.User?.onLoad() ?? Promise.resolve();
        await promise;
        // this.router.addRoute({ path: '/404', component: NotFoundPage });
        // UserService.addUserRoutes(this);
        // PageAdminService.addAdminRoutes(this, config);
        return promise;
    }
}

export default ApplicationService;
