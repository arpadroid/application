/**
 * @typedef {import('./applicationService.types.js').ApplicationConfigType} ApplicationConfigType
 * @typedef {import('./applicationService.types.js').ApplicationServiceType} ApplicationServiceType
 * @typedef {import('./applicationService.types.js').ContextInterface} ContextInterface
 * @typedef {import('./applicationService.types.js').SettledResultType<any>} SettledResultType
 */
import { observerMixin, mergeObjects, dummySignal, dummyListener, renderNode } from '@arpadroid/tools';
import { Router, UIService } from '@arpadroid/services';
import { I18n } from '@arpadroid/i18n';
import { Messages } from '@arpadroid/messages';
import CONSTANTS from '../../include/constants.js';
// import AppUserResource from '../../../user/resources/appUserResource/appUserResource.js';
// import NotFoundPage from '../../pages/notFoundPage/notFoundPage.js';
// import PageAdminService from '../../../page/services/pageAdminService.js';

/** @type {ContextInterface} */
export const Context = {};
const html = String.raw;
class ApplicationService {
    /** @type {ApplicationConfigType} _defaultConfig - Default configuration. */
    _defaultConfig = {};
    /** @type {Promise<SettledResultType[]> | undefined} _promise - App promise. */
    _promise;
    // /** @type {AppUserResource} */
    // user;

    constructor(config = {}) {
        this.signal = dummySignal;
        this.on = dummyListener;
        observerMixin(this);
        Context.application = this;
        this.setConfig(config);
        this._initialize();
    }

    /**
     * Returns the default config.
     * @returns {ApplicationConfigType}
     */
    getDefaultConfig() {
        return {
            id: 'application',
            basePath: '/',
            mode: 'development',
            promises: [],
            container: document.body,
            appComponent: 'app-component',
            fetchDbRoutes: true,
            services: {
                i18n: I18n,
                uiService: UIService,
                router: Router,
                messages: Messages
                // AppUserResource
            }
        };
    }

    /**
     * Sets the configuration.
     * @param {ApplicationConfigType} config - Configuration.
     */
    setConfig(config) {
        /** @type {ApplicationConfigType} */
        this._config = mergeObjects(this.getDefaultConfig(), config);
        CONSTANTS.MODE = this._config.mode || 'development';
    }

    /**
     * Initializes Application.
     */
    _initialize() {
        this._initializeServices();
        const { id, appComponent } = this._config || {};
        this.appComponent = renderNode(html`<${appComponent} id=${id}></${appComponent}>`);
    }

    initialize() {
        Context.router?.initialize();
        this._render();
        this._promise = this.load()
            ?.then(response => {
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
        const container = this._config?.container || document.body;
        this.appComponent && container.appendChild(this.appComponent);
    }

    _initializeServices() {
        this.initializeService('user');
        this.initializeService('i18n');
        this.initializeService('router', { basePath: '/' });
        this.initializeService('uiService');
        this.initializeService('messages');
    }

    /**
     * Initializes a service.
     * @param {ApplicationServiceType} serviceName
     * @param {Record<string, unknown>} [config]
     * @returns {any}
     */
    initializeService(serviceName, config) {
        const service = this.getServiceClass(serviceName);
        if (service) {
            Context[serviceName] = new service(config);
            return Context[serviceName];
        }
    }

    /**
     * Returns a service class.
     * @param {ApplicationServiceType} service - Service name.
     * @returns {any}
     */
    getServiceClass(service) {
        return this._config?.services?.[service];
    }

    /**
     * Loads Resources.
     * @returns {Promise<SettledResultType[]> | undefined} - Promise.
     */
    load() {
        const promises = this._getPromises();
        this._promise = Promise.allSettled(promises);
        return this._promise;
    }

    _getPromises() {
        const { fetchDbRoutes } = this._config || {};
        // @ts-ignore there is no app component yet.
        const promises = [...(this._config?.promises || []), this.appComponent?._config?.load];
        if (Context?.user?.promise) {
            promises.push(Context.user.promise);
        }
        if (Context.router && fetchDbRoutes) {
            promises.push(Context.router.fetchRoutes());
        }
        return promises;
    }

    /**
     * Adds default routes.
     * @param {ApplicationConfigType} config - Configuration.
     * @returns {Promise<void>} - Promise.
     */
    async addDefaultRoutes(config) {
        console.log('addDefaultRoutes', config);
        const promise = Context.user?.onLoad() ?? Promise.resolve();
        await promise;
        // this.router.addRoute({ path: '/404', component: NotFoundPage });
        // UserService.addUserRoutes(this);
        // PageAdminService.addAdminRoutes(this, config);
        return promise;
    }
}

export default ApplicationService;
