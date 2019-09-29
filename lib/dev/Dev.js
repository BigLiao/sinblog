const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const webpack = require('webpack');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const ejs = require('ejs');
const MarkdownItKatex = require('@iktakahiro/markdown-it-katex');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../../config');

const { resolve } = require('../util');
const getDevConfig = require('./getDevConfig');

class Dev{
  constructor() {
    this.blogPath = resolve('lib/dev/hello-world.md');
    this.tempPath = resolve('.temp');
    this.blogHtmlTempPath = resolve('.temp/blog.json');
    this.entryBlogTempPath = resolve('.temp/entry-blog-dev.js');
    this.templatePath = resolve('layouts/layout.ejs');
    this.blogEjsPath = resolve('layouts/blog/blog.ejs');

    this.homeHtmlTempPath = resolve('.temp/home.json');
    this.entryHomeTempPath = resolve('.temp/entry-home-dev.js');
    this.homeEjsPath = resolve('layouts/home/home.ejs');

    this.compiler = null;
    this.webpackConfig = null;

    try {
      fs.accessSync(this.tempPath);
    } catch (error) {
      fs.mkdirSync(this.tempPath);
    }
  }

  async run() {
    await this.prepareTempFile();
    this.createEntry('home');
    this.createEntry('blog');
    this.createEntry('about');
    await this.compile();
    this.server();
  }

  // 准备临时文件
  async prepareTempFile() {
    childProcess.fork(resolve('lib/dev/renderHtml.js'));
  }
  // 删除临时文件
  removeTempFile() {
    fs.unlinkSync(this.tempPath);
  }

  createEntry(pageName) {
    // blog entry
    const entryTemplatePath = resolve('lib/dev/entry-template.js');
    let entryTemplate = fs.readFileSync(entryTemplatePath, 'utf8');

    // 替换 js 和 scss 引入
    let jsRequirePath = path.relative(this.tempPath, resolve(config.pages[pageName].layout, pageName + '.js'));
    if (!/^\./.test(jsRequirePath)) {
      jsRequirePath = './' + jsRequirePath;
    }
    entryTemplate = entryTemplate.replace('__sinblog_import_js__', `require('${jsRequirePath}')`);

    let scssRequirePath = path.relative(this.tempPath, resolve(config.pages[pageName].layout, pageName + '.scss'));
    if (!/^\./.test(scssRequirePath)) {
      scssRequirePath = './' + scssRequirePath;
    }
    entryTemplate = entryTemplate.replace('__sinblog_import_scss__', `require('${scssRequirePath}')`);
    fs.writeFileSync(path.join(this.tempPath, pageName + '-entry.js'), entryTemplate);
  }

  async compile() {
    this.webpackConfig = getDevConfig();
    this.compiler = webpack(this.webpackConfig);
  }

  server() {
    const app = express();
    app.use(webpackDevMiddleware(this.compiler, {
      noInfo: true, publicPath: this.webpackConfig.output.publicPath,
      logLevel: 'error'
    }));
    app.use(webpackHotMiddleware(this.compiler));
    app.listen(3000, () => console.log('Express listening on port 3000...'))
  }
}

module.exports = Dev;
