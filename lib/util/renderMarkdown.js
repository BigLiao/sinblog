/**
 * 生成 HTML 模板
 */
const path = require('path');
const fs = require('fs-extra');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const ejs = require('ejs');
const Glob = require('glob');
const MarkdownItKatex = require('@iktakahiro/markdown-it-katex');
const frontMatter = require('front-matter');
const uslug = require("uslug");
const { resolve, checkDirExist } = require('./util');
const config = require('../../sinblog.config');

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
markdownParser
  .use(MarkdownItKatex, {
    displayMode: false,
    errorColor: '#ae6598'
  })
  // .use(require('markdown-it-anchor'), {
  //   lever: 4,
  //   slugify: function(s) {
  //     return uslug(s);
  //   }
  // });
  // .use(require("markdown-it-toc-done-right"), {
  //   lever: 4,
  //   containerClass: 'table-of-contents nav',
  //   itemClass: 'nav-item',
  //   linkClass: 'nav-link',
  //   listType: 'ul',
  //   format: function(x, htmlencode) {
  //     return `<span>${htmlencode(x)}</span>`;
  //   },
  //   slugify: function(s) {
  //     return uslug(s);
  //   }
  // });

function renderMarkdown(mdPath) {
  const baseInfo = {};
  const data = fs.readFileSync(mdPath, { encoding: 'utf8' });
  const ft = frontMatter(data);
  const stats = fs.statSync(mdPath);
  // 优先使用 front-matter 里指定的时间，否则用文件创建时间作为博客 date
  baseInfo.date = stats.ctimeMs;
  const date = ft.attributes.date || ft.attributes.Date;
  if (date) {
    try {
      date = (new Date(date)).getTime();
      baseInfo.date = date;
    } catch (error) {
      //
    }
  }

  // 优先用 front-matter 里的 title，否则用用文件名作为 title
  const pathSplitList = mdPath.split('/');
  const fileNameWithExt = pathSplitList[pathSplitList.length - 1];
  const fileName = fileNameWithExt.slice(0, fileNameWithExt.lastIndexOf('.'));
  baseInfo.title = fileName;

  // const mdContent = '\n${toc}\n' + ft.body; // 用于注入 TOC
  const mdContent = ft.body;
  const mdHtml = markdownParser.render(mdContent);
  const regBreif = /<p>.+<\/p>/g;
  let breif = '';
  while (breif.length < 163) {
    const rs = regBreif.exec(mdHtml);
    if (rs && rs[0]) {
      breif += rs[0];
    }
  }

  baseInfo.content = breif;

  // 提取 Table of Contents
  // const regToc = /<nav class="table-of-contents">.+<\/nav>/;
  // const oo = regToc.exec(mdHtml);
  // console.log(oo[0]);

  return {
    baseInfo, // 基础信息
    html: mdHtml // Markdown 转换成的 HTML
  };

}

module.exports = renderMarkdown;
