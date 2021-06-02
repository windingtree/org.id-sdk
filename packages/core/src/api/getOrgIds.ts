import { Contract } from 'web3-eth-contract';

export const getOrgIds = async (
  contract: Contract,
  cursor?: number,
  count = 10
): Promise<string[]> => {

  if (typeof cursor === 'number' && cursor < 0) {
    throw new Error(`getOrgIds: Invalid cursor: ${cursor}`);
  }

  if (typeof count === 'number' && count < 1) {
    throw new Error(`getOrgIds: Invalid count: ${cursor}`);
  }

  if (typeof count === 'number' && cursor === undefined) {
    cursor = 0;
  }

  let methodArguments: number[] | undefined;

  if (typeof cursor === 'number') {
    methodArguments = [
      cursor,
      count
    ];
  }

  // Call smart contract
  return contract
    .methods[
      methodArguments
        ? 'getOrgIds(uint256,uint256)'
        : 'getOrgIds()'
    ]
    .apply(
      contract,
      methodArguments
    )
    .call();
};
