const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", "..."],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
    }),
  ],
};
