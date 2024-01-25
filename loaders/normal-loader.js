/**
 * loader返回的是一个函数
 * 有三个参数，
 * 1. conten 传过来的文件内容、
 * 2. map SourceMap、
 * 3. options 别的loader传递过来的数据
 */
module.exports = function (content, map, options) {
    console.log('normal-loader');
    return content
}

/**
 * 同步loader的第二种写法，
 * 可以更好的传递参数
 */
// module.exports = function (content, map, options) {
//     // 第一个参数是错误的信息
//     this.callback(null, content, map, options)
// }