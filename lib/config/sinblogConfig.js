const Joi = require('@hapi/joi');
const fs = require('fs-extra');
const path = require('path');
const yaml = require('yaml');

const CONFIG_FILE_NAME = 'sinblog.config';


const configScheme = Joi.object({
  site: Joi.object({
    title: Joi.string().description('网站标题')
      .required(),
    description: Joi.string().description('网页描述内容，用于 SEO')
      .optional().default(''),
    author: Joi.string().description('博客作者')
      .required(),
    language: Joi.string().optional().default('zh'),
    otherLinks: Joi.array().description('导航栏的更多里面，放第三方链接，如 GitHub')
      .items(Joi.object({
        title: Joi.string().required(),
        url: Joi.string().uri().required()
      })).optional().default([])
  }),
  build: Joi.object({
    theme: Joi.string().description('主题样式，目前只有 default')
      .optional().valid('default').default('default'),
    blogPage: [
      Joi.string().description('博客目录，相对路径')
        .required(),
      Joi.array().description('博客目录，如果有多个分类的话')
        .min(1).items(Joi.object({
          title: Joi.string().required().description('导航栏标题'),
          dirPath: Joi.string().required().description('博客目录路径'),
          urlPath: Joi.string().alphanum().optional().description('URL路径'),
        })),
      Joi.object({
        title: Joi.string().required().description('导航栏标题'),
        dirPath: Joi.string().required().description('博客目录路径'),
        urlPath: Joi.string().alphanum().optional().description('URL路径'),
      }).description('博客目录配置')
    ]
  }),

});

/**
 * 校验配置是否合法
 * @param {Object} config
 */
function validateConfig(config) {
  const { error, value } = configScheme.validate(config);
  if (error) {
    console.error('\n配置文件参数错误: ' + error.message);
    throw error;
  }
  return value;
}

/**
 * 格式化配置项
 * @param {Object} config - sinblog 配置
 * @param {string} rootPath - singblog 配置文件所在的根路径
 */
function formatConfig(config, rootPath) {
  const isMultiPage = Array.isArray(config.build.blogPage);
  config.isMultiPage = isMultiPage;
  config.tempPath = path.join(rootPath, '.temp');
  config.distPath = path.join(rootPath, 'dist');
  // config.tempPath = path.resolve(__dirname, '../../.temp');
  // config.distPath = path.resolve(__dirname, '../../.temp/dist');
  config.rootPath = rootPath;

  if (isMultiPage) {
    config.build.blogPage = config.build.blogPage.map(item => {
      const pageConfig = {};
      pageConfig.dirPath = path.join(rootPath, item.dirPath);
      const rootDir = path.dirname(pageConfig.dirPath);
      const dirName = path.relative(rootDir, pageConfig.dirPath);
      pageConfig.title = item.title || dirName;
      pageConfig.urlPath = item.urlPath || dirName;
      pageConfig.dirName = dirName;
      return pageConfig;
    });

    config.site.navList = config.build.blogPage.map(item => ({
      title: item.title,
      path: item.urlPath
    }));

  } else {
    let item;
    if (typeof config.build.blogPage === 'string') {
      item = {
        title: '',
        dirPath: path.join(rootPath, config.build.blogPage),
        urlPath: ''
      }
    } else {
      item = config.build.blogPage;
    }
    const pageConfig = {};
    pageConfig.dirPath = path.join(rootPath, item.dirPath);
    pageConfig.title = item.title || config.site.title;
    pageConfig.urlPath = item.urlPath || '';
    pageConfig.dirName = '';
    config.build.blogPage = pageConfig;
  }

  return config;
}

/**
 *
 * @param {string} configFilePath - 配置文件的绝对路径
 */
function getConfig(configFilePath) {
  let configFile, fd, configFileObj;
  // 默认使用当前环境路径
  if (!configFilePath) {
    const cwd = process.cwd();
    configFilePath = path.join(cwd, CONFIG_FILE_NAME + '.json');
    try {
      fd = fs.openSync(configFilePath);
    } catch (err) {
      configFilePath = path.join(cwd, CONFIG_FILE_NAME + '.yml');
      try {
        fd = fs.openSync(configFilePath);
      } catch (err) {
        if (err.code === 'ENOENT') {
          console.error('缺少配置文件');
          throw err;
        }
        throw err;
      }
    }
  } else {
    fd = fs.openSync(configFilePath);
  }

  configFile = fs.readFileSync(fd, { encoding: 'utf8' });
  if (/\.json$/.test(configFilePath)) {
    configFileObj = JSON.parse(configFile);
  } else {
    configFileObj = yaml.parse(configFile);
  }

  const validConfig = validateConfig(configFileObj);
  return formatConfig(validConfig, path.dirname(configFilePath))
}
getConfig();
exports.getConfig = getConfig;
