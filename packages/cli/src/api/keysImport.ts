import type { ParsedArgv } from '../utils/env';
import type {
  ProjectKeysReference
} from '../schema/types/project';
import prompts from 'prompts';
import { regexp } from '@windingtree/org.id-utils';
import { DateTime } from  'luxon';
import { utils as ethersUtils } from 'ethers';
import {
  addKeyPairToProject
} from './project';
import { printInfo } from '../utils/console';
import { encrypt } from './common';

// Import of Ethereum keys
export const importEthereum = async (
  basePath: string,
): Promise<ProjectKeysReference> => {
  const { tag, accountAddress, privateKey } = await prompts([
    {
      type: 'text',
      name: 'tag',
      message: 'Please enter an unique key tag'
    },
    {
      type: 'text',
      name: 'accountAddress',
      message: 'Please enter an Ethereum account address',
      validate: value =>
          regexp.ethereumAddress.exec(value) !== null
            ? true
            : 'Value must be a valid Ethereum address'
    },
    {
      type: 'password',
      name: 'privateKey',
      message: 'Please enter a private key for the Ethereum account',
    }
  ]);

  if (!accountAddress || ! privateKey) {
    throw new Error(
      'Both the account address and its private key must be provided'
    );
  }

  const { password } = await prompts(
    {
      type: 'password',
      name: 'password',
      message: 'Please provide a password',
      validate: value =>
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.exec(value)
          ? true
          : 'Password must consist of a minimum of eight characters, at least one letter and one number'
    }
  );

  const keyPairRecord = await addKeyPairToProject(
    basePath,
    {
      type: 'ethereum',
      tag,
      publicKey: ethersUtils.getAddress(accountAddress),
      privateKey: encrypt(privateKey, password),
      date: DateTime.now().toISO()
    }
  );

  printInfo(
    `Key of type "ethereum" with tag "${tag}" has been successfully imported\n`
  );

  return keyPairRecord;
};

// Import key
export const keysImport = async (
  basePath: string,
  args: ParsedArgv
): Promise<void> => {

  if (!args['--keytype']) {
    throw new Error(
      'Key pair type must be provided using "--keytype" option'
    );
  }

  switch (args['--keytype']) {
    case 'ethereum':
      await importEthereum(basePath);
      break;
    // @todo Add more types
    default:
      throw new Error(`Unknown key pair type: "${args['--keytype']}"`)
  }
};
