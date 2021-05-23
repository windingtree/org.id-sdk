import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import {
  OrgIdHash,
  OrgIdData,
  OrgIdRawResult
} from '../core';

export const getOrgId = async (
  web3: Web3,
  contract: Contract,
  orgIdHash: OrgIdHash
): Promise<OrgIdData> => {

  if (!/^0x[a-fA-F0-9]{64}$/.exec(orgIdHash)) {
    throw new Error(`getOrgId: Invalid ORGiD hash: ${orgIdHash}`);
  }

  const result: OrgIdRawResult = await contract.methods.getOrgId(orgIdHash).call();

  if (!result || !result.exists) {
    return null;
  }

  const events = await contract.getPastEvents('OrgIdCreated', {
    filter: {
      orgId: orgIdHash
    },
    fromBlock: 0,
    toBlock: 'latest'
  });
  let orgIdCreationDate;

  /* istanbul ignore next */
  if (events.length === 1) {
    const { timestamp } = await web3.eth.getBlock(events[0].blockNumber);
    orgIdCreationDate = new Date(Number(timestamp) * 1000).toISOString();
  } else {
    throw new Error(
      `getOrgId: Not found OrgIdCreated event for ORGiD: ${orgIdHash}`
    );
  }

  return {
    id: orgIdHash,
    owner: result.owner,
    created: orgIdCreationDate
  };
};
