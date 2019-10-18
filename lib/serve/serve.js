const express = require('express');

const { getConfig } = require('../config/sinblogConfig');

function serve() {

  const config = getConfig();
  const app = express();

  app.use(config.build.publicPath, express.static(config.distPath));

  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}${config.build.publicPath}`);
  });
}

module.exports = serve;
