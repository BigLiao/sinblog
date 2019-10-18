'use strict'
const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const ejs = require('ejs');
const webpack = require('webpack');
const getWebpackConfig = require('./getWebpackConfig');
const { resolve, injectImport, checkDirExist } = require('../util/util');
const prepareEntry = require('../dev/prepareEntry');
const renderMarkdown = require('../util/renderMarkdown');

/**
 * 博客页面配置
 * @typedef {Object} pageConfig
 * @property {string} title - 导航标题
 * @property {string} dirPath - 目录，绝对路径
 * @property {string} urlPath - URL path
 */

class Builder {
  /**
   * 构造 Builder
   * @param {Object} config - sinblogConfig 配置
   */
  constructor(config) {
    this.tempPath = config.tempPath;
    this.distPath = config.distPath;
    this.rootPath = config.rootPath;
    this.siteConfig = config.site;
    this.buildConfig = config.build;
    this.isMultiPage = config.isMultiPage;

    fs.ensureDirSync(this.tempPath);
    fs.ensureDirSync(this.distPath);
    fs.emptyDirSync(this.tempPath);
    fs.emptyDirSync(this.distPath);

    const BLOG_LAYOUT_PATH = resolve('layouts/blog/blog.ejs');
    const TEMPLATE_PATH = resolve('layouts/template.ejs');
    this.THEME_PATH = resolve('themes/' + this.buildConfig.theme + '.scss');

    this.blogLayoutEjsPath = BLOG_LAYOUT_PATH;
    this.templateEjsPath = TEMPLATE_PATH;
    this.blogLayoutEjs = fs.readFileSync(BLOG_LAYOUT_PATH, { encoding: 'utf8' });
    this.templateEjs = fs.readFileSync(TEMPLATE_PATH, { encoding: 'utf8' });

  }

  async run() {
    this.prepareBlogEntry();
    await this.compileBlog();

    if (this.isMultiPage) {
      this.buildConfig.blogPage.forEach(pageConfig => {
        this.scanBlog(pageConfig);
        this.prepareListEntry(pageConfig);
        this.compileList(pageConfig);
      });
      this.renderRedirectIndex();
    } else {
      const pageConfig = this.buildConfig.blogPage
      this.scanBlog(pageConfig);
      this.prepareListEntry(pageConfig);
      this.compileList(pageConfig);
    }
  }

  /**
   * 准备 blog 页面的 webpack entry
   */
  prepareBlogEntry() {
    const JS_PATH = resolve('layouts/blog/blog.js');
    const jsTempPath = path.join(this.tempPath, 'blog-entry.js');
    let jsContent = `
require('katex/dist/katex.css');
require('highlight.js/scss/default.scss');
  `;
    jsContent = injectImport(jsContent, JS_PATH, jsTempPath);
    jsContent = injectImport(jsContent, this.THEME_PATH, jsTempPath);
    fs.writeFileSync(jsTempPath, jsContent);
  }

  /**
   * 生成博客列表页面的 webpack entry
   * @param {pageConfig} pageConfig - 博客页面配置参数
   */
  prepareListEntry(pageConfig) {

    const pageName = `list-${pageConfig.dirName}`;
    const JS_PATH = resolve('layouts/list/list.js');
    const jsTempPath = path.join(this.tempPath, `${pageName}-entry.js`);

    const importPath = path.relative(path.resolve(jsTempPath, '..'), JS_PATH);

    let jsContent = `
const renderList = require('${importPath}');
require('katex/dist/katex.css');
require('highlight.js/scss/default.scss');
const blogList = () => import('./blog-info-list-${pageConfig.dirName}.json');

blogList().then(s => {
  renderList(s.default);
});`;
    jsContent = injectImport(jsContent, JS_PATH, jsTempPath);
    jsContent = injectImport(jsContent, this.THEME_PATH, jsTempPath);

    // 异步引入 blogInfoList
    jsContent = '\n' + jsContent;

    fs.writeFileSync(jsTempPath, jsContent);
  }

  /**
   * 编译 blog 页面的 js 资源
   */
  compileBlog() {
    return new Promise((resolvePro, reject) => {
      const webpackConfig = getWebpackConfig({
        pageName: 'blog',
        entry: path.join(this.tempPath, 'blog-entry.js'),
        distPath: this.distPath,
        tempPath: this.tempPath,
        rootPath: this.rootPath
      });
      const compiler = webpack(webpackConfig);
      compiler.run((err, stats) => {
        if (err) throw err;
        const targetPath = path.join(this.tempPath, '/blog-assets.json');
        this.blogWebpackAssetsJson = fs.readFileSync(targetPath);
        resolvePro();
      });
    });
  }

