const customWebpack = require("./webpack.config");
module.exports = {
  stories: [
    "./docs/stories/Welcome.stories.mdx",
    "./docs/stories/Colors.stories.mdx",
    "./docs/stories/Typography.stories.mdx",
    "../packages/**/*.stories.@(tsx|mdx)"
  ],
  webpackFinal: config => {
    return {
      ...config,
      ...customWebpack
    };
  },
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false
      }
    },
    "@storybook/addon-a11y"
  ],
  features: {
    previewMdx2: true
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: ["../public/assets/images"],
  docs: {
    autodocs: true
  }
};
