const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const ejs = require('ejs');
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

  async run() {
    await this.prepareTempFile();
    await this.createEntry();
    await this.compile();
    this.server();
    this.watchTemplate();
  }

  // 准备临时文件
  async prepareTempFile() {
    // 生成博客 html
    const blogContent = fs.readFileSync(this.blogPath, 'utf8');
    const blogHtml = this.markdownParser.render(blogContent);
    const html = await ejs.renderFile(this.blogEjsPath, {
      blog: blogHtml,
    });
    fs.writeFileSync(this.blogHtmlTempPath, JSON.stringify(html));
    // 生成首页 html
    const homeContent = await ejs.renderFile(this.homeEjsPath);
    fs.writeFileSync(this.homeHtmlTempPath, JSON.stringify(homeContent));
  }
  // 删除临时文件
  removeTempFile() {
    fs.unlinkSync(this.tempPath);
  }

  watchTemplate() {
    fs.watchFile(this.blogEjsPath, () => {
      console.log('template changed...');
      this.prepareTempFile();
    });
  }

  createEntry() {
    // blog entry
    const blogEntryTemplatePath = resolve('lib/dev/entry-blog-dev.js');
    let blogEntryTemplate = fs.readFileSync(blogEntryTemplatePath, 'utf8');
    blogEntryTemplate = this.injectVariables(blogEntryTemplate, this.tempPath);
    fs.writeFileSync(this.entryBlogTempPath, blogEntryTemplate);
    // home entry
    const homeEntryTemplatePath = resolve('lib/dev/entry-home-dev.js');
    let homEntryTemplate = fs.readFileSync(homeEntryTemplatePath, 'utf8');
    homEntryTemplate = this.injectVariables(homEntryTemplate, this.tempPath);
    fs.writeFileSync(this.entryHomeTempPath, homEntryTemplate);
  }

  injectVariables(content, contentPath) {
    let result = content;
    const variables = {
      '__sinblog_import_blog_js__': resolve('layouts/blog/blog.js'),
      '__sinblog_import_blog_scss__': resolve('layouts/blog/blog.scss'),
      '__sinblog_import_blog_html__': resolve(this.blogHtmlTempPath),
      '__sinblog_import_home_js__': resolve('layouts/home/home.js'),
      '__sinblog_import_home_scss__': resolve('layouts/home/home.scss'),
      '__sinblog_import_home_html__': resolve(this.homeHtmlTempPath),
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

  async compile() {
    const templateContent = await ejs.renderFile(this.templatePath, {
      title: '博客',
      content: '<div id="app"></div>'
    });
    this.webpackConfig = getDevConfig({
      blogEntry: this.entryBlogTempPath,
      homeEntry: this.entryHomeTempPath,
      templateContent: templateContent
    });
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
