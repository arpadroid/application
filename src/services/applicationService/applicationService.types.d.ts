import { Router, UIService } from '@arpadroid/services';
import { MessageResource } from '@arpadroid/resources';
import ApplicationService from './applicationService.js';
import { I18n } from '@arpadroid/i18n';

export interface ApplicationConfigType {
    appComponent?: string;
    basePath?: string;
    container?: HTMLElement;
    fetchDbRoutes?: boolean;
    id?: string;
    mode?: 'development' | 'production';
    promises?: Promise<Response>[];
    services?: ApplicationServicesConfigType;
}

export interface ContextInterface {
    user?: any;
    application?: ApplicationService;
    i18n?: I18n;
    messages?: MessageResource;
    router?: Router;
    uiService?: UIService;
}

export interface ApplicationServicesConfigType {
    user?: any;
    i18n?: typeof I18n;
    messages?: typeof MessageResource;
    router?: typeof Router;
    uiService?: typeof UIService;
}

export type ApplicationServiceType = 'user' | 'i18n' | 'messages' | 'router' | 'uiService';

export type SettledResultType<T> = PromiseSettledResult<T>;
