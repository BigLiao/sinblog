const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../webpack/base-config');

const { resolve } = require('../util');

function getWebpackConfig({
  assetsPath,
  blogEntry,
  homeEntry,
  templateContent
}) {
  const config = {
    mode: 'development',
    entry: {
      'blog': ['webpack-hot-middleware/client', blogEntry],
      'home': ['webpack-hot-middleware/client', homeEntry],
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
            filename: 'blog/index.html',
            templateContent,
            chunks: ['blog']
        }),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          templateContent,
          chunks: ['home']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            _: "underscore"
        })
    ]
  };
  return merge(baseConfig, config);
}

module.exports = getWebpackConfig;