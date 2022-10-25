import * as regexp from '../regexp';

export interface ParsedDid {
  did: string;
  method: string;
  network: string;
  orgId: string;
  query?: string;
  fragment?: string;
}

export interface ParsedUri {
  uri: string;
  type: string;
}

export interface ParsedBlockchainAccountId {
  accountAddress: string;
  blockchainType: string;
  chainId: string;
}

export interface DidGroupedCheckResult extends RegExpExecArray {
  groups: {
    did: string;
    method: string;
    network?: string;
    id: string;
    query?: string;
    fragment?: string;
  }
}

export interface IpfsUriGroupedResult extends RegExpExecArray {
  groups: {
    protocol: string;
    cid: string;
  }
}

export interface BlockchainAccountIdGroupedResult extends RegExpExecArray {
  groups: {
    accountAddress: string;
    blockchainType: string;
    chainId: string;
    [key: string]: string;
  }
}

// Parse raw DID and extract its parts
export const parseDid = (did: string): ParsedDid => {
  const groupedCheck = regexp.didGrouped.exec(did) as DidGroupedCheckResult;

  if (!groupedCheck || !groupedCheck.groups || !groupedCheck.groups.did) {
    throw new Error(`Invalid DID format: ${did}`);
  }

  const {
    method,
    network,
    id,
    query,
    fragment
  } = groupedCheck.groups;

  const parsedNetwork = network || '1'; // Mainnet is default value

  return {
    did: `did:orgid:${parsedNetwork}:${id}`,
    method,
    network: parsedNetwork,
    orgId: id,
    query,
    fragment
  };
};

// Parse raw ORG.JSON uri and extract an uri type
export const parseUri = (uri: string): ParsedUri => {
  let parsedUri: string;
  let type: string;

  if (regexp.uriHttp.exec(uri)) {
    parsedUri = uri;
    type = 'http';
  } else if (regexp.ipfs.exec(uri) || regexp.ipfsUri.exec(uri)) {
    type = 'ipfs';

    if (!regexp.ipfsUri.exec(uri)) {
      parsedUri = uri;
    } else {
      const ipfsGroupedResult = regexp.ipfsUriGrouped.exec(uri) as IpfsUriGroupedResult;

      if (!ipfsGroupedResult) {
        // should never happen because it checked twice
        throw new Error(`Unable to extract CID from IPFS URI: ${uri}`);
      }

      parsedUri = ipfsGroupedResult.groups.cid;
    }

  } else {
    throw new Error(`Invalid URI: ${uri}`);
  }

  return {
    uri: parsedUri,
    type
  }
};

export const parseBlockchainAccountId = (blockchainAccountId: string): ParsedBlockchainAccountId => {
  let parseRule: RegExp;

  if (
    blockchainAccountId.includes('@') &&
    regexp.blockchainAccountIdLegacy.exec(blockchainAccountId)
  ) {
    // Legacy format
    parseRule = regexp.blockchainAccountIdLegacyGrouped;
  } else if (regexp.blockchainAccountId.exec(blockchainAccountId)) {
    // Actual format
    parseRule = regexp.blockchainAccountIdGrouped;
  } else {
    throw new Error('Invalid blockchain account Id format');
  }

  const blockchainAccountIdResult  = parseRule
    .exec(blockchainAccountId) as BlockchainAccountIdGroupedResult;

  if (!blockchainAccountIdResult) {
    throw new Error('Unable to parse blockchain account Id format');
  }

  const {
    accountAddress,
    blockchainType,
    chainId
  } = blockchainAccountIdResult.groups;

  return {
    accountAddress,
    blockchainType,
    chainId
  };
};
