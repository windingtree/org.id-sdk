import Web3 from 'web3';
import {
  DevelopmentServer,
  defaults,
  ganache
}  from '../src/ganache';

describe('Ganache server', () => {
  let server: DevelopmentServer;
  let serverCustomPort: DevelopmentServer;

  beforeAll(async () => {
    server = await ganache();
    serverCustomPort = await ganache({
      ...defaults,
      port: 9100
    });
  });

  afterAll(async () => {
    await server.close();
    await serverCustomPort.close();
  });

  describe('Default configuration', () => {

    test('should create server instance', async () => {
      expect(server).toBeInstanceOf(DevelopmentServer);
    });

    test('should fail if wrong port value provided', async () => {
      expect(
        ganache({
          ...defaults,
          port: -1
        })
      ).rejects.toThrow('options.port should be >= 0 and < 65536. Received -1.');
    });
  });

  describe('Custom port', () => {

    test('should create server instance', async () => {
      expect(serverCustomPort).toBeInstanceOf(DevelopmentServer);
    });
  });

  describe('Properties', () => {

    test('should have #server property', async () => {
      expect(server).toHaveProperty('server');
      expect(server.server).toHaveProperty('ganacheProvider');
    });

    test('should have #web3 property', async () => {
      expect(server).toHaveProperty('web3');
      expect(server.web3).toBeInstanceOf(Web3);
    });

    test('should have #port property', async () => {
      expect(server).toHaveProperty('port');
      expect(typeof server.port).toBe('number');
    });

    test('should have #providerUri property', async () => {
      expect(server).toHaveProperty('providerUri');
      expect(typeof server.providerUri).toBe('string');
      expect(server.providerUri).toBe(`ws://0.0.0.0:${server.port}`);
    });
  });

  describe('Getters', () => {

    describe('#provider', () => {

      test('should return current web3 provider', async () => {
        expect(server).toHaveProperty('provider');
        expect(typeof server.provider).toBe('object');
      });
    });
  });

  describe('Methods', () => {

    describe('#getAccounts', () => {

      test('should return accounts', async () => {
        const accounts = await server.getAccounts();
        expect(Array.isArray(accounts)).toBe(true);
        expect(accounts.length).toBe(defaults.total_accounts);
      });
    });

    describe('#close', () => {

      test('should close opened server', async () => {
        const server = await ganache();
        await server.close();
        expect(server.getAccounts()).rejects.toThrow('connection not open on send()');
      });

      test('should fail in case of trying close already closed server', async () => {
        const server = await ganache();
        await server.close();
        expect(server.close()).rejects.toThrow('Server is not running');
      });
    });
  });
});
