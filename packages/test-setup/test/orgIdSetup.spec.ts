import {
  orgIdSetup,
  OrgIdSetup,
  generateSalt
}  from '../src';
import { HttpFileServer } from '@windingtree/org.id-test-http-server';
import { Contract } from 'ethers';
import { verifyVC } from '@windingtree/org.id-auth/dist/vc';
import { expect } from 'chai';

describe('OrgId setup', () => {
  let setup: OrgIdSetup;

  before(async () => {
    setup = await orgIdSetup();
  });

  after(async () => {
    setup.close();
  });

  it('should set up the OrgId environment', async () => {
    expect(Array.isArray(setup.signers)).to.equal(true);
    expect(Array.isArray(setup.accounts)).to.equal(true);
    expect(setup.orgIdContract).to.be.instanceOf(Contract);
    expect(setup.httpServer).to.be.instanceOf(HttpFileServer);
    expect(typeof setup.registerOrgId).to.equal('function');
    expect(typeof setup.buildOrgJson).to.equal('function');
  });

  describe('Utilities', () => {

    describe('#generateSalt', () => {

      it('should generate random unique bytes32 string', async () => {
        const salt = generateSalt();
        expect(/^0x[a-fA-F0-9]{64}$/.exec(salt)).not.null;
        expect(generateSalt()).not.to.equal(generateSalt());
      });
    });
  });

  describe('Methods', () => {

    describe('#registerOrgId', () => {

      it('should register new orgId', async () => {
        const owner = setup.signers[2];
        const {
          orgIdHash,
          orgJson
        } = await setup.registerOrgId(owner);
        expect(/^0x[a-fA-F0-9]{64}$/.exec(orgIdHash)).not.null;
        // console.log(JSON.stringify(orgJson, null, 2));
        const ownerAddress = await owner.getAddress();
        const issuerBlockchainAccountId = `${ownerAddress}@eip155:1337`;
        await expect(() => verifyVC(orgJson, issuerBlockchainAccountId)).not.to.throw;
      });
    });
  });
});
