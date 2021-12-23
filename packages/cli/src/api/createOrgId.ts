import type { OrgIdData } from '@windingtree/org.id-core/';
import type { ParsedArgv } from '../utils/env';
import prompts from 'prompts';
import {
  promptOrgId,
  prepareOrgIdApi
} from './common';
import {
  setCreatedOrgIdRecord
} from './project';
import { printInfo, printMessage, printObject, printWarn } from '../utils/console';
import { changeOrgJson } from './changeOrgJson';

export interface OrgIdCreationResult extends Omit<OrgIdData, 'tokenId'> {
  tokenId: string;
}

// Create new ORGiD
export const createOrgId = async (
  basePath: string,
  args: ParsedArgv
): Promise<void> => {

  const orgId = await promptOrgId(basePath, false);
  const {
    created,
    did,
    orgIdVc,
    salt
  } = orgId;

  if (created) {

    printWarn(
      `The ORGiD with DID" "${did}" already created`
    );

    const { doChange } = await prompts({
      type: 'select',
      name: 'doChange',
      message: `Do you want to save updated ORGiD VC?`,
      choices: [
        {
          title: 'Yes',
          value: true
        },
        {
          title: 'No',
          value: false
        }
      ],
      initial: 0
    }) as { doChange: boolean };

    if (doChange) {
      return changeOrgJson(basePath, args);
    }

    return;
  }

  if (!orgIdVc) {
    throw new Error(
      'Chosen ORGiD doe not have registered ORGiD VC yet. Please create it first using operation "--orgIdVc"'
    );
  }

  const {
    orgIdContract,
    signer
  } = await prepareOrgIdApi(basePath, orgId);

  printMessage(
    '\nSending transaction "createOrgId(bytes32,string)"...'
  );

  const orgIdData = await orgIdContract.createOrgId(
    salt,
    orgIdVc,
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
    `ORGiD with DID: "${did}" has been successfully created`
  );

  printObject({
    ...orgIdData,
    tokenId: orgIdData.tokenId.toString()
  });

  await setCreatedOrgIdRecord(basePath, did);
};
