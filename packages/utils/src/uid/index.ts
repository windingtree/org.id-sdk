/**
 * Simple unique ID generator
 * @example
 * simpleUid(); // returns a string like 'hhhkiwbxz'
 * @example
 * simpleUid(5); // returns a string like 'jedpr'
 */
export const simpleUid = (length = 11): string => {

  if (length < 5 || length > 11) {
    throw new Error('length value must be between 5 and 11');
  }

  return Math.random()
    .toString(16)
    .substr(2, length);
};

/**
 * UUID v4
 * @example
 * uuid4(); // 955a781f-f427-2d8e-e895-4ab3f87026c1
 */
export const uuid4 = (): string =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(36);
  });
