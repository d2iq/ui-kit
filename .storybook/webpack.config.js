const webpack = require("webpack");
const webpackBase = require("./../webpack/webpack.base");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.devtool = webpackBase.getDevTool();
  defaultConfig.module.rules = defaultConfig.module.rules.concat(webpackBase.getRules());
  defaultConfig.plugins = defaultConfig.plugins.concat(webpackBase.getPlugins());
  defaultConfig.resolve.extensions = defaultConfig.resolve.extensions.concat(
    webpackBase.getExtensions()
  );

  return defaultConfig;
};
