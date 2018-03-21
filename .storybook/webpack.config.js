const webpack = require("webpack");
const webpackBase = require("./../webpack/webpack.base");
// load the default config generator.
const genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.devtool = webpackBase.getDevTool();
  config.module.rules = config.module.rules.concat(webpackBase.getRules());
  config.plugins = config.plugins.concat(webpackBase.getPlugins());
  config.resolve.extensions = config.resolve.extensions.concat(
    webpackBase.getExtensions()
  );

  return config;
};
