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
    entry: resolve('lib/blog.js'),
    plugins: [
      new HtmlWebpackPlugin({
        filename: `${filename && filename + '/'}index.html`,
        template,
        title: filename,
        blog
      })
    ]
  };
  return merge(baseConfig, config);
}

module.exports = getWebpackConfig;