import type { Signer } from 'ethers';
import type { OrgIdSetup } from '@windingtree/org.id-test-setup';
import type { OrgIdData } from '../src/types';
import { orgIdSetup, generateSalt } from '@windingtree/org.id-test-setup';
import { ethers, providers, Contract, BigNumber as BN } from 'ethers';
import { regexp } from '@windingtree/org.id-utils';
import { OrgIdContract } from '../src';


type TestInput = any;

describe('OrgId contract', () => {
  let setup: OrgIdSetup;
  let orgIdContractAddress: string;
  let contract: OrgIdContract;
  let orgIdOwner: Signer;
  let orgIdHash: string;

  beforeAll(async () => {
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

  afterAll(async () => {
    setup.close();
  });

  describe('Initialization', () => {

    test('should expose readonly properties', async () => {
      expect(contract).toHaveProperty('address');
      expect(regexp.ethereumAddress.exec(contract.address)).not.toBeNull();
      expect(contract).toHaveProperty('provider');
      expect(contract.provider).toBeInstanceOf(providers.JsonRpcProvider);
      expect(contract).toHaveProperty('contract');
      expect(contract.contract).toBeInstanceOf(Contract);
    });

    test('should fail if invalid orgIdContractAddress provided', async () => {
      let invalidNetworkOrAddress: TestInput = '';
      expect(() => {
        new OrgIdContract(
          invalidNetworkOrAddress,
          setup.orgIdContract.provider
        )
      }).toThrow(
        `orgIdContract: Invalid smart contract address: ${invalidNetworkOrAddress}`
      );
      invalidNetworkOrAddress = '0x3219B2904F1e4BF';
      expect(() => {
        new OrgIdContract(
          invalidNetworkOrAddress,
          setup.orgIdContract.provider
        )
      }).toThrow(
        `orgIdContract: Invalid smart contract address: ${invalidNetworkOrAddress}`
      );
      invalidNetworkOrAddress = undefined;
      expect(() => {
        new OrgIdContract(
          invalidNetworkOrAddress,
          setup.orgIdContract.provider
        )
      }).toThrow(
        `orgIdContract: Invalid smart contract address: ${invalidNetworkOrAddress}`
      );
    });

    test('should fail if invalid web3ProviderOrUri provided', async () => {
      let invalidWeb3ProviderOrUri: TestInput = undefined;
      expect(() => {
        new OrgIdContract(
          orgIdContractAddress,
          invalidWeb3ProviderOrUri
        )
      }).toThrow(`orgIdContract: Unable to initialize provider`);
      invalidWeb3ProviderOrUri = '';
      expect(() => {
        new OrgIdContract(
          orgIdContractAddress,
          invalidWeb3ProviderOrUri
        )
      }).toThrow(`orgIdContract: Unable to initialize provider`);
    });
  });

  describe('Methods', () => {

    const checkOrgId = (orgId, orgIdHash?: string) => {
      expect(orgId).toHaveProperty('tokenId');
      expect(BN.isBigNumber(orgId.tokenId)).toBe(true);
      expect(orgId.tokenId).not.toBe(BN.from(0));
      expect(regexp.bytes32.exec(orgId.orgId)).not.toBeNull();
      expect(orgId).toHaveProperty('orgId');
      if (orgIdHash) {
        expect(orgId.orgId).toBe(orgIdHash);
      }
      expect(orgId).toHaveProperty('owner');
      expect(regexp.ethereumAddress.exec(orgId.owner)).not.toBeNull();
      expect(orgId).toHaveProperty('created');
      expect(regexp.isoDate.exec(orgId.created)).not.toBeNull();
      expect(orgId).toHaveProperty('orgJsonUri');
      expect(typeof orgId.orgJsonUri).toBe('string');
    };

    describe('#getOrgId', () => {

      test('method exposed', async () => {
        expect(typeof contract.getOrgId).toBe('function');
      });

      test('should fail if wrong orgIdHash provided', async () => {
        let wrongOrgIdHash: TestInput = '';
        await expect(contract.getOrgId(wrongOrgIdHash))
          .rejects
          .toThrow(`getOrgId: Invalid ORGiD hash: ${wrongOrgIdHash}`);
        wrongOrgIdHash = undefined;
        await expect(contract.getOrgId(wrongOrgIdHash))
          .rejects
          .toThrow(`getOrgId: Invalid ORGiD hash: ${wrongOrgIdHash}`);
      });

      test('should return null if orgId not found', async () => {
        expect(await contract.getOrgId('0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d')).toBeNull();
      });

      test('should return orgId', async () => {
        const orgId = await contract.getOrgId(orgIdHash);
        checkOrgId(orgId, orgIdHash);
      });
    });

    describe('#createOrgId', () => {

      test('method exposed', async () => {
        expect(typeof contract.createOrgId).toBe('function');
      });

      test('should fail if invalid salt provided', async () => {
        let invalidSalt: TestInput = '';
        await expect(
          contract.createOrgId(
            invalidSalt,
            'http://test.uri',
            setup.signers[2]
          )
        ).rejects.toThrow(`createOrgId: Invalid ORGiD salt: ${invalidSalt}`);
        invalidSalt = undefined;
        await expect(
          contract.createOrgId(
            invalidSalt,
            'http://test.uri',
            setup.signers[2]
          )
        ).rejects.toThrow(`createOrgId: Invalid ORGiD salt: ${invalidSalt}`);
      });

      test('should fail if invalid orgJsonUri provided', async () => {
        let invalidUri: TestInput = '';
        await expect(
          contract.createOrgId(
            generateSalt(),
            invalidUri,
            setup.signers[2]
          )
        ).rejects.toThrow(`createOrgId: Invalid orgJsonUri value: ${invalidUri}`);
        invalidUri = undefined;
        await expect(
          contract.createOrgId(
            generateSalt(),
            invalidUri,
            setup.signers[2]
          )
        ).rejects.toThrow(`createOrgId: Invalid orgJsonUri value: ${invalidUri}`);
      });

      test('should fail if invalid orgIdOwner provided', async () => {
        const invalidSigner: TestInput = undefined;
        await expect(
          contract.createOrgId(
            generateSalt(),
            'http://test.uri',
            invalidSigner
          )
        ).rejects.toThrow('Invalid transaction signer');
      });

      test('should create orgId (no extra params)', async () => {
        const orgId = await contract.createOrgId(
          generateSalt(),
          'http://test.uri',
          setup.signers[2]
        );
        checkOrgId(orgId);
      });

      test('should create orgId (with gasPrice, tx callback)', async () => {
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
        expect(typeof txHash).toBe('string');
      });
    });

    describe('#setOrgJson', () => {

      test('method exposed', async () => {
        expect(typeof contract.setOrgJson).toBe('function');
      });

      test('should fail if invalid orgIdHash provided', async () => {
        let invalidOrgIdHash: TestInput = '';
        await expect(
          contract.setOrgJson(
            invalidOrgIdHash,
            'http://test.uri',
            setup.signers[2]
          )
        ).rejects.toThrow(`setOrgJson: Invalid ORGiD hash: ${invalidOrgIdHash}`);
        invalidOrgIdHash = undefined;
        await expect(
          contract.setOrgJson(
            invalidOrgIdHash,
            'http://test.uri',
            setup.signers[2]
          )
        ).rejects.toThrow(`setOrgJson: Invalid ORGiD hash: ${invalidOrgIdHash}`);
      });

      test('should fail if unknown orgIdHash provided', async () => {
        const unknownOrgId = '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d';
        await expect(
          contract.setOrgJson(
            unknownOrgId,
            'http://test.uri',
            setup.signers[2]
          )
        ).rejects.toThrow(`setOrgJson: ORGiD not found: ${unknownOrgId}`);
      });

      test('should fail if invalid orgJsonUri provided', async () => {
        let invalidUri: TestInput = '';
        await expect(
          contract.setOrgJson(
            orgIdHash,
            invalidUri,
            setup.signers[2]
          )
        ).rejects.toThrow(`setOrgJson: Invalid orgJsonUri value: ${invalidUri}`);
        invalidUri = undefined;
        await expect(
          contract.setOrgJson(
            orgIdHash,
            invalidUri,
            setup.signers[2]
          )
        ).rejects.toThrow(`setOrgJson: Invalid orgJsonUri value: ${invalidUri}`);
      });

      test('should fail if invalid orgIdOwner provided', async () => {
        let invalidSigner: TestInput = '';
        await expect(
          contract.setOrgJson(
            orgIdHash,
            'http://test.uri',
            invalidSigner
          )
        ).rejects.toThrow('Invalid transaction signer');
        invalidSigner = undefined;
        await expect(
          contract.setOrgJson(
            orgIdHash,
            'http://test.uri',
            invalidSigner
          )
        ).rejects.toThrow('Invalid transaction signer');
      });

      test('should set ORG.JSON URI (no extra params)', async () => {
        const orgId = await contract.setOrgJson(
          orgIdHash,
          'http://test.uri',
          orgIdOwner
        );
        checkOrgId(orgId);
      });

      test('should set ORG.JSON URI (with gasPrice, tx callback)', async () => {
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
        expect(typeof txHash).toBe('string');
      });
    });

    describe('#transferOrgIdOwnership', () => {

      test('method exposed', async () => {
        expect(typeof contract.transferOrgIdOwnership).toBe('function');
      });

      test('should fail if invalid orgIdHash provided', async () => {
        let invalidOrgIdHash: TestInput = '';
        await expect(
          contract.transferOrgIdOwnership(
            invalidOrgIdHash,
            setup.accounts[2],
            orgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: Invalid ORGiD hash: ${invalidOrgIdHash}`);
        invalidOrgIdHash = undefined;
        await expect(
          contract.transferOrgIdOwnership(
            invalidOrgIdHash,
            setup.accounts[2],
            orgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: Invalid ORGiD hash: ${invalidOrgIdHash}`);
      });

      test('should fail if invalid newOrgIdOwner provided', async () => {
        let invalidNewOrgIdOwner: TestInput = '';
        await expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            invalidNewOrgIdOwner,
            orgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: Invalid newOrgIdOwner address: ${invalidNewOrgIdOwner}`);
        invalidNewOrgIdOwner = undefined;
        await expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            invalidNewOrgIdOwner,
            orgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: Invalid newOrgIdOwner address: ${invalidNewOrgIdOwner}`);
      });

      test('should fail if invalid orgIdOwner provided', async () => {
        let invalidOrgIdOwner: TestInput = '';
        await expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            setup.accounts[2],
            invalidOrgIdOwner
          )
        ).rejects.toThrow('Invalid transaction signer');
        invalidOrgIdOwner = undefined;
        await expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            setup.accounts[2],
            invalidOrgIdOwner
          )
        ).rejects.toThrow('Invalid transaction signer');
      });

      test('should fail if unknown ORGiD provided', async () => {
        const invalidOrgId = generateSalt();
        await expect(
          contract.transferOrgIdOwnership(
            invalidOrgId,
            setup.accounts[2],
            orgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: ORGiD not found: ${invalidOrgId}`);
      });

      test('should transfer ORGiD ownership (no extra params)', async () => {
        let newOrgIdOwner = setup.accounts[2];
        const orgId = await contract.transferOrgIdOwnership(
          orgIdHash,
          newOrgIdOwner,
          orgIdOwner
        );
        expect((orgId as OrgIdData).owner).toBe(newOrgIdOwner);
        orgIdOwner = setup.signers[2];
        newOrgIdOwner = setup.accounts[1];
        await contract.transferOrgIdOwnership(
          orgIdHash,
          newOrgIdOwner,
          orgIdOwner
        );
      });

      test('should transfer ORGiD ownership (with gasPrice, tx callback)', async () => {
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
        expect((orgId as OrgIdData).owner).toBe(newOrgIdOwner);
        expect(typeof txHash).toBe('string');
      });
    });

    describe('#getOrgIdsCount', () => {

      test('method exposed', async () => {
        expect(typeof contract.getOrgIdsCount).toBe('function');
      });

      test('should return ORGiD\'s count', async () => {
        const count = await contract.getOrgIdsCount();
        expect(typeof count).toBe('number');
        await contract.createOrgId(
          generateSalt(),
          'http://test.uri',
          setup.signers[2]
        );
        expect(await contract.getOrgIdsCount()).toBe(count + 1);
      });
    });

    describe('#getOrgIds', () => {

      test('method exposed', async () => {
        expect(typeof contract.getOrgIds).toBe('function');
      });

      test('should fail if invalid cursor provided', async () => {
        const invalidCursor = -1;
        await expect(contract.getOrgIds(invalidCursor, 1))
          .rejects.toThrow(
            `getOrgIds: Invalid cursor: ${invalidCursor}`
          );
      });

      test('should fail if invalid count provided', async () => {
        const invalidCount = 0;
        expect(contract.getOrgIds(0, invalidCount))
          .rejects.toThrow(
            `getOrgIds: Invalid count: ${invalidCount}`
          );
      });

      test('should return list of ORGiDs (no-params version)', async () => {
        const orgIds = await contract.getOrgIds();
        expect(Array.isArray(orgIds)).toBe(true);
        expect(orgIds.length).toBe(await contract.getOrgIdsCount());
      });

      test('should return list of ORGiDs (paginated version)', async () => {
        const cursor = 0;
        const count = 1;
        let orgIds = await contract.getOrgIds(cursor, count);
        expect(Array.isArray(orgIds)).toBe(true);
        expect(orgIds.length).toBe(count);
        orgIds = await contract.getOrgIds(undefined, count);
        expect(Array.isArray(orgIds)).toBe(true);
        expect(orgIds.length).toBe(count);
      });
    });
  });
});
