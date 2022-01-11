import type {
  OrgIdCliProjectReference,
  ProjectDeploymentReference,
  ProjectVcReference,
  ProjectOrgIdsReference,
  ProjectKeysReference,
  NetworkProviderConfigReference,
  ProjectConfigReference
} from '../schema/types/project';
import path from 'path';
import { DateTime } from  'luxon';
import { object } from '@windingtree/org.id-utils';
import {
  createDir,
  isFileExists,
  read,
  write
} from './fs';
import orgIdCliProjectSchema from '../schema/project.json';
import { printMessage, printObject, printWarn } from '../utils/console';

export interface AddDeploymentResult {
  add: ProjectDeploymentReference;
  remove: ProjectDeploymentReference | undefined;
}

export type KnownProjectConfigRecords =
  | NetworkProviderConfigReference;

export type ProjectConfigRecordsTypes = keyof ProjectConfigReference;

export const projectFileTemplate: OrgIdCliProjectReference = {
  note: 'This file is created automatically. Do not edit it manually'
};

// Validate a project file and save it
export const saveProjectFile = async (
  project: OrgIdCliProjectReference
): Promise<void> => {

  const validationResult = object.validateWithSchemaOrRef(
    orgIdCliProjectSchema,
    '',
    project
  );

  if (validationResult !== null) {
    throw new Error(
      `ORGiD CLI project file schema validation error: ${validationResult}`
    );
  }

  await write('.orgid', 'project.json', JSON.stringify(project, null, 2));
};

// Create an empty project file if not exists
export const getProjectFile = async (
  basePath: string
): Promise<OrgIdCliProjectReference> => {
  await createDir(basePath, '.orgid');
  const projectFile = '.orgid/project.json';
  const projectPath = path.resolve(basePath, projectFile);
  const fileExists = await isFileExists(projectPath);

  if (!fileExists) {
    await write(
      '.orgid',
      'project.json',
      JSON.stringify(projectFileTemplate, null, 2)
    );
  }

  return read(basePath, projectFile, true) as Promise<OrgIdCliProjectReference>;
};

// Add deployment info
export const addDeploymentToProject = async (
  basePath: string,
  deployment: ProjectDeploymentReference,
  orgIdDid?: string
): Promise<AddDeploymentResult> => {
  const project = await getProjectFile(basePath);
  const deployments = ((object.getDeepValue(project, 'deployments') || []) as ProjectDeploymentReference[]);
  const remove = deployments.filter(r => r.path === deployment.path)[0];
  const records = deployments.filter(r => r.path !== deployment.path);
  records.push(deployment);

  let orgIdsRecords: ProjectOrgIdsReference[];
  let updatedOrgIdRecord: ProjectOrgIdsReference | undefined;

  if (orgIdDid) {
    orgIdsRecords = ((object.getDeepValue(project, 'orgIds') || []) as ProjectOrgIdsReference[])
      .map(o => {
        if (o.did === orgIdDid) {
          o.orgIdVc = deployment.uri;
          o.date = DateTime.now().toISO();
          updatedOrgIdRecord = o;
        }
        return o;
      });
    project.orgIds = orgIdsRecords;
  }

  project.deployments = records;

  await saveProjectFile(project);

  printMessage(
    `\nThe project configuration file is updated with the record [deployment]:`
  );
  printObject(deployment);

  if (updatedOrgIdRecord) {
    printMessage(
      `\nThe project configuration file is updated with the record [ORGiD]:`
    );
    printObject(updatedOrgIdRecord);
  }

  return {
    add: deployment,
    remove
  };
};

// Add VC info
export const addVcToProject = async (
  basePath: string,
  vc: ProjectVcReference
): Promise<ProjectVcReference> => {
  const project = await getProjectFile(basePath);
  const records = ((object.getDeepValue(project, 'vcs') || []) as ProjectVcReference[])
    .filter(
      r => r.path !== vc.path &&
          (
            vc.type !== 'OrgJson' ||
            (vc.type === 'OrgJson' && r.did !== vc.did)
          )
    );
  records.push(vc);
  project.vcs = records;

  await saveProjectFile(project);

  printMessage(
    `\nThe project configuration file is updated with the record [VC]:`
  );
  printObject(vc);

  return vc;
};

