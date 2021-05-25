import {
  Web3Provider,
  OrgIdData,
  CallbackFn
} from './core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import {
  OrgIdContract as CompiledOrgIdContract,
  addresses
} from '@windingtree/org.id';
import { regexp } from '@windingtree/org.id-utils';

// Methods
import { createOrgId } from './api/createOrgId';
import { setOrgJson } from './api/setOrgJson';
import { transferOrgIdOwnership } from './api/transferOrgIdOwnership';
import { getOrgIdsCount } from './api/getOrgIdsCount';
import { getOrgId } from './api/getOrgId';
import { getOrgIds } from './api/getOrgIds';

export default class OrgIdContract {
  address: string;
  web3: Web3;
  contract: Contract;

  constructor(
    networkOrAddress: string,
    web3ProviderOrUri: Web3Provider | string
  ) {

    if (regexp.ethereumAddress.exec(networkOrAddress)) {
      this.address = networkOrAddress;
    } else if (networkOrAddress) {
      this.address = addresses[networkOrAddress.replace('mainnet', 'main')];
    }

    if (!this.address) {
      throw new Error(
        `orgIdContract: Invalid network or a smart contract address: ${networkOrAddress}`
      );
    }

    this.web3 = new Web3(web3ProviderOrUri);

    if (!this.web3.currentProvider) {
      throw new Error('orgIdContract: Unable to initialize web3 provider');
    }

    this.contract = new this.web3.eth.Contract(
      CompiledOrgIdContract.abi,
      this.address
    );
  }

  createOrgId(
    salt: string,
    orgJsonUri: string,
    orgIdOwner: string,
    gasPrice?: string | number,
    gasLimit?: string | number,
    transactionHashCb?: CallbackFn
  ): Promise<OrgIdData> {
    return createOrgId(this.web3, this.contract, salt, orgJsonUri, orgIdOwner, gasPrice, gasLimit, transactionHashCb);
  }

  setOrgJson(
    orgIdHash: string,
    orgJsonUri: string,
    orgIdOwner: string,
    gasPrice?: string | number,
    gasLimit?: string | number,
    transactionHashCb?: CallbackFn
  ): Promise<OrgIdData> {
    return setOrgJson(this.web3, this.contract, orgIdHash, orgJsonUri, orgIdOwner, gasPrice, gasLimit, transactionHashCb);
  }

  transferOrgIdOwnership(
    orgIdHash: string,
    newOrgIdOwner: string,
    orgIdOwner: string,
    gasPrice?: string | number,
    gasLimit?: string | number,
    transactionHashCb?: CallbackFn
  ): Promise<OrgIdData> {
    return transferOrgIdOwnership(this.web3, this.contract, orgIdHash, newOrgIdOwner, orgIdOwner, gasPrice, gasLimit, transactionHashCb);
  }

  getOrgIdsCount(): Promise<number> {
    return getOrgIdsCount(this.contract);
  }

  getOrgId(orgIdHash: string): Promise<OrgIdData> {
    return getOrgId(this.web3, this.contract, orgIdHash);
  }

  getOrgIds(cursor?: number, count?: number): Promise<string[]> {
    return getOrgIds(this.contract, cursor, count);
  }
}
