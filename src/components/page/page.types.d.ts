import { ArpaElementConfigType } from '@arpadroid/ui';

export type PageConfigType = ArpaElementConfigType & {
    id?: string;
    title?: string;
    logoLink?: string;
    logoImage?: string;
    logo?: string;
    layoutType?: 'default' | 'fullscreen' | string;
};
