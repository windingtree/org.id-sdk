[![@windingtree/org.id-utils](https://img.shields.io/npm/v/@windingtree/org.id-utils.svg)](https://www.npmjs.com/package/@windingtree/org.id-utils)
# @windingtree/org.id-utils
Shared ORGiD utilities

## Setup

```bash
npm install @windingtree/org.id-utils
```

## Usage

```javascript
import {
  uid: {
    simpleUid
  }
} from '@windingtree/org.id-utils';

const id = simpleUid(8); // => 'erdhk9if'
```

## Utilities

### simpleUid(length)

Creates a unique Id. Length is an optional parameter with a value from 5 to 11.

## Documentation

[Generated docs](docs#readme)
