import MessageResource from '../../resources/messageResource/messageResource';
import Router from '../router/router';

// import MessageResource from '../../resources/messageResource/messageResource';

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
