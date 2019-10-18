const publish = require('./publish');

const { getConfig } = require('../config/sinblogConfig');
const config = getConfig();

publish(config.distPath);
