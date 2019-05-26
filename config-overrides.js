/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  );
  config = rewireCssModules(config, env);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@primary-color': '#00BFFF',
      '@input-height-base': '40px',
      '@btn-height-base': '40px'
    }
  })(config, env);
  return config;
};
