import type { Signer, ContractReceipt } from 'ethers';
import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { OrgIdData } from '../types';
import type { MethodOverrides, TxHashCallbackFn } from '../shared/sendHelper';

import { regexp } from '@windingtree/org.id-utils';
import { getOrgId } from './getOrgId';
import { sendHelper } from '../shared/sendHelper'

export const setOrgJson = async (
  contract: OrgIdBaseContract,
  orgIdHash: string,
  orgJsonUri: string,
  orgIdOwner: Signer,
  overrides?: MethodOverrides,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: TxHashCallbackFn = () => {},
  confirmations?: number
): Promise<OrgIdData | null> => {

  if (!regexp.bytes32.exec(orgIdHash)) {
    throw new Error(`setOrgJson: Invalid ORGiD hash: ${orgIdHash}`);
  }

  if (!orgJsonUri || orgJsonUri === '') {
    throw new Error(`setOrgJson: Invalid orgJsonUri value: ${orgJsonUri}`);
  }

  const orgId = await getOrgId(contract, orgIdHash);

  if (!orgId) {
    throw new Error(`setOrgJson: ORGiD not found: ${orgIdHash}`);
  }

  const receipt: ContractReceipt = await sendHelper(
    contract,
    'setOrgJson(bytes32,string)',
    [
      orgIdHash,
      orgJsonUri
    ],
    orgIdOwner,
    overrides,
    transactionHashCb,
    confirmations
  );

  if (!receipt.events) {
    throw new Error(
      'setOrgJson: Unable to found events in the transaction receipt'
    );
  }

  const event = receipt.events.filter(e => e.event === 'OrgJsonUriChanged')[0];

  if (!event.args) {
    throw new Error('Unable extract OrgJsonUriChanged event data');
  }

  return getOrgId(contract, event.args.orgId);
};

export const setOrgJsonWithDelegates = async (
  contract: OrgIdBaseContract,
  orgIdHash: string,
  orgJsonUri: string,
  delegates: string[],
  orgIdOwner: Signer,
  overrides?: MethodOverrides,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: TxHashCallbackFn = () => {},
  confirmations?: number
): Promise<OrgIdData | null> => {

  if (!regexp.bytes32.exec(orgIdHash)) {
    throw new Error(`setOrgJsonWithDelegates: Invalid ORGiD hash: ${orgIdHash}`);
  }

  if (!orgJsonUri || orgJsonUri === '') {
    throw new Error(`setOrgJsonWithDelegates: Invalid orgJsonUri value: ${orgJsonUri}`);
  }

  const orgId = await getOrgId(contract, orgIdHash);

  if (!orgId) {
    throw new Error(`setOrgJsonWithDelegates: ORGiD not found: ${orgIdHash}`);
  }

  const receipt: ContractReceipt = await sendHelper(
    contract,
    'setOrgJson(bytes32,string,string[])',
    [
      orgIdHash,
      orgJsonUri,
      delegates
    ],
    orgIdOwner,
    overrides,
    transactionHashCb,
    confirmations
  );

  if (!receipt.events) {
    throw new Error(
      'setOrgJsonWithDelegates: Unable to found events in the transaction receipt'
    );
  }

  const event = receipt.events.filter(e => e.event === 'OrgJsonUriChanged')[0];

  if (!event.args) {
    throw new Error(
      'setOrgJsonWithDelegates: Unable extract OrgJsonUriChanged event data'
    );
  }

  return getOrgId(contract, event.args.orgId);
};
