const path = require("path");
const webpack = require("webpack");

const webpackBase = {
  getDevTool: () => {
    return process.env.NODE_ENV === "production" ? false : "inline-source-map";
  },

  getRules: () => {
    return [
      {
        test: /\.(js|ts|tsx?)$/,
        exclude: /node_modules/,
        use: ["ts-loader", "react-docgen-typescript-loader"]
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
      })
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
