#!/usr/bin/env node
const { cli, console: { printError } } = require('../dist');

cli(process.cwd(), process.argv)
  .catch(error => {
    // console.log(error);
    printError(error.message);
    process.exit(1);
  })
  .finally(() => process.exit(0));
