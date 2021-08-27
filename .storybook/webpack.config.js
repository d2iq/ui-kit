const webpackBase = require("./../webpack/webpack.base");
const path = require("path");

module.exports = ({ config, mode }) => {
  config.devtool = webpackBase.getDevTool();
  config.module.rules = config.module.rules.concat(webpackBase.getRules());
  config.plugins = config.plugins.concat(webpackBase.getPlugins());
  config.resolve.extensions = config.resolve.extensions.concat(
    webpackBase.getExtensions()
  );
  config.resolve.alias["core-js"] = path.dirname(require.resolve("core-js"));
  config.module.rules[0].use[0].options.sourceType = "unambiguous";

  return config;
};
