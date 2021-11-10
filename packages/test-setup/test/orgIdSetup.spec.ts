import type { VoidSigner } from 'ethers';
import type { TestOverrideOptions } from '../src';
import type { ORGJSONVCNFT } from '@windingtree/org.json-schema/types/orgVc';
import {
  orgIdSetup,
  OrgIdSetup,
  generateSalt
}  from '../src';
import { HttpFileServer } from '@windingtree/org.id-test-http-server';
import { Contract } from 'ethers';
import { verifyVC } from '@windingtree/org.id-auth/dist/vc';
import chai, { expect } from 'chai';
import chp from 'chai-as-promised';
chai.use(chp);

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
        } = await setup.registerOrgId(owner as VoidSigner);
        expect(/^0x[a-fA-F0-9]{64}$/.exec(orgIdHash)).not.null;
        const ownerAddress = await owner.getAddress();
        const issuerBlockchainAccountId = `${ownerAddress}@eip155:1337`;
        await expect(verifyVC(orgJson, issuerBlockchainAccountId)).to.not.rejected;
      });

      it('should register new orgId and sign ORG.JSON with delegated key', async () => {
        // Create delegate ORGID
        const delegateOwner = setup.signers[3];
        const delegateAddress = await delegateOwner.getAddress();
        const { orgJson } = await setup.registerOrgId(delegateOwner as VoidSigner);
        const delegateBlockchainAccountId = `${delegateAddress}@eip155:1337`;

        // Create ORGiD
        const overrides: TestOverrideOptions = {
          signWithDelegate: {
            delegate: orgJson as ORGJSONVCNFT,
            signer: delegateOwner as VoidSigner
          }
        };
        const owner = setup.signers[4];
        await setup.registerOrgId(owner as VoidSigner, overrides);
        await expect(verifyVC(orgJson, delegateBlockchainAccountId)).to.not.rejected;
      });
    });
  });
});
