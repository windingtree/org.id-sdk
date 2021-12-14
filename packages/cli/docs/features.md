# New OrgID CLI features

## ORG.JSON bootstrap

This feature will allow to generate an ORG.JSON file on the basis of a certain template.
During the creation of the file, it will be possible to fill in mandatory fields.

### Parameters

- ORGiD DID
- An organization profile type (`legalEntity`, `organizationalUnit`)
- the path where to create the file

### Requirements

- the ORGiD DID must be well-formed

### Result

- ORG.JSON file created on the basis of a certain template.

## ORGiD VC deployment

First version of this feature will not support IPNS deployments.

### Parameters

- IPFS API key: through env
- Project config file
- Path to ORGiD VC file

### Requirements

- ORGiD VC provided must be valid and NFT-compatible

### Result

- Operation on-screen report
- Generated/updated project config file

## ORGiD creation

### Parameters

- ETH account (private key): through env
- ORGiD salt (used for an organization Id generation)
- IPFS hash of the ORGiD VC (orgJsonUri)

### Requirements

- All the parameters are mandatory
- The ORGiD salt provided must be checked. An organization DID must must be properly generation using provided salt
- ORGiD VC provided by IPFS hash must be valid and NFT-compatible

### Result

- ORGiD creation transaction hash
- ORGiD creation on-screen report
- Generated/updated project config file

## ORGiD delegates management

### Parameters

- ORGiD DID
- ORGiD delegates (coma-separated)

### Requirements

- the ORGiD DID must be well-formed
- the ORGiD delegates must be well-formed

### Result

- the ORGiD delegates registration transaction hash
- registration report
- template of updates what must be reflected in the ORG.JSON
