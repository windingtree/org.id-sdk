import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';

export const getOrgIds = async (
  contract: OrgIdBaseContract,
  cursor?: number,
  count = 10
): Promise<string[]> => {

  if (cursor === undefined) {
    cursor = 1;
  } else if (typeof cursor !== 'number' || cursor < 1) {
    throw new Error(`getOrgIds: Invalid cursor: ${cursor}`);
  }

  if (typeof count !== 'number' || count < 1) {
    throw new Error(`getOrgIds: Invalid count: ${count}`);
  }

  const totalSupply = await contract['totalSupply()']();
  const total = totalSupply.toNumber();

  if (cursor > total) {
    return [];
  }

  const targetIds: number[] = [];

  for (let i = cursor; i <= total; i++) {
    targetIds.push(i);
    if (targetIds.length >= count) {
      break;
    }
  }

  const orgIds = await Promise.all(targetIds.map(
    id => contract.getOrgId(id)
  ));

  return orgIds.map(o => o.orgId);
};
