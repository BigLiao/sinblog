const yaml = require('yaml');
const path = require('path');
const fs = require('fs-extra');

const configPath = path.resolve(__dirname, '../sinblog.config.json');
const configJson = fs.readJSONSync(configPath);
const configYml = yaml.stringify(configJson);
console.log(configYml);
