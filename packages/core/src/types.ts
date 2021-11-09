import type { BigNumber } from 'ethers';

export type OrgIdAddresses = {
  [key in string]?: string
}

export interface OrgIdData {
  tokenId: BigNumber;
  orgId: string;
  owner: string;
  orgJsonUri: string;
  delegates: string[];
  created: string;
}

export interface OrgIdRawResult {
  exists: boolean;
  owner: string;
}

export type Delegates = string[];

export interface AddDelegatesResult {
  orgId: string;
  delegates: string[];
}

export interface RemoveDelegatesResult {
  orgId: string;
  delegates: string[];
}
