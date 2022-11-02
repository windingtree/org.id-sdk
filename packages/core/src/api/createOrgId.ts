import type { Signer, ContractReceipt } from 'ethers';
import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { OrgIdData } from '../types';
import type { MethodOverrides, TxHashCallbackFn } from '../shared/sendHelper';
import { regexp } from '@windingtree/org.id-utils';
import { getOrgId } from './getOrgId';
import { sendHelper } from '../shared/sendHelper';

export const createOrgId = async (
  contract: OrgIdBaseContract,
  salt: string,
  orgJsonUri: string,
  orgIdOwner: Signer,
  overrides?: MethodOverrides,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: TxHashCallbackFn = () => {},
  confirmations?: number
): Promise<OrgIdData | null> => {

  if (!regexp.bytes32.exec(salt)) {
    throw new Error(`createOrgId: Invalid ORGiD salt: ${salt}`);
  }

  if (!orgJsonUri || orgJsonUri === '') {
    throw new Error(`createOrgId: Invalid orgJsonUri value: ${orgJsonUri}`);
  }

  const receipt: ContractReceipt = await sendHelper(
    contract,
    'createOrgId(bytes32,string)',
    [
      salt,
      orgJsonUri
    ],
    orgIdOwner,
    overrides,
    transactionHashCb,
    confirmations
  );

  if (!receipt.events) {
    throw new Error(
      'createOrgId: Unable to found events in the transaction receipt'
    );
  }

  const event = receipt.events.filter(e => e.event === 'OrgIdCreated')[0];

  if (!event.args) {
    throw new Error('Unable extract OrgIdCreated event data');
  }

  return getOrgId(contract, event.args.orgId);
}

export const createOrgIdWithDelegates = async (
  contract: OrgIdBaseContract,
  salt: string,
  orgJsonUri: string,
  delegates: string[],
  orgIdOwner: Signer,
  overrides?: MethodOverrides,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: TxHashCallbackFn = () => {},
  confirmations?: number
): Promise<OrgIdData | null> => {
  if (!regexp.bytes32.exec(salt)) {
    throw new Error(`createOrgIdWithDelegates: Invalid ORGiD salt: ${salt}`);
  }

  if (!orgJsonUri || orgJsonUri === '') {
    throw new Error(`createOrgIdWithDelegates: Invalid orgJsonUri value: ${orgJsonUri}`);
  }

  const receipt: ContractReceipt = await sendHelper(
    contract,
    'createOrgId(bytes32,string,string[])',
    [
      salt,
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
      'createOrgIdWithDelegates: Unable to found events in the transaction receipt'
    );
  }

  const event = receipt.events.filter(e => e.event === 'OrgIdCreated')[0];

  if (!event.args) {
    throw new Error(
      'createOrgIdWithDelegates: Unable extract OrgIdCreated event data'
    );
  }

  return getOrgId(contract, event.args.orgId);
};

export const createOrgIdFor = async (
  contract: OrgIdBaseContract,
  orgId: string,
  orgJsonUri: string,
  orgIdOwner: string,
  delegates: string[],
  creator: Signer,
  overrides?: MethodOverrides,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: TxHashCallbackFn = () => {},
  confirmations?: number
): Promise<OrgIdData | null> => {
  if (!orgJsonUri || orgJsonUri === '') {
    throw new Error(`createOrgIdFor: Invalid orgJsonUri value: ${orgJsonUri}`);
  }

  const receipt: ContractReceipt = await sendHelper(
    contract,
    'createOrgIdFor(bytes32,string,address,string[])',
    [
      orgId,
      orgJsonUri,
      orgIdOwner,
      delegates
    ],
    creator,
    overrides,
    transactionHashCb,
    confirmations
  );

  if (!receipt.events) {
    throw new Error(
      'createOrgIdFor: Unable to found events in the transaction receipt'
    );
  }

  const event = receipt.events.filter(e => e.event === 'OrgIdCreated')[0];

  if (!event.args) {
    throw new Error('createOrgIdFor: Unable extract OrgIdCreated event data');
  }

  return getOrgId(contract, event.args.orgId);
};
