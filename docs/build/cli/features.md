# New OrgID CLI features

## ORG.JSON bootstrap

This feature will allow to generate an ORG.JSON file on the basis of a certain template.
During the creation of the file, it will be possible to fill in mandatory fields.

Parameters:

- ORGiD DID
- An organization profile type (`legalEntity`, `organizationalUnit`)
- the path where to create the file

Requirements:

- the ORGiD DID must be well-formed

Result:

- ORG.JSON file created on the basis of a certain template.

## Deployment to IPFS

First version of this feature will not support IPNS deployments.

Parameters:

- IPFS API key: through env (or from project)
- Project config file
- Path to file

Requirements:

- //

Result:

- Operation on-screen report
- Generated/updated project config file

## Keys registration and generation

This feature allow to import, generate and store keys. Stored keys will be encrypted using provided password.

Parameters:

- PIN encryption password for keys
- Type of key
- Raw key (in case of import)

Requirements:

- all parameters are mandatory

## ORGiD creation

Parameters:

- ETH account (private key): through env (or from project)
- ORGiD salt (used for an organization Id generation)
- IPFS hash of the ORGiD VC (orgJsonUri)

Requirements:

- All the parameters are mandatory
- The ORGiD salt provided must be checked. An organization DID must must be properly generation using provided salt
- ORGiD VC provided by IPFS hash must be valid and NFT-compatible

Result:

- ORGiD creation transaction hash
- ORGiD creation on-screen report
- Generated/updated project config file

## ORGiD delegates management

Parameters:

- ORGiD DID
- ORGiD delegates (coma-separated)

Requirements:

- the ORGiD DID must be well-formed
- the ORGiD delegates must be well-formed

Result:

- the ORGiD delegates registration transaction hash
- registration report
- template of updates what must be reflected in the ORG.JSON

### Authentication tokens generation

This operation is required fot creation of the JWT tokens

Parameters:

- issuer DID
- audience DID
- token scope
- verification method

Requirements:

- token parameters must be valid
- verification method must be valid
- private key must be provided in the env

Result:

- generated authentication JWT token