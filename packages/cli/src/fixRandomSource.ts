import crypto from 'crypto';

export interface ErrorWithCode extends Error {
  code: number;
}

declare module 'crypto' {
  export function getRandomValues(buffer: Buffer): Buffer;
}

// getRandomValues shim for ethers.js
function getRandomValues<T extends ArrayBufferView | null>(buffer: T): T {
  if (!(buffer instanceof Uint8Array)) {
    throw new TypeError('expected Uint8Array');
  }
  if (buffer.length > 65536) {
    const e = new Error() as ErrorWithCode;
    e.code = 22;
    e.message = 'Failed to execute \'getRandomValues\' on \'Crypto\': The ' +
      'ArrayBufferView\'s byte length (' + buffer.length + ') exceeds the ' +
      'number of bytes of entropy available via this API (65536).';
    e.name = 'QuotaExceededError';
    throw e;
  }
  const bytes = crypto.randomBytes(buffer.length);
  buffer.set(bytes);
  return buffer;
}

crypto.getRandomValues = getRandomValues;
global.crypto = crypto as any;
