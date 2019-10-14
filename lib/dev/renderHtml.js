/**
 * 生成 HTML 模板
 */
const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const ejs = require('ejs');
const Glob = require('glob');
const MarkdownItKatex = require('@iktakahiro/markdown-it-katex');
const frontMatter = require('front-matter');
// const MarkdownItKatex = require('markdown-it-katex');
const { resolve, checkDirExist } = require('../util');
const config = require('../../sinblog.config');
const createBlogList = require('./createBlogList');

const markdownParser = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) { }
    }
    return ''; // use external default escaping
  }
});
markdownParser.use(MarkdownItKatex, {
  displayMode: true,
  errorColor: '#ae6598'
});

async function renderHtml(config) {
  const option = Object.assign({
    pageName: 'blog',
    indexPath: resolve('layouts/blog/blog.ejs'),
    templatePath: resolve('layouts/template.ejs'),
    mdPath: resolve('lib/dev/hello-world.md'),
    title: '测试'
  }, config);


  const mdStr = fs.readFileSync(option.mdPath, { encoding: 'utf8' });
  const content = frontMatter(mdStr);
  const mdHtml = markdownParser.render(content.body);

  const indexHtml = await ejs.renderFile(option.indexPath, {
    content: mdHtml
  });

  const templateHtml = await ejs.renderFile(option.templatePath, {
    content: indexHtml,
    title: option.title
  });

  let tempHtmlPath = resolve('.temp', option.pageName + '.html');

  checkDirExist(resolve('.temp'));
  fs.writeFileSync(tempHtmlPath, templateHtml);
}

function renderList() {

}

function generateTemplate() {
  // 首页
  renderHtml({
    pageName: 'list',
    indexPath: resolve(config.pages.list.layout, 'list.ejs'),
    mdPath: resolve(config.pages.list.content),
    title: '首页'
  });
  // 博客
  renderHtml({
    pageName: 'blog',
    indexPath: resolve(config.pages.blog.layout, 'blog.ejs'),
    mdPath: resolve('lib/dev/hello-world.md'),
    title: '博客'
  });
  // 关于我们
  renderHtml({
    pageName: 'about',
    indexPath: resolve(config.pages.about.layout, 'about.ejs'),
    mdPath: resolve(config.pages.about.content),
    title: '关于我们'
  });
}

// 找到要监听的文件，然后监听起来！
function watchFile() {
  let watchTimer = null; // 防抖~
  const pattern = resolve('layouts/**/*.ejs');
  console.log('Watching files: ' + pattern + ' ......');
  Glob(pattern, (err, list) => {
    list.forEach(file => {
      fs.watchFile(file, {
        interval: 500
      },() => {
        clearTimeout(watchTimer);
        watchTimer = setTimeout(() => {
          generateTemplate();
        }, 1000);
      });
    });
  });
}

generateTemplate();
watchFile();
