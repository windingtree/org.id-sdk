import {
  OrgIdNetwork,
  EthereumAddress,
  Web3Provider,
  Web3ProviderUri,
  OrgIdContract,
  OrgIdHash,
  OrgIdData
} from './core';
import Web3 from 'web3';
import {
  OrgIdContract as CompiledOrgIdContract,
  addresses
} from '@windingtree/org.id';
import { getOrgId } from './api/getOrgId';

export const orgIdContract = (
  networkOrAddress: OrgIdNetwork | EthereumAddress,
  web3ProviderOrUri: Web3Provider | Web3ProviderUri
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
    getOrgId: (orgIdHash: OrgIdHash): Promise<OrgIdData> => getOrgId(web3, contract, orgIdHash)
  };
};
