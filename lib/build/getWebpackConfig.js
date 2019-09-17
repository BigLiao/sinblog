const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../webpack/base-config');

const resolve = (dir) => path.resolve(__dirname, '../../', dir);

function getWebpackConfig({
  filename,
  template,
  blog
}) {
  const config = {
    entry: {
      'blog': resolve('lib/blog.js')
    }
  };
  return merge(baseConfig, config);
}

module.exports = getWebpackConfig;