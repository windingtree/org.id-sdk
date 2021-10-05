import { simpleUid, uuid4 } from '../src/uid';
import * as regexp from '../src/regexp';
import { expect } from 'chai';

describe('Uid', () => {

  describe('#simpleUid', () => {

    it('should create an unique Id using default parameters', async () => {
      const ids = Array(10).fill(0).map(() => simpleUid());
      expect(new Set(ids).size).to.equal(ids.length);
    });

    it('should create an unique Id using parameters', async () => {
      const ids = Array(10).fill(0).map(() => simpleUid(8));
      expect(new Set(ids).size).to.equal(ids.length);
    });

    it('should throw in case of length out of the range', async () => {
      expect(() => {
        simpleUid(3)
      }).to.throw('length value must be between 5 and 11');
      expect(() => {
        simpleUid(15)
      }).to.throw('length value must be between 5 and 11');
    });
  });

  describe('#uuid4', () => {

    it('should generate a valid UUIDv4', async () => {
      const id = uuid4();
      expect(regexp.uuid4.exec(id)).not.to.be.null;
    });
  });
});
