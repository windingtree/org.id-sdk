[![@windingtree/org.id-test-helpers](https://img.shields.io/npm/v/@windingtree/org.id-test-helpers.svg)](https://www.npmjs.com/package/@windingtree/org.id-test-helpers)
# @windingtree/org.id-test-helpers
Javascript library for ORGiD smart contract testing

## Setup

```bash
npm install @windingtree/org.id-test-helpers
```

## Usage

```javascript
import { ganache } from '@windingtree/org.id-test-helpers';

const server = await ganache();

server.getAccounts()
  .then(accounts => {
    console.log(accounts);
    /*
      [
        '0xe0367e4F58B1742B16DEE96E436554C4Ac679D23',
        '0x4cEAC03Ec8C9643b8be83830A45b69be430125d9',
        '0x19e17F4051f82471921C29319EE77c27992404b2',
        '0xdD004E3258CEfA1e01eC06dD6D88347Daf11eEA0',
        ...
      ]
    */
  })
  .catch(console.error);

/*
server.web3 // web3 instance
server.close() // async closing the server
*/
```

## Documentation

[Generated docs](docs#readme)