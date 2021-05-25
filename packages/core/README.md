[![@windingtree/org.id-core](https://img.shields.io/npm/v/@windingtree/org.id-core.svg)](https://www.npmjs.com/package/@windingtree/org.id-core)
# @windingtree/org.id-core
Core ORGiD Javascript library

## Setup

```bash
yarn install @windingtree/org.id-core
```

## Usage

### Initialization

```javascript
import { OrgIdContract } from '@windingtree/org.id-core';

const contract = new OrgIdContract(
  'ropsten', // allowed values main, ropsten or the OrgId smart contract address
  window.ethereum // web3 compatible provider: Metamask, HDWalletProvider or HTTP/WS/WSS node URI
);
```

### Getting of ORGiD information


```javascript
const orgId = '0xf94c83b1da7bc36989b6a4f25e51ce66dd0fc...';
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
        orgJsonUri: 'http://orgdomain.com/path/to/org.json',
        created: '2021-03-21T09:23:13.551Z'
      }
      */
    }
  })
  .catch(console.error);
```

### ORGiD creation

```javascript
contract
  .createOrgId(
    '<RANDOM_BYTES32_STRING>', // Unique string in bytes32 string format. Can be generated using `Web3.utils.keccak256(Math.random().toString())`
    'http://yourdomain.com/path/to/ORG.JSON', // <-- URI of your own public storage of the ORG.JSON VC file
    '75000', // optional: gas limit value
    '100000000000', // optional: gas price value
    transactionHash => { // optional transaction callback
      console.log(`Transaction sent: ${transactionHash}`);
    }
  )
  .then(result => {
    if (result === null) {
      console.log('ORGiD creation error');
    } else {
      console.log(result);
      /*
      {
        id: '0xf94c83b1da7bc3698...',
        owner: '0xA0B74BFE2822...',
        orgJsonUri: 'http://yourdomain.com/path/to/ORG.JSON',
        created: '2021-03-21T09:23:13.551Z'
      }
      */
    }
  })
  .catch(console.error);
```

### Changing of the ORG.JSON URI

```javascript
const orgId = '0xf94c83b1da7bc36989b6a4f25e51ce66dd0...';
contract
  .setOrgJson(
    orgId, // Your ORGiD hash
    'http://yourdomain.com/NEW/path/to/ORG.JSON',
    '<CURRENT_ORGiD_OWNER_ADDRESS>',
    // Same as for `createOrgId`
    // '75000',
    // '100000000000',
    // transactionHash => {
    //   console.log(`Transaction sent: ${transactionHash}`);
    // }
  )
  .then(result => {
    if (result === null) {
      console.log('ORG.JSON URI update error');
    } else {
      console.log(result);
      /*
      {
        id: '0xf94c83b1da7bc3698...',
        owner: '0xA0B74BFE2822...',
        orgJsonUri: 'http://yourdomain.com/path/to/ORG.JSON',
        created: '2021-03-21T09:23:13.551Z'
      }
      */
    }
  })
  .catch(console.error);
```

### Transferring of the ORGiD ownership

```javascript
const orgId = '0xf94c83b1da7bc36989b6a4f25e51ce66dd0fc...';
contract
  .transferOrgIdOwnership(
    orgId, // Your ORGiD hash
    '<NEW_OWNER_ADDRESS>',
    '<CURRENT_ORGiD_OWNER_ADDRESS>',
    // Same as for `createOrgId`
    // '75000',
    // '100000000000',
    // transactionHash => {
    //   console.log(`Transaction sent: ${transactionHash}`);
    // }
  ).
  // ...
  // Same as for setOrgJson
```

### Getting of registered ORGiD's count

```javascript
contract
  .getOrgIdsCount()
  .then(result => {
    if (result === null) {
      console.log('Unable to get the count of ORGiDs'); // Should not happen
    } else {
      console.log(result); // --> 548
    }
  })
  .catch(console.error);
```

### Getting the list registered ORGiD's (without pagination)

```javascript
contract
  .getOrgIds()
  .then(result => {
    if (result === null) {
      console.log('Unable to get the list of ORGiDs'); // Should not happen
    } else {
      console.log(result);
      /*
      [
        '0x7b15197de62b0bc73da908b215666c48e1...',
        '0x56e34fe286de62c4d15d536cef2d171f0c...',
        ...
      ]
      */
    }
  })
  .catch(console.error);
```

### Getting the list registered ORGiD's (with pagination)

```javascript
contract
  .getOrgIds(0, 20) // start, count
  .then(result => {
    if (result === null) {
      console.log('Unable to get the list of ORGiDs'); // Should not happen
    } else {
      console.log(result);
      /*
      [
        '0x7b15197de62b0bc73da908b215666c48e1...',
        '0x56e34fe286de62c4d15d536cef2d171f0c...',
        ...
      ]
      */
    }
  })
  .catch(console.error);
```

## Documentation

[Generated docs](docs#readme)

## Todo

- Create typings for @windingtree/org.id
