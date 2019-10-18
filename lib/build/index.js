const path = require('path');
const Builder = require('./builder');
const { getConfig } = require('../config/sinblogConfig');

const config = getConfig();
const builder = new Builder(config);
builder.run();

// 先预先打包一个 BLOG html 文件 作为模板
// 扫描 Blog 目录，渲染 md 文件，使用 BLOG HTML 模板生成 HTML 文件，同时生成 baseInfo 加入 baseInfoList 中储存
// baseInfoList 直接生成 JSON 文件
// LIST 列表页面的 HTML 直接生成，动态导入 baseInfoList.json
