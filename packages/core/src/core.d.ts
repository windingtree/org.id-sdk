import Web3 from 'web3';
import { HttpProvider } from 'web3-providers-http';
import { WebsocketProvider } from 'web3-providers-ws';
import { IpcProvider} from 'web3-providers-ipc';
import { Contract } from 'web3-eth-contract';

export type OrgIdNetwork = 'main' | 'mainnet' | 'ropsten';

export type EthereumAddress = string;

export type OrgIdAddresses = {
  [key in OrgIdNetwork]?: EthereumAddress
}

export type OrgIdHash = string;

export type Web3Provider = HttpProvider | WebsocketProvider | IpcProvider;

export type Web3ProviderUri = string;

export interface OrgIdData {
  id: OrgIdHash,
  owner: EthereumAddress,
  created: string
}

export interface OrgIdRawResult {
  exists: boolean;
  owner: EthereumAddress;
}

export interface OrgIdContract {
  orgIdAddress: EthereumAddress;
  web3: Web3;
  contract: Contract;
  getOrgId(orgId: OrgIdHash): Promise<OrgIdData>;
}
