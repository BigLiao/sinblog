const Joi = require('@hapi/joi');
const fs = require('fs-extra');
const path = require('path');

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
  theme: Joi.string().required(), // 主题
  title: Joi.string().required(), // 网站标题
  description: Joi.string().empty('').default(''), // 网站描述
  author: Joi.string().required(),
  language: Joi.string().empty('').default('zh'),
  blogRoot: Joi.string().empty('').default(''),
  blogSubDir: Joi.array().items(Joi.object({
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
    console.error('\n配置错误!')
    throw error;
  }
  return true;
}

/**
 *
 * @param {string} configFilePath - 配置文件的绝对路径
 */
function getConfig(configFilePath) {
  if (!configFilePath) {
    const cwd = process.cwd();
    try {

    } catch (error) {

    }
  }
}

validateConfig(defaultConfig);
