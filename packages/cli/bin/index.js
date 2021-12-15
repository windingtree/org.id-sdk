#!/usr/bin/env node

const crypto = require('crypto');
// getRandomValues shim for ethers.js
crypto.getRandomValues = function(buffer) {
  if (!(buffer instanceof Uint8Array)) {
    throw new TypeError('expected Uint8Array');
  }
  if (buffer.length > 65536) {
    var e = new Error();
    e.code = 22;
    e.message = 'Failed to execute \'getRandomValues\' on \'Crypto\': The ' +
      'ArrayBufferView\'s byte length (' + buffer.length + ') exceeds the ' +
      'number of bytes of entropy available via this API (65536).';
    e.name = 'QuotaExceededError';
    throw e;
  }
  var bytes = crypto.randomBytes(buffer.length);
  buffer.set(bytes);
  return buffer;
}
global.crypto = crypto;

const { cli, console: { printError } } = require('../dist');

cli(process.cwd(), process.argv)
  .catch(error => {
    printError(error.message);
    process.exit(1);
  })
  .finally(() => process.exit(0));
