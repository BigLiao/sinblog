#!/usr/bin/env node

const chalk = require('chalk');
const pkg = require('../package.json');
const program = require('commander');

program
  .version(pkg.version)
  .usage('<command>');

program
  .command('init')
  .description('Initial sinblog configs')
  .action((value, cmd) => {
    require('../lib/cli/init')(value, cmd);
  });

program
  .command('build')
  .description('Generate static website')
  .action((value, cmd) => {
    require('../lib/cli/build')(value, cmd);
  });

program
  .command('publish')
  .description('Publish website')
  .action((value, cmd) => {
    require('../lib/cli/publish')(value, cmd);
  });

program
  .command('serve')
  .description('Run web server locally')
  .action((value, cmd) => {
    require('../lib/cli/serve')(value, cmd);
  });



program.parse(process.argv);