# ORGiD SDK documentation
Built documentation site is available under the link: https://windingtree.github.io/org.id-sdk/

## Setup

```bash
yarn install
```

## Development

Local content files are placed in the directory `./src`.
Default home page is `./src/index.md` contains common ORGiD SDK information for developers.
The sidebar of the documentation site is in the file `./src/sidebar.md`.

Documentation files of SDK packages that are automatically fetched by the building script should be handled inside packages directly.

## Local review

```bash
yarn serve
```

After starting of the development server it should be available under the link: http://localhost:3000

## Build

```bash
yarn build
```

During the build process, all the parts of documentation are accumulated in the `./build` directory and linted using the `markdownlint` utility. If some linting errors will be found the build script will end with error code `1`.

> `./build` directory **must be committed** to the repository to be accessible on the SDK documentation site.
