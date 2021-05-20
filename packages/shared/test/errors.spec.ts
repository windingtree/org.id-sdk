import {
  HttpError as MyError
} from '../src/errors';
import {
  HTTP_STATUS_CODES
} from '../src/http';

describe('Errors', () => {

  describe('HttpError', () => {
    const message = 'ERR';

    test('should generate a proper Error instance', async () => {
      const err = new MyError(message);
      expect(err).toBeInstanceOf(Error);
      expect(err).toHaveProperty('message');
      expect(err.message).toEqual(message);
    });

    test('should generate a error with HTTP codes', async () => {
      Object.entries(HTTP_STATUS_CODES).forEach(
        (status: any) => {
          const err = new MyError(message, status[0]);
          expect(err).toHaveProperty('code');
          expect(err).toHaveProperty('status');
          expect(err.status).toEqual(status[0]);
          expect(err.code).toEqual(status[1]);
        }
      );
    });
  });
});
