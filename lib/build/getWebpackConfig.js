const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const baseConfig = require('../webpack/base-config');

const resolve = (dir) => path.resolve(__dirname, '../../', dir);

function getWebpackConfig({
  pageName, entry,
}) {
  const config = {
    entry: {
      [pageName]: entry
    },
    output: {
      path: resolve('dist'),
      filename: 'assets/js/[name].[contenthash:8].js',
      publicPath: '/'
    },
    plugins: [
      new AssetsPlugin({
        filename: `.temp/${pageName}-assets.json`
      }),
      new webpack.ProvidePlugin({
          _: "underscore"
      })
    ]
  };
  return merge(baseConfig, config);
}

module.exports = getWebpackConfig;