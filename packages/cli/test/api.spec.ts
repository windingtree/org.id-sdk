import { read } from '../src/api/fs';
import { encrypt, decrypt } from '../src/api/crypto';

describe('API tests', () => {
  const basePath = __dirname;
  const testFile = './mocks/test.env';
  const testFileContent =
`KEY1=key1
KEY2=key2`;

  describe('#read', () => {

    it('should fail if wrong path', async () => {
      await expect(read(basePath, 'wrong/path/to/file')).rejects.toThrow();
    });

    it('should return file content', async () => {
      expect(await read(basePath, testFile)).toBe(testFileContent);
    });
  });

  describe('Crypto utils', () => {

    describe('#encrypt/#decrypt', () => {
      const pwd = '123';

      it('should to throw when encrypt using wrong password', async () => {
        expect(
          () => encrypt(testFileContent, undefined)
        ).toThrow('Unable to encrypt');
      });

      it('should to throw when decrypt using wrong password', async () => {
        expect(
          () => decrypt(
            encrypt(testFileContent, pwd),
            'wrong password'
          )
        ).toThrow('Unable to decrypt');
      });

      it('should encrypt and decrypt data with right password', async () => {
        expect(
          decrypt(
            encrypt(testFileContent, pwd),
            pwd
          )
        ).toBe(testFileContent);
      });
    });
  });
});
