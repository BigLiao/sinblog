/**
 * 扫描博客目录，获得博客
 */
const path = require('path');
const fs = require('fs-extra');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const ejs = require('ejs');
const Glob = require('glob');
const MarkdownItKatex = require('@iktakahiro/markdown-it-katex');
const frontMatter = require('front-matter');

const { resolve } = require('./util');
const config = require('../sinblog.config');

async function scan(blogDir) {
  const blogInfoList = []; // 用于储存最终数据
  const blogDirAbs = resolve(blogDir);
  const blogList = await fs.readdir(blogDirAbs, {
    withFileTypes: true
  });

  for (let i = 0; i < blogList.length; i++) {
    if (blogList[i].isFile() && /\.md$/.test(blogList[i].name)) {
      // 确认是 Markdown 文件
      const baseInfo = {
        title: blogList[i].name.slice(0, blogList[i].name.lastIndexOf('.')),
      }
      const blogPath = path.resolve(blogDirAbs, blogList[i].name);
      const stats = fs.statSync(blogPath);
      baseInfo.date = stats.ctimeMs;
      const mdBaseInfo = extractMarkdown(blogPath);
      Object.assign(baseInfo, mdBaseInfo);
      blogInfoList.push(baseInfo);
    }
  }
}

function extractMarkdown(mdPath) {
  const data = fs.readFileSync(mdPath, { encoding: 'utf8' });
  const ft = frontMatter(data);
  const baseInfo = {
    title: ft.attributes.title
  }
  if (ft.attributes.date) {
    try {
      date = (new Date(ft.attributes.date)).getTime();
      baseInfo.date = date;
    } catch (error) {
      //
    }
  }
  return baseInfo;
}

function main() {
  if (config.blogPages && config.blogPages.length) {
    config.blogPages.forEach(item => {
      scan(item.path);
    });
  } else if (config.blogDir) {
    scan(config.blogDir);
  }
}

main();