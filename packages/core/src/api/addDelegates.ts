import type { Signer, ContractReceipt } from 'ethers';
import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { MethodOverrides, TxHashCallbackFn } from '../shared/sendHelper';
import type { AddDelegatesResult } from '../types';
import { regexp } from '@windingtree/org.id-utils';
import { sendHelper } from '../shared/sendHelper';

export const addDelegates = async (
  contract: OrgIdBaseContract,
  orgIdHash: string,
  dids: string[],
  orgIdOwner: Signer,
  overrides?: MethodOverrides,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: TxHashCallbackFn = () => {},
  confirmations?: number
): Promise<AddDelegatesResult> => {

  if (!regexp.bytes32.exec(orgIdHash)) {
    throw new Error(`addDelegates: Invalid ORGiD hash: ${orgIdHash}`);
  }

  dids.forEach(
    (did: string) => {
      if (!regexp.did.exec(did)) {
        throw new Error(`addDelegates: Invalid DID: ${did}`);
      }
    }
  );

  const receipt: ContractReceipt = await sendHelper(
    contract,
    'addDelegates(bytes32,string[])',
    [
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
      'addDelegates: Unable to found events in the transaction receipt'
    );
  }

  const event = receipt.events.filter(e => e.event === 'OrgIdDelegatesAdded')[0];

  if (!event.args) {
    throw new Error('Unable extract OrgIdDelegatesAdded event data');
  }

  return {
    orgId: event.args.orgId,
    delegates: event.args.delegates
  };
};
