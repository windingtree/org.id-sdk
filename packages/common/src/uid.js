// Simple unique ID generator
module.exports.simpleUid = (length = 11) => {
  if (length < 5 || length > 11) {
    throw new Error('Uid length value must be from 5 to 11');
  }
  return Math.random()
    .toString(36)
    .substr(2, length);
};
