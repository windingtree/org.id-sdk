import { createSignedOrgJson } from './api/orgJson';
import { parseArguments } from './utils/env';

export * as console from './utils/console';

// Main CLI handler
export const cli = async (
  basePath: string,
  argv: string[]
): Promise<void> => {
  const args = parseArguments(
    {
      '--type': String,
      '--payload': String,
      '--method': String,
      '--output': String,
      '--nftName': String,
      '--nftDescription': String,
      '--nftImage': String,
    },
    argv
  );

  // Operation selector
  switch (args['--type'] as unknown) {
    case 'OrgJson':
      return createSignedOrgJson(basePath, args);

    case undefined:
      throw new Error('Operation type must be provided using "--type" option');
    default:
      throw new Error(`Unknown operation type "${args['--type']}"`);
  }
};
