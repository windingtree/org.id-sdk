[![@windingtree/org.id-test-http-server](https://img.shields.io/npm/v/@windingtree/org.id-test-http-server.svg)](https://www.npmjs.com/package/@windingtree/org.id-test-http-server)
# @windingtree/org.id-test-http-server
Simple Http Server for ORGiD protocol testing

## Setup

```bash
npm install @windingtree/org.id-test-http-server
```

## Usage

```javascript
import HttpFileServer from '@windingtree/org.id-test-http-server';

// HttpFileServer can be used for testing cases where it is required to host files
const httpServer = new HttpFileServer();
httpServer.start()
  .then(() => {
    const file = {
      type: 'json',
      path: '<path_with_name>.json',
      content: '{"test": "test"}'
    };
    httpServer.addFile(file);

    const { data } = await axios.get(`${httpServer.baseUri}/${file.path}`);
    console.log(data);
    // {"test": "test"}

  })
  .catch(console.error);

```

## Documentation

[Generated docs](docs#readme)
