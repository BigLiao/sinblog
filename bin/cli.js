#!/usr/bin/env node

const pkg = require('../package.json');
const program = require('commander');

program
  .version(pkg.version)
  .usage('<command>');

program
  .command('init')
  .description('Initial sinblog configs')
  .action((value, cmd) => {
    require('../lib/init/cli')(value, cmd);
  });

program
  .command('build')
  .description('Generate static website')
  .action((value, cmd) => {
    require('../lib/build/cli')(value, cmd);
  });

program
  .command('publish')
  .description('Publish website')
  .action((value, cmd) => {
    require('../lib/publish/cli')(value, cmd);
  });

program
  .command('serve')
  .description('Run web server locally')
  .action((value, cmd) => {
    require('../lib/serve/cli')(value, cmd);
  });



program.parse(process.argv);
