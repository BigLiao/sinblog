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
    this.blogSource = resolvePath('blog/**/*.md');
    this.blogTargetPath = resolvePath('dist/blog');
    this.assetsPath = resolvePath('dist/public');

    this.jsAssets = [];
    this.cssAssets = [
      'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css',
      'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
    ];

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
    this.templatePath = resolvePath('layouts/blog/blog.ejs');
    try {
      fs.accessSync(this.blogTargetPath);
    } catch (error) {
      fs.mkdirSync(this.blogTargetPath);
    }
  }

  async run() {
    try {
      await this.scanMarkdown();
    } catch (err) {
      console.error(err);
    }
    await this.compile();
    this.blogPathList.forEach(mdPath => this.render(mdPath));
  }

  scanMarkdown() {
    return new Promise((resolve, reject) => {
      glob(this.blogSource, (err, matches) => {
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

  async render(mdPath) {
    const mdFile = fs.readFileSync(mdPath, {
      encoding: 'utf8'
    });
    const blogHtml = this.markdownParser.render(mdFile);
    const cssTags = this.getCssTags();
    const jsTags = this.getJsTags();
    const html = await ejs.renderFile(this.templatePath, {
      blog: blogHtml,
      title: '博客',
      cssTags,
      jsTags
    });
    const filename = path.basename(mdPath).split('.')[0];
    const distPath = path.resolve(this.blogTargetPath, filename + '.html');
    fs.writeFileSync(distPath, html);
  }

  compile() {
    const config = getWebpackConfig({
      assetsPath: this.assetsPath
    });
    const compiler = webpack(config);
    return new Promise((resolve, reject) => {
      compiler.run((err, stats) => {
        if (err) {
          reject(err);
        } else {
          const assets = stats.toJson({
            assets: true,
            hash: true
          }).assets;
          this.prepareAssets(assets);
          resolve();
        }
      });
    })
    
  }

  prepareAssets(assets) {
    assets.forEach(asset => {
      const name = asset.name;
      const url = '../public/' + name
      if (/\.js$/.test(name)) {
        this.jsAssets.push(url);
      } else if (/\.css$/.test(name)) {
        this.cssAssets.push(url);
      }
    });
  }

  getJsTags() {
    let result = '';
    this.jsAssets.forEach(js => {
      const tag = `<script src="${js}"></script>`;
      result += '\n'+tag;
    });
    return result;
  }
  getCssTags() {
    let result = '';
    this.cssAssets.forEach(css => {
      const tag = `<link rel="stylesheet" href="${css}"></link>`;
      result += '\n'+tag;
    });
    return result;
  }
}

module.exports = Builder;
