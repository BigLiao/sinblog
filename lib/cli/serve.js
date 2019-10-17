const express = require('express');

const { resolve } = require('../util/util');
const STATIC_DIR = resolve('dist');


function buildServer() {
  const app = express();

  app.use(express.static(STATIC_DIR));

  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log('Server running at http://localhost:' + port);
  });
}

module.exports = function() {
  console.log('Build')
}