import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { OrgIdData } from '../types';
import type { BigNumber } from 'ethers';
import { BigNumber as BN } from 'ethers';

export const getOrgIdByTokenId = async (
  contract: OrgIdBaseContract,
  tokenId: number | BigNumber
): Promise<OrgIdData | null> => {

  if (!BN.isBigNumber(tokenId)) {
    tokenId = BN.from(tokenId);
  }

  if (tokenId.eq(0)) {
    throw new Error(`getOrgId: TokenId cannot be equal to zero`);
  }

  //
  const {
    exists,
    orgId,
    orgJsonUri,
    owner
  } = await contract['getOrgId(uint256)'](tokenId);

  if (!exists) {
    return null;
  }

  // Fetching of ORGiD creation date
  const orgIdCreatedFilter = contract.filters.OrgIdCreated(orgId, owner);
  const orgIdCreatedEvent = contract.queryFilter(orgIdCreatedFilter)[0];

  if (orgIdCreatedEvent) {
    throw new Error(`Unable to find OrgIdCreated event for ORGiD: ${orgId}`);
  }

  const { timestamp } = await orgIdCreatedEvent.getBlock();
  const orgIdCreationDate = new Date(Number(timestamp) * 1000)
    .toISOString();

  return {
    tokenId: tokenId.toNumber(),
    orgId,
    owner,
    orgJsonUri,
    created: orgIdCreationDate
  };
};
