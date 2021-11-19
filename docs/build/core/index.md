# Core ORGiD typescript library

The ORGiD core package covers the smart contract interface into the simple to use typescript library. This library can be used for developing the server applications and browser-based as well.

> To arrange interaction with blockchain this package is using good known [Ethers.js](https://docs.ethers.io/v5/) library

## Setup

```bash
yarn add @windingtree/org.id-core
```

## Typescript typings

```typescript
import type {
  OrgIdData,
  AddDelegatesResult,
  RemoveDelegatesResult
} from '@windingtree/org.id-core';
```

## Module

```typescript
import {
  createOrgId,
  setOrgJson,
  transferOrgIdOwnership,
  getOrgIdsCount,
  getOrgIdByTokenId,
  getOrgId,
  getOrgIds,
  addDelegates,
  removeDelegates,
  getDelegates
} from '@windingtree/org.id-core';
```

## Initialization

```typescript
import { OrgIdContract } from '@windingtree/org.id-core';

const contract = new OrgIdContract(
  'ropsten', // allowed values main, ropsten or the OrgId smart contract address
  window.ethereum // web3 compatible provider: Metamask, HDWalletProvider or HTTP/WS/WSS node URI (e.q. Infura RPC URI)
);
```

## Getting of ORGiD information


```typescript
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

## ORGiD creation

```typescript
import { ethers } from 'ethers';
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

contract
  .createOrgId(
    '<RANDOM_BYTES32_STRING>', // Unique string in bytes32 string format. Can be generated using `Web3.utils.keccak256(Math.random().toString())`
    'http://yourdomain.com/path/to/ORG-JSON-VC.json', // <-- URI of your own public storage of the ORG.JSON VC file
    signer, // <-- signer with selected account
    { // <-- transaction options
      gasLimit: '75000', // optional: gas limit value
      gasPrice: '100000000000', // optional: gas price value
    },
    transactionHash => { // optional transaction callback
      console.log(`Transaction sent: ${transactionHash}`);
    },
    3 // <-- optional required number of confirmations
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
        orgJsonUri: 'http://yourdomain.com/ORG-JSON-VC.json',
        created: '2021-03-21T09:23:13.551Z'
      }
      */
    }
  })
  .catch(console.error);
```

## Changing of the ORG.JSON URI

```typescript
const orgId = '0xf94c83b1da7bc36989b6a4f25e51ce66dd0...';
contract
  .setOrgJson(
    orgId, // Your ORGiD hash
    'http://yourdomain.com/NEW/path/to/ORG.JSON',
    '<CURRENT_ORGiD_OWNER_ADDRESS>',
    signer, // <-- signer with selected account
    // Same as for `createOrgId`
    // { // <-- transaction options
    //   gasLimit: '75000', // optional: gas limit value
    //   gasPrice: '100000000000', // optional: gas price value
    // },
    // transactionHash => { // optional transaction callback
    //   console.log(`Transaction sent: ${transactionHash}`);
    // },
    // 3 // <-- optional required number of confirmations
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

## Transferring of the ORGiD ownership

```typescript
const orgId = '0xf94c83b1da7bc36989b6a4f25e51ce66dd0fc...';
contract
  .transferOrgIdOwnership(
    orgId, // Your ORGiD hash
    '<NEW_OWNER_ADDRESS>',
    '<CURRENT_ORGiD_OWNER_ADDRESS>',
    signer, // <-- signer with selected account
    // Same as for `createOrgId`
    // { // <-- transaction options
    //   gasLimit: '75000', // optional: gas limit value
    //   gasPrice: '100000000000', // optional: gas price value
    // },
    // transactionHash => { // optional transaction callback
    //   console.log(`Transaction sent: ${transactionHash}`);
    // },
    // 3 // <-- optional required number of confirmations
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
        orgJsonUri: 'http://yourdomain.com/ORG-JSON-VC.json',
        created: '2021-03-21T09:23:13.551Z'
      }
      */
    }
  })
  ...
```

## Getting of registered ORGiD's count

```typescript
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

## Getting the list of registered ORGiD's (without pagination)

```typescript
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

## Getting the list of registered ORGiD's (with pagination)

```typescript
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

## Adding of delegates

```typescript
const orgId = '0xf94c83b1da7bc36989b6a4f25e51ce66dd0fc...';
contract
  .addDelegates(
    orgId, // Your ORGiD hash
    [
      'did:orgid:4:0x94b...b0ad75#key1'
    ],
    signer, // <-- signer with selected account
    // Same as for `createOrgId`
    // { // <-- transaction options
    //   gasLimit: '75000', // optional: gas limit value
    //   gasPrice: '100000000000', // optional: gas price value
    // },
    // transactionHash => { // optional transaction callback
    //   console.log(`Transaction sent: ${transactionHash}`);
    // },
    // 3 // <-- optional required number of confirmations
  )
  .then(result => {
    if (result === null) {
      console.log('Add delegates error');
    } else {
      console.log(result);
      /*
      {
        orgId: '0xf94c83b1da7bc3698...',
        [
          'did:orgid:4:0x94b...b0ad75#key1'
        ]
      }
      */
    }
  })
  ...
```

## Removing of delegates

```typescript
const orgId = '0xf94c83b1da7bc36989b6a4f25e51ce66dd0fc...';
contract
  .removeDelegates(
    orgId, // Your ORGiD hash
    [
      'did:orgid:4:0x94b...b0ad75#key1'
    ],
    signer, // <-- signer with selected account
    // Same as for `createOrgId`
    // { // <-- transaction options
    //   gasLimit: '75000', // optional: gas limit value
    //   gasPrice: '100000000000', // optional: gas price value
    // },
    // transactionHash => { // optional transaction callback
    //   console.log(`Transaction sent: ${transactionHash}`);
    // },
    // 3 // <-- optional required number of confirmations
  )
  .then(result => {
    if (result === null) {
      console.log('Remove delegates error');
    } else {
      console.log(result);
      /*
      {
        orgId: '0xf94c83b1da7bc3698...',
        [
          'did:orgid:4:0x94b...b0ad75#key1'
        ]
      }
      */
    }
  })
  ...
```

## Getting of delegates

```typescript
const orgId = '0xf94c83b1da7bc36989b6a4f25e51ce66dd0fc...';
contract
  .getDelegates(orgId) // start, count
  .then(result => {
    if (result === null) {
      console.log('Unable to get the list of the ORGiD delegates'); // Should not happen
    } else {
      console.log(result);
      /*
      [
        'did:orgid:4:0x94b...b0ad75#key1'
      ]
      */
    }
  })
  .catch(console.error);
```
