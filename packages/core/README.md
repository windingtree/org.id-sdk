[![@windingtree/org.id-core](https://img.shields.io/npm/v/@windingtree/org.id-core.svg)](https://www.npmjs.com/package/@windingtree/org.id-core)
# @windingtree/org.id-core
Core ORGiD Javascript library

## Setup

```bash
npm install @windingtree/org.id-core
```

## Usage

```javascript
import orgIdContract from '@windingtree/org.id-core';

const contract = orgIdContract({
  network: '<main | ropsten>',
  providerUri: '<HTTP_OR_WSS_PROVIDER_URI>', // e.g Infura node
  walletProvider: window.ethereum // Metamask provider or HDWalletProvider
});

const orgId = '0xf94c83b1da7bc36989b6a4f25e51ce66dd0fcd88bae1e8486495bbc03e767229';
contract
  .getOrgId(orgId)
  .then(result => {
    if (result === null) {
      console.log(`${orgId} not found`);
    } else {
      console.log(result);
      /*
      {
        id: '0xf94c83b1da7bc3698...',
        owner: '0xA0B74BFE2822...',
        created: '2021-03-21T09:23:13.551Z'
      }
      */
    }
  })
  .catch(console.error);
```

## Documentation

[Generated docs](docs#readme)