const customWebpack = require("./webpack.config.js");

module.exports = {
  stories: ["../packages/**/*.stories.@(tsx|mdx)"],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  webpackFinal: config => {
    return { ...config, ...customWebpack };
  },
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true
      }
    },
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false
      }
    },
    "@storybook/addon-knobs",
    "@storybook/addon-a11y"
  ]
};
