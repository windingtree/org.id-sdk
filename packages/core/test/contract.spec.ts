import type { Signer, VoidSigner, BigNumber } from 'ethers';
import type { OrgIdSetup } from '@windingtree/org.id-test-setup';
import type { AddDelegatesResult, OrgIdData } from '../src/types';
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
  let notAnOwner: Signer;
  let orgIdHash: string;
  let orgIdTokenId: BigNumber;

  before(async () => {
    setup = await orgIdSetup();
    orgIdContractAddress = setup.orgIdContract.address;
    orgIdOwner = setup.signers[1];
    notAnOwner = setup.signers[9];
    const regResult = await setup.registerOrgId(orgIdOwner as VoidSigner);
    orgIdHash = regResult.orgIdHash;
    orgIdTokenId = regResult.tokenId;
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

    const checkOrgId = (orgId: OrgIdData, orgIdHash?: string) => {
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
      expect(orgId).to.have.property('delegates').to.be.an('array');
    };

    describe('#getOrgIdByTokenId', () => {

      it('method exposed', async () => {
        expect(typeof contract.getOrgIdByTokenId).to.equal('function');
      });

      it('should fail if invalid tokenId provided', async () => {
        let invalidTokenId: TestInput = '';
        await expect(contract.getOrgIdByTokenId(invalidTokenId))
          .to.rejectedWith('invalid BigNumber string');
          invalidTokenId = undefined;
        await expect(contract.getOrgIdByTokenId(invalidTokenId))
          .to.rejectedWith('invalid BigNumber value');
        await expect(contract.getOrgIdByTokenId(0))
          .to.rejectedWith('tokenId cannot be equal to zero');
      });

      it('should return null if token not found', async () => {
        expect(
          await contract.getOrgIdByTokenId(10000000000)
        ).to.be.null;
      });

      it('should return orgId', async () => {
        const orgId = await contract.getOrgIdByTokenId(orgIdTokenId);
        checkOrgId(orgId as OrgIdData, orgIdHash);
      });
    });

    describe('#getOrgId', () => {

      it('method exposed', async () => {
        expect(typeof contract.getOrgId).to.equal('function');
      });

      it('should fail if invalid orgIdHash provided', async () => {
        let invalidOrgIdHash: TestInput = '';
        await expect(contract.getOrgId(invalidOrgIdHash))
          .to.rejectedWith(`getOrgId: Invalid ORGiD hash: ${invalidOrgIdHash}`);
        invalidOrgIdHash = undefined;
        await expect(contract.getOrgId(invalidOrgIdHash))
          .to.rejectedWith(`getOrgId: Invalid ORGiD hash: ${invalidOrgIdHash}`);
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
        checkOrgId(orgId as OrgIdData, orgIdHash);
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
        checkOrgId(orgId as OrgIdData);
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
        checkOrgId(orgId as OrgIdData);
        expect(typeof txHash).to.equal('string');
      });
    });

    describe('#createOrgIdWithDelegates', () => {
      const delegates = ['did1', 'did2'];

      it('method exposed', async () => {
        expect(typeof contract.createOrgId).to.equal('function');
      });

      it('should fail if invalid salt provided', async () => {
        let invalidSalt: TestInput = '';
        await expect(
          contract.createOrgIdWithDelegates(
            invalidSalt,
            'http://test.uri',
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`createOrgIdWithDelegates: Invalid ORGiD salt: ${invalidSalt}`);
        invalidSalt = undefined;
        await expect(
          contract.createOrgIdWithDelegates(
            invalidSalt,
            'http://test.uri',
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`createOrgIdWithDelegates: Invalid ORGiD salt: ${invalidSalt}`);
      });

      it('should fail if invalid orgJsonUri provided', async () => {
        let invalidUri: TestInput = '';
        await expect(
          contract.createOrgIdWithDelegates(
            generateSalt(),
            invalidUri,
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`createOrgIdWithDelegates: Invalid orgJsonUri value: ${invalidUri}`);
        invalidUri = undefined;
        await expect(
          contract.createOrgIdWithDelegates(
            generateSalt(),
            invalidUri,
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`createOrgIdWithDelegates: Invalid orgJsonUri value: ${invalidUri}`);
      });

      it('should fail if invalid orgIdOwner provided', async () => {
        const invalidSigner: TestInput = undefined;
        await expect(
          contract.createOrgIdWithDelegates(
            generateSalt(),
            'http://test.uri',
            delegates,
            invalidSigner
          )
        ).to.rejectedWith('Invalid transaction signer');
      });

      it('should create orgId (no extra params)', async () => {
        const orgId = await contract.createOrgIdWithDelegates(
          generateSalt(),
          'http://test.uri',
          delegates,
          setup.signers[2]
        );
        checkOrgId(orgId as OrgIdData);
      });

      it('should create orgId (with gasPrice, tx callback)', async () => {
        let txHash: any;
        const orgId = await contract.createOrgIdWithDelegates(
          generateSalt(),
          'http://test.uri',
          delegates,
          setup.signers[2],
          {
            gasPrice: ethers.utils.parseUnits( '100', 'gwei')
          },
          th => { txHash = th; }
        );
        checkOrgId(orgId as OrgIdData);
        expect(typeof txHash).to.equal('string');
      });
    });

    describe('#createOrgIdFor', () => {
      const delegates = ['did1', 'did2'];

      it('method exposed', async () => {
        expect(typeof contract.createOrgIdFor).to.equal('function');
      });

      it('should fail if invalid orgJsonUri provided', async () => {
        let invalidUri: TestInput = '';
        await expect(
          contract.createOrgIdFor(
            generateSalt(),
            invalidUri,
            setup.accounts[1],
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`createOrgIdFor: Invalid orgJsonUri value: ${invalidUri}`);
        invalidUri = undefined;
        await expect(
          contract.createOrgIdFor(
            generateSalt(),
            invalidUri,
            setup.accounts[1],
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`createOrgIdFor: Invalid orgJsonUri value: ${invalidUri}`);
      });

      it('should create orgId (no extra params)', async () => {
        const orgId = await contract.createOrgIdFor(
          generateSalt(),
          'http://test.uri',
          setup.accounts[1],
          delegates,
          setup.signers[1]
        );
        checkOrgId(orgId as OrgIdData);
      });

      it('should create orgId (with gasPrice, tx callback)', async () => {
        let txHash: any;
        const orgId = await contract.createOrgIdFor(
          generateSalt(),
          'http://test.uri',
          setup.accounts[1],
          delegates,
          setup.signers[1],
          {
            gasPrice: ethers.utils.parseUnits( '100', 'gwei')
          },
          th => { txHash = th; }
        );
        checkOrgId(orgId as OrgIdData);
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
        checkOrgId(orgId as OrgIdData);
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
        checkOrgId(orgId as OrgIdData);
        expect(typeof txHash).to.equal('string');
      });
    });

    describe('#setOrgJsonWithDelegates', () => {
      const delegates = ['did1', 'did2'];

      it('method exposed', async () => {
        expect(typeof contract.setOrgJsonWithDelegates).to.equal('function');
      });

      it('should fail if invalid orgIdHash provided', async () => {
        let invalidOrgIdHash: TestInput = '';
        await expect(
          contract.setOrgJsonWithDelegates(
            invalidOrgIdHash,
            'http://test.uri',
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`setOrgJsonWithDelegates: Invalid ORGiD hash: ${invalidOrgIdHash}`);
        invalidOrgIdHash = undefined;
        await expect(
          contract.setOrgJsonWithDelegates(
            invalidOrgIdHash,
            'http://test.uri',
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`setOrgJsonWithDelegates: Invalid ORGiD hash: ${invalidOrgIdHash}`);
      });

      it('should fail if unknown orgIdHash provided', async () => {
        const unknownOrgId = '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d';
        await expect(
          contract.setOrgJsonWithDelegates(
            unknownOrgId,
            'http://test.uri',
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`setOrgJsonWithDelegates: ORGiD not found: ${unknownOrgId}`);
      });

      it('should fail if invalid orgJsonUri provided', async () => {
        let invalidUri: TestInput = '';
        await expect(
          contract.setOrgJsonWithDelegates(
            orgIdHash,
            invalidUri,
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`setOrgJsonWithDelegates: Invalid orgJsonUri value: ${invalidUri}`);
        invalidUri = undefined;
        await expect(
          contract.setOrgJsonWithDelegates(
            orgIdHash,
            invalidUri,
            delegates,
            setup.signers[2]
          )
        ).to.rejectedWith(`setOrgJsonWithDelegates: Invalid orgJsonUri value: ${invalidUri}`);
      });

      it('should fail if invalid orgIdOwner provided', async () => {
        let invalidSigner: TestInput = '';
        await expect(
          contract.setOrgJsonWithDelegates(
            orgIdHash,
            'http://test.uri',
            delegates,
            invalidSigner
          )
        ).to.rejectedWith('Invalid transaction signer');
        invalidSigner = undefined;
        await expect(
          contract.setOrgJsonWithDelegates(
            orgIdHash,
            'http://test.uri',
            delegates,
            invalidSigner
          )
        ).to.rejectedWith('Invalid transaction signer');
      });

      it('should set ORG.JSON URI (no extra params)', async () => {
        const orgId = await contract.setOrgJsonWithDelegates(
          orgIdHash,
          'http://test.uri',
          delegates,
          orgIdOwner
        );
        checkOrgId(orgId as OrgIdData);
      });

      it('should set ORG.JSON URI (with gasPrice, tx callback)', async () => {
        let txHash: any;
        const orgId = await contract.setOrgJsonWithDelegates(
          orgIdHash,
          'http://test.uri',
          delegates,
          orgIdOwner,
          {
            gasPrice: ethers.utils.parseUnits( '100', 'gwei')
          },
          th => { txHash = th; }
        );
        checkOrgId(orgId as OrgIdData);
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
        await expect(contract.getOrgIds(1, invalidCount))
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
        const cursor = 1;
        const count = 1;
        let orgIds = await contract.getOrgIds(cursor, count);
        expect(Array.isArray(orgIds)).to.equal(true);
        expect(orgIds.length).to.equal(count);
        orgIds = await contract.getOrgIds(undefined, count);
        expect(Array.isArray(orgIds)).to.equal(true);
        expect(orgIds.length).to.equal(count);
      });
    });

    describe('#addDelegates', () => {

      it('method exposed', async () => {
        expect(typeof contract.addDelegates).to.equal('function');
      });

      it('should throw if invalid ORGiD hash provided', async () => {
        const invalidOrgIdHash: TestInput = '';
        await expect(
          contract.addDelegates(
            invalidOrgIdHash,
            [
              'did:orgid:1337:0x2389deb1e582b49ab388c7ebc16b49e5a95e0b8c92ffa9c74881a9904074de9a#key1'
            ],
            orgIdOwner
          )
        ).to.rejectedWith(`addDelegates: Invalid ORGiD hash: ${invalidOrgIdHash}`);
      });

      it('should throw if invalid dids provided', async () => {
        const invalidDid: TestInput = 'did:test:1234';
        await expect(
          contract.addDelegates(
            orgIdHash,
            [
              invalidDid
            ],
            orgIdOwner
          )
        ).to.rejectedWith(`addDelegates: Invalid DID: ${invalidDid}`);
      });

      it('should add delegates', async () => {
        const delegates = [
          'did:orgid:1337:0x2389deb1e582b49ab388c7ebc16b49e5a95e0b8c92ffa9c74881a9904074de9a#key1'
        ];
        const result = await contract.addDelegates(
          orgIdHash,
          delegates,
          orgIdOwner
        );
        expect(result).to.haveOwnProperty('orgId').to.equal(orgIdHash);
        expect(result).to.haveOwnProperty('delegates').to.deep.equal(delegates);
      });

      it('should add delegates with extra parameters', async () => {
        const delegates = [
          'did:orgid:1337:0x2389deb1e582b49ab388c7ebc16b49e5a95e0b8c92ffa9c74881a9904074de9a#key1'
        ];
        let txHash: any;
        const result = await contract.addDelegates(
          orgIdHash,
          delegates,
          orgIdOwner,
          {
            gasPrice: ethers.utils.parseUnits( '100', 'gwei')
          },
          th => { txHash = th; }
        );
        expect(result).to.haveOwnProperty('orgId').to.equal(orgIdHash);
        expect(result).to.haveOwnProperty('delegates').to.deep.equal(delegates);
        expect(typeof txHash).to.equal('string');
      });
    });

    describe('#getDelegates', () => {
      const delegate = 'did:orgid:1337:0x2389deb1e582b49ab388c7ebc16b49e5a95e0b8c92ffa9c74881a9904074de9a#key1';

      before(async () => {
        await contract.addDelegates(
          orgIdHash,
          [delegate],
          orgIdOwner
        );
      });

      it('method exposed', async () => {
        expect(typeof contract.getDelegates).to.equal('function');
      });

      it('should throw if invalid ORGiD hash provided', async () => {
        const invalidOrgIdHash: TestInput = '';
        await expect(
          contract.getDelegates(invalidOrgIdHash)
        ).to.rejectedWith(`getDelegates: Invalid ORGiD hash: ${invalidOrgIdHash}`);
      });

      it('should return empty array if no delegates', async () => {
        const orgId = await contract.createOrgId(
          generateSalt(),
          'http://test.uri',
          setup.signers[2]
        ) as OrgIdData;
        const result = await contract.getDelegates(orgId.orgId);
        expect(result).to.be.an('array')
          .to.haveOwnProperty('length').to.equal(0);
      });

      it('should return delegates', async () => {
        const result = await contract.getDelegates(orgIdHash);
        expect(result).to.include(delegate);
      });
    });

    describe('#removeDelegates', () => {
      const delegates = [
        'did:orgid:1337:0x2389deb1e582b49ab388c7ebc16b49e5a95e0b8c92ffa9c74881a9904074de9a#key1'
      ];

      it('method exposed', async () => {
        expect(typeof contract.removeDelegates).to.equal('function');
      });

      it('should throw if invalid ORGiD hash provided', async () => {
        const invalidOrgIdHash: TestInput = '';
        await expect(
          contract.removeDelegates(invalidOrgIdHash, delegates, orgIdOwner)
        ).to.rejectedWith(`removeDelegates: Invalid ORGiD hash: ${invalidOrgIdHash}`);
      });

      it('should throw if invalid dids provided', async () => {
        const invalidDid = 'did:invalid:12345';
        const dids = [
          ...delegates,
          invalidDid
        ];
        await expect(
          contract.removeDelegates(orgIdHash, dids, orgIdOwner)
        ).to.rejectedWith(`removeDelegates: Invalid DID: ${invalidDid}`);
      });

      describe('...', () => {
        let delegates: AddDelegatesResult;

        beforeEach(async () => {
          delegates = await contract.addDelegates(
            orgIdHash,
            [
              'did:orgid:1337:0x2389deb1e582b49ab388c7ebc16b49e5a95e0b8c92ffa9c74881a9904074de9a#key1'
            ],
            orgIdOwner
          );
        });

        it('should remove given delegates', async () => {
          const result = await contract.removeDelegates(
            orgIdHash,
            delegates.delegates,
            orgIdOwner
          );
          expect(result).to.deep.equal(delegates);
        });

        it('should remove all delegates', async () => {
          const currDelegates = await contract.getDelegates(orgIdHash);
          const result = await contract.removeDelegates(
            orgIdHash,
            [],
            orgIdOwner
          );
          expect(result.delegates).to.deep.equal(currDelegates);
        });
      });
    });

    describe('#getOwnOrgIds',  () => {

      it('method exposed', async () => {
        expect(typeof contract.getOwnOrgIds).to.equal('function');
      });

      it('should throw if invalid owner address provided', async () => {
        const invalidAddress: TestInput = '023894029384';
        await expect(
          contract.getOwnOrgIds(invalidAddress)
        ).to.rejectedWith('getOwnOrgIds: Invalid the ORGiD owner address');
      });

      it('should return empty array if the owner does not have any ORGiDs', async () => {
        const address = await notAnOwner.getAddress();
        expect(
          await contract.getOwnOrgIds(address)
        ).to.deep.equal([]);
      });

      it('should return array of resolved ORGiDs', async () => {
        const owner = setup.signers[3];
        const address = await owner.getAddress();
        await contract.createOrgId(
          generateSalt(),
          'http://test.uri',
          setup.signers[2]
        );
        const orgIds = await contract.getOwnOrgIds(address);
        orgIds.forEach(o => checkOrgId(o as OrgIdData));
      });
    });
  });
});
