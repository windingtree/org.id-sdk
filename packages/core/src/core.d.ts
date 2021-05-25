import { HttpProvider } from 'web3-providers-http';
import { WebsocketProvider } from 'web3-providers-ws';
import { IpcProvider} from 'web3-providers-ipc';

export type OrgIdAddresses = {
  [key in string]?: string
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
