import { Contract } from 'web3-eth-contract';
import {
  OrgIdHash,
  OrgIdData,
  OrgIdRawResult
} from '../core';

export default async (contract: Contract, orgIdHash: OrgIdHash): Promise<OrgIdData> => {

  if (!/^0x[a-fA-F0-9]{64}$/.exec(orgIdHash)) {
    throw new Error(`Invalid ORGiD hash: ${orgIdHash}`);
  }

  const result: OrgIdRawResult = await contract.methods.getOrgId(orgIdHash).call();

  if (!result || !result.exists) {
    return null;
  }

  const event = await contract.getPastEvents('OrganizationCreated', {
    filter: {
      orgId: orgIdHash
    },
    fromBlock: 0,
    toBlock: 'latest'
  });
  let orgIdCreationDate;

  // if (event.length === 1) {
  //   const block = await web3.eth.getBlock(event[0].blockNumber);
  //   orgIdCreationDate = new Date(block.timestamp * 1000).toISOString();
  // }

  return {
    id: orgIdHash,
    owner: result.owner,
    created: orgIdCreationDate
  };
};
