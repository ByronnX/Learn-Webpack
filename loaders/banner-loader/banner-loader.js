const scheme = require('./scheme.json')
module.exports = function (content) {
    const options = this.getOptions(scheme)
    const prefix = `
        /*
        *   Author: ${options.author}
        */
    `
    return prefix + content;
}