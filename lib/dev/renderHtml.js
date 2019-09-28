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
const { resolve, checkDirExist } = require('../util');
const config = require('../../config');

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
  strict: false,
  throwOnError: false
});

async function renderHtml(config) {
  const option = Object.assign({
    indexPath: resolve('layouts/blog/blog.ejs'),
    templatePath: resolve('layouts/template.ejs'),
    mdPath: resolve('lib/dev/hello-world.md'),
    title: '测试'
  }, config);


  const mdStr = fs.readFileSync(option.mdPath, { encoding: 'utf8' });
  const mdHtml = markdownParser.render(mdStr);

  const indexHtml = await ejs.renderFile(option.indexPath, {
    content: mdHtml
  });

  const templateHtml = await ejs.renderFile(option.templatePath, {
    content: indexHtml,
    title: option.title
  });

  const rootDir = resolve('layouts');
  let tempHtmlPath = path.relative(rootDir, option.indexPath).replace('/', '_').split('.')[0];

  checkDirExist(resolve('.temp'));

  tempHtmlPath = resolve('.temp', tempHtmlPath + '.html');
  fs.writeFileSync(tempHtmlPath, templateHtml);
}

function generateTemplate() {
  // 首页
  renderHtml({
    indexPath: resolve(config.pages.home.layout, 'home.ejs'),
    mdPath: resolve(config.pages.home.content),
    title: '首页'
  });
  // 博客
  renderHtml({
    indexPath: resolve(config.pages.blog.layout, 'blog.ejs'),
    mdPath: resolve('lib/dev/hello-world.md'),
    title: '博客'
  });
  // 关于我们
  renderHtml({
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
      fs.watchFile(file, () => {
        clearTimeout(watchTimer);
        watchTimer = setTimeout(() => {
          generateTemplate();
        });
      });
    });
  });
}

generateTemplate();
watchFile();