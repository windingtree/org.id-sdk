import { ganache } from '@windingtree/org.id-test-helpers';
import { OrgIdContract } from '@windingtree/org.id';
const truffleContract = require('@truffle/contract'); // For some reason Typescript cannot compile "import contract from '@truffle/contract'"

// export interface OrgIdSetup {
//   accounts: string[];
//   owner: string;
//   address: any;
//   provider: Ganache.Provider;
// }

const OrgId = truffleContract(OrgIdContract);

export const setupOrgId = async (): Promise<any> => {
  const server = await ganache();
  const accounts = await server.getAccounts();
  const owner = accounts[0];
  OrgId.setProvider(server.server.provider);
  const orgIdContract = await OrgId.new({
    from: owner
  });
  console.log(orgIdContract);

  return {
    accounts,
    owner,
    address: orgIdContract.address,
    provider: server.server.provider
  };
};

