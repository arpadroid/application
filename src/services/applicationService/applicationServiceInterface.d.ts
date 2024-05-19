// import AbstractComponent from '../../../../components/abstract-component/abstractComponent.js';
// import AccessibilityService from '../../../../services/accessibility/accessibilityService.js';
// import I18n from '../../../../services/i18n/i18n.js';
// import Router from '../../../../services/router/router.js';
// import UIService from '../../../../services/ui-service/UIService.js';
// import KeyboardTool from '../../../../utils/keyboardTool.js';
// import DialogContext from '../../../dialog/contexts/dialogContext.js';
// import Messenger from '../../../messages/contexts/messenger.js';
// import AppUserResource from '../../../user/resources/appUserResource/appUserResource.js';
// import Router from '../router/router.js';
// import Application from './applicationService.js';

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
    Router?: any;
    // Messenger?: Messenger;
    // Dialogs?: DialogContext;
    // User?: AppUserResource;
    // UIService?: UIService;
    // KeyboardTool?: KeyboardTool;
}

export interface ApplicationServicesInterface {
    // I18n?: I18n;
    Router?: any;
    // AccessibilityService?: AccessibilityService;
    // UIService?: UIService;
    // DialogContext?: DialogContext;
    // AppUserResource?: AppUserResource;
    // Messenger: MessengerInterface;
}
