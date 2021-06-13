[![@windingtree/org.id-test-setup](https://img.shields.io/npm/v/@windingtree/org.id-test-setup.svg)](https://www.npmjs.com/package/@windingtree/org.id-test-setup)
# @windingtree/org.id-test-setup
Ease ORGiD setup for testing purposes

## Setup

```bash
npm install @windingtree/org.id-test-setup
```

## Usage

```javascript
import {
  orgIdSetup,
  generateSalt
} from '@windingtree/org.id-test-setup';

const setup = await orgIdSetup();

const owner = setup.accounts[2];
const {
  orgIdHash,
  orgJson
} = await setup.registerOrgId(owner);

await setup.close();

```

## Documentation

[Generated docs](docs#readme)
