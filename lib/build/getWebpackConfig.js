const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const baseConfig = require('../config/webpackConfigBase');

function getWebpackConfig({
  pageName, entry, publicPath, distPath, tempPath, rootPath
}) {
  const config = {
    // context: rootPath,
    mode: 'production',
    entry: {
      [pageName]: entry
    },
    output: {
      path: distPath,
      filename: 'assets/js/[name].[contenthash:8].js',
      publicPath: publicPath
    },
    plugins: [
      new AssetsPlugin({
        filename: `${pageName}-assets.json`,
        path: tempPath,
      }),
      new webpack.ProvidePlugin({
          _: "underscore"
      })
    ]
  };
  return merge(baseConfig, config);
}

module.exports = getWebpackConfig;
