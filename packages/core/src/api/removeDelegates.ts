import type { Signer, ContractReceipt } from 'ethers';
import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { MethodOverrides, TxHashCallbackFn } from '../shared/sendHelper';
import type { RemoveDelegatesResult } from '../types';
import { regexp } from '@windingtree/org.id-utils';
import { sendHelper } from '../shared/sendHelper';

export const removeDelegates = async (
  contract: OrgIdBaseContract,
  orgIdHash: string,
  dids: string[],
  orgIdOwner: Signer,
  overrides?: MethodOverrides,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: TxHashCallbackFn = () => {},
  confirmations?: number
): Promise<RemoveDelegatesResult> => {

  if (!regexp.bytes32.exec(orgIdHash)) {
    throw new Error(`removeDelegates: Invalid ORGiD hash: ${orgIdHash}`);
  }

  const removeAll = Array.isArray(dids) && dids.length === 0;

  if (!removeAll) {
    dids.forEach(
      (did: string) => {
        if (!regexp.did.exec(did)) {
          throw new Error(`removeDelegates: Invalid DID: ${did}`);
        }
      }
    );
  }

  const receipt: ContractReceipt = await sendHelper(
    contract,
    removeAll
      ? 'removeDelegates(bytes32)'
      : 'removeDelegates(bytes32,string[])',
    removeAll
      ? [
        orgIdHash
      ]
      : [
        orgIdHash,
        dids
      ],
    orgIdOwner,
    overrides,
    transactionHashCb,
    confirmations
  );

  if (!receipt.events) {
    throw new Error(
      'removeDelegates: Unable to found events in the transaction receipt'
    );
  }

  const event = receipt.events.filter(e => e.event === 'OrgIdDelegatesRemoved')[0];

  if (!event.args) {
    throw new Error('Unable extract OrgIdDelegatesRemoved event data');
  }

  return {
    orgId: event.args.orgId,
    delegates: event.args.delegates
  };
};
