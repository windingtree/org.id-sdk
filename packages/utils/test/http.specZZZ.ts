import { HttpFileServer } from '@windingtree/org.id-test-helpers';
import {
  request,
  createAuthBearerHeader
} from '../src/http';

describe('HTTP utils', () => {

  describe('HTTP requests', () => {
    let server: HttpFileServer;
    const filePath = 'myfile.txt';
    const fileContent = 'test';

    beforeAll(async () => {
        server = new HttpFileServer();
        await server.start();
        server.addFile({
          type: 'text',
          path: filePath,
          content: fileContent
        })
    });

    afterAll(async () => {
      server.close();
    });

    describe('#request', () => {

      test('should able to send requests', async () => {
        const data = await request(
          `${server.baseUri}/${filePath}`,
          'post',
          {}
        );
        expect(data).toBe(fileContent);
      });
    });

    describe('#createAuthBearerHeader', () => {

      test('should create a Authorization header object', async () => {
        const token = 'AAA';
        const header = createAuthBearerHeader(token);
        expect(header).toHaveProperty('Authorization');
        expect(header.Authorization).toBe(`Bearer ${token}`);
      });
    });
  })
});
