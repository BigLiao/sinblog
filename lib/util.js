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