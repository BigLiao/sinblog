const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const MarkdownItKatex = require('@iktakahiro/markdown-it-katex');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const { resolve } = require('../util');
const getDevConfig = require('./getDevConfig');

class Dev{
  constructor() {
    this.blogPath = resolve('lib/dev/hello-world.md');
    this.tempPath = resolve('.temp');
    this.blogHtmlTempPath = resolve('.temp/blog.json');
    this.entryTempPath = resolve('.temp/entry-dev.js');
    this.templatePath = resolve('lib/dev/template.html');
    this.compiler = null;
    this.webpackConfig = null;

    try {
      fs.accessSync(this.tempPath);
    } catch (error) {
      fs.mkdirSync(this.tempPath);
    }
    this.markdownParser = new MarkdownIt({
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) { }
        }
        return ''; // use external default escaping
      }
    });
    this.markdownParser.use(MarkdownItKatex, {
      strict: false,
      throwOnError: false
    });
  }

  run() {
    this.prepareTempFile();
    this.createEntry();
    this.compile();
    this.server();
  }

  // 准备临时文件
  prepareTempFile() {
    // 生成博客 html
    const blogContent = fs.readFileSync(this.blogPath, 'utf8');
    const blogHtml = this.markdownParser.render(blogContent);
    fs.writeFileSync(this.blogHtmlTempPath, JSON.stringify(blogHtml));
    const entryTemplate = this.createEntry();
    fs.writeFileSync(this.entryTempPath, entryTemplate);
  }
  // 删除临时文件
  removeTempFile() {
    fs.unlinkSync(this.tempPath);
  }

  createEntry() {
    const entryTemplatePath = resolve('lib/dev/entry-dev.js');
    let entryTemplate = fs.readFileSync(entryTemplatePath, 'utf8');
    return this.injectVariables(entryTemplate, this.tempPath);
  }

  injectVariables(content, contentPath) {
    let result = content;
    const variables = {
      '__sinblog_import_blog_js__': resolve('layouts/blog/blog.js'),
      '__sinblog_import_blog_scss__': resolve('layouts/blog/blog.scss'),
      '__sinblog_import_html__': resolve(this.blogHtmlTempPath)
    };
    Object.keys(variables).forEach(key => {
      let requirePath = path.relative(contentPath, variables[key]);
      if (!/^\./.test(requirePath)) {
        requirePath = './' + requirePath;
      }
      const l = `require('${requirePath}')`;
      result = result.replace(key, l);
    });
    return result;
  }

  compile() {
    const templateContent = fs.readFileSync(this.templatePath, 'utf8');
    this.webpackConfig = getDevConfig({
      entry: this.entryTempPath,
      templateContent: templateContent
    });
    this.compiler = webpack(this.webpackConfig);
  }

  server() {
    const app = express();
    app.use(webpackDevMiddleware(this.compiler, {
      noInfo: true, publicPath: this.webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(this.compiler));
    app.listen(3000, () => console.log('Express listening on port 3000...'))
  }
}

module.exports = Dev;
