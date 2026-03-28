import type { Preview } from '@storybook/web-components-vite';
import { bootstrapDecorator } from '@arpadroid/module/storybook/decorators';
import { setService } from '@arpadroid/context';
import { Router, APIService } from '@arpadroid/services';
import { mergeObjects } from '@arpadroid/tools';
import defaultConfig from '@arpadroid/module/storybook/preview';

const config: Preview = mergeObjects(
    defaultConfig,
    {
        decorators: [
            bootstrapDecorator(() => {
                setService('router', new Router());
                setService('apiService', APIService);
            })
        ]
    },
    { mergeArrays: true }
);

export default { ...config };
