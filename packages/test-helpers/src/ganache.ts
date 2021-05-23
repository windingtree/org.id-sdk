import Web3 from 'web3';
import Ganache from 'ganache-core';

export { Ganache }

export class DevelopmentServer {
  server: Ganache.Server;
  web3: Web3;
  port: number;
  providerUri: string;

  constructor(server: Ganache.Server, port: number) {
    this.server = server;
    this.port = port;
    this.providerUri = `ws://0.0.0.0:${port}`;
    this.web3 = new Web3(this.providerUri);
  }

  public get provider(): Ganache.Provider {
    return this.server.provider;
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
// @todo Implement maximum port value feature and set it to 10000 to avoid port conflicts with Http Server
let portNumber = 9000;

// Default ganache server configuration
export const defaults: Ganache.IServerOptions = {
  gasLimit: '0xfffffffffff',
  gasPrice: '0x01',
  'total_accounts': 20,
  'default_balance_ether': 1000000
};

// eslint-disable-next-line no-async-promise-executor
export const ganache = (options: Ganache.IServerOptions = defaults): Promise<DevelopmentServer> => new Promise((resolve, reject) => {
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
