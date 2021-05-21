import Web3 from 'web3';
import Ganache from 'ganache-core';

export class DevelopmentServer {
  server: Ganache.Server;
  web3: Web3;
  port: number;

  constructor(server: Ganache.Server, port: number) {
    this.server = server;
    this.port = port;
    this.web3 = new Web3(`ws://0.0.0.0:${port}`);
  }

  close(): Promise<void | Error> {
    return new Promise((resolve, reject) => {
      this.server.close((error: Error | null) => {

        if (error) {
          return reject(error);
        }

        resolve();
      });
    });
  }

  getAccounts(): Promise<string[]> {
    return this.web3.eth.getAccounts();
  }
}

// Ganache port counter
let portNumber = 9000;

// Default ganache server configuration
export const defaults: Ganache.IServerOptions = {
  gasLimit: '0xfffffffffff',
  gasPrice: '0x01',
  'total_accounts': 20,
  'default_balance_ether': 1000000
};

// eslint-disable-next-line no-async-promise-executor
export default (options: Ganache.IServerOptions = defaults): Promise<DevelopmentServer> => new Promise((resolve, reject) => {
  const portOrigin: number = portNumber;
  const server: Ganache.Server = Ganache.server(options);

  server.listen(
    options.port ? options.port : portNumber++,
    (error: void | Error) => {

      if (error) {
        return reject(error);
      }

      resolve(new DevelopmentServer(server, portOrigin));
    }
  );
});
