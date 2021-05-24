import {
  Web3Provider,
  OrgIdContract,
  OrgIdData
} from './core';
import Web3 from 'web3';
import {
  OrgIdContract as CompiledOrgIdContract,
  addresses
} from '@windingtree/org.id';
import { createOrgId } from './api/createOrgId';
import { setOrgJson } from './api/setOrgJson';
import { transferOrgIdOwnership } from './api/transferOrgIdOwnership';
import { getOrgIdsCount } from './api/getOrgIdsCount';
import { getOrgId } from './api/getOrgId';
import { getOrgIds } from './api/getOrgIds';

export const orgIdContract = (
  networkOrAddress: string,
  web3ProviderOrUri: Web3Provider | string
): OrgIdContract => {
  let orgIdAddress: string;

  if (/^0x[a-fA-F0-9]{40}$/.exec(networkOrAddress)) {
    orgIdAddress = networkOrAddress;
  } else if (networkOrAddress) {
    orgIdAddress = addresses[networkOrAddress.replace('mainnet', 'main')];
  }

  if (!orgIdAddress) {
    throw new Error(
      `orgIdContract: Invalid network or a smart contract address: ${networkOrAddress}`
    );
  }

  const web3 = new Web3(web3ProviderOrUri);

  if (!web3.currentProvider) {
    throw new Error('orgIdContract: Unable to initialize web3 provider');
  }

  const contract = new web3.eth.Contract(CompiledOrgIdContract.abi, orgIdAddress);

  return {
    address: orgIdAddress,
    web3,
    contract,

    createOrgId: (
      salt,
      orgJsonUri,
      orgIdOwner,
      gasPrice,
      gasLimit,
      transactionHashCb
    ): Promise<OrgIdData> =>
      createOrgId(web3, contract, salt, orgJsonUri, orgIdOwner, gasPrice, gasLimit, transactionHashCb),

    setOrgJson: (
      orgIdHash,
      orgJsonUri,
      orgIdOwner,
      gasPrice,
      gasLimit,
      transactionHashCb
    ): Promise<OrgIdData> =>
      setOrgJson(web3, contract, orgIdHash, orgJsonUri, orgIdOwner, gasPrice, gasLimit, transactionHashCb),

    transferOrgIdOwnership: (
      orgIdHash,
      newOrgIdOwner,
      orgIdOwner,
      gasPrice,
      gasLimit,
      transactionHashCb
    ): Promise<OrgIdData> =>
      transferOrgIdOwnership(web3, contract, orgIdHash, newOrgIdOwner, orgIdOwner, gasPrice, gasLimit, transactionHashCb),

    getOrgIdsCount: (): Promise<number> =>
      getOrgIdsCount(contract),

    getOrgId: (orgIdHash): Promise<OrgIdData> =>
      getOrgId(web3, contract, orgIdHash),

    getOrgIds: (cursor, count): Promise<string[]> =>
      getOrgIds(contract, cursor, count),
  };
};
