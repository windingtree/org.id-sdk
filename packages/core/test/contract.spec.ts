import type { Signer } from 'ethers';
import type { OrgIdSetup } from '@windingtree/org.id-test-setup';
import type { OrgIdData } from '../src/types';
import { orgIdSetup, generateSalt } from '@windingtree/org.id-test-setup';
import { ethers, providers, Contract, BigNumber as BN } from 'ethers';
import { regexp } from '@windingtree/org.id-utils';
import { OrgIdContract } from '../src';
import chai, { expect } from 'chai';
import chp from 'chai-as-promised';
chai.use(chp);

type TestInput = any;

describe('OrgId contract', () => {
  let setup: OrgIdSetup;
  let orgIdContractAddress: string;
  let contract: OrgIdContract;
  let orgIdOwner: Signer;
  let orgIdHash: string;

  before(async () => {
    setup = await orgIdSetup();
    orgIdContractAddress = setup.orgIdContract.address;
    orgIdOwner = setup.signers[1];
    const regResult = await setup.registerOrgId(orgIdOwner);
    orgIdHash = regResult.orgIdHash;
    contract = new OrgIdContract(
      orgIdContractAddress,
      setup.orgIdContract.provider
    );
  });

  after(async () => {
    setup.close();
  });

  describe('Initialization', () => {

    it('should expose readonly properties', async () => {
      expect(contract).to.have.property('address');
      expect(regexp.ethereumAddress.exec(contract.address)).not.to.null;
      expect(contract).to.have.property('provider');
      expect(contract.provider).to.be.instanceOf(providers.JsonRpcProvider);
      expect(contract).to.have.property('contract');
      expect(contract.contract).to.be.instanceOf(Contract);
    });

    it('should fail if invalid orgIdContractAddress provided', async () => {
      let invalidNetworkOrAddress: TestInput = '';
      expect(() => {
        new OrgIdContract(
          invalidNetworkOrAddress,
          setup.orgIdContract.provider
        )
      }).to.throw(
        `orgIdContract: Invalid smart contract address: ${invalidNetworkOrAddress}`
      );
      invalidNetworkOrAddress = '0x3219B2904F1e4BF';
      expect(() => {
        new OrgIdContract(
          invalidNetworkOrAddress,
          setup.orgIdContract.provider
        )
      }).to.throw(
        `orgIdContract: Invalid smart contract address: ${invalidNetworkOrAddress}`
      );
      invalidNetworkOrAddress = undefined;
      expect(() => {
        new OrgIdContract(
          invalidNetworkOrAddress,
          setup.orgIdContract.provider
        )
      }).to.throw(
        `orgIdContract: Invalid smart contract address: ${invalidNetworkOrAddress}`
      );
    });

    it('should fail if invalid web3ProviderOrUri provided', async () => {
      let invalidWeb3ProviderOrUri: TestInput = undefined;
      expect(() => {
        new OrgIdContract(
          orgIdContractAddress,
          invalidWeb3ProviderOrUri
        )
      }).to.throw(`orgIdContract: Unable to initialize provider`);
      invalidWeb3ProviderOrUri = '';
      expect(() => {
        new OrgIdContract(
          orgIdContractAddress,
          invalidWeb3ProviderOrUri
        )
      }).to.throw(`orgIdContract: Unable to initialize provider`);
    });
  });

  describe('Methods', () => {

    const checkOrgId = (orgId, orgIdHash?: string) => {
      expect(orgId).to.have.property('tokenId');
      expect(BN.isBigNumber(orgId.tokenId)).to.equal(true);
      expect(orgId.tokenId).not.to.equal(BN.from(0));
      expect(regexp.bytes32.exec(orgId.orgId)).not.to.null;
      expect(orgId).to.have.property('orgId');
      if (orgIdHash) {
        expect(orgId.orgId).to.equal(orgIdHash);
      }
      expect(orgId).to.have.property('owner');
      expect(regexp.ethereumAddress.exec(orgId.owner)).not.to.null;
      expect(orgId).to.have.property('created');
      expect(regexp.isoDate.exec(orgId.created)).not.to.null;
      expect(orgId).to.have.property('orgJsonUri');
      expect(typeof orgId.orgJsonUri).to.equal('string');
    };

    describe('#getOrgId', () => {

      it('method exposed', async () => {
        expect(typeof contract.getOrgId).to.equal('function');
      });

      it('should fail if wrong orgIdHash provided', async () => {
        let wrongOrgIdHash: TestInput = '';
        expect(contract.getOrgId(wrongOrgIdHash))
          .to.rejectedWith(`getOrgId: Invalid ORGiD hash: ${wrongOrgIdHash}`);
        wrongOrgIdHash = undefined;
        expect(contract.getOrgId(wrongOrgIdHash))
          .to.rejectedWith(`getOrgId: Invalid ORGiD hash: ${wrongOrgIdHash}`);
      });

      it('should return null if orgId not found', async () => {
        expect(
          await contract.getOrgId(
            '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d'
            )
        ).to.be.null;
      });

      it('should return orgId', async () => {
        const orgId = await contract.getOrgId(orgIdHash);
        checkOrgId(orgId, orgIdHash);
      });
    });

    describe('#createOrgId', () => {

      it('method exposed', async () => {
        expect(typeof contract.createOrgId).to.equal('function');
      });

      it('should fail if invalid salt provided', async () => {
        let invalidSalt: TestInput = '';
        await expect(
          contract.createOrgId(
            invalidSalt,
            'http://test.uri',
            setup.signers[2]
          )
        ).to.rejectedWith(`createOrgId: Invalid ORGiD salt: ${invalidSalt}`);
        invalidSalt = undefined;
        await expect(
          contract.createOrgId(
            invalidSalt,
            'http://test.uri',
            setup.signers[2]
          )
        ).to.rejectedWith(`createOrgId: Invalid ORGiD salt: ${invalidSalt}`);
      });

      it('should fail if invalid orgJsonUri provided', async () => {
        let invalidUri: TestInput = '';
        await expect(
          contract.createOrgId(
            generateSalt(),
            invalidUri,
            setup.signers[2]
          )
        ).to.rejectedWith(`createOrgId: Invalid orgJsonUri value: ${invalidUri}`);
        invalidUri = undefined;
        await expect(
          contract.createOrgId(
            generateSalt(),
            invalidUri,
            setup.signers[2]
          )
        ).to.rejectedWith(`createOrgId: Invalid orgJsonUri value: ${invalidUri}`);
      });

      it('should fail if invalid orgIdOwner provided', async () => {
        const invalidSigner: TestInput = undefined;
        await expect(
          contract.createOrgId(
            generateSalt(),
            'http://test.uri',
            invalidSigner
          )
        ).to.rejectedWith('Invalid transaction signer');
      });

      it('should create orgId (no extra params)', async () => {
        const orgId = await contract.createOrgId(
          generateSalt(),
          'http://test.uri',
          setup.signers[2]
        );
        checkOrgId(orgId);
      });

      it('should create orgId (with gasPrice, tx callback)', async () => {
        let txHash: any;
        const orgId = await contract.createOrgId(
          generateSalt(),
          'http://test.uri',
          setup.signers[2],
          {
            gasPrice: ethers.utils.parseUnits( '100', 'gwei')
          },
          th => { txHash = th; }
        );
        checkOrgId(orgId);
        expect(typeof txHash).to.equal('string');
      });
    });

    describe('#setOrgJson', () => {

      it('method exposed', async () => {
        expect(typeof contract.setOrgJson).to.equal('function');
      });

      it('should fail if invalid orgIdHash provided', async () => {
        let invalidOrgIdHash: TestInput = '';
        await expect(
          contract.setOrgJson(
            invalidOrgIdHash,
            'http://test.uri',
            setup.signers[2]
          )
        ).to.rejectedWith(`setOrgJson: Invalid ORGiD hash: ${invalidOrgIdHash}`);
        invalidOrgIdHash = undefined;
        await expect(
          contract.setOrgJson(
            invalidOrgIdHash,
            'http://test.uri',
            setup.signers[2]
          )
        ).to.rejectedWith(`setOrgJson: Invalid ORGiD hash: ${invalidOrgIdHash}`);
      });

      it('should fail if unknown orgIdHash provided', async () => {
        const unknownOrgId = '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d';
        await expect(
          contract.setOrgJson(
            unknownOrgId,
            'http://test.uri',
            setup.signers[2]
          )
        ).to.rejectedWith(`setOrgJson: ORGiD not found: ${unknownOrgId}`);
      });

      it('should fail if invalid orgJsonUri provided', async () => {
        let invalidUri: TestInput = '';
        await expect(
          contract.setOrgJson(
            orgIdHash,
            invalidUri,
            setup.signers[2]
          )
        ).to.rejectedWith(`setOrgJson: Invalid orgJsonUri value: ${invalidUri}`);
        invalidUri = undefined;
        await expect(
          contract.setOrgJson(
            orgIdHash,
            invalidUri,
            setup.signers[2]
          )
        ).to.rejectedWith(`setOrgJson: Invalid orgJsonUri value: ${invalidUri}`);
      });

      it('should fail if invalid orgIdOwner provided', async () => {
        let invalidSigner: TestInput = '';
        await expect(
          contract.setOrgJson(
            orgIdHash,
            'http://test.uri',
            invalidSigner
          )
        ).to.rejectedWith('Invalid transaction signer');
        invalidSigner = undefined;
        await expect(
          contract.setOrgJson(
            orgIdHash,
            'http://test.uri',
            invalidSigner
          )
        ).to.rejectedWith('Invalid transaction signer');
      });

      it('should set ORG.JSON URI (no extra params)', async () => {
        const orgId = await contract.setOrgJson(
          orgIdHash,
          'http://test.uri',
          orgIdOwner
        );
        checkOrgId(orgId);
      });

      it('should set ORG.JSON URI (with gasPrice, tx callback)', async () => {
        let txHash: any;
        const orgId = await contract.setOrgJson(
          orgIdHash,
          'http://test.uri',
          orgIdOwner,
          {
            gasPrice: ethers.utils.parseUnits( '100', 'gwei')
          },
          th => { txHash = th; }
        );
        checkOrgId(orgId);
        expect(typeof txHash).to.equal('string');
      });
    });

    describe('#transferOrgIdOwnership', () => {

      it('method exposed', async () => {
        expect(typeof contract.transferOrgIdOwnership).to.equal('function');
      });

      it('should fail if invalid orgIdHash provided', async () => {
        let invalidOrgIdHash: TestInput = '';
        await expect(
          contract.transferOrgIdOwnership(
            invalidOrgIdHash,
            setup.accounts[2],
            orgIdOwner
          )
        ).to.rejectedWith(`transferOrgIdOwnership: Invalid ORGiD hash: ${invalidOrgIdHash}`);
        invalidOrgIdHash = undefined;
        await expect(
          contract.transferOrgIdOwnership(
            invalidOrgIdHash,
            setup.accounts[2],
            orgIdOwner
          )
        ).to.rejectedWith(`transferOrgIdOwnership: Invalid ORGiD hash: ${invalidOrgIdHash}`);
      });

      it('should fail if invalid newOrgIdOwner provided', async () => {
        let invalidNewOrgIdOwner: TestInput = '';
        await expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            invalidNewOrgIdOwner,
            orgIdOwner
          )
        ).to.rejectedWith(`transferOrgIdOwnership: Invalid newOrgIdOwner address: ${invalidNewOrgIdOwner}`);
        invalidNewOrgIdOwner = undefined;
        await expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            invalidNewOrgIdOwner,
            orgIdOwner
          )
        ).to.rejectedWith(`transferOrgIdOwnership: Invalid newOrgIdOwner address: ${invalidNewOrgIdOwner}`);
      });

      it('should fail if invalid orgIdOwner provided', async () => {
        let invalidOrgIdOwner: TestInput = '';
        await expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            setup.accounts[2],
            invalidOrgIdOwner
          )
        ).to.rejectedWith('Invalid transaction signer');
        invalidOrgIdOwner = undefined;
        await expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            setup.accounts[2],
            invalidOrgIdOwner
          )
        ).to.rejectedWith('Invalid transaction signer');
      });

      it('should fail if unknown ORGiD provided', async () => {
        const invalidOrgId = generateSalt();
        await expect(
          contract.transferOrgIdOwnership(
            invalidOrgId,
            setup.accounts[2],
            orgIdOwner
          )
        ).to.rejectedWith(`transferOrgIdOwnership: ORGiD not found: ${invalidOrgId}`);
      });

      it('should transfer ORGiD ownership (no extra params)', async () => {
        let newOrgIdOwner = setup.accounts[2];
        const orgId = await contract.transferOrgIdOwnership(
          orgIdHash,
          newOrgIdOwner,
          orgIdOwner
        );
        expect((orgId as OrgIdData).owner).to.equal(newOrgIdOwner);
        orgIdOwner = setup.signers[2];
        newOrgIdOwner = setup.accounts[1];
        await contract.transferOrgIdOwnership(
          orgIdHash,
          newOrgIdOwner,
          orgIdOwner
        );
      });

      it('should transfer ORGiD ownership (with gasPrice, tx callback)', async () => {
        const orgIdOwner = setup.signers[1];
        let orgId = await contract.createOrgId(
          generateSalt(),
          'http://test.uri',
          setup.signers[2]
        );
        let txHash: any;
        const newOrgIdOwner = setup.accounts[2];
        orgId = await contract.transferOrgIdOwnership(
          orgIdHash,
          newOrgIdOwner,
          orgIdOwner,
          {
            gasPrice: ethers.utils.parseUnits( '100', 'gwei')
          },
          th => { txHash = th; }
        );
        expect((orgId as OrgIdData).owner).to.equal(newOrgIdOwner);
        expect(typeof txHash).to.equal('string');
      });
    });

    describe('#getOrgIdsCount', () => {

      it('method exposed', async () => {
        expect(typeof contract.getOrgIdsCount).to.equal('function');
      });

      it('should return ORGiD\'s count', async () => {
        const count = await contract.getOrgIdsCount();
        expect(typeof count).to.equal('number');
        await contract.createOrgId(
          generateSalt(),
          'http://test.uri',
          setup.signers[2]
        );
        expect(await contract.getOrgIdsCount()).to.equal(count + 1);
      });
    });

    describe('#getOrgIds', () => {

      it('method exposed', async () => {
        expect(typeof contract.getOrgIds).to.equal('function');
      });

      it('should fail if invalid cursor provided', async () => {
        const invalidCursor = -1;
        await expect(contract.getOrgIds(invalidCursor, 1))
          .to.rejectedWith(
            `getOrgIds: Invalid cursor: ${invalidCursor}`
          );
      });

      it('should fail if invalid count provided', async () => {
        const invalidCount = 0;
        expect(contract.getOrgIds(0, invalidCount))
          .to.rejectedWith(
            `getOrgIds: Invalid count: ${invalidCount}`
          );
      });

      it('should return list of ORGiDs (no-params version)', async () => {
        const orgIds = await contract.getOrgIds();
        expect(Array.isArray(orgIds)).to.equal(true);
        expect(orgIds.length).to.equal(await contract.getOrgIdsCount());
      });

      it('should return list of ORGiDs (paginated version)', async () => {
        const cursor = 0;
        const count = 1;
        let orgIds = await contract.getOrgIds(cursor, count);
        expect(Array.isArray(orgIds)).to.equal(true);
        expect(orgIds.length).to.equal(count);
        orgIds = await contract.getOrgIds(undefined, count);
        expect(Array.isArray(orgIds)).to.equal(true);
        expect(orgIds.length).to.equal(count);
      });
    });
  });
});
