import Web3 from 'web3';

// Generate random salt string
export const generateSalt = (): string =>
  Web3.utils.keccak256(Math.random().toString());

// Generate ORGiD hash
export const generateOrgIdHash = (
  address: string,
  salt: string
): string => Web3.utils.soliditySha3(
  address,
  salt
) as string;
