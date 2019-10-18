const path = require('path');
const fs = require('fs-extra');

function init() {
  const rootPath = process.cwd();
  const exampleConfigPath = path.resolve(__dirname, './sinblog.config.example.yml');
  fs.copySync(exampleConfigPath, path.join(rootPath, 'sinblog.config.yml'));
}

module.exports = init;
