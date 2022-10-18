import { HttpFileServer } from '@windingtree/org.id-test-http-server';
import {
  request,
  createAuthBearerHeader
} from '../src/http';
import chai, { expect } from 'chai';
import chp from 'chai-as-promised';
chai.use(chp);

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
      await server.close();
    });

    describe('#request', () => {

      it('should throw if request url does not match URI criteria', async () => {
        const invalidUrl = 'invalidURI';
        await expect(
          request(
            invalidUrl,
            'post',
            {}
          )
        ).to.rejectedWith(
          `Request URL not matching well formed URI criteria: ${invalidUrl}`,
        );
      });

      it('should throw if invalid request method provided', async () => {
        const invalidMethod = 'stop';
        await expect(
          request(
            `${server.baseUri}/${filePath}`,
            invalidMethod as any,
            {}
          )
        ).to.rejectedWith(
          `Request method not allowed: ${invalidMethod}`,
        );
      });

      it('should throw if connection timeout reached', async () => {
        const url = `${server.baseUri}/${filePath}`;
        await expect(
          request(
            url,
            'post',
            {},
            {},
            5 // <-- small timeout
          )
        ).to.rejectedWith(
          `Cannot connect to the source: ${url}`,
        );
      });

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
