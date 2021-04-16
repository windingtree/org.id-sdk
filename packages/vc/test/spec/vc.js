const {
  createVc,
  verifyVc
} = require('../../src/vc');
const keys = require('../fixtures/keys.json');
require('chai').should();

describe('VC', () => {
  const key = keys[0];
  const issuerDid = 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
  const holderDid = 'did:orgid:0x15fe81a268e1ac2698c3a41399da2b92da0fe85559a9666cfb4426c6ded4f9fe';
  const vcType = 'TrustAssertion';
  const verificationMethod = `${issuerDid}#key2`;
  const signatureType = key.alg;
  const proofPurpose = 'assertionMethod';
  const expirationDate = new Date(Date.now() + 60*60*24).toISOString();
  const subject = {
    id: holderDid,
    type: 'social',
    claim: 'https://t.me/windingtree'
  };

  describe('#createVc', () => {

    it('should create a VC', async () => {
      const vc = createVc(
        subject,
        issuerDid,
        holderDid,
        vcType,
        verificationMethod,
        signatureType,
        key.pem,
        proofPurpose,
        expirationDate
      );
      (vc.type).should.to.be.an('array').that.include(vcType);
      (vc.issuer).should.equal(issuerDid);
      (vc.holder).should.be.an('object').that.to.have.property('id').equal(holderDid);
      (vc.credentialSubject).should.deep.equal(subject);
      (vc.proof).should.be.an('object');
      (vc.proof).should.be.an('object').that.to.have.property('type').equal(signatureType);
      (vc.proof).should.be.an('object').that.to.have.property('proofPurpose').equal(proofPurpose);
      (vc.proof).should.be.an('object').that.to.have.property('verificationMethod').equal(verificationMethod);
      (vc.proof).should.be.an('object').that.to.have.property('jws').to.be.a('string');
    });
  });

  describe('#verifyVc', () => {

    it('should verify a VC', async () => {
      const vc = createVc(
        subject,
        issuerDid,
        holderDid,
        vcType,
        verificationMethod,
        signatureType,
        key.pem,
        proofPurpose,
        expirationDate
      );
      const result = verifyVc(
        vc,
        signatureType,
        key.pub
      );
      (result.type).should.to.be.an('array').that.include(vcType);
      (result.issuer).should.equal(issuerDid);
      (result.holder).should.be.an('object').that.to.have.property('id').equal(holderDid);
      (result.credentialSubject).should.deep.equal(subject);
    });
  });
});
