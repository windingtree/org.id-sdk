#!/usr/bin/env node
global.randomBytes = require('crypto').randomBytes;
const { cli, console: { printError } } = require('../dist');

cli(process.cwd(), process.argv)
  .catch(error => {
    printError(error.message);
    process.exit(1);
  })
  .finally(() => process.exit(0));
