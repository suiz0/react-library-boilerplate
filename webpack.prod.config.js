const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: "my-lib.bundle.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name][contenthash].css",
      chunkFilename: "[id][contenthash].css",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", "..."],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
