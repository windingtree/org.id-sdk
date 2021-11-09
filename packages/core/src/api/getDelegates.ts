import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { Delegates } from '../types';
import { regexp } from '@windingtree/org.id-utils';

export const getDelegates = async (
  contract: OrgIdBaseContract,
  orgIdHash: string
): Promise<Delegates> => {

  if (!regexp.bytes32.exec(orgIdHash)) {
    throw new Error(`getDelegates: Invalid ORGiD hash: ${orgIdHash}`);
  }

  // Get delegates by the ORGiD hash
  const delegates: string[] = await contract['getDelegates(bytes32)'](orgIdHash)

  return delegates;
};
