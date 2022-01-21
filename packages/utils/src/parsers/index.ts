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

  return {
    did,
    method,
    network: network || '1', // Mainnet is default value
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
