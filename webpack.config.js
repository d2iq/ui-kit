const path = require("path");
const webpack = require("webpack");
const webpackBase = require("./webpack/webpack.base");

module.exports = {
  devtool: webpackBase.getDevTool(),
  entry: path.join(__dirname, "./components/index.ts"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "ui-kit.js",
    library: "ui-kit",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  module: {
    rules: webpackBase.getRules()
  },
  resolve: {
    extensions: webpackBase.getExtensions()
  },
  plugins: webpackBase.getPlugins(),
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  }
};
