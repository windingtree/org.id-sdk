import { HttpError as MyError } from '../src/errors';
import { HTTP_STATUS_CODES } from '../src/http';
import { expect } from 'chai';

describe('Errors', () => {

  describe('HttpError', () => {
    const message = 'ERR';

    it('should generate a proper Error instance', async () => {
      const err = new MyError(message);
      expect(err).to.be.instanceOf(Error);
      expect(err).to.have.property('message');
      expect(err.message).to.equal(message);
    });

    it('should generate a error with HTTP codes', async () => {
      Object.entries(HTTP_STATUS_CODES).forEach(
        (status: any) => {
          const err = new MyError(message, status[0]);
          expect(err).to.have.property('code');
          expect(err).to.have.property('status');
          expect(err.status).to.equal(status[0]);
          expect(err.code).to.equal(status[1]);
        }
      );
    });
  });
});
