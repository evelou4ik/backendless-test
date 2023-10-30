const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = {
  entry: { myAppName: path.resolve(__dirname, "./src/index.tsx") },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx|ts|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /node_modules/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: !production,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: !production,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".scss"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Test & React",
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({}),
  ],
  devServer: {
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
  mode: production ? "production" : "development",
};
