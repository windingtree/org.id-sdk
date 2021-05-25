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

export const setOrgJson = async (
  web3: Web3,
  contract: Contract,
  orgIdHash: string,
  orgJsonUri: string,
  orgIdOwner: string,
  gasPrice?: string | number,
  gasLimit?: string | number,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: CallbackFn | void = () => {}
): Promise<OrgIdData> => {

  if (!regexp.bytes32.exec(orgIdHash)) {
    throw new Error(`setOrgJson: Invalid ORGiD hash: ${orgIdHash}`);
  }

  if (!orgJsonUri || orgJsonUri === '') {
    throw new Error(`setOrgJson: Invalid orgJsonUri value: ${orgJsonUri}`);
  }

  if (!regexp.ethereumAddress.exec(orgIdOwner)) {
    throw new Error(`setOrgJson: Invalid orgIdOwner address: ${orgIdOwner}`);
  }

  const orgId = await getOrgId(web3, contract, orgIdHash);

  if (!orgId) {
    throw new Error(`setOrgJson: ORGiD not found: ${orgIdHash}`);
  }

  const receipt: TransactionReceipt = await sendHelper(
    contract,
    'setOrgJson(bytes32,string)',
    [
      orgIdHash,
      orgJsonUri
    ],
    orgIdOwner,
    gasLimit,
    gasPrice,
    transactionHashCb
  );

  const updatedOrgId = receipt.events.OrgJsonUriChanged.returnValues.orgId;

  return getOrgId(web3, contract, updatedOrgId)
}
