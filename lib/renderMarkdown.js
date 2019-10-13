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
const { resolve, checkDirExist } = require('./util');
const config = require('../../sinblog.config');

const templatePath = resolve('layouts/template.ejs');

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


function renderMarkdown({
  title, mdContent, variables, layout
}) {
  const layoutPath = resolve(layout);
  
  const mdHtml = markdownParser.render(mdContent);
}