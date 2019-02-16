const path = require("path");
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
          { loader: "ts-loader", options: { transpileOnly: true } },
          "react-docgen-typescript-loader"
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg|png|gif|jpe?g)$/,
        exclude: /(node_modules)/,
        use: ["file-loader"]
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
      plugins.concat([
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin()
      ]);
    }

    return plugins;
  },

  getExtensions: () => {
    return [".js", ".jsx", ".tsx", ".ts"];
  }
};

module.exports = webpackBase;
