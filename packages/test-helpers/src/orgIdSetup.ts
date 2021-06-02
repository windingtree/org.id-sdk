// eslint-disable-next-line @typescript-eslint/no-var-requires
const contract = require('@truffle/contract');
import Web3 from 'web3';
import { OrgIdContract } from '@windingtree/org.id';
import { ganache, DevelopmentServer } from './ganache';
import { HttpFileServer, File } from './httpServer';

export interface OrgIdSetup {
  accounts: string[];
  owner: string;
  address: string;
  server: DevelopmentServer;
  httpServer: HttpFileServer;
  registerOrgId(orgIdOwner: string): Promise<string>;
  close(): Promise<void>;
}

export interface ContractObject {
  createOrgId(salt: string, arg1: string, arg2: { from: string; }): Promise<any>;
}

export const generateSalt = (): string => Web3.utils.keccak256(Math.random().toString());

const registerOrgId = async (
  contract: ContractObject,
  httpServer: HttpFileServer,
  owner: string,
  orgJsonFile?: File
): Promise<string> => {
  const salt = generateSalt();
  const fileToAdd = orgJsonFile || {
    type: 'json',
    path: `${salt}.json`,
    content: '{"test":"test"}'
  }
  const file = httpServer.addFile(fileToAdd);
  const result = await contract.createOrgId(
    salt,
    `${httpServer.baseUri}/${file.path}`,
    {
      from: owner
    }
  );
  const event = result.logs.filter(e => e.event === 'OrgIdCreated')[0];
  return event.args.orgId;
}

export const orgIdSetup = async (): Promise<OrgIdSetup> => {
  // Setup Ganache server
  const server = await ganache();
  const accounts = await server.getAccounts();
  const owner = accounts[0];

  // Deploy OrgId contract
  const OrgId = contract(OrgIdContract);
  OrgId.setProvider(server.server.provider);
  const orgIdContract = await OrgId.new({
    from: owner
  });
  await orgIdContract.initializeUpgrade_2_0_0({
    from: owner
  });

  // Set up Http server
  const httpServer = new HttpFileServer();
  httpServer.start();

  return {
    accounts,
    owner,
    address: orgIdContract.address,
    server,
    httpServer,
    registerOrgId: orgIdOwner => registerOrgId(
      orgIdContract,
      httpServer,
      orgIdOwner
    ),
    close: async () => {
      httpServer.close();
      await server.close();
    }
  };
};
