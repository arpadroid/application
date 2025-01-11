import { getBuild, isSlim } from '@arpadroid/arpadroid/src/rollup/builds/rollup-builds.mjs';
const { build } = getBuild('application', 'uiComponent', {
    external: isSlim() ? ['navigation', 'ui'] : []
});
export default build;
