const loaderUtils = require('loader-utils')

module.exports = function (content) {
    // 1. 根据文件内容生成带hash值得文件
    const interpolateName =  loaderUtils.interpolateName(this, "[hash].[ext][query]", {
        content
    })
    console.log('interpolateName',interpolateName);
    
    // interpolateName = `images/${interpolateName}`
    // 2. 将文件输出出去
    this.emitFile(interpolateName, content)
    
    // 3. 返回module.export= "文件路径（文件名）"
    return `module.exports ="${interpolateName}"`
}
// 由于处理的是图片等文件，所以需要buffer流
module.exports.raw = true