import type { Contract } from 'web3-eth-contract';

export const getOrgIdsCount = async (
  contract: Contract
): Promise<number> => {

  // Call smart contract
  const count = await contract
    .methods['getOrgIdsCount()']
    .apply(
      contract,
      []
    )
    .call();

  return Number(count);
};
