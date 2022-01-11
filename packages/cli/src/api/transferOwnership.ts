import type { ParsedArgv } from '../utils/env';
import {
  promptOrgId,
  prepareOrgIdApi
} from './common';
import { printInfo, printObject, printWarn } from '../utils/console';
import {
  updateOrgIdRecord
} from './project';

export const transferOwnership = async (
  basePath: string,
  args: ParsedArgv
): Promise<void> => {

  if (!args['--newOwner']) {
    throw new Error(
      'A new owner address must be provided using "--newOwner" option'
    );
  }

  const orgId = await promptOrgId(basePath, true);
  const {
    created,
    did
  } = orgId;

  if (!created) {
    throw new Error(`The ORGiD: "${did}" is not created yet`);
  }

  const {
    orgIdContract,
    signer,
    id
  } = await prepareOrgIdApi(basePath, orgId);

  const orgIdData = await orgIdContract.transferOrgIdOwnership(
    id,
    args['--newOwner'],
    signer,
    undefined,
    txHash => {
      printInfo(`\nTransaction hash: ${txHash}`);
    }
  );

  if (!orgIdData) {
    throw new Error('Unable to fetch ORGiD data');
  }

  printInfo(
    `ORGiD with DID: "${did}" has been successfully transferred to the new owner: "${args['--newOwner']}"`
  );

  printObject({
    ...orgIdData,
    tokenId: orgIdData.tokenId.toString()
  });

  printWarn(
    `The owner of the ORGiD has been changed. Please check that the ORGiD VC is signed with a proper key`
  );

  await updateOrgIdRecord(
    basePath,
    did,
    {
      owner: orgIdData.owner
    }
  );
};
