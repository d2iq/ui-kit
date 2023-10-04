import type { StorybookConfig } from "@storybook/react-webpack5";

const customWebpack = require("./webpack.config");

const config: StorybookConfig = {
  // Required
  framework: "@storybook/react-webpack5",
  webpackFinal: config => {
    return {
      ...config,
      ...customWebpack
    };
  },
  stories: [
    "./docs/stories/Welcome.stories.mdx",
    "./docs/stories/Colors.stories.mdx",
    "./docs/stories/Typography.stories.mdx",
    "./docs/stories/Spacing.stories.mdx",
    "../packages/**/*.stories.@(tsx|mdx)"
  ],
  // Optional
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false
      }
    },
    "@storybook/addon-a11y"
  ],
  docs: {
    autodocs: true
  },
  staticDirs: ["../public/assets/images"]
};

export default config;
