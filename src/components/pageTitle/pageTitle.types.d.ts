import { ArpaElementConfigType } from '@arpadroid/ui';

export type PageTitleConfigType = ArpaElementConfigType & {
    icon?: string;
    iconRight?: string;
    titleLhs?: string;
    titleRhs?: string;
    content?: string;
};
