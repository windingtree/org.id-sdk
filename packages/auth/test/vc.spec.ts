import type { Signer } from 'ethers';
import type { SignedVC } from '../src/vc';
import {
  createVC,
  verifyVC,
  parseBlockchainAccountId,
  decodeJws,
  signWithSigner,
  verifyJwsSignedWithBlockchainAccount,
  buildHolderUtil,
  checkDateUtil,
  buildProofUtil
} from '../src/vc';
import { importKeyPrivatePem, importKeyPublicPem, createJWK } from '../src/keys';
import { clone } from './helpers/utils';
import { privatePem, publicPem } from './mocks/pemKeys';
import { decodeProtectedHeader } from 'jose/util/decode_protected_header';
import { decode as base64urlDecode } from 'jose/util/base64url';
import { DateTime } from  'luxon';
import { ethers } from 'hardhat';
import { expect } from 'chai';

describe('Verifiable Credentials', () => {
  const issuer = 'did:orgid:4:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
  const holder = 'did:orgid:4:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
  const subject = {
    test: '123'
  };
  let privateKey;
  let publicKey;
  let signers: Signer[];
  let accounts: string[];

  before(async () => {
    signers = await ethers.getSigners();
    accounts = await Promise.all(signers.map((s: Signer) => s.getAddress()));
    privateKey = importKeyPrivatePem(privatePem);
    publicKey = importKeyPublicPem(publicPem);
  });

  describe('#parseBlockchainAccountId', () => {
    const validId = {
      id: '0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb@eip155:1',
      accountId: '0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb',
      blockchainType: 'eip155',
      blockchainId: '1',
    };

    it('should throw if invalid blockchain account Id provided', async () => {
      expect(
        () => parseBlockchainAccountId('invalidId')
      ).to.throw('Invalid blockchain account Id format');
    });

    it('should parse a blockchain account Id', async () => {
      const result = parseBlockchainAccountId(validId.id);
      expect(result).to.have.property('accountId').to.equal(validId.accountId);
      expect(result).to.have.property('blockchainType').to.equal(validId.blockchainType);
      expect(result).to.have.property('blockchainId').to.equal(validId.blockchainId);
    });
  });

  describe('#decodeJws', () => {
    let signer: Signer;
    let verificationMethod: string;
    let jwsBySigner: string;
    let jwsSplitted: string[];
    const signPayload = { 'data': true };

    before(async () => {
      signer = signers[1];
      verificationMethod = issuer;
      jwsBySigner = await signWithSigner(signer, verificationMethod, signPayload);
      jwsSplitted = jwsBySigner.split('.');
    });

    it('should throw if invalid signature provided', async () => {
      expect(
        () => decodeJws('invalid.signature')
      ).to.throw('Invalid JWS signature');
    });

    it('should throw if invalid protected header provided in the header', async () => {
      expect(
        () => decodeJws(`invalid_prefix${jwsBySigner}`)
      ).to.throw('Unable to decode JWS protected header');
    });

    it('should throw if invalid payload provided in the signature', async () => {
      expect(
        () => decodeJws(
          jwsBySigner
            .split('.')
            .map((part, index) => index === 1 ? `${part}invalid_payload_postfix` : part)
            .join('.')
        )
      ).to.throw('Unable to decode JWS payload');
    });

    it('should decode JWS', async () => {
      const {
        protectedHeader,
        payload,
        signature,
        message
      } = decodeJws(jwsBySigner);
      expect(protectedHeader).to.deep.equal(decodeProtectedHeader(jwsBySigner));
      expect(payload).to.deep.equal(signPayload);
      expect(signature).to.equal(base64urlDecode(jwsSplitted[2]).toString());
      expect(message).to.equal(`${jwsSplitted[0]}.${jwsSplitted[1]}`);
    });
  });

  describe('#verifyJwsSignedWithBlockchainAccount', () => {
    let signerAddress: string;
    let nonSignerAddress: string;
    let jws: string;
    const jwsPayload = { data: true };

    before(async () => {
      const signer: Signer = signers[1];
      signerAddress = await signer.getAddress();
      nonSignerAddress = await signers[2].getAddress();
      jws = await signWithSigner(signer, issuer, jwsPayload);
    });

    it('should throw is signed by different account', async () => {
      expect(() => verifyJwsSignedWithBlockchainAccount(jws, nonSignerAddress))
        .to.throw(
          `VC signed by different accountId: ${nonSignerAddress} though expected: ${signerAddress}`
        );
    });

    it('should verify JWS signed with blockchain account id', async () => {
      const payload = verifyJwsSignedWithBlockchainAccount(jws, signerAddress);
      expect(payload).to.deep.equal(jwsPayload);
    });
  });

  describe('#buildHolderUtil', () => {

    it('should throw if invalid holder DID provided', async () => {
      const invalidHolderDid = 'InvalidDID';
      expect(
        () => buildHolderUtil(invalidHolderDid)
      ).to.throw(`Invalid holder DID format: ${invalidHolderDid}`);
    });

    it('should build holder object', async () => {
      const holderType = 'KnownType';
      const holderWithType = { id: holder, type: holderType };
      expect(buildHolderUtil(holder)).to.deep.equal(holder);
      expect(buildHolderUtil(holder, holderType)).to.deep.equal(holderWithType);
    });
  });

  describe('#checkDateUtil', () => {

    it('should throw if invalid ISO date provided', async () => {
      expect(() => checkDateUtil('23:54:11')).to.throw('Invalid date format');
    });

    it('should validate string formatted as ISO date', async () => {
      const date = new Date();
      expect(checkDateUtil(date.toISOString())).to.deep.equal(DateTime.fromJSDate(date))
    });
  });

  describe('#buildProofUtil', () => {
    let jws: string;
    const jwsPayload = { data: true };

    before(async () => {
      const signer: Signer = signers[1];
      jws = await signWithSigner(signer, issuer, jwsPayload);
    });

    it('should throw if JWS not been provided', async () => {
      expect(() => buildProofUtil(
        '',
        'EcdsaSecp256k1RecoverySignature2020',
        issuer
      )).to.throw('JWS must be provided');
    });

    it('should build proof', async () => {
      const type = 'EcdsaSecp256k1RecoverySignature2020';
      const proof = buildProofUtil(
        jws,
        type,
        issuer
      );
      expect(proof).to.have.property('type').to.equal(type);
      expect(proof).to.have.property('created').to.be.a('string');
      expect(proof).to.have.property('proofPurpose').to.equal('assertionMethod');
      expect(proof).to.have.property('verificationMethod').to.equal(issuer);
      expect(proof).to.have.property('jws').to.equal(jws);
    });
  });

  describe('#createVC', () => {

    it('should throw if', async () => {
      const invalidIssuer = 'InvalidIssuer';
      expect(
        () => createVC(
          invalidIssuer,
          'TestCredential'
        )
      ).to.throw(`Invalid issuer DID format: ${invalidIssuer}`);
    });

    it('should throw if DID fragment not found', async () => {
      const invalidIssuer = 'did:orgid:4:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d';
      expect(
        () => createVC(
          invalidIssuer,
          'TestCredential'
        )
      ).to.throw(
        `Key identifier must be provided as fragment in the DID: ${invalidIssuer} #fragment`
      );
    });

    it('should throw if validFrom > expirationDate', async () => {
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setExpirationDate(new Date('2031-06-29').toISOString())
        .setValidFrom(new Date('2031-07-28').toISOString())
        .setValidUntil(new Date('2031-06-28').toISOString())
      ).to.throw('validFrom must be less than expirationDate');
    });

    it('should throw if validFrom > validUntil', async () => {
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setExpirationDate(new Date('2031-11-29').toISOString())
        .setValidUntil(new Date('2031-04-28').toISOString())
        .setValidFrom(new Date('2031-05-28').toISOString())
      ).to.throw('validFrom must be less than validUntil');
    });

    it('should throw if validFrom < issuanceDate', async () => {
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setExpirationDate(new Date('2031-11-29').toISOString())
        .setValidFrom(new Date('2000-10-11').toISOString())
      ).to.throw('validFrom must be greater than issuanceDate');
    });

    it('should throw if validUntil > expirationDate', async () => {
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setExpirationDate(new Date('2031-06-29').toISOString())
        .setValidUntil(new Date('2031-08-28').toISOString())
      ).to.throw('validUntil must be less than expirationDate');
    });

    it('should throw if validUntil < validFrom', async () => {
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setExpirationDate(new Date('2031-06-29').toISOString())
        .setValidFrom(new Date('2031-05-11').toISOString())
        .setValidUntil(new Date('2031-04-28').toISOString())
      ).to.throw('validUntil must be greater than validFrom');
    });

    it('should throw if validFrom < issuanceDate', async () => {
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setExpirationDate(new Date('2031-06-29').toISOString())
        .setValidUntil(new Date('2000-10-11').toISOString())
      ).to.throw('validUntil must be greater than issuanceDate');
    });

    it('should throw if expirationDate < validUntil', async () => {
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setValidUntil(new Date('2031-10-11').toISOString())
        .setExpirationDate(new Date('2031-06-29').toISOString())
      ).to.throw('expirationDate must be greater than validUntil');
    });

    it('should throw if expirationDate < validFrom', async () => {
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setValidFrom(new Date('2031-10-11').toISOString())
        .setExpirationDate(new Date('2031-06-29').toISOString())
      ).to.throw('expirationDate must be greater than validFrom');
    });

    it('should throw if expirationDate < issuanceDate', async () => {
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setExpirationDate(new Date('2000-10-11').toISOString())
      ).to.throw('expirationDate must be greater than issuanceDate');
    });

    it('should throw if credential subject is not an object or empty object', async () => {
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setCredentialSubject('NotAnObject' as any)
      ).to.throw('Credential subject must be a valid object and cannot be empty');
      expect(
        () => createVC(
          issuer,
          'TestCredential'
        )
        .setCredentialSubject({})
      ).to.throw('Credential subject must be a valid object and cannot be empty');
    });

    it('should throw if public key provided for signing', async () => {
      await expect(
        createVC(
          issuer,
          'TestCredential'
        )
        .setCredentialSubject({ data: true })
        .sign(publicKey)
      ).to.rejectedWith('Only private keys are accepted for sining of VCs\'');
    });

    it('should throw if the signer address is different from blockchain account', async () => {
      const signer = signers[3];
      const nonSignerAddress = await signers[4].getAddress();
      const issuerBlockchainAccountId = `${nonSignerAddress}@eip155:1`;
      await expect(
        createVC(
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
          signer
        )
      ).to.rejectedWith('The signer address is different from blockchain account');
    });

    it('should throw if unsupported blockchain type is provided with blockchain account Id', async () => {
      const signer = signers[3];
      const signerAddress = await signer.getAddress();
      const blockchainType = 'Unsupported';
      const issuerBlockchainAccountId = `${signerAddress}@${blockchainType}:1`;
      await expect(
        createVC(
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
          signer
        )
      ).to.rejectedWith(`Unsupported blockchain type: ${blockchainType}`);
    });

    it('should create credential with JWK', async () => {
      const pubJwk = await createJWK(publicKey);
      const privJwk = await createJWK(privateKey);
      const vc: SignedVC = await createVC(
        issuer,
        'TestCredential'
      )
      .setHolder(holder)
      .setExpirationDate(new Date('2031-06-29').toISOString())
      .setValidFrom(new Date().toISOString())
      .setValidUntil(new Date('2031-06-28').toISOString())
      .setCredentialSubject(subject)
      .sign(privJwk);

      const payload = await verifyVC(vc, pubJwk);
      expect(vc.credentialSubject).to.deep.equal(payload.credentialSubject);
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

    it('should create credential signed with ethers provider', async () => {
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

  describe('#verifyVC', () => {
    let vc: SignedVC;

    before(async () => {
      vc = await createVC(
        issuer,
        'TestCredential'
      )
      .setHolder(holder)
      .setExpirationDate(new Date('2031-06-29').toISOString())
      .setValidFrom(new Date().toISOString())
      .setValidUntil(new Date('2031-06-28').toISOString())
      .setCredentialSubject(subject)
      .sign(privateKey);
    });

    it('should throw if VC schema validation failed', async () => {
      const invalidVc = clone(vc);
      delete invalidVc.proof.jws;
      await expect(
        verifyVC(invalidVc, publicKey)
      ).to.rejectedWith('VC schema validation error: data/proof must have required property \'jws\'');
    });

    it('should throw if VC has empty jws', async () => {
      const invalidVc = clone(vc);
      invalidVc.proof.jws = '';
      await expect(
        verifyVC(invalidVc, publicKey)
      ).to.rejectedWith('Invalid VC signature');
    });

    it('should throw if private key has been provided', async () => {
      await expect(
        verifyVC(vc, privateKey)
      ).to.rejectedWith('Only public keys are accepted for verifying of VCs\'');
    });

    it('should throw if unsupported blockchain type is used for verification', async () => {
      const signerIndex = 0;
      const blockchainType = 'Unknown';
      const invalidBlockchainAccountId = `${accounts[signerIndex]}@${blockchainType}:1`;
      const blockchainAccountId = `${accounts[signerIndex]}@eip155:1`;
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
        blockchainAccountId,
        signers[signerIndex]
      );

      await expect(
        verifyVC(vc, invalidBlockchainAccountId)
      ).to.rejectedWith(`Unsupported blockchain type: ${blockchainType}`);
    });

    it('should throw if unsupported public key provided', async () => {
      await expect(
        verifyVC(vc, 'notAKey')
      ).to.rejectedWith('Unsupported type of public key');
    });

    it('should throw if VC is expired', async () => {
      const expirationDate = new Date().toISOString();
      const vc = await createVC(
        issuer,
        'TestCredential'
      )
      .setExpirationDate(expirationDate)
      .setCredentialSubject(subject)
      .sign(privateKey);

      // eslint-disable-next-line no-async-promise-executor
      await new Promise((async resolve => {
        setTimeout(resolve, 100);
      }));

      await expect(
        verifyVC(vc, publicKey)
      ).to.rejectedWith(`VC expired at: ${DateTime.fromISO(expirationDate)}`);
    });

    it('should throw if VC not active by from-until rules', async () => {
      const now = Date.now();
      const validFrom = DateTime.fromMillis(now + 100).toISO();
      const validUntil = DateTime.fromMillis(now + 200).toISO();
      const vc = await createVC(
        issuer,
        'TestCredential'
      )
      .setExpirationDate(new Date('2031-06-29').toISOString())
      .setValidFrom(validFrom)
      .setValidUntil(validUntil)
      .setCredentialSubject(subject)
      .sign(privateKey);

      await expect(
        verifyVC(vc, publicKey)
      ).to.rejectedWith(
        `VC inactive. Valid from date: ${validFrom}. Valid until date: ${validUntil}`
      );

      // eslint-disable-next-line no-async-promise-executor
      await new Promise((async resolve => {
        setTimeout(resolve, 350);
      }));

      await expect(
        verifyVC(vc, publicKey)
      ).to.rejectedWith(
        `VC inactive. Valid from date: ${validFrom}. Valid until date: ${validUntil}`
      );
    });

    it('should throw if VC not active by from rule', async () => {
      const now = Date.now();
      const validFrom = DateTime.fromMillis(now + 100).toISO();
      const vc = await createVC(
        issuer,
        'TestCredential'
      )
      .setExpirationDate(new Date('2031-06-29').toISOString())
      .setValidFrom(validFrom)
      .setCredentialSubject(subject)
      .sign(privateKey);

      await expect(
        verifyVC(vc, publicKey)
      ).to.rejectedWith(
        `VC inactive. Valid from date: ${validFrom}`
      );
    });

    it('should throw if VC not active by until rule', async () => {
      const now = Date.now();
      const validUntil = DateTime.fromMillis(now + 50).toISO();
      const vc = await createVC(
        issuer,
        'TestCredential'
      )
      .setExpirationDate(new Date('2031-06-29').toISOString())
      .setValidUntil(validUntil)
      .setCredentialSubject(subject)
      .sign(privateKey);

      // eslint-disable-next-line no-async-promise-executor
      await new Promise((async resolve => {
        setTimeout(resolve, 100);
      }));

      await expect(
        verifyVC(vc, publicKey)
      ).to.rejectedWith(
        `VC inactive. Valid until date: ${validUntil}`
      );
    });
  });
});
