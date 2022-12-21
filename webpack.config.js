const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html", //source
      filename: "index.html", //destination
    }),
  ],
};
