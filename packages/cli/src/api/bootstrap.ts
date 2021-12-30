import type { ParsedArgv } from '../utils/env';
import type {
  ProjectOrgIdsReference
} from '../schema/types/project';
import type { AnySchema } from '@windingtree/org.id-utils/dist/object';
// @todo Move `AnySchema` type declaration to the top level
import type { ORGJSON } from '@windingtree/org.json-schema/types/org.json';
import { org as orgJsonSchema } from '@windingtree/org.json-schema';
import { object, regexp, common } from '@windingtree/org.id-utils';
import { printInfo, printWarn, printObject } from '../utils/console';
import { DateTime } from  'luxon';
import prompts from 'prompts';
import { utils as ethersUtils } from 'ethers';
import {
  addOrgIdToProject
} from './project';
import { blockchainNetworks, promptKeyPair } from './common';
import { write } from './fs';

const entityTypeSchemaPath = {
  legalEntity: 'definitions.LegalEntityReference',
  organizationalUnit: 'definitions.OrganizationalUnitReference'
};

// Convert JSON schema to a prompt config
export const promptSchema = async (
  schema: any,
  definitions: any,
  requiredOnly = true
): Promise<any> => {
  const out = {};
  let properties = schema.properties;

  if (requiredOnly && schema?.required.length > 0) {
    properties = Object
      .entries(properties)
      .reduce(
        (a, v) => {
          if (schema.required.includes(v[0])) {
            a[v[0]] = v[1];
          }
          return a;
        },
        {}
      );
  }

  for (const prop of Object.entries<any>(properties)) {
    const name = prop[0];
    let propSchema = prop[1];

    if (propSchema.$ref) {
      propSchema = definitions[propSchema.$ref.split('#/definitions/')[1]];
    }

    let promptsResult: any;

    switch (propSchema.type) {
      case 'object':
        promptsResult = await promptSchema(
          propSchema,
          definitions,
          requiredOnly
        );
        out[name] = promptsResult;
        break;
      case 'string':

        if (propSchema.enum) {
          promptsResult = await prompts(
            {
              type: 'select',
              name,
              message: `"${name}": ${propSchema.description}. Please choose an option`,
              choices: propSchema.enum.map(e => ({
                title: e,
                value: e
              }))
            }
          );
        } else {
          promptsResult = await prompts(
            {
              type: 'text',
              name,
              message: `"${name}": ${propSchema.description}`,
            }
          );
        }

        out[name] = promptsResult[name];
        break;
      case 'array':

        if (propSchema.items?.allOf[0]?.type === 'string') {

          promptsResult = await prompts(
            {
              type: 'list',
              name,
              message: `"${name}": ${propSchema.description}`,
              initial: '',
              separator: ','
            }
          );
          out[name] = promptsResult[name];
        } else {

          printWarn(
            `The property "${name}" of the profile has a type that not supported by CLI yet. Please edit this property in the ORG.JSON file manually`
          );
          promptsResult = [];
          out[name] = [];
        }
        break;
      default:
    }
  }

  return out;
}

// Operation that helps to bootstrap a new organization profile
export const bootstrapOrgJson = async (
  basePath: string,
  args: ParsedArgv
): Promise<ORGJSON> => {

  if (!args['--output']) {
    throw new Error(
      'Path to the output file must be provided using "--output" option'
    );
  }

  // Prompt for values required for an ORGiD generation
  const { networkId } = await prompts(
    [
      {
        type: 'select',
        name: 'networkId',
        message: 'Please choose a blockchain network where the ORGiD should be issued and press `Enter`',
        choices: blockchainNetworks.map(b => ({
          title: b.name,
          value: b.id
        })),
        initial: 0
      }
    ]
  );

  let accountAddress: string;

  const keyPairRecord = await promptKeyPair(
    basePath,
    'ethereum'
  );

  if (keyPairRecord) {

    accountAddress = keyPairRecord.publicKey as string;
  } else {

    const accountResult = await prompts({
      type: 'text',
      name: 'accountAddress',
      message: 'Enter your Ethereum account address that will be used for issuing of the ORGiD',
      validate: value =>
        regexp.ethereumAddress.exec(value) !== null
          ? true
          : 'Value must be a valid Ethereum address'
    });

    accountAddress = accountResult.accountAddress
  }

  // Normalizing the address
  accountAddress = ethersUtils.getAddress(accountAddress);

  const salt = common.generateSalt();
  const orgIdHash = common.generateOrgIdWithAddress(accountAddress, salt);
  const did = `did:orgid:${networkId}:${orgIdHash}`;

  printInfo(
    `\nORGiD DID salt: ${salt}
ORGiD owner address: ${accountAddress}
ORGiD DID: ${did}\n`
  );

  const verificationMethodTag = keyPairRecord
    ? keyPairRecord.tag
    : 'key1';

  const orgJsonTemplate: ORGJSON = {
    '@context': [
      'https://www.w3.org/ns/did/v1',
      'https://raw.githubusercontent.com/windingtree/org.json-schema/feat/new-orgid/src/context.json'
    ],
    id: did,
    created: DateTime.now().toISO(),
    verificationMethod: [
      {
        id: `${did}#${verificationMethodTag}`,
        controller: did,
        type: 'EcdsaSecp256k1RecoveryMethod2020',
        blockchainAccountId: `${accountAddress}@ethereum:${networkId}`
      }
    ]
  };

  // Selecting of an entity type
  const { entityType } = await prompts(
    {
      type: 'select',
      name: 'entityType',
      message: 'Please choose a type of entity and press `Enter`',
      choices: [
        {
          title: 'Legal Entity',
          value: 'legalEntity'
        },
        {
          title: 'Organizational Unit',
          value: 'organizationalUnit'
        },
        // @todo Add `Person` option
      ],
      initial: 0
    }
  );

  const selectedSchema = object.getDeepValue(
    orgJsonSchema,
    entityTypeSchemaPath[entityType]
  ) as AnySchema;

  if (!selectedSchema) {
    throw new Error('An entity type not been chosen');
  }

  // Selecting of an entity type
  const { requiredOnly } = await prompts(
    {
      type: 'select',
      name: 'requiredOnly',
      message: 'Do you want to fill all the properties or required only?',
      choices: [
        {
          title: 'Required only',
          value: true
        },
        {
          title: 'All the properties',
          value: false
        }
      ],
      initial: 0
    }
  );

  printInfo(
    `\nCreating a profile for "${entityType}" (${requiredOnly ? 'mandatory properties only' : 'all properties'})\n`
  );

  const entityProfile = await promptSchema(
    selectedSchema,
    orgJsonSchema.definitions,
    requiredOnly
  );
  orgJsonTemplate[entityType] = entityProfile;

  const outputFile = await write(
    basePath,
    args['--output'],
    JSON.stringify(orgJsonTemplate, null, 2)
  );

  printInfo(
    `The ORG.JSON for the DID ${did}:`
  );

  printObject(orgJsonTemplate);

  const orgIdRecord: ProjectOrgIdsReference = {
    did,
    salt,
    owner: accountAddress,
    orgJson: outputFile,
    date: DateTime.now().toISO()
  };

  await addOrgIdToProject(basePath, orgIdRecord);

  printInfo(
    `ORG.JSON template successfully created and saved on the path ${outputFile}`
  );

  return orgJsonTemplate;
};
