/**
 * 准备 HTML 模板，用于 Dev
 * 使用 child_process 调用
 */
const path = require('path');
const fs = require('fs-extra');
const Glob = require('glob');
const ejs = require('ejs');

const config = require('../../sinblog.config');
const renderMarkdown = require('../renderMarkdown');
const { resolve } = require('../util');
const scanBlogs = require('../scanBlogs');

async function prepareBlogHtml() {

  console.log('Prepare blog html...');

  const BLOG_MD_PATH = resolve('lib/dev/hello-world.md');
  const BLOG_TEMP_PATH = resolve('.temp/blog.html');
  const BLOG_LAYOUT_PATH = resolve('layouts/blog/blog.ejs');
  const TEMPLATE_PATH = resolve('layouts/template.ejs');
  fs.ensureFile(BLOG_TEMP_PATH);

  const { html: mdHtml, baseInfo: blogBaseInfo } = renderMarkdown(BLOG_MD_PATH);

  const blogHtml = await ejs.renderFile(BLOG_LAYOUT_PATH, {
    content: mdHtml,
    navList: config.blogPages,
    siteName: config.siteName
  });

  const templateHtml = await ejs.renderFile(TEMPLATE_PATH, {
    content: blogHtml,
    title: blogBaseInfo.title,
    links: [],
    scripts: []
  });

  fs.writeFileSync(BLOG_TEMP_PATH, templateHtml);
}

async function prepareListHtml() {

  console.log('Prepare list html...');

  const BLOG_LIST_PATH = 'blog/技术';
  const LIST_TEMP_PATH = resolve('.temp/list.html');
  const LIST_LAYOUT_PATH = resolve('layouts/list/list.ejs');
  const TEMPLATE_PATH = resolve('layouts/template.ejs');
  const blogInfoList = scanBlogs(BLOG_LIST_PATH);

  const listHtml = await ejs.renderFile(LIST_LAYOUT_PATH, {
    navList: config.blogPages,
    siteName: config.siteName
  });

  const templateHtml = await ejs.renderFile(TEMPLATE_PATH, {
    content: listHtml,
    title: '文学',
    links: [],
    scripts: []
  });

  fs.writeFileSync(LIST_TEMP_PATH, templateHtml);

  fs.writeFileSync(resolve('.temp/blog-info-list.json'), JSON.stringify(blogInfoList));

}

// 找到要监听的文件，然后监听起来！
function watchFile(pattern, handler) {
  Glob(pattern, (err, list) => {
    list.forEach(file => {
      fs.watchFile(file, {
        interval: 500
      },() => {
        handler();
      });
    });
  });
}

async function main() {
  await prepareListHtml();
  await prepareBlogHtml();

  console.log('Watching files ...');
  watchFile(resolve('layouts/blog/*.ejs'), prepareBlogHtml);
  watchFile(resolve('lib/dev/hello-world.md'), prepareBlogHtml);

  watchFile(resolve('layouts/list/*.ejs'), prepareListHtml);
  watchFile(resolve('blog/**/*.md'), prepareListHtml);

}

main();
