const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('../webpack/base-config');

const { resolve } = require('../util');

function getWebpackConfig({
  assetsPath,
  entry,
  templateContent
}) {
  const config = {
    mode: 'development',
    entry: {
      'blog': ['webpack-hot-middleware/client', entry]
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
            filename: 'index.html',
            templateContent
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