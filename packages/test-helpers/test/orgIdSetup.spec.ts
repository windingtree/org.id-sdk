import {
  orgIdSetup,
  OrgIdSetup,
  generateSalt
}  from '../src/orgIdSetup';
import { DevelopmentServer } from '../src/ganache';
import { HttpFileServer } from '../src/httpServer';

describe('OrgId setup', () => {
  let setup: OrgIdSetup;

  beforeAll(async () => {
    setup = await orgIdSetup();
  });

  afterAll(async () => {
    await setup.close();
  });

  test('should set up the OrgId environment', async () => {
    expect(Array.isArray(setup.accounts)).toBe(true);
    expect(typeof setup.owner).toBe('string');
    expect(typeof setup.address).toBe('string');
    expect(setup.server).toBeInstanceOf(DevelopmentServer);
    expect(setup.httpServer).toBeInstanceOf(HttpFileServer);
    expect(typeof setup.registerOrgId).toBe('function');
    expect(typeof setup.close).toBe('function');
  });

  describe('Utilities', () => {

    describe('#generateSalt', () => {

      test('should generate random unique bytes32 string', async () => {
        const salt = generateSalt();
        expect(/^0x[a-fA-F0-9]{64}$/.exec(salt)).not.toBeNull();
        expect(generateSalt()).not.toEqual(generateSalt());
      });
    });
  });

  describe('Methods', () => {

    describe('#registerOrgId', () => {

      test('should register new orgId', async () => {
        const owner = setup.accounts[2];
        const {
          orgIdHash,
          orgJson
        } = await setup.registerOrgId(owner);
        expect(/^0x[a-fA-F0-9]{64}$/.exec(orgIdHash)).not.toBeNull();
        console.log(JSON.stringify(orgJson, null, 2));
      });
    });
  });
});
