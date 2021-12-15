import type { ParsedArgv } from '../utils/env';
import type { DeploymentReference } from '../schema/project/types';
import path from 'path';
import { DateTime } from  'luxon';
import { addDeploymentToProject } from './project';
import { addToIpfs, removeFromIpfs } from './ipfs';
import { printInfo } from '../utils/console';

export const deployFileIpfs = async (
  basePath: string,
  args: ParsedArgv
): Promise<DeploymentReference> => {

  if (!args['--path']) {
    throw new Error(
      `Path to the file must be provided using "--path" option`
    );
  }

  const fileToDeploy = path.resolve(basePath, args['--path']);

  const { Hash } = await addToIpfs(fileToDeploy);

  // Build a deployment record
  const deploymentRecord: DeploymentReference = {
    type: 'ipfs',
    path: fileToDeploy,
    uri: `ipfs://${Hash}`,
    date: DateTime.now().toISO()
  };

  const { remove } = await addDeploymentToProject(basePath, deploymentRecord);

  printInfo(
    `The file ${fileToDeploy} has been successfully deployed to IPFS and pinned`
  );

  if (remove) {
    await removeFromIpfs(remove.uri.split('//')[1]);

    printInfo(
      `Old deployment ${remove.uri} has been successfully unpinned`
    );
  }

  return deploymentRecord;
};
