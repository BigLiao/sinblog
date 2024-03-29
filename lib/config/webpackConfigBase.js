const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');

module.exports = {
  externals: {
    'jquery': 'jQuery'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cwd: path.resolve(__dirname, '../../'),
            "plugins": ["@babel/plugin-syntax-dynamic-import"],
            "presets": [
              "@babel/preset-env"
            ]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader', options: {
              ident: 'postcss',
              plugins: () => [
                postcssPresetEnv({
                  "browsers": '> 1% or last 2 versions'
                })
              ]
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
            }
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/fonts',
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? 'assets/css/[name].css' : 'assets/css/[name].[contenthash:8].css',
      chunkFilename: devMode ? 'assets/css/[id].css' : 'assets/css/[id].[contenthash:8].css',
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../../node_modules'), 'node_modules']
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, '../../node_modules'), 'node_modules'],
  }
};
