import type {
  SignedVC
} from '../src/vc'
import {
  createVC,
  verifyVC,
} from '../src/vc';
import {
  importKeyPrivatePem,
  importKeyPublicPem
} from '../src/keys';
import {
  privatePem,
  publicPem
} from './mocks/pemKeys';
import { ganache } from '@windingtree/org.id-test-ganache-server';

describe('Verifiable Credentials', () => {
  const issuer = 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
  const holder = 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
  const subject = {
    test: '123'
  };
  let privateKey;
  let publicKey;
  let server;
  let accounts;
  let web3Provider;

  beforeAll(async () => {
    privateKey = importKeyPrivatePem(privatePem);
    publicKey = importKeyPublicPem(publicPem);
    server = await ganache();
    accounts = await server.getAccounts();
    web3Provider = server.provider;
  });

  afterAll(async () => {
    await server.close();
  });

  test('should create credential', async () => {
    const vc: SignedVC = await createVC(
      issuer,
      'TestCredential'
    )
    .setHolder(holder)
    .setExpirationDate(new Date('2031-06-29').toISOString())
    .setValidFrom(new Date('2031-05-30').toISOString())
    .setValidUntil(new Date('2031-06-28').toISOString())
    .setCredentialSubject(subject)
    .sign(privateKey);

    const payload = await verifyVC(vc, publicKey); // @toto verify payload
    expect(vc.credentialSubject).toEqual(payload.credentialSubject);
  });

  test('should create credential signed with web3 provider', async () => {
    const issuerBlockchainAccountId = `${accounts[0]}@eip155:1`;
    const vc: SignedVC = await createVC(
      issuer,
      'TestCredential'
    )
    .setHolder(holder)
    .setExpirationDate(new Date('2031-06-29').toISOString())
    .setValidFrom(new Date('2031-05-30').toISOString())
    .setValidUntil(new Date('2031-06-28').toISOString())
    .setCredentialSubject(subject)
    .signWithBlockchainAccount(
      issuerBlockchainAccountId,
      {
        web3Provider
      }
    );

    const payload = await verifyVC(vc, issuerBlockchainAccountId);
    expect(vc.credentialSubject).toEqual(payload.credentialSubject);
  });
});
