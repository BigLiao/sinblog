const Builder = require('./Builder');
const { getConfig } = require('../config/sinblogConfig');

module.exports = function() {
  const config = getConfig();
  const builder = new Builder(config);
  builder.run();
}
