const Joi = require('@hapi/joi');
const fs = require('fs-extra');
const path = require('path');
const yaml = require('yaml');

const CONFIG_FILE_NAME = 'sinblog.config';

const defaultConfig = {
  theme: 'default',
  title: 'Sin·Blog',
  description: '',
  author: 'sinblog',
  language: 'zh',
  blogRoot: '', // required
  blogSubDir: [],
  // 其他页面，放在导航里
  otherLinks: [
    {
      title: '',
      url: ''
    }
  ]
}


const configScheme = Joi.object({
  theme: Joi.string().empty('').default('default'), // 主题
  title: Joi.string().required(), // 网站标题
  description: Joi.string().empty('').default(''), // 网站描述
  author: Joi.string().required(),
  language: Joi.string().empty('').default('zh'),
  blogRoot: Joi.string().empty('').default(''),
  blogSubDirs: Joi.array().items(Joi.object({
    title: Joi.string().required(),
    dirName: Joi.string().required(),
    path: Joi.string().required(),
  })),
  otherLinks: Joi.array().items(Joi.object({
    title: Joi.string().required(),
    url: Joi.string().required().uri()
  }))
});

function validateConfig(config) {
  const { error, value } = configScheme.validate(config);
  if (error) {
    console.error('\n配置文件参数错误!')
    throw error;
  }
  console.log(value);
  return value;
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

  return validateConfig(configFileObj);
}

getConfig();
