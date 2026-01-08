import { getBuild, isSlim } from '@arpadroid/module';
const { build = {} } =
    getBuild('application', {
        external: isSlim() ? ['navigation', 'ui'] : []
    }) || {};
export default build;
