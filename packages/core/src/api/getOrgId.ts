import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { OrgIdData } from '../types';
import { regexp } from '@windingtree/org.id-utils';
import { getOrgIdByTokenId } from './getOrgIdByTokenId';

export const getOrgId = async (
  contract: OrgIdBaseContract,
  orgIdHash: string
): Promise<OrgIdData | null> => {

  if (!regexp.bytes32.exec(orgIdHash)) {
    throw new Error(`getOrgId: Invalid ORGiD hash: ${orgIdHash}`);
  }

  // Get a tokenId by the ORGiD hash
  const tokenId = await contract['getTokenId(bytes32)'](orgIdHash);

  if (tokenId.eq(0)) {
    return null;
  }

  return getOrgIdByTokenId(contract, tokenId);
};
