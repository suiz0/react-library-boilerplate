const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devtool: "source-map",
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
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