// Add ORGiD info
export const addOrgIdToProject = async (
  basePath: string,
  orgId: ProjectOrgIdsReference
): Promise<ProjectOrgIdsReference> => {
  const project = await getProjectFile(basePath);
  const records = ((object.getDeepValue(project, 'orgIds') || []) as ProjectOrgIdsReference[])
    .filter(o => o.did !== orgId.did && o.orgJson !== orgId.orgJson);

  records.push(orgId);
  project.orgIds = records;

  await saveProjectFile(project);

  printMessage(
    `\nThe project configuration file is updated with the record [ORGiD]:`
  );
  printObject(orgId);

  return orgId;
};

// Update an ORGiD record
export const updateOrgIdRecord = async (
  basePath: string,
  did: string,
  partialRecord: Partial<ProjectOrgIdsReference>
): Promise<void> => {
  const project = await getProjectFile(basePath);
  let updatedRecord: ProjectOrgIdsReference | undefined;
  const records = ((object.getDeepValue(project, 'orgIds') || []) as ProjectOrgIdsReference[])
    .map(o => {
      if (o.did === did) {
        o = {
          ...o,
          ...partialRecord,
          date: DateTime.now().toISO()
        };
        updatedRecord = o;
      }
      return o;
    });

  if (updatedRecord) {
    project.orgIds = records;

    await saveProjectFile(project);

    printMessage(
      '\nThe project configuration file is updated with the record [ORGiD]:'
    );
    printObject(updatedRecord);
  } else {

    printWarn(
      `Something goes wrong. ORGiD record by DID: "${did}" has not been updated`
    );
  }
};

// Add key pair info
export const addKeyPairToProject = async (
  basePath: string,
  keyPair: ProjectKeysReference
): Promise<ProjectKeysReference> => {
  const project = await getProjectFile(basePath);
  const records = ((object.getDeepValue(project, 'keys') || []) as ProjectKeysReference[])
    .filter(o => o.tag !== keyPair.tag);

  records.push(keyPair);
  project.keys = records;

  await saveProjectFile(project);

  printMessage(
    `\nThe project configuration file is updated with the record [KeyPair]:`
  );
  printObject(keyPair);

  return keyPair;
};

// Add record to config
export const addConfigRecordToProject = async (
  basePath: string,
  recordKey: ProjectConfigRecordsTypes,
  configRecord: KnownProjectConfigRecords
): Promise<KnownProjectConfigRecords> => {
  const project = await getProjectFile(basePath);
  const records = ((object.getDeepValue(project, `config.${recordKey}`) || []) as KnownProjectConfigRecords[])
    .filter(o => o.id !== configRecord.id);

  records.push(configRecord);
  project.config = project.config ? project.config : {};
  project.config[recordKey] = records;

  await saveProjectFile(project);

  printMessage(
    `\nThe project config is updated with the record [${recordKey}]:`
  );
  printObject(configRecord);

  return configRecord;
};

// Get list of registered ORGiDs
export const getOrgIdsFromProject = async (
  basePath: string
): Promise<ProjectOrgIdsReference[]> => {
  const project = await getProjectFile(basePath);
  return ((object.getDeepValue(project, 'orgIds') || []) as ProjectOrgIdsReference[]);
};

// Get key pair by its tag from the project file
export const getKeyPairsFromProject = async (
  basePath: string,
  type?: string
): Promise<ProjectKeysReference[]> => {
  const project = await getProjectFile(basePath);
  return ((object.getDeepValue(project, 'keys') || []) as ProjectKeysReference[])
    .filter(o => type ? o.type === type : true);
};

// Get list of available network providers
export const getNetworkProvidersFromProject = async (
  basePath: string
): Promise<NetworkProviderConfigReference[]> => {
  const project = await getProjectFile(basePath);
  return ((object.getDeepValue(project, 'config.networkProviders') || []) as NetworkProviderConfigReference[]);
};

// Get network provider record by network Id
export const getNetworkProviderById = async (
  basePath: string,
  networkId: string
): Promise<NetworkProviderConfigReference> => {
  const project = await getProjectFile(basePath);
  return ((object.getDeepValue(project, 'config.networkProviders') || []) as NetworkProviderConfigReference[])
    .filter(p => p.id === networkId)[0];
};
