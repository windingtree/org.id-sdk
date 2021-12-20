import type { ParsedArgv } from '../utils/env';
import type { ProjectKeysReference } from '../schema/types/project';
import { regexp } from '@windingtree/org.id-utils';
import prompts from 'prompts';
import { DateTime } from  'luxon';
import { utils as ethersUtils } from 'ethers';
import { addKeyPairToProject } from './project';
import { encrypt } from './common';

// Import of Ethereum keys
export const importEip155 = async (
  basePath: string,
): Promise<ProjectKeysReference> => {
  const type = 'eip155';
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

  const keyPairRecord: ProjectKeysReference = {
    type,
    tag,
    publicKey: ethersUtils.getAddress(accountAddress),
    privateKey: encrypt(privateKey, password),
    date: DateTime.now().toISO()
  };

  return addKeyPairToProject(basePath, keyPairRecord);
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
    case 'eip155':
      await importEip155(basePath);
      break;
    // @todo Add more types
    default:
      throw new Error('Unknown key pair type')
  }
};
