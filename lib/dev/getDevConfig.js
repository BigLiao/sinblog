const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('../config/webpackConfigBase');
const config = require('../../sinblog.config');

const { resolve } = require('../util/util');

function generateWebpackPageConfig({
  pageName,
  template,
  entry,
  filename
}) {
  const webpackConfig = {
    mode: 'development',
    entry: {
      [pageName]: [entry],
    },
    output: {
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.ejs$/,
          use: 'ejs-loader'
        },
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: filename,
            template: template,
            chunks: [pageName]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            _: "underscore"
        })
    ]
  };
  return webpackConfig;
}

function getWebpackConfig() {
  const homeWebpackConfig = generateWebpackPageConfig({
    pageName: 'list',
    template: resolve('.temp', 'list.html'),
    entry: resolve('.temp/list-entry.js'),
    filename: 'index.html'
  });

  const blogWebpackConfig = generateWebpackPageConfig({
    pageName: 'blog',
    template: resolve('.temp', 'blog.html'),
    entry: resolve('.temp/blog-entry.js'),
    filename: 'blog/index.html'
  });

  return merge(baseWebpackConfig, homeWebpackConfig, blogWebpackConfig);
}

module.exports = getWebpackConfig;
