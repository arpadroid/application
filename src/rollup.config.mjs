import { getBuild, isSlim } from '@arpadroid/module';
const { build = {} } =
    getBuild('application', 'uiComponent', {
        external: isSlim() ? ['navigation', 'ui'] : []
    }) || {};
export default build;
