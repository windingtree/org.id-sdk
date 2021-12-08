import type { BigNumber, Signer, providers } from 'ethers';
import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type {
  OrgIdData,
  AddDelegatesResult,
  Delegates,
  RemoveDelegatesResult
} from './types';
import type { MethodOverrides, TxHashCallbackFn } from './shared/sendHelper';
import { ethers } from 'ethers';
import {
  OrgIdContract as CompiledOrgIdContract
} from '@windingtree/org.id';
import { regexp } from '@windingtree/org.id-utils';

// Methods
import { createOrgId } from './api/createOrgId';
import { setOrgJson } from './api/setOrgJson';
import { transferOrgIdOwnership } from './api/transferOrgIdOwnership';
import { getOrgIdsCount } from './api/getOrgIdsCount';
import { getOrgIdByTokenId } from './api/getOrgIdByTokenId';
import { getOrgId } from './api/getOrgId';
import { getOrgIds } from './api/getOrgIds';
import { addDelegates } from './api/addDelegates';
import { getDelegates } from './api/getDelegates';
import { removeDelegates } from './api/removeDelegates';
import { getOwnOrgIds } from './api/getOwnOrgIds';

export type {
  OrgIdAddresses,
  OrgIdData,
  OrgIdRawResult
} from './types';

export type KnownProvider =
  | providers.ExternalProvider
  | providers.JsonRpcProvider
  | providers.Web3Provider
  | providers.Provider
  | string;

export class OrgIdContract {
  readonly address: string;
  readonly provider: providers.BaseProvider;
  readonly contract: OrgIdBaseContract;

  constructor(
    contractAddress: string,
    providerOrUri: KnownProvider
  ) {

    if (regexp.ethereumAddress.exec(contractAddress)) {
      this.address = contractAddress;
    } else {
      throw new Error(
        `orgIdContract: Invalid smart contract address: ${contractAddress}`
      );
    }

    if (typeof providerOrUri === 'string' && providerOrUri !== '') {
      this.provider = new ethers.providers.JsonRpcProvider(providerOrUri);
    } else if (typeof providerOrUri === 'object') {

      if ((providerOrUri as providers.ExternalProvider).isMetaMask) {
        // using window.ethereum provided as providerOrUri
        this.provider = new ethers.providers.Web3Provider(
          providerOrUri as providers.ExternalProvider
        );
      } else if (typeof (providerOrUri as providers.JsonRpcProvider).send === 'function') {
        // using raw provider
        this.provider = providerOrUri as providers.JsonRpcProvider;
      }
    }

    if (!this.provider) {
      throw new Error(
        `orgIdContract: Unable to initialize provider': ${providerOrUri}`
      );
    }

    this.contract = new ethers.Contract(
      this.address,
      CompiledOrgIdContract.abi,
      this.provider
    ) as OrgIdBaseContract;
  }

  createOrgId(
    salt: string,
    orgJsonUri: string,
    orgIdOwner: Signer,
    overrides?: MethodOverrides,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    transactionHashCb: TxHashCallbackFn = () => {},
    confirmations?: number
  ): Promise<OrgIdData | null> {
    return createOrgId(this.contract, salt, orgJsonUri, orgIdOwner, overrides, transactionHashCb, confirmations);
  }

  setOrgJson(
    orgIdHash: string,
    orgJsonUri: string,
    orgIdOwner: Signer,
    overrides?: MethodOverrides,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    transactionHashCb: TxHashCallbackFn = () => {},
    confirmations?: number
  ): Promise<OrgIdData | null> {
    return setOrgJson(this.contract, orgIdHash, orgJsonUri, orgIdOwner, overrides, transactionHashCb, confirmations);
  }

  transferOrgIdOwnership(
    orgIdHash: string,
    newOrgIdOwner: string,
    orgIdOwner: Signer,
    overrides?: MethodOverrides,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    transactionHashCb: TxHashCallbackFn = () => {},
    confirmations?: number
  ): Promise<OrgIdData | null> {
    return transferOrgIdOwnership(this.contract, orgIdHash, newOrgIdOwner, orgIdOwner, overrides, transactionHashCb, confirmations);
  }

  addDelegates(
    orgIdHash: string,
    dids: string[],
    orgIdOwner: Signer,
    overrides?: MethodOverrides,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    transactionHashCb: TxHashCallbackFn = () => {},
    confirmations?: number
  ): Promise<AddDelegatesResult> {
    return addDelegates(this.contract, orgIdHash, dids, orgIdOwner, overrides, transactionHashCb, confirmations);
  }

  removeDelegates(
    orgIdHash: string,
    dids: string[],
    orgIdOwner: Signer,
    overrides?: MethodOverrides,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    transactionHashCb: TxHashCallbackFn = () => {},
    confirmations?: number
  ): Promise<RemoveDelegatesResult> {
    return removeDelegates(this.contract, orgIdHash, dids, orgIdOwner, overrides, transactionHashCb, confirmations);
  }

  getOrgIdsCount(): Promise<number> {
    return getOrgIdsCount(this.contract);
  }

  getOrgIdByTokenId(tokenId: number | BigNumber): Promise<OrgIdData | null> {
    return getOrgIdByTokenId(this.contract, tokenId);
  }

  getOrgId(orgIdHash: string): Promise<OrgIdData | null> {
    return getOrgId(this.contract, orgIdHash);
  }

  getOrgIds(cursor?: number, count?: number): Promise<string[]> {
    return getOrgIds(this.contract, cursor, count);
  }

  getDelegates(orgIdHash: string): Promise<Delegates> {
    return getDelegates(this.contract, orgIdHash);
  }

  getOwnOrgIds(ownerAddress: string): Promise<OrgIdData[] | []> {
    return getOwnOrgIds(this.contract, ownerAddress);
  }
}
