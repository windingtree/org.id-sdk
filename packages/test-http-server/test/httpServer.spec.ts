import axios from 'axios';
import { HttpFileServer } from '../src';

type TestInput = any;

describe('HTTP fetch method', () => {
    let server: HttpFileServer;

    beforeAll(async () => {
        server = new HttpFileServer();
    });

    afterAll(async () => await server.close());

    describe('#start', () => {

      test('should start a server', async () => {
        expect(server).toBeInstanceOf(HttpFileServer);
      });
    });

    describe('#close', () => {

      test('should close the server', async () => {
        const server = new HttpFileServer();
        await server.start();
        await server.close();
        expect(server.server).toBe(null);
      });
    });

    describe('#addFile', () => {

      test('should fail if required file property not provided', async () => {
        expect(() => {
          server.addFile({
            type: undefined,
            path: 'myfile.txt',
            content: 'test'
          } as TestInput)
        }).toThrow('Property "type" required');
        expect(() => {
          server.addFile({
            type: 'text',
            path: undefined,
            content: 'test'
          } as TestInput)
        }).toThrow('Property "path" required');
        expect(() => {
          server.addFile({
            type: 'text',
            path: 'myfile.txt',
            content: undefined
          } as TestInput)
        }).toThrow('Property "content" required');
      });

      test('should fail if file type has wrong type', async () => {
        expect(() => {
          const wrongInput: TestInput = {
            content: '{"test":"test"}',
            type: 'object',
            path: 'myfile.json'
          };
          server.addFile(wrongInput);
        }).toThrow('Property "type" has wrong type');
      });

      test('should add file', async () => {
          const fileToAdd: TestInput = {
            content: '{"test":"test"}',
            type: 'json',
            path: 'myfile.json'
          };
          const file = await server.addFile(fileToAdd);
          expect(file).toHaveProperty('type');
          expect(file.type).toBe(fileToAdd.type);
          expect(file).toHaveProperty('path');
          expect(file.path).toBe(fileToAdd.path);
          expect(file).toHaveProperty('content');
          expect(file.content).toBe(fileToAdd.content);
      });
    });

    describe('#removeFile', () => {
        const file: TestInput = {
          content: '{"test":"test"}',
          type: 'json',
          path: 'myfile.json'
        };

        beforeEach(async () => server.addFile(file));

        test('should fail if file not found', async () => {
            const path: TestInput = undefined;
            expect(() => {
              server.removeFile(path)
            }).toThrow(`File not found: ${path}`);
        });

        test('should remove file', async () => {
            const count = Object.keys(server.files).length;
            server.removeFile('myfile.json');
            expect(Object.keys(server.files).length).toBe(count - 1);
        });
    });

    describe('Http requests', () => {

      beforeAll(async () => {
        await server.start();
      });

      afterAll(async () => await server.close());

      test('should fail if unknown file has been provided', async () => {
        expect(
          axios.get(`http://0.0.0.0:${server.port}/unknown.json`)
        ).rejects.toThrow();
      });

      test('should get file from server', async () => {
        const file: TestInput = {
          content: '{"test":"test"}',
          type: 'json',
          path: 'myfile.json'
        };
        await server.addFile(file);
        const response = await axios.get(`${server.baseUri}/${file.path}`);
        expect(JSON.stringify(response.data)).toBe(file.content);
      });
    });
});
