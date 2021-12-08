import type { BigNumber } from 'ethers';
import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { OrgIdData } from '../types';
import { regexp } from '@windingtree/org.id-utils';
import { getOrgIdByTokenId } from './getOrgIdByTokenId';

export const getOwnOrgIds = async (
  contract: OrgIdBaseContract,
  ownerAddress: string
): Promise<OrgIdData[]> => {

  if (!regexp.ethereumAddress.exec(ownerAddress)) {
    throw new Error('getOwnOrgIds: Invalid the ORGiD owner address');
  }

  let balance: BigNumber | number  = await contract['balanceOf(address)'](ownerAddress);

  if (balance.eq(0)) {
    return [];
  }

  balance = balance.toNumber();

  const orgIds: OrgIdData[] = [];

  for (let i=0; i<balance; i++) {
    const tokenId = await contract['tokenOfOwnerByIndex(address,uint256)'](
      ownerAddress,
      i
    );
    const orgId = await getOrgIdByTokenId(contract, tokenId);

    if (!orgId) {
      throw new Error(`getOwnOrgIds: Unable to fetch token with Id: ${i}`);
    }

    orgIds.push(orgId);
  }

  return orgIds;
};
