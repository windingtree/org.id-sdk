import type { Signer } from 'ethers';
import type { SignedVC } from '../src/vc';
import { createVC, verifyVC } from '../src/vc';
import { importKeyPrivatePem, importKeyPublicPem } from '../src/keys';
import { privatePem, publicPem } from './mocks/pemKeys';
import { ethers } from 'hardhat';
import { expect } from 'chai';

describe('Verifiable Credentials', () => {
  const issuer = 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
  const holder = 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
  const subject = {
    test: '123'
  };
  let privateKey;
  let publicKey;
  let signers;
  let accounts;

  before(async () => {
    signers = await ethers.getSigners();
    accounts = await Promise.all(signers.map((s: Signer) => s.getAddress()));
    privateKey = importKeyPrivatePem(privatePem);
    publicKey = importKeyPublicPem(publicPem);
  });

  it('should create credential', async () => {
    const vc: SignedVC = await createVC(
      issuer,
      'TestCredential'
    )
    .setHolder(holder)
    .setExpirationDate(new Date('2031-06-29').toISOString())
    .setValidFrom(new Date().toISOString())
    .setValidUntil(new Date('2031-06-28').toISOString())
    .setCredentialSubject(subject)
    .sign(privateKey);

    const payload = await verifyVC(vc, publicKey); // @toto verify payload
    expect(vc.credentialSubject).to.deep.equal(payload.credentialSubject);
  });

  it('should create credential signed with web3 provider', async () => {
    const signerIndex = 0;
    const issuerBlockchainAccountId = `${accounts[signerIndex]}@eip155:1`;
    const vc: SignedVC = await createVC(
      issuer,
      'TestCredential'
    )
    .setHolder(holder)
    .setExpirationDate(new Date('2031-06-29').toISOString())
    .setValidFrom(new Date().toISOString())
    .setValidUntil(new Date('2031-06-28').toISOString())
    .setCredentialSubject(subject)
    .signWithBlockchainAccount(
      issuerBlockchainAccountId,
      signers[signerIndex]
    );

    const payload = await verifyVC(vc, issuerBlockchainAccountId);
    expect(vc.credentialSubject).to.deep.equal(payload.credentialSubject);
  });
});
