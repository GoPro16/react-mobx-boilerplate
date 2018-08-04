const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireSass = require('react-app-rewire-scss');
const rewireMobX = require('react-app-rewire-mobx');
const { compose } = require('react-app-rewired');


module.exports = function override(config, env) {
  const rewires = compose(rewireReactHotLoader,rewireSass,rewireMobX);
  return rewires(config,env);
}