# Change Log

## 1.0.0-beta.33

- Updated ORG.JSON schema: `media` property is mandatory now for the all profiles types; all dependent packages are updated
- Added ORGiD creation feature
- Added ORGiD update feature
- `--type` parameter changed to `--operation`
- CLI core refactored
- CLI documentation actualized

## CLI 1.0.0-beta.32

- Changed `--type OrgJson` operation behaviour. The property `--deploy:ipfs <BOOLEAN>` changed to `--deploy <DEPLOYMENT_TYPE>`. Where `DEPLOYMENT_TYPE` will be able to have various values. For now, the only `ipfs` type is supported.


## CLI 1.0.0-beta.31

- Added feature of `eip155` keys (Ethereum) import: `--type keys:import eip155`
- The local project file can handle keys storage with encryption.
- `OrgJson` operation type integrated with keys storage. Now it is possible to use `eip155` private key for VC ORGiD signature.
