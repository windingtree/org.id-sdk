import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';

export const getOrgIdsCount = async (
  contract: OrgIdBaseContract
): Promise<number> => {

  const count = await contract['totalSupply()']();

  return count.toNumber();
};
