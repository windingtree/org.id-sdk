import {
  simpleUid
} from '../src/uid';

describe('Uid', () => {

  describe('#simpleUid', () => {

    test('should create an unique Id using default parameters', async () => {
      const ids = Array(10).fill(0).map(() => simpleUid());
      expect(new Set(ids).size).toEqual(ids.length);
    });

    test('should create an unique Id using parameters', async () => {
      const ids = Array(10).fill(0).map(() => simpleUid(8));
      expect(new Set(ids).size).toEqual(ids.length);
    });

    test('should throw in case of length out of the range', async () => {
      expect(() => {
        simpleUid(3)
      }).toThrow('length value must be between 5 and 11');
      expect(() => {
        simpleUid(15)
      }).toThrow('length value must be between 5 and 11');
    });
  });
});
