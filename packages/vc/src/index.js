const { simpleUid } = require('@windingtree/common-utilities');
const { JWK, JWS } = require('jose');

// Create VC
module.exports.createVc = (
  subject,
  issuerDid,
  holderDid,
  vcType,
  verificationMethod,
  signatureType,
  key,
  proofPurpose = 'assertionMethod',
  expirationDate
) => {
  const issuanceDate = new Date().toISOString();

  // VC template
  const vc = {
    '@context': [
      'https://www.w3.org/2018/credentials/v1'
    ],
    'id': simpleUid(),
    'type': [
      'VerifiableCredential',
      vcType
    ],
    'issuer': issuerDid,
    'holder': {
      'id': holderDid
    },
    'issuanceDate': issuanceDate,
    ...(
      expirationDate
        ? {
          expirationDate
        }
        : {}
    ),
    'credentialSubject': subject
  };

  // Proof template
  const proof = {
    'type': signatureType,
    'created': issuanceDate,
    'proofPurpose': proofPurpose,
    'verificationMethod': verificationMethod,
    'jws': ''
  };

  let alg;

  // Proof creation
  switch (signatureType) {
    case 'secp256k1':
    case 'ES256K':
      alg = 'ES256K';
      break;
    default:
      throw new Error('Unknown VC signature type');
  }

  if (!key.match(/^-----BEGIN EC PRIVATE KEY/)) {
    key = `-----BEGIN EC PRIVATE KEY-----\n${key}\n-----END EC PRIVATE KEY-----`;
  }

  key = JWK.asKey(
    key,
    {
      alg,
      use: 'sig'
    }
  );

  // Creation of signature
  proof.jws = JWS.sign(
    vc,
    key,
    {
      alg
    }
  );

  return {
    ...vc,
    proof
  };
};

// Verify VC
module.exports.verifyVc = (vc, keyType, pubKey, parsePayload = true) => {
  if (!pubKey.match(/^-----BEGIN PUBLIC KEY/)) {
    pubKey = `-----BEGIN PUBLIC KEY-----\n${pubKey}\n-----END PUBLIC KEY-----`;
  }

  let alg;

  switch (keyType) {
    case 'secp256k1':
    case 'ES256K':
      alg = 'ES256K';
      break;
    default:
      throw new Error('Unknown VC signature type');
  }

  pubKey = JWK.asKey(
    pubKey,
    {
      alg,
      use: 'sig'
    }
  );

  const { proof, ...vcPayload } = vc;
  const verificationResult = JWS.verify(
    proof.jws,
    pubKey,
    {
      complete: true
    }
  );

  if (parsePayload) {
    try {
      verificationResult.payload = JSON.parse(
        verificationResult.payload.toString()
      );
    } catch (error) {
      throw new Error('Unable to parse VC payload');
    }
  } else {
    verificationResult.payload = verificationResult.payload.toString();
  }

  // Validate common VC integrity
  if (JSON.stringify(vcPayload) !== JSON.stringify(verificationResult.payload)) {
    throw new Error('VC did not pass integrity check');
  }

  const {
    issuanceDate,
    expirationDate,
    issuer,
    holder,
    credentialSubject
  } = verificationResult.payload;

  // Validate VC issuance date
  if (!issuanceDate) {
    throw new Error('VC issuance date not defined');
  }

  if (new Date(issuanceDate).getTime() > Date.now()) {
    throw new Error('VС issuance date has a wrong value');
  }

  // Validate VC expiration date
  if (expirationDate && new Date(expirationDate).getTime() < Date.now()) {
    throw new Error('VC expired');
  }

  // Validate VC issuer existence
  if (!issuer) {
    throw new Error('VC issuer not defined');
  }

  // Validate VC holder existence
  if (!holder || !holder.id) {
    throw new Error('VC holder not defined');
  }

  // Validate VC credentialSubject existence
  if (!credentialSubject) {
    throw new Error('VC credentialSubject not defined');
  }

  return verificationResult.payload;
};
