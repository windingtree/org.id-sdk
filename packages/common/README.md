# @windingtree/common-utilities
Common utilities for the orgid-tools

## Setup

```bash
npm install @windingtree/common-utilities
```

## Usage

```javascript
import {
  simpleUid
} from '@windingtree/common-utilities';

const uid = simpleUid(8); // => 'erdhk9if'
```

## Utilities

### simpleUid(length)

Creates a unique Id. Length is an optional parameter with a value from 5 to 11.
