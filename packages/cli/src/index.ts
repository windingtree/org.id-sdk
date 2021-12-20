import './fixRandomSource';
import { parseArguments } from './utils/env';

// Operations API methods
import { createSignedOrgJson } from './api/orgJson';
import { deployFileIpfs } from './api/deployment';
import { bootstrapOrgJson } from './api/bootstrap';
import { keysImport } from './api/keysImport';

// Console helpers
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
      '--path': String,
      '--deploy:ipfs': String,
      '--keytype': String
    },
    argv
  );

  // Just for separation of the command line from the output
  console.log('\n');

  // Operation selector
  switch (args['--type'] as unknown) {
    case 'OrgJson':
      await createSignedOrgJson(basePath, args);
      break;
    case 'deploy:ipfs':
      await deployFileIpfs(basePath, args);
      break;
    case 'bootstrap':
      await bootstrapOrgJson(basePath, args);
      break;
    case 'keys:import':
      await keysImport(basePath, args);
      break;
    case undefined:
      throw new Error('Operation type must be provided using "--type" option');
    default:
      throw new Error(`Unknown operation type "${args['--type']}"`);
  }
};
