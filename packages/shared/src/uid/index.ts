/**
 * Simple unique ID generator
 * @example
 * simpleUid(); // returns a string like 'hhhkiwbxz'
 * @example
 * simpleUid(5); // returns a string like 'jedpr'
 */
export const simpleUid = (length: number = 11) => {

  if (length < 5 || length > 11) {
    throw new Error('length value must be between 5 and 11');
  }

  return Math.random()
    .toString(36)
    .substr(2, length);
};
