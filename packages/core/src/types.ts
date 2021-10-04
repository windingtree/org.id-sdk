import type { BigNumber } from 'ethers';

export type OrgIdAddresses = {
  [key in string]?: string
}

export interface OrgIdData {
  tokenId: BigNumber;
  orgId: string;
  owner: string;
  orgJsonUri: string;
  created: string;
}

export interface OrgIdRawResult {
  exists: boolean;
  owner: string;
}
