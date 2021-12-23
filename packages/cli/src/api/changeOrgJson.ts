import type { ParsedArgv } from '../utils/env';
import {
  promptOrgId,
  prepareOrgIdApi
} from './common';
import {
  setCreatedOrgIdRecord
} from './project';
import prompts from 'prompts';
import { printInfo, printMessage, printObject, printWarn } from '../utils/console';
import { createOrgId } from './createOrgId';

export const changeOrgJson = async (
  basePath: string,
  args: ParsedArgv
): Promise<void> => {

  const orgId = await promptOrgId(basePath, true);
  const {
    created,
    did,
    orgIdVc
  } = orgId;

  if (!created) {

    printWarn(
      `ORGiD with "${did}" has not been created`
    );

    const { doCreate } = await prompts({
      type: 'select',
      name: 'doCreate',
      message: `Do you want to create ORGiD?`,
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
    }) as { doCreate: boolean };

    if (doCreate) {
      return createOrgId(basePath, args);
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
    signer,
    id
  } = await prepareOrgIdApi(basePath, orgId);

  printMessage(
    '\nSending transaction "setOrgJson(bytes32,string)"...'
  );

  const orgIdData = await orgIdContract.setOrgJson(
    id,
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
    `ORGiD with DID: "${did}" has been successfully updated`
  );

  printObject({
    ...orgIdData,
    tokenId: orgIdData.tokenId.toString()
  });
};
