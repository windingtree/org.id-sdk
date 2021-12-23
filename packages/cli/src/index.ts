import './fixRandomSource';
import { parseArguments } from './utils/env';

// Operations API methods
import { manageConfigRecords } from './api/projectConfig';
import { createSignedOrgJson } from './api/orgJson';
import { deployFileIpfs } from './api/deployment';
import { bootstrapOrgJson } from './api/bootstrap';
import { keysImport } from './api/keysImport';
import { createOrgId } from './api/createOrgId';
import { changeOrgJson } from './api/changeOrgJson';

// Console helpers
export * as console from './utils/console';

// Main CLI handler
export const cli = async (
  basePath: string,
  argv: string[]
): Promise<void> => {
  const args = parseArguments(
    {
      '--operation': String,
      '--payload': String,
      '--method': String,
      '--output': String,
      '--nftName': String,
      '--nftDescription': String,
      '--nftImage': String,
      '--path': String,
      '--deploy': String,
      '--keytype': String,
      '--record': String,
      '--filetype': String
    },
    argv
  );

  // Just for separation of the command line from the output
  console.log('\n');

  // Operation selector
  switch (args['--operation'] as unknown) {
    case 'config':
      await manageConfigRecords(basePath, args);
      break;
    case 'orgIdVc':
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
    case 'create':
      await createOrgId(basePath, args);
      break;
    case 'update':
      await changeOrgJson(basePath, args);
      break;
    case undefined:
      throw new Error('Operation type must be provided using "--operation" parameter');
    default:
      throw new Error(`Unknown operation type "${args['--operation']}"`);
  }
};