  /**
   *
   * @param {pageConfig} pageConfig - 博客页面配置参数
   */
  compileList(pageConfig) {
    const pageName = `list-${pageConfig.dirName}`;
    return new Promise((resolvePro, reject) => {
      const webpackConfig = getWebpackConfig({
        pageName: pageName,
        entry: path.join(this.tempPath, `${pageName}-entry.js`),
        publicPath: './',
        distPath: this.distPath,
        tempPath: this.tempPath,
        rootPath: this.rootPath
      });
      const compiler = webpack(webpackConfig);
      compiler.run((err, stats) => {
        if (err) throw err;
        this.renderListPage(pageConfig);
        resolvePro();
      });
    })
  }

  /**
   *
   * @param {string} mdHtml - Markdown 渲染后的 HTML
   * @param {*} title - 文章标题
   * @param {*} targetPath - 文件存放目录
   */
  async renderBlog(mdHtml, title, targetPath) {

    const assets = JSON.parse(this.blogWebpackAssetsJson);

    const cssAssets = Array.isArray(assets.blog.css) ? assets.blog.css : [assets.blog.css];
    const jsAssets = Array.isArray(assets.blog.js) ? assets.blog.js : [assets.blog.js];
    const cssAssetsList = cssAssets.map(item => {
      return {
        href: item
      };
    });
    const jsAssetsList = jsAssets.map(item => {
      return {
        src: item
      };
    });

    const blogHtml = await ejs.renderFile(this.blogLayoutEjsPath, {
      content: mdHtml,
      navList: this.siteConfig.navList,
      siteName: this.siteConfig.title,
      otherLinks: this.siteConfig.otherLinks,
      author: this.siteConfig.author
    });

    const templateHtml = await ejs.renderFile(this.templateEjsPath, {
      content: blogHtml,
      title: title,
      links: cssAssetsList,
      scripts: jsAssetsList
    });

    try {
      fs.ensureFileSync(targetPath);
      fs.writeFileSync(targetPath, templateHtml);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 生成博客列表页面
   * @param {pageConfig} pageConfig - 博客页面配置参数
   */
  async renderListPage(pageConfig) {
    const listLayoutEjsPath = resolve('layouts/list/list.ejs');

    const listHtml = await ejs.renderFile(listLayoutEjsPath, {
      navList: this.siteConfig.navList,
      siteName: this.siteConfig.title,
      otherLinks: this.siteConfig.otherLinks,
      author: this.siteConfig.author
    });


    const pageName = `list-${pageConfig.dirName}`;
    const assetsJsonPath = path.join(this.tempPath, `${pageName}-assets.json`)
    const assets = fs.readJsonSync(assetsJsonPath);

    const pagePath = path.join(this.distPath, pageConfig.urlPath);
    const targetPath = path.join(pagePath, 'index.html');

    const cssAssets = Array.isArray(assets[pageName].css) ? assets[pageName].css : [assets[pageName].css];
    const jsAssets = Array.isArray(assets[pageName].js) ? assets[pageName].js : [assets[pageName].js];

    const cssAssetsList = cssAssets.map(item => {
      return {
        href: item
      };
    });
    const jsAssetsList = jsAssets.map(item => {
      return {
        src: item
      };
    });

    const templateHtml = await ejs.renderFile(this.templateEjsPath, {
      content: listHtml,
      title: pageConfig.title,
      links: cssAssetsList,
      scripts: jsAssetsList
    });

    fs.ensureDirSync(resolve(pagePath));
    fs.ensureFileSync(targetPath);
    try {
      fs.writeFileSync(targetPath, templateHtml);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *
   * @param {pageConfig} pageConfig - 博客页面配置参数
   */
  scanBlog(pageConfig) {
    const blogInfoList = []; // 用于储存最终数据
    const blogList = fs.readdirSync(pageConfig.dirPath, {
      withFileTypes: true
    });

    for (let i = 0; i < blogList.length; i++) {
      if (blogList[i].isFile() && /\.md$/.test(blogList[i].name)) {
        // 确认是 Markdown 文件
        const blogPath = path.join(pageConfig.dirPath, blogList[i].name);
        const {baseInfo, html: mdHtml} = renderMarkdown(blogPath);
        const targetPath = path.join(this.distPath, pageConfig.urlPath, baseInfo.fileName + '.html');
        baseInfo.path = path.join('./', pageConfig.urlPath, baseInfo.fileName + '.html');

        blogInfoList.push(baseInfo);
        this.renderBlog(mdHtml, baseInfo.title, targetPath);
      }
    }
    const targetPath = path.join(this.tempPath, `./blog-info-list-${pageConfig.dirName}.json`);
    fs.ensureFileSync(targetPath);
    fs.writeJsonSync(targetPath, blogInfoList);
  }

  // 删除临时文件
  removeTempFile() {
    fs.unlinkSync(this.tempPath);
  }

  // 渲染重定向首页
  async renderRedirectIndex() {
    const template = await ejs.renderFile(resolve('lib/build/redirectTemplate.ejs'), {
      title: this.siteConfig.title,
      redirectURL: this.buildConfig.blogPage[0].urlPath
    });
    fs.writeFileSync(path.join(this.distPath, 'index.html'), template);
  }

}

module.exports = Builder;
