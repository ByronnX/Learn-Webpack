// 异步loader
module.exports = function (content, map, options) {
  const callback = this.async(); // 主要是获取callback
    setTimeout(() => {
    console.log('async-loader');
      callback(null, content, map, options); // 这里用
  }, 1000);
};
 