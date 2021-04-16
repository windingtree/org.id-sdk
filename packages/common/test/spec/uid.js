const {
  simpleUid
} = require('../../src/uid');
require('chai').should();

describe('Uid', () => {

  describe('#simpleUid', () => {

    it('should create an unique Id', async () => {
      const uids = Array(10).fill(0).map(() => simpleUid(8));
      (new Set(uids).size).should.equal(uids.length);
    });
  });
});
