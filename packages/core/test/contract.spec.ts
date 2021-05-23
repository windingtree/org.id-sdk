import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { orgIdSetup, OrgIdSetup } from '@windingtree/org.id-test-helpers';
import {
  OrgIdContract,
  EthereumAddress,
  OrgIdHash
} from '../src/core'
import { orgIdContract } from '../src/contract';

describe('OrgId contract', () => {
  let setup: OrgIdSetup;
  let orgIdContractAddress: EthereumAddress;
  let contract: OrgIdContract;
  let orgIdOwner: EthereumAddress;
  let orgIdHash: OrgIdHash;

  beforeAll(async () => {
    setup = await orgIdSetup();
    orgIdContractAddress = setup.address;
    orgIdOwner = setup.accounts[1];
    orgIdHash = await setup.registerOrgId(orgIdOwner);
    contract = orgIdContract(
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
      expect(/^0x[a-fA-F0-9]{40}$/.exec(contract.address)).not.toBeNull();
      expect(contract).toHaveProperty('web3');
      expect(contract.web3).toBeInstanceOf(Web3);
      expect(contract).toHaveProperty('contract');
      expect(contract.contract).toBeInstanceOf(contract.web3.eth.Contract);
    });

    test('should fail if invalid orgIdContractAddress provided', async () => {
      let invalidNetworkOrAddress = '';
      expect(() => {
        orgIdContract(
          invalidNetworkOrAddress,
          setup.server.providerUri
        )
      }).toThrow(
        `orgIdContract: Invalid network or a smart contract address: ${invalidNetworkOrAddress}`
      );
      invalidNetworkOrAddress = '0x3219B2904F1e4BF';
      expect(() => {
        orgIdContract(
          invalidNetworkOrAddress,
          setup.server.providerUri
        )
      }).toThrow(
        `orgIdContract: Invalid network or a smart contract address: ${invalidNetworkOrAddress}`
      );
      invalidNetworkOrAddress = undefined;
      expect(() => {
        orgIdContract(
          invalidNetworkOrAddress,
          setup.server.providerUri
        )
      }).toThrow(
        `orgIdContract: Invalid network or a smart contract address: ${invalidNetworkOrAddress}`
      );
    });

    test('should fail if invalid web3ProviderOrUri provided', async () => {
      let invalidWeb3ProviderOrUri = undefined;
      expect(() => {
        orgIdContract(
          orgIdContractAddress,
          invalidWeb3ProviderOrUri
        )
      }).toThrow(`orgIdContract: Unable to initialize web3 provider`);
      invalidWeb3ProviderOrUri = '';
      expect(() => {
        orgIdContract(
          orgIdContractAddress,
          invalidWeb3ProviderOrUri
        )
      }).toThrow(`orgIdContract: Unable to initialize web3 provider`);
    });
  });

  describe('Methods', () => {

    describe('#getOrgId', () => {

      test('method exposed', async () => {
        expect(typeof contract.getOrgId).toBe('function');
      });

      test('should fail if wrong orgIdHash provided', async () => {
        let wrongOrgIdHash = '';
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
        expect(orgId).toHaveProperty('id');
        expect(orgId.id).toBe(orgIdHash);
        expect(orgId).toHaveProperty('owner');
        expect(/^0x[a-fA-F0-9]{40}$/.exec(orgId.owner)).not.toBeNull();
        expect(orgId).toHaveProperty('created');
        expect(/(\d{4})-(\d{2})-(\d{2})T((\d{2}):(\d{2}):(\d{2}))\.(\d{3})Z/.exec(orgId.created)).not.toBeNull();
      });
    });
  });
});
