import { MessageResource } from '@arpadroid/resources/src';
import Router from '../router/router';

export interface ApplicationInterface {
    basePath?: string;
    mode?: 'development' | 'production';
    promises?: Promise<Response>[];
    services?: ApplicationServicesInterface;
    container?: HTMLElement;
    // appComponent?: AbstractComponent;
    // user?: UserInterface;
}

export interface ContextInterface {
    // I18n?: I18n;
    // Application?: Application;
    // Accessibility?: AccessibilityService;
    Router?: Router;
    Messages?: MessageResource;
    // Dialogs?: DialogContext;
    // User?: AppUserResource;
    // UIService?: UIService;
    // KeyboardTool?: KeyboardTool;
}

export interface ApplicationServicesInterface {
    // I18n?: I18n;
    Router?: Router;
    // AccessibilityService?: AccessibilityService;
    // UIService?: UIService;
    // DialogContext?: DialogContext;
    // AppUserResource?: AppUserResource;
    Messages: MessageResource;
}
