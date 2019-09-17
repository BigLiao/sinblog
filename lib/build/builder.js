'use strict'
const glob = require('glob');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs-extra');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const MarkdownItKatex = require('@iktakahiro/markdown-it-katex');
const webpack = require('webpack');
const getWebpackConfig = require('./getWebpackConfig');
const { resolve: resolvePath } = require('../util');

class Builder {
  constructor() {
    this.blogPathList = [];
    this.blogDir = resolvePath('blog/**/*.md');
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
      strict: false
    });
    this.templatePath = resolvePath('layouts/blog.ejs');
    this.distPath = resolvePath('dist');
    try {
      fs.accessSync(this.distPath);
    } catch (error) {
      fs.mkdirSync(this.distPath);
    }
  }

  async run() {
    try {
      await this.scanMarkdown();
    } catch (err) {
      console.error(err);
    }
    console.log(this.blogPathList);
    for (let i = 0; i < this.blogPathList.length; i++) {
      this.compile(this.blogPathList[i]);
    }
  }

  scanMarkdown() {
    return new Promise((resolve, reject) => {
      glob(this.blogDir, (err, matches) => {
        if (err) {
          reject(err);
          throw (err)
        }
        this.blogPathList = matches;
        resolve();
      });
    })

  }

  async parseMarkdown(mdPath) {
    console.log('read file: ', mdPath);
    const mdFile = fs.readFileSync(mdPath, {
      encoding: 'utf8'
    });
    const result = this.markdownParser.render(mdFile);
    const html = await ejs.renderFile(this.templatePath, {
      blog: result,
      title: '博客'
    });
    const filename = path.basename(mdPath).split('.')[0];
    const distPath = path.resolve(this.distPath, filename + '.html');
    fs.writeFileSync(distPath, html);

  }

  compile(mdPath) {
    const filename = path.basename(mdPath).split('.')[0];
    const mdFile = fs.readFileSync(mdPath, {
      encoding: 'utf8'
    });
    const blog = this.markdownParser.render(mdFile);
    const config = getWebpackConfig({
      filename, 
      template: resolvePath('layouts/blog.ejs'),
      blog: blog
    });
    const compiler = webpack(config);
    // 修改一下，在 status 里获取 assets 然后注入到 html 里
    compiler.run((err, stats) => {
      if (err) console.error(err);
      else {
        const assets = stats.toJson({
          assets: true,
          hash: true
        }).assets;
        this.prepareAssets(assets);
      }
    });
  }

  prepareAssets(assets) {
    console.log(assets);
    const jsList = [];
  }
}

const builder = new Builder();
builder.run();
