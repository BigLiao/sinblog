const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../../sinblog.config');
const prepareEntry = require('./prepareEntry');

const { resolve, injectImport } = require('../util');
const getDevConfig = require('./getDevConfig');

class Dev{
  constructor() {
    this.blogPath = resolve('lib/dev/hello-world.md');
    this.tempPath = resolve('.temp');;

    this.compiler = null;
    this.webpackConfig = null;

    try {
      fs.accessSync(this.tempPath);
    } catch (error) {
      fs.mkdirSync(this.tempPath);
    }
  }

  async run() {
    await this.prepareTempFile();
    this.server();
  }

  // 准备临时文件
  async prepareTempFile() {
    prepareEntry();
    childProcess.fork(resolve('lib/dev/prepareHtml.js'));
  }
  // 删除临时文件
  removeTempFile() {
    fs.unlinkSync(this.tempPath);
  }

  async compile() {
    this.webpackConfig = getDevConfig();
    this.compiler = webpack(this.webpackConfig);
  }

  server() {
    const webpackConfig = getDevConfig();
    const compiler = webpack(webpackConfig);
    const devServerOptions = Object.assign({}, webpackConfig.devServer, {
      open: false,
      stats: {
        colors: true,
      },
    });
    const server = new WebpackDevServer(compiler, devServerOptions);
    server.listen(3000, '127.0.0.1', () => {
      console.log('Starting server on http://localhost:3000');
    });
  }
}

module.exports = Dev;
