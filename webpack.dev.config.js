const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "my-lib.bundle.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
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
