import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { TransactionReceipt } from 'web3-eth';
import {
  OrgIdData,
  CallbackFn
} from '../core';
import { getOrgId } from './getOrgId';
import { sendHelper } from '../shared/sendHelper'

export const createOrgId = async (
  web3: Web3,
  contract: Contract,
  salt: string,
  orgJsonUri: string,
  orgIdOwner: string,
  gasPrice?: string | number,
  gasLimit?: string | number,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: CallbackFn | void = () => {}
): Promise<OrgIdData> => {

  if (!/^0x[a-fA-F0-9]{64}$/.exec(salt)) {
    throw new Error(`createOrgId: Invalid ORGiD salt: ${salt}`);
  }

  if (!orgJsonUri || orgJsonUri === '') {
    throw new Error(`createOrgId: Invalid orgJsonUri value: ${orgJsonUri}`);
  }

  if (!/^0x[a-fA-F0-9]{40}$/.exec(orgIdOwner)) {
    throw new Error(`createOrgId: Invalid orgIdOwner address: ${orgIdOwner}`);
  }

  const receipt: TransactionReceipt = await sendHelper(
    contract,
    'createOrgId(bytes32,string)',
    [
      salt,
      orgJsonUri
    ],
    orgIdOwner,
    gasLimit,
    gasPrice,
    transactionHashCb
  );

  const createdOrgId = receipt.events.OrgIdCreated.returnValues.orgId;

  return getOrgId(web3, contract, createdOrgId)
}
