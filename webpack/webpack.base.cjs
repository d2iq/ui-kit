const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const webpackBase = {
  getDevTool: () => {
    return process.env.NODE_ENV === "production" ? false : "eval";
  },

  getRules: () => {
    return [
      {
        test: /\.(js|ts|tsx?)$/,
        exclude: /node_modules/,
        use: [
          "cache-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.stories\.tsx?$/,
        loaders: [
          {
            loader: require.resolve("@storybook/source-loader"),
            options: {
              parser: "typescript"
            }
          }
        ],
        enforce: "pre"
      }
    ];
  },

  getPlugins: () => {
    const plugins = [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      }),
      new ForkTsCheckerWebpackPlugin()
    ];

    if (process.env.NODE_ENV === "production") {
      plugins.concat([new webpack.optimize.ModuleConcatenationPlugin()]);
    }

    return plugins;
  },

  getExtensions: () => {
    return [".js", ".jsx", ".tsx", ".ts"];
  }
};

module.exports = webpackBase;
