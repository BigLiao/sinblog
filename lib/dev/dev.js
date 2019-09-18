const fs = require('fs');
const path = require('path');
const Builder = require('../build/builder');
const { resolve } = require('../util');

function dev() {
  const sourceFile = resolve('layouts');
  const builder = new Builder();
  builder.run();
  fs.watch(sourceFile, {
    recursive: true
  }, (eventType, filename) => {
    console.log(eventType + ': ' + filename);
    builder.run();
  })
}

dev();