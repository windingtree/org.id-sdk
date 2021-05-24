import { Contract } from 'web3-eth-contract';
import { TransactionReceipt } from 'web3-eth';
import {
  CallbackFn
} from '../core'

export const sendHelper = async (
  contract: Contract,
  method: string,
  methodArguments: any[],
  owner: string,
  gasLimit?: string | number,
  gasPrice?: string | number,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  transactionHashCb: CallbackFn | void = () => {}
): Promise<TransactionReceipt> => {
  const sendParameters = {
    from: owner,
    ...(
      gasLimit
        ? {
          gas: gasLimit
        }
        : {}
    ),
    ...(
      gasPrice
        ? {
          gasPrice
        }
        : {}
    )
  };

  // Transaction gas estimation
  const gasAmount: number = await contract
    .methods[method]
    .apply(
      contract,
      methodArguments
    )
    .estimateGas(sendParameters);

  // Send transaction
  return new Promise(
    (resolve, reject) => {
      contract
        .methods[method]
        .apply(
          contract,
          methodArguments
        )
        .send({
          ...sendParameters,
          gas: gasAmount
        })
        .on('transactionHash', transactionHashCb)
        .on('receipt', resolve)
        .on('error', reject);
    }
  );
}
