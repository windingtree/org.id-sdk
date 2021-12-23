import type { ParsedArgv } from '../utils/env';
import type {
  NetworkProviderConfigReference
} from '../schema/types/project';
import prompts from 'prompts';
import { DateTime } from  'luxon';
import { printInfo } from '../utils/console';
import { encrypt } from './common';
import {
  addConfigRecordToProject
} from './project';

// Manage provider config
export const manageProvider = async (
  basePath: string
): Promise<NetworkProviderConfigReference> => {
  const { id, uri, password } = await prompts([
    {
      type: 'number',
      name: 'id',
      message: 'Please enter a network Id'
    },
    {
      type: 'select',
      name: 'requireEncryption',
      message: 'Do you want to encrypt the provider URI?',
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
    },
    {
      type: prevChoice => prevChoice ? 'password' : 'text',
      name: 'uri',
      message: 'Please enter the provider URI',
    },
    {
      type: (_, v) => v.requireEncryption ? 'password' : null,
      name: 'password',
      message: 'Please provide a password',
      validate: value =>
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.exec(value)
          ? true
          : 'Password must consist of a minimum of eight characters, at least one letter and one number'
    }
  ]);

  const configRecordTemplate: NetworkProviderConfigReference = {
    id,
    uri: password ? encrypt(uri, password) : uri,
    encrypted: !!password,
    date: DateTime.now().toISO()
  };

  const configRecord = await addConfigRecordToProject(
    basePath,
    'networkProviders',
    configRecordTemplate
  );

  printInfo(
    `Config record for the network #${id} has been successfully added\n`
  );

  return configRecord;
};

// Managing of config records
export const manageConfigRecords = async (
  basePath: string,
  args: ParsedArgv
): Promise<void> => {

  if (!args['--record']) {
    throw new Error(
      'Project config record type must be provided using "--record" option'
    );
  }

  switch (args['--record']) {
    case 'networkProviders':
      await manageProvider(basePath);
      break;
    // @todo Add more record types
    default:
      throw new Error(`Unknown config record type: "${args['--record']}"`)
  }
};
