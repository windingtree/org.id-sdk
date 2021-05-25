import Web3 from 'web3';
import { HttpProvider } from 'web3-providers-http';
import { WebsocketProvider } from 'web3-providers-ws';
import { IpcProvider} from 'web3-providers-ipc';
import { Contract } from 'web3-eth-contract';

export type OrgIdNetwork = string;

export type OrgIdAddresses = {
  [key in OrgIdNetwork]?: string
}

export type Web3Provider = HttpProvider | WebsocketProvider | IpcProvider;

export type CallbackFn = (data: unknown | void) => void;

export interface OrgIdData {
  id: string;
  owner: string;
  orgJsonUri: string;
  created: string;
}

export interface OrgIdRawResult {
  exists: boolean;
  owner: string;
}

export interface OrgIdContract {
  address: string;
  web3: Web3;
  contract: Contract;

  createOrgId(
    salt: string,
    orgJsonUri: string,
    orgIdOwner: string,
    gasPrice?: string | number,
    gasLimit?: string | number,
    transactionHashCb?: CallbackFn
  ): Promise<OrgIdData>;

  setOrgJson(
    orgIdHash: string,
    orgJsonUri: string,
    orgIdOwner: string,
    gasPrice?: string | number,
    gasLimit?: string | number,
    transactionHashCb?: CallbackFn
  ): Promise<OrgIdData>;

  transferOrgIdOwnership(
    orgIdHash: string,
    newOrgIdOwner: string,
    orgIdOwner: string,
    gasPrice?: string | number,
    gasLimit?: string | number,
    transactionHashCb?: CallbackFn
  ): Promise<OrgIdData>;

  getOrgIdsCount(): Promise<number>;

  getOrgId(orgId: string): Promise<OrgIdData>;

  getOrgIds(cursor?: number, count?: number): Promise<string[]>;
}
