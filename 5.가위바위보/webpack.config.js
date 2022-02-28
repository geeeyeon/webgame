const VueLoaderPlugin = require("vue-loader/lib/plugin");
var path = require("path");

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
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
};
