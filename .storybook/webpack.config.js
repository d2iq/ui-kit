const webpackBase = require("../webpack/webpack.base");
const path = require("path");

module.exports = ({ config }) => {
  config.devtool = webpackBase.getDevTool();
  config.module.rules = config.module.rules.concat(webpackBase.getRules());
  config.plugins = config.plugins.concat(webpackBase.getPlugins());
  config.resolve.extensions = config.resolve.extensions.concat(
    webpackBase.getExtensions()
  );
  // Storybook has loaders configured that conflict with what you define in our custom Webpack configuration,
  // so if you do not override those then your custom rules will not work.
  // Remove the rule that loads SVGs as assets for storybook
  const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));
  assetRule.test =
    /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;

  config.module.rules.unshift({
    test: /\.svg$/,
    issuer: /\.(js|jsx|ts|tsx|mdx)$/,
    use: ["@svgr/webpack"]
  });

  return config;
};
