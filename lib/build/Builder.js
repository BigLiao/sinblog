'use strict'
const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const ejs = require('ejs');
const webpack = require('webpack');
const getWebpackConfig = require('./getWebpackConfig');
const { resolve, injectImport, checkDirExist } = require('../util');
const config = require('../../sinblog.config');
const prepareEntry = require('../dev/prepareEntry');
const renderMarkdown = require('../renderMarkdown');

class Builder {
  constructor() {
    this.blogPath = resolve('lib/dev/hello-world.md');
    this.tempPath = resolve('.temp');
    this.distPath = resolve('dist');

    this.compiler = null;
    this.webpackConfig = null;

    fs.ensureDirSync(this.tempPath);
    fs.ensureDirSync(this.distPath);
    fs.emptyDirSync(this.tempPath);
    fs.emptyDirSync(this.distPath);

    const BLOG_LAYOUT_PATH = resolve('layouts/blog/blog.ejs');
    const TEMPLATE_PATH = resolve('layouts/template.ejs');
    this.THEME_PATH = resolve('themes/' + config.theme + '.scss');

    this.blogLayoutEjsPath = BLOG_LAYOUT_PATH;
    this.templateEjsPath = TEMPLATE_PATH;
    this.blogLayoutEjs = fs.readFileSync(BLOG_LAYOUT_PATH, { encoding: 'utf8' });
    this.templateEjs = fs.readFileSync(TEMPLATE_PATH, { encoding: 'utf8' });

  }

  async run() {
    this.prepareBlogEntry();
    await this.compileBlog();
    if (config.blogPages && config.blogPages.length > 0) {
      config.blogPages.forEach(pageConfig => {
        this.scanBlog(pageConfig);
        this.prepareListEntry(pageConfig);
        this.compileList(pageConfig);
      });
      this.renderRedirectIndex();
    } else {
      const pageConfig = {
        title: config.siteName,
        dirName: '',
        path: ''
      };
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
    const jsTempPath = resolve('.temp/blog-entry.js');
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
   * @param {Object} pageConfig - 博客页面配置参数
   * @param {string} pageConfig.title - 页面标题
   * @param {string} pageConfig.dirName - 博客子目录，相对于 blogRoot 路径
   * @param {string} pageConfig.path - 映射的 URL 路径
   */
  prepareListEntry(pageConfig) {

    const pageName = `list-${pageConfig.dirName}`;
    const JS_PATH = resolve('layouts/list/list.js');
    const jsTempPath = resolve(`.temp/${pageName}-entry.js`);
  
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
        entry: resolve('.temp/blog-entry.js'),
      });
      const compiler = webpack(webpackConfig);
      compiler.run((err, stats) => {
        if (err) throw err;
        this.blogWebpackAssetsJson = fs.readFileSync(resolve('.temp/blog-assets.json'));
        resolvePro();
      });
    });
  }

  /**
   * 
   * @param {Object} pageConfig - 博客页面配置参数
   * @param {string} pageConfig.title - 页面标题
   * @param {string} pageConfig.dirName - 博客子目录，相对于 blogRoot 路径
   * @param {string} pageConfig.path - 映射的 URL 路径
   */
  compileList(pageConfig) {
    const pageName = `list-${pageConfig.dirName}`;
    return new Promise((resolvePro, reject) => {
      const webpackConfig = getWebpackConfig({
        pageName: pageName,
        entry: resolve(`.temp/${pageName}-entry.js`),
        publicPath: './'
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
    const navList = config.blogPages || [];
    const siteName = config.siteName;

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
      navList, siteName
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
   * @param {Object} pageConfig - 博客页面配置参数
   * @param {string} pageConfig.title - 页面标题
   * @param {string} pageConfig.dirName - 博客子目录，相对于 blogRoot 路径
   * @param {string} pageConfig.path - 映射的 URL 路径
   */
  async renderListPage(pageConfig) {
    const listLayoutEjsPath = resolve('layouts/list/list.ejs');

    const navList = config.blogPages || [];
    const siteName = config.siteName;

    const listHtml = await ejs.renderFile(listLayoutEjsPath, {
      navList, siteName
    });


    const pageName = `list-${pageConfig.dirName}`;
    const assetsJsonPath = resolve(`.temp/${pageName}-assets.json`)
    const assets = fs.readJsonSync(assetsJsonPath);

    const pagePath = path.join('dist', pageConfig.path);
    const targetPath = resolve(pagePath, 'index.html');

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
   * @param {Object} pageConfig - 博客页面配置参数
   * @param {string} pageConfig.title - 页面标题
   * @param {string} pageConfig.dirName - 博客子目录，相对于 blogRoot 路径
   * @param {string} pageConfig.path - 映射的 URL 路径
   */
  scanBlog(pageConfig) {
    const blogInfoList = []; // 用于储存最终数据
    const blogDirAbs = resolve(config.blogRoot, pageConfig.dirName);
    const blogList = fs.readdirSync(blogDirAbs, {
      withFileTypes: true
    });
  
    for (let i = 0; i < blogList.length; i++) {
      if (blogList[i].isFile() && /\.md$/.test(blogList[i].name)) {
        // 确认是 Markdown 文件
        const blogPath = path.resolve(blogDirAbs, blogList[i].name);
        const {baseInfo, html: mdHtml} = renderMarkdown(blogPath);
        const pagePath = path.join('dist', pageConfig.path);
        const targetPath = resolve('dist', pageConfig.path, baseInfo.title + '.html');
        baseInfo.path = path.relative('dist', targetPath);
        
        blogInfoList.push(baseInfo);
        this.renderBlog(mdHtml, baseInfo.title, targetPath);
      }
    }
    const targetPath = resolve('.temp/', `./blog-info-list-${pageConfig.dirName}.json`);
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
      title: config.siteName,
      redirectURL: config.indexPath
    });
    fs.writeFileSync(resolve('dist/index.html'), template);
  }

}

module.exports = Builder;
