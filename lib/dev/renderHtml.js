/**
 * 生成 HTML 模板
 */
const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');
const ejs = require('ejs');
const MarkdownItKatex = require('@iktakahiro/markdown-it-katex');

function renderHtml(config) {
  const option = Object.assign({
    dir: '',
  }, config);
}