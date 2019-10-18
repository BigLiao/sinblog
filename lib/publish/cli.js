const publish = require('./publish');

module.exports = function(value, cmd) {
  const { getConfig } = require('../config/sinblogConfig');
  const config = getConfig();

  publish(config.distPath);
}
