import type {
  OrgIdCliProjectReference,
  DeploymentReference,
  VcReference,
  OrgIdsReference
} from '../schema/project/types';
import path from 'path';
import { object } from '@windingtree/org.id-utils';
import {
  createDir,
  isFileExists,
  read,
  write
} from './fs';
import orgIdCliProjectSchema from '../schema/project.json';
import { printMessage, printObject } from '../utils/console';

export interface AddDeploymentResult {
  add: DeploymentReference;
  remove: DeploymentReference | undefined;
}

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
  deployment: DeploymentReference
): Promise<AddDeploymentResult> => {
  const project = await getProjectFile(basePath);
  const deployments = ((object.getDeepValue(project, 'deployments') || []) as DeploymentReference[]);
  const remove = deployments.filter(r => r.path === deployment.path)[0];
  const records = deployments.filter(r => r.path !== deployment.path);
  records.push(deployment);
  project.deployments = records;

  await saveProjectFile(project);

  printMessage(
    `\nThe project configuration file is updated with the record [deployment]:`
  );
  printObject(deployment);

  return {
    add: deployment,
    remove
  };
};

// Add VC info
export const addVcToProject = async (
  basePath: string,
  vc: VcReference
): Promise<VcReference> => {
  const project = await getProjectFile(basePath);
  const records = ((object.getDeepValue(project, 'vcs') || []) as VcReference[])
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
  orgId: OrgIdsReference
): Promise<OrgIdsReference> => {
  const project = await getProjectFile(basePath);
  const records = ((object.getDeepValue(project, 'orgIds') || []) as OrgIdsReference[])
    .filter(o => o.did !== orgId.did);

  records.push(orgId);
  project.orgIds = records;

  await saveProjectFile(project);

  printMessage(
    `\nThe project configuration file is updated with the record [ORGiD]:`
  );
  printObject(orgId);

  return orgId;
};
