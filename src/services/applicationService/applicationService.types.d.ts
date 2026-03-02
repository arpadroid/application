import { Router, UIService } from '@arpadroid/services';
import { ListResource } from '@arpadroid/resources';
import ApplicationService from './applicationService.js';
import { I18n } from '@arpadroid/i18n';
import { Messages } from '@arpadroid/messages';

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
    messages?: ListResource;
    router?: Router;
    uiService?: UIService;
}

export interface ApplicationServicesConfigType {
    user?: any;
    i18n?: typeof I18n;
    messages?: typeof Messages;
    router?: typeof Router;
    uiService?: typeof UIService;
}

export type ApplicationServiceType = 'user' | 'i18n' | 'messages' | 'router' | 'uiService';

export type SettledResultType<T> = PromiseSettledResult<T>;
