const fs = require('fs-extra');
const path = require('path');
const resolve = (...dir) => path.resolve(__dirname, '../', ...dir);

exports.checkDirExist = function(dir) {
    try {
        fs.accessSync(dir);
    } catch (error) {
        fs.mkdirSync(dir);
    }
}

exports.resolve = resolve;

/**
 * @param {string} content 读取的内容
 * @param {string} fromPath 被引入文件所在的绝对路径
 * @param {string} toPath 当前内容所在的绝对路径
 */
function injectImport (content, fromPath, toPath) {
    const importPath = path.relative(toPath, fromPath);
    const importSentence = `require('${importPath}')\n`;
    return importSentence + content;
}

exports.injectImport = injectImport;