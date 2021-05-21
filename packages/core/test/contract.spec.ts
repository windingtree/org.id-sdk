import orgIdContract from '../src';

describe('OrgId contract', () => {

  describe('Initialization', () => {
    let contract;

    beforeAll(async () => {
      const contract = orgIdContract({
        network: '<main | ropsten>',
        providerUri: '<HTTP_OR_WSS_PROVIDER_URI>',
        // walletProvider: window.ethereum // Metamask provider or HDWalletProvider
      });
    });

  });
});
