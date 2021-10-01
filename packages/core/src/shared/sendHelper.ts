import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { ContractReceipt, Signer, BigNumber } from 'ethers';
import { BigNumber as BN } from 'ethers';

export interface MethodOverrides {
  gas?: BigNumber;
  gasPrice?: BigNumber;
  value?: BigNumber;
}

export type TxHashCallbackFn = (txHash: string) => void;

export const sendHelper = async (
  contract: OrgIdBaseContract,
  method: string,
  args: unknown[],
  owner: Signer,
  overrides?: MethodOverrides,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb?: TxHashCallbackFn,
  confirmations = 3
): Promise<ContractReceipt> => {

  // Build function overrides
  const methodOverrides = overrides ? overrides : {};

  // Build function parameters
  const methodArguments = [
    ...args,
    methodOverrides
  ];

  // Assign owner as a Signer
  const contractWithSigner = contract.connect(owner);

  // Transaction gas estimation
  const gasAmount: BigNumber = await contractWithSigner
    .estimateGas[method](
      ...methodArguments
    );

  // Validate available gas
  if (BN.isBigNumber(methodOverrides.gasPrice)) {
    const balance = await owner.getBalance();

    if (methodOverrides.gasPrice.mul(gasAmount).gt(balance)) {
      throw new Error('Insufficient gas or always failing transaction');
    }
  }

  // Send transaction
  const tx = await contractWithSigner[method](...methodArguments);

  if (typeof transactionHashCb === 'function') {
    transactionHashCb(tx.transactionHash);
  }

  // Wait for specified number of tx confirmations
  return await tx.wait(confirmations);
}
