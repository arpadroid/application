import { AbstractContentInterface } from "../../types";


export interface RouterInterface {
    basePath?: string;
    routes?: RoutesInterface;
    preprocessRoute?: (route: string, queryParams: Record<string, string>) => string;
}

export interface RoutesInterface {
    public?: Record<string, RouteInterface>;
    private?: Record<string, () => RouteInterface>;
    common?: Record<string, () => RouteInterface>;
    dev?: Record<string, () => RouteInterface>;
}

export interface RouteInterface {
    path: string;
    url?: string;
    name?: string;
    type?: 'public' | 'private' | 'common' | 'dev';
    render?: () => HTMLElement;
    content?: AbstractContentInterface;
}
