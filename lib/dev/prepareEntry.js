/**
 * 准备 webpack 所需的入口文件，用于 Dev
 */
const path = require('path');
const fs = require('fs-extra');
const Glob = require('glob');
const ejs = require('ejs');

const config = require('../../sinblog.config');
const renderMarkdown = require('../renderMarkdown');
const { resolve, injectImport } = require('../util');

const THEME_PATH = resolve('themes/' + config.theme + '.scss');

function prepareBlogEntry() {
  const JS_PATH = resolve('layouts/blog/blog.js');
  const jsTempPath = resolve('.temp/blog-entry.js');
  // 用于 HMR
  let jsContent = `
require('katex/dist/katex.css');
require('highlight.js/scss/default.scss');

if (module.hot) {
  module.hot.accept();
}`;
  jsContent = injectImport(jsContent, JS_PATH, jsTempPath);
  jsContent = injectImport(jsContent, THEME_PATH, jsTempPath);

  fs.writeFileSync(jsTempPath, jsContent);

}


function prepareListEntry() {
  const JS_PATH = resolve('layouts/list/list.js');
  const jsTempPath = resolve('.temp/list-entry.js');

  const importPath = path.relative(path.resolve(jsTempPath, '..'), JS_PATH);

  // 用于 HMR
  let jsContent = `
const renderList = require('${importPath}');
require('katex/dist/katex.css');
require('highlight.js/scss/default.scss');
const blogList = () => import('./blog-info-list.json');

blogList().then(s => {
  renderList(s.default);
});

if (module.hot) {
  module.hot.accept();
}`;
  jsContent = injectImport(jsContent, JS_PATH, jsTempPath);
  jsContent = injectImport(jsContent, THEME_PATH, jsTempPath);

  // 异步引入 blogInfoList 
  jsContent = '\n' + jsContent;

  fs.writeFileSync(jsTempPath, jsContent);

}

function main() {
  prepareBlogEntry();
  prepareListEntry();
}

module.exports = main;
