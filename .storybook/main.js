const customWebpack = require("./webpack.config.js");

module.exports = {
  stories: [
    "../packages/docs/stories/Welcome.stories.mdx",
    "../packages/**/*.stories.@(tsx|mdx)"
  ],
  webpackFinal: config => {
    return { ...config, ...customWebpack };
  },
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false
      }
    },
    "@storybook/addon-a11y"
  ]
};
