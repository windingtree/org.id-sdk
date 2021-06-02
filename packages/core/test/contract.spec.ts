import Web3 from 'web3';
import { orgIdSetup, OrgIdSetup, generateSalt } from '@windingtree/org.id-test-helpers';
import { regexp } from '@windingtree/org.id-utils';
import OrgIdContract from '../src/contract';
import type { OrgIdData } from '../src/core';

type TestInput = any;

describe('OrgId contract', () => {
  let setup: OrgIdSetup;
  let orgIdContractAddress: string;
  let contract: OrgIdContract;
  let orgIdOwner: string;
  let orgIdHash: string;

  beforeAll(async () => {
    setup = await orgIdSetup();
    orgIdContractAddress = setup.address;
    orgIdOwner = setup.accounts[1];
    orgIdHash = await setup.registerOrgId(orgIdOwner);
    contract = new OrgIdContract(
      orgIdContractAddress,
      setup.server.providerUri
    );
  });

  afterAll(async () => {
    await setup.close();
  });

  describe('Initialization', () => {

    test('should expose parameters', async () => {
      expect(contract).toHaveProperty('address');
      expect(regexp.ethereumAddress.exec(contract.address)).not.toBeNull();
      expect(contract).toHaveProperty('web3');
      expect(contract.web3).toBeInstanceOf(Web3);
      expect(contract).toHaveProperty('contract');
      expect(contract.contract).toBeInstanceOf(contract.web3.eth.Contract);
    });

    test('should fail if invalid orgIdContractAddress provided', async () => {
      let invalidNetworkOrAddress: TestInput = '';
      expect(() => {
        new OrgIdContract(
          invalidNetworkOrAddress,
          setup.server.providerUri
        )
      }).toThrow(
        `orgIdContract: Invalid network or a smart contract address: ${invalidNetworkOrAddress}`
      );
      invalidNetworkOrAddress = '0x3219B2904F1e4BF';
      expect(() => {
        new OrgIdContract(
          invalidNetworkOrAddress,
          setup.server.providerUri
        )
      }).toThrow(
        `orgIdContract: Invalid network or a smart contract address: ${invalidNetworkOrAddress}`
      );
      invalidNetworkOrAddress = undefined;
      expect(() => {
        new OrgIdContract(
          invalidNetworkOrAddress,
          setup.server.providerUri
        )
      }).toThrow(
        `orgIdContract: Invalid network or a smart contract address: ${invalidNetworkOrAddress}`
      );
    });

    test('should fail if invalid web3ProviderOrUri provided', async () => {
      let invalidWeb3ProviderOrUri: TestInput = undefined;
      expect(() => {
        new OrgIdContract(
          orgIdContractAddress,
          invalidWeb3ProviderOrUri
        )
      }).toThrow(`orgIdContract: Unable to initialize web3 provider`);
      invalidWeb3ProviderOrUri = '';
      expect(() => {
        new OrgIdContract(
          orgIdContractAddress,
          invalidWeb3ProviderOrUri
        )
      }).toThrow(`orgIdContract: Unable to initialize web3 provider`);
    });
  });

  describe('Methods', () => {

    const checkOrgId = (orgId, orgIdHash?) => {
      expect(orgId).toHaveProperty('id');
      if (orgIdHash) {
        expect(orgId.id).toBe(orgIdHash);
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
        expect(contract.getOrgId(wrongOrgIdHash))
          .rejects
          .toThrow(`getOrgId: Invalid ORGiD hash: ${wrongOrgIdHash}`);
        wrongOrgIdHash = undefined;
        expect(contract.getOrgId(wrongOrgIdHash))
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
        expect(
          contract.createOrgId(
            invalidSalt,
            'http://test.uri',
            setup.accounts[2]
          )
        ).rejects.toThrow(`createOrgId: Invalid ORGiD salt: ${invalidSalt}`);
        invalidSalt = undefined;
        expect(
          contract.createOrgId(
            invalidSalt,
            'http://test.uri',
            setup.accounts[2]
          )
        ).rejects.toThrow(`createOrgId: Invalid ORGiD salt: ${invalidSalt}`);
      });

      test('should fail if invalid orgJsonUri provided', async () => {
        let invalidUri: TestInput = '';
        expect(
          contract.createOrgId(
            generateSalt(),
            invalidUri,
            setup.accounts[2]
          )
        ).rejects.toThrow(`createOrgId: Invalid orgJsonUri value: ${invalidUri}`);
        invalidUri = undefined;
        expect(
          contract.createOrgId(
            generateSalt(),
            invalidUri,
            setup.accounts[2]
          )
        ).rejects.toThrow(`createOrgId: Invalid orgJsonUri value: ${invalidUri}`);
      });

      test('should fail if invalid orgIdOwner provided', async () => {
        let invalidAddress: TestInput = '';
        expect(
          contract.createOrgId(
            generateSalt(),
            'http://test.uri',
            invalidAddress
          )
        ).rejects.toThrow(`createOrgId: Invalid orgIdOwner address: ${invalidAddress}`);
        invalidAddress = undefined;
        expect(
          contract.createOrgId(
            generateSalt(),
            'http://test.uri',
            invalidAddress
          )
        ).rejects.toThrow(`createOrgId: Invalid orgIdOwner address: ${invalidAddress}`);
      });

      test('should create orgId (no extra params)', async () => {
        const orgId = await contract.createOrgId(
          generateSalt(),
          'http://test.uri',
          setup.accounts[2]
        );
        checkOrgId(orgId);
      });

      test('should create orgId (with gasLimit, gasPrice, tx callback)', async () => {
        let txHash: any;
        const orgId = await contract.createOrgId(
          generateSalt(),
          'http://test.uri',
          setup.accounts[2],
          '75000',
          '100000000000',
          th => { txHash = th; }
        );
        checkOrgId(orgId);
        expect(typeof txHash).toBe('string');
      });
    });

    describe('#changeOrgJson', () => {

      test('method exposed', async () => {
        expect(typeof contract.setOrgJson).toBe('function');
      });

      test('should fail if invalid orgIdHash provided', async () => {
        let invalidOrgIdHash: TestInput = '';
        expect(
          contract.setOrgJson(
            invalidOrgIdHash,
            'http://test.uri',
            setup.accounts[2]
          )
        ).rejects.toThrow(`setOrgJson: Invalid ORGiD hash: ${invalidOrgIdHash}`);
        invalidOrgIdHash = undefined;
        expect(
          contract.setOrgJson(
            invalidOrgIdHash,
            'http://test.uri',
            setup.accounts[2]
          )
        ).rejects.toThrow(`setOrgJson: Invalid ORGiD hash: ${invalidOrgIdHash}`);
      });

      test('should fail if unknown orgIdHash provided', async () => {
        const unknownOrgId = '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d';
        expect(
          contract.setOrgJson(
            unknownOrgId,
            'http://test.uri',
            setup.accounts[2]
          )
        ).rejects.toThrow(`setOrgJson: ORGiD not found: ${unknownOrgId}`);
      });

      test('should fail if invalid orgJsonUri provided', async () => {
        let invalidUri: TestInput = '';
        expect(
          contract.setOrgJson(
            generateSalt(),
            invalidUri,
            setup.accounts[2]
          )
        ).rejects.toThrow(`setOrgJson: Invalid orgJsonUri value: ${invalidUri}`);
        invalidUri = undefined;
        expect(
          contract.setOrgJson(
            generateSalt(),
            invalidUri,
            setup.accounts[2]
          )
        ).rejects.toThrow(`setOrgJson: Invalid orgJsonUri value: ${invalidUri}`);
      });

      test('should fail if invalid orgIdOwner provided', async () => {
        let invalidAddress: TestInput = '';
        expect(
          contract.setOrgJson(
            generateSalt(),
            'http://test.uri',
            invalidAddress
          )
        ).rejects.toThrow(`setOrgJson: Invalid orgIdOwner address: ${invalidAddress}`);
        invalidAddress = undefined;
        expect(
          contract.setOrgJson(
            generateSalt(),
            'http://test.uri',
            invalidAddress
          )
        ).rejects.toThrow(`setOrgJson: Invalid orgIdOwner address: ${invalidAddress}`);
      });

      test('should set ORG.JSON URI (no extra params)', async () => {
        const orgId = await contract.setOrgJson(
          orgIdHash,
          'http://test.uri',
          orgIdOwner
        );
        checkOrgId(orgId);
      });

      test('should set ORG.JSON URI (with gasLimit, gasPrice, tx callback)', async () => {
        let txHash: any;
        const orgId = await contract.setOrgJson(
          orgIdHash,
          'http://test.uri',
          orgIdOwner,
          '75000',
          '100000000000',
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
        expect(
          contract.transferOrgIdOwnership(
            invalidOrgIdHash,
            setup.accounts[2],
            orgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: Invalid ORGiD hash: ${invalidOrgIdHash}`);
        invalidOrgIdHash = undefined;
        expect(
          contract.transferOrgIdOwnership(
            invalidOrgIdHash,
            setup.accounts[2],
            orgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: Invalid ORGiD hash: ${invalidOrgIdHash}`);
      });

      test('should fail if invalid newOrgIdOwner provided', async () => {
        let invalidNewOrgIdOwner: TestInput = '';
        expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            invalidNewOrgIdOwner,
            orgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: Invalid newOrgIdOwner address: ${invalidNewOrgIdOwner}`);
        invalidNewOrgIdOwner = undefined;
        expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            invalidNewOrgIdOwner,
            orgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: Invalid newOrgIdOwner address: ${invalidNewOrgIdOwner}`);
      });

      test('should fail if invalid orgIdOwner provided', async () => {
        let invalidOrgIdOwner: TestInput = '';
        expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            setup.accounts[2],
            invalidOrgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: Invalid orgIdOwner address: ${invalidOrgIdOwner}`);
        invalidOrgIdOwner = undefined;
        expect(
          contract.transferOrgIdOwnership(
            orgIdHash,
            setup.accounts[2],
            invalidOrgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: Invalid orgIdOwner address: ${invalidOrgIdOwner}`);
      });

      test('should fail if unknown ORGiD provided', async () => {
        const invalidOrgId = generateSalt();
        expect(
          contract.transferOrgIdOwnership(
            invalidOrgId,
            setup.accounts[2],
            orgIdOwner
          )
        ).rejects.toThrow(`transferOrgIdOwnership: ORGiD not found: ${invalidOrgId}`);
      });

      test('should transfer ORGiD ownership (no extra params)', async () => {
        const newOrgIdOwner = setup.accounts[2];
        const orgId = await contract.transferOrgIdOwnership(
          orgIdHash,
          newOrgIdOwner,
          orgIdOwner
        );
        expect((orgId as OrgIdData).id).toBe(orgIdHash);
        expect((orgId as OrgIdData).owner).toBe(newOrgIdOwner);
        await contract.transferOrgIdOwnership(
          orgIdHash,
          orgIdOwner,
          newOrgIdOwner
        );
      });

      test('should transfer ORGiD ownership (with gas limit, gas price, tx callback)', async () => {
        let txHash: any;
        const newOrgIdOwner = setup.accounts[2];
        const orgId = await contract.transferOrgIdOwnership(
          orgIdHash,
          newOrgIdOwner,
          orgIdOwner,
          '75000',
          '100000000000',
          th => { txHash = th; }
        );
        expect((orgId as OrgIdData).id).toBe(orgIdHash);
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
          setup.accounts[2]
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
        expect(contract.getOrgIds(invalidCursor, 1)).rejects.toThrow(
          `getOrgIds: Invalid cursor: ${invalidCursor}`
        );
      });

      test('should fail if invalid count provided', async () => {
        const invalidCount = 0;
        expect(contract.getOrgIds(0, invalidCount)).rejects.toThrow(
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
