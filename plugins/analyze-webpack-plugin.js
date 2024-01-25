/**
 * AnalyzeWebpackPlugin
    作用：分析 webpack 打包资源大小，并输出分析文件。
    开发思路:
    在哪做? compiler.hooks.emit, 它是在打包输出前触发，我们需要分析资源大小同时添加上分析后的 md 文件。
 */
class AnalyzeWebpackPlugin {
  apply(compiler) {
    // emit是异步串行钩子
    compiler.hooks.emit.tap("AnalyzeWebpackPlugin", (compilation) => {
      // Object.entries将对象变成二维数组。二维数组中第一项值是key，第二项值是value
      const assets = Object.entries(compilation.assets);

      let source = "# 分析打包资源大小 \n| 名称 | 大小 |\n| --- | --- |";

      assets.forEach(([filename, file]) => {
        source += `\n| ${filename} | ${Math.ceil(file.size()/1024)}kb |`;
      });

      // 添加资源
      compilation.assets["analyze.md"] = {
        source() {
          return source;
        },
        size() {
          return source.length;
        },
      };
    });
  }
}

module.exports = AnalyzeWebpackPlugin;