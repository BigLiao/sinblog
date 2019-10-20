/**
 * 扫描博客目录，获得博客
 */
const path = require('path');
const fs = require('fs-extra');
const frontMatter = require('front-matter');
const renderMarkdown = require('../renderMarkdown');
const { resolve } = require('../util/util');
const config = require('../../sinblog.config');

/**
 *
 * @param {string} blogDir 博客目录，相对路径
 */
function scanBlog(blogDir) {
  const blogInfoList = []; // 用于储存最终数据
  const blogDirAbs = resolve(blogDir);
  const blogList = fs.readdirSync(blogDirAbs, {
    withFileTypes: true
  });

  for (let i = 0; i < blogList.length; i++) {
    if (blogList[i].isFile() && /\.(md|MD)$/.test(blogList[i].name)) {
      // 确认是 Markdown 文件
      const blogPath = path.resolve(blogDirAbs, blogList[i].name);
      const {baseInfo} = renderMarkdown(blogPath);
      blogInfoList.push(baseInfo);
    }
  }
  return blogInfoList;
}

function main() {
  if (config.blogPages && config.blogPages.length) {
    config.blogPages.forEach(item => {
      scanBlog(item.path, item.urlPath);
    });
  } else if (config.blogDir) {
    scanBlog(config.blogDir, 'blog');
  }
}

// main();

module.exports = scan;
