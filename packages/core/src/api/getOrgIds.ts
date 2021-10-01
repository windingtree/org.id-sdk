import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';

export const getOrgIds = async (
  contract: OrgIdBaseContract,
  cursor?: number,
  count = 10
): Promise<string[]> => {

  if (typeof cursor === 'number' && cursor < 0) {
    throw new Error(`getOrgIds: Invalid cursor: ${cursor}`);
  }

  if (typeof count === 'number' && count < 1) {
    throw new Error(`getOrgIds: Invalid count: ${cursor}`);
  }

  if (typeof count === 'number' && cursor === undefined) {
    cursor = 0;
  }

  if (typeof cursor === 'number') {
    return contract['getOrgIds(uint256,uint256)'](cursor, count);
  }

  return contract['getOrgIds()']();
};
