/**
 * raw-loader主要的特点就是接收到的数据content，是Buffer数据
 * 在这里面可以进行同步也可以进行异步
 * 具体实现：只需要在module.exports.raw = true;设置为true即可
 */
module.exports = function (content) {
    console.log('raw-loader',content);
}
module.exports.raw = true; // 指定该loader为原始数据加载器，即不进行任何处理