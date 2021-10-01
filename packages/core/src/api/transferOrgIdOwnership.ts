import type { Signer, ContractReceipt } from 'ethers';
import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { OrgIdData } from '../types';
import type { MethodOverrides, TxHashCallbackFn } from '../shared/sendHelper';
import { getOrgId } from './getOrgId';
import { sendHelper } from '../shared/sendHelper'
import { regexp } from '@windingtree/org.id-utils';
import { getOrgIdByTokenId } from './getOrgIdByTokenId';

export const transferOrgIdOwnership = async (
  contract: OrgIdBaseContract,
  orgIdHash: string,
  newOrgIdOwner: string,
  orgIdOwner: Signer,
  overrides?: MethodOverrides,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: TxHashCallbackFn = () => {},
  confirmations?: number
): Promise<OrgIdData | null> => {

  if (!regexp.bytes32.exec(orgIdHash)) {
    throw new Error(`transferOrgIdOwnership: Invalid ORGiD hash: ${orgIdHash}`);
  }

  if (!regexp.ethereumAddress.exec(newOrgIdOwner)) {
    throw new Error(`transferOrgIdOwnership: Invalid newOrgIdOwner address: ${newOrgIdOwner}`);
  }

  const orgId = await getOrgId(contract, orgIdHash);

  if (!orgId) {
    throw new Error(`transferOrgIdOwnership: ORGiD not found: ${orgIdHash}`);
  }

  const receipt: ContractReceipt = await sendHelper(
    contract,
    'safeTransferFrom(address,address,uint256)',
    [
      orgId.owner,
      newOrgIdOwner,
      orgId.tokenId
    ],
    orgIdOwner,
    overrides,
    transactionHashCb,
    confirmations
  );

  if (!receipt.events) {
    throw new Error(
      'transferOrgIdOwnership: Unable to found events in the transaction receipt'
    );
  }

  const event = receipt.events.filter(e => e.event === 'Transfer')[0];

  if (!event.args) {
    throw new Error('Unable extract Transfer event data');
  }

  return getOrgIdByTokenId(contract, event.args.tokenId);
}
