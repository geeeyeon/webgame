const VueLoaderPlugin = require("vue-loader/lib/plugin");
var path = require("path");
// const webpack = require("webpack");

// const webpackMode = process.env.NODE_ENV || "development";

module.exports = {
  resolve: {
    extensions: [".js", ".vue"],
  },
  entry: {
    app: "./main.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
};
