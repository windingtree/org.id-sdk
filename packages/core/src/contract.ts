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
  OrgIdInterfaceContract,
  addresses
} from '@windingtree/org.id';
import getOrgId from './api/getOrgId';

export default (
  networkOrAddress: OrgIdNetwork | EthereumAddress,
  web3ProviderOrUri: Web3Provider | Web3ProviderUri
): OrgIdContract => {
  let orgIdAddress: string;

  if (/^0x[a-fA-F0-9]{40}$/.exec(networkOrAddress)) {
    orgIdAddress = networkOrAddress;
  } else {
    orgIdAddress = addresses[networkOrAddress.replace('mainnet', 'main')];
  }

  if (!orgIdAddress) {
    throw new Error(
      `Invalid network or a smart contract address: ${networkOrAddress}`
    );
  }

  const web3 = new Web3(web3ProviderOrUri);
  const contract = new web3.eth.Contract(OrgIdInterfaceContract, orgIdAddress);

  console.log(contract);

  return {
    orgIdAddress,
    web3,
    contract,
    getOrgId: (orgIdHash: OrgIdHash): Promise<OrgIdData> => getOrgId(contract, orgIdHash)
  };
};
