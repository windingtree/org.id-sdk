import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { TransactionReceipt } from 'web3-eth';
import {
  OrgIdData,
  CallbackFn
} from '../core';
import { getOrgId } from './getOrgId';
import { sendHelper } from '../shared/sendHelper'

export const transferOrgIdOwnership = async (
  web3: Web3,
  contract: Contract,
  orgIdHash: string,
  newOrgIdOwner: string,
  orgIdOwner: string,
  gasPrice?: string | number,
  gasLimit?: string | number,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: CallbackFn | void = () => {}
): Promise<OrgIdData> => {

  if (!/^0x[a-fA-F0-9]{64}$/.exec(orgIdHash)) {
    throw new Error(`transferOrgIdOwnership: Invalid ORGiD hash: ${orgIdHash}`);
  }

  if (!/^0x[a-fA-F0-9]{40}$/.exec(newOrgIdOwner)) {
    throw new Error(`transferOrgIdOwnership: Invalid newOrgIdOwner address: ${newOrgIdOwner}`);
  }

  if (!/^0x[a-fA-F0-9]{40}$/.exec(orgIdOwner)) {
    throw new Error(`transferOrgIdOwnership: Invalid orgIdOwner address: ${orgIdOwner}`);
  }

  const orgId = await getOrgId(web3, contract, orgIdHash);

  if (!orgId) {
    throw new Error(`transferOrgIdOwnership: ORGiD not found: ${orgIdHash}`);
  }

  const receipt: TransactionReceipt = await sendHelper(
    contract,
    'transferOrgIdOwnership(bytes32,address)',
    [
      orgIdHash,
      newOrgIdOwner
    ],
    orgIdOwner,
    gasLimit,
    gasPrice,
    transactionHashCb
  );

  const updatedOrgId = receipt.events.OrgIdOwnershipTransferred.returnValues.orgId;

  return getOrgId(web3, contract, updatedOrgId)
}
