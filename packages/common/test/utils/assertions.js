const assert = require('assert');

// Assert function throw
module.exports.assertThrow = async (
  promise,
  expectedError = Error,
  expectedMessage = null
) => {
  try {
    if (typeof promise.then !== 'function') {
      promise = (async () => promise)();
    }
    await promise;
    assert.fail('Throw was expected, but action succeeded');
  } catch (error) {
    assert(error instanceof expectedError);

    if (expectedMessage) {
      assert(error.message === expectedMessage);
    }
  }
};
