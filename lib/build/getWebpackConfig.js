const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../webpack/base-config');

const resolve = (dir) => path.resolve(__dirname, '../../', dir);

function getWebpackConfig() {
  const config = {
    entry: {
      'blog': resolve('lib/blog.js')
    },
    output: {
      path: resolve('dist'),
      filename: '[name].[contenthash:8].js'
    }
  };
  return merge(baseConfig, config);
}

module.exports = getWebpackConfig;