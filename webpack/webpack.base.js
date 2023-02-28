const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const webpackBase = {
  getDevTool: () => {
    return process.env.NODE_ENV === "production" ? false : "eval";
  },

  getRules: () => {
    return [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        options: {
          // without additional settings, this will reference .babelrc
          presets: ["@babel/preset-react", "@babel/preset-typescript"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.stories\.tsx?$/,
        use: {
          loader: require.resolve("@storybook/source-loader"),
          options: {
            parser: "typescript"
          }
        },

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
