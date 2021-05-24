import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import {
  OrgIdData,
  OrgIdRawResult
} from '../core';

export const getOrgId = async (
  web3: Web3,
  contract: Contract,
  orgIdHash: string
): Promise<OrgIdData> => {

  if (!/^0x[a-fA-F0-9]{64}$/.exec(orgIdHash)) {
    throw new Error(`getOrgId: Invalid ORGiD hash: ${orgIdHash}`);
  }

  const methodArguments = [
    orgIdHash
  ];

  // Call smart contract
  const result: OrgIdRawResult = await contract
    .methods['getOrgId(bytes32)']
    .apply(
      contract,
      methodArguments
    )
    .call();

  if (!result || !result.exists) {
    return null;
  }

  // Fetching of ORGiD creation date
  let events = await contract.getPastEvents('OrgIdCreated', {
    filter: {
      orgId: orgIdHash
    },
    fromBlock: 0,
    toBlock: 'latest'
  });
  let orgIdCreationDate: string;

  /* istanbul ignore next */
  if (events && events.length === 1) {
    const { timestamp } = await web3.eth.getBlock(events[0].blockNumber);
    orgIdCreationDate = new Date(Number(timestamp) * 1000).toISOString();
  } else {
    throw new Error(
      `getOrgId: Not found OrgIdCreated event for ORGiD: ${orgIdHash}`
    );
  }

  // Fetching of ORGiD's ORG.JSON URI
  events = await contract.getPastEvents('OrgJsonUriChanged', {
    filter: {
      orgId: orgIdHash
    },
    fromBlock: 0,
    toBlock: 'latest'
  });

  let orgJsonUri: string;

  /* istanbul ignore next */
  if (events && events.length !== 0) {
    const latestEvent = events.sort((a, b) => a.blockNumber > b.blockNumber ? -1 : 1)[0];
    orgJsonUri = latestEvent.returnValues.orgJsonUri;
  } else {
    throw new Error(
      `getOrgId: Not found OrgJsonUriChanged event for ORGiD: ${orgIdHash}`
    );
  }

  return {
    id: orgIdHash,
    owner: result.owner,
    orgJsonUri,
    created: orgIdCreationDate
  };
};
