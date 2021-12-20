import type {
  ProjectKeysReference
} from '../schema/types/project';
import { AES, enc } from 'crypto-js';
import prompts from 'prompts';
import {
  getKeyPairByTagFromProject
} from './project';

// Encrypts the data
export const encrypt = (data: string, password: string | unknown): string => {
  try {
    return AES
      .encrypt(data, password as string)
      .toString();
  } catch (error) {
    throw Error('Unable to encrypt');
  }
};

// Decrypts the data
export const decrypt = (encData: string, password: string): string => {
  let decrypted: string;
  try {
    decrypted = AES
      .decrypt(encData, password)
      .toString(enc.Utf8);
    if (decrypted === '') {
      throw Error('Decrypted data is empty');
    }
  } catch (error) {
    throw Error('Unable to decrypt');
  }
  return decrypted;
};

// Prompt for registered key pair
export const promptKeyPair = async (
  basePath: string,
  validate?: (record: ProjectKeysReference) => void
): Promise<ProjectKeysReference | undefined> => {

  const { useRegisteredAddress } = await prompts({
    type: 'select',
    name: 'useRegisteredAddress',
    message: 'Do you want to use registered key pair?',
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
  });

  let keyPairRecord: ProjectKeysReference | undefined;

  if (useRegisteredAddress) {

    const { keyTag } = await prompts({
      type: 'text',
      name: 'keyTag',
      message: 'Enter registered Ethereum account key pair tag'
    });

    keyPairRecord = await getKeyPairByTagFromProject(basePath, keyTag);

    if (typeof validate === 'function') {
      validate(keyPairRecord);
    }

    const { password } = await prompts({
      type: 'password',
      name: 'password',
      message: `Enter the password for key pair "${keyTag}"`
    });

    keyPairRecord.privateKey = decrypt(keyPairRecord.privateKey, password);
  }

  return keyPairRecord;
};
