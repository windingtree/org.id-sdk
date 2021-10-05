import { HttpFileServer } from '@windingtree/org.id-test-http-server';
import {
  request,
  createAuthBearerHeader
} from '../src/http';
import { expect } from 'chai';

describe('HTTP utils', () => {

  describe('HTTP requests', () => {
    let server: HttpFileServer;
    const filePath = 'myfile.txt';
    const fileContent = 'test';

    before(async () => {
        server = new HttpFileServer();
        await server.start();
        server.addFile({
          type: 'text',
          path: filePath,
          content: fileContent
        })
    });

    after(async () => {
      server.close();
    });

    describe('#request', () => {

      it('should able to send requests', async () => {
        const data = await request(
          `${server.baseUri}/${filePath}`,
          'post',
          {}
        );
        expect(data).to.equal(fileContent);
      });
    });

    describe('#createAuthBearerHeader', () => {

      it('should create a Authorization header object', async () => {
        const token = 'AAA';
        const header = createAuthBearerHeader(token);
        expect(header).to.have.property('Authorization');
        expect(header.Authorization).to.equal(`Bearer ${token}`);
      });
    });
  })
});
