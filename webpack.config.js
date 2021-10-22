const HTMLPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx", ".html", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.jsx?$/, use: "babel-loader" },
      { test: /\.tsx?$/, use: "ts-loader" },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: "./index.html",
    }),
  ],
};
