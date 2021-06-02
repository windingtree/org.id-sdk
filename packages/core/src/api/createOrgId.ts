import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { TransactionReceipt } from 'web3-eth';
import { regexp } from '@windingtree/org.id-utils';
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
): Promise<OrgIdData | null> => {

  if (!regexp.bytes32.exec(salt)) {
    throw new Error(`createOrgId: Invalid ORGiD salt: ${salt}`);
  }

  if (!orgJsonUri || orgJsonUri === '') {
    throw new Error(`createOrgId: Invalid orgJsonUri value: ${orgJsonUri}`);
  }

  if (!regexp.ethereumAddress.exec(orgIdOwner)) {
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

  if (!receipt.events) {
    throw new Error(
      'createOrgId: Unable to found events in the transaction receipt'
    );
  }

  const createdOrgId = receipt.events.OrgIdCreated.returnValues.orgId;

  return getOrgId(web3, contract, createdOrgId);
}
