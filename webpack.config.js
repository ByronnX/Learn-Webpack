// 引入路径
const path = require("path");
// 引入html插件
const htmlWebpackPlugin = require("html-webpack-plugin");
const AnalyzeWebpackPlugin = require("./plugins/analyze-webpack-plugin")
// 导出模块
// 其中要写一下几个主要配置项
// 1. entry: 入口文件
// 2. output: 输出文件
// 3. module: 模块配置
// 4. plugins: 插件配置
// 5. resolve: 解析配置
// 6. mode: 指定模式
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // 执行顺序：从下到上，从右到左
        // loader: "./loaders/test-loader.js",// 用的单个loader是这样，多个是use
        // use: ["./loaders/async-loader.js", "./loaders/normal-loader.js"],
        loader: "./loaders/banner-loader/banner-loader.js",
        options: {
          author: "张三",
        },
      },
      {
        test: /\.js$/,
        loader: "./loaders/babel-loader/babel-loader.js",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "./loaders/file-loader/index.js",
        type: "javascript/auto", // 组织webpack默认处理图片资源，只用file-loader处理
      },
      {
        test: /\.css$/,
        use: ["./loaders/style-loader/index.js", "css-loader"],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new AnalyzeWebpackPlugin(),
  ],
  // 指定模式为开发模式，这样就不会压缩
  mode: "development",
};
