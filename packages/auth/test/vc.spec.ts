import {
  createVC
} from '../src/vc';
import {
  importKeyPrivatePem
} from '../src/keys';
import {
  privatePem
} from './mocks/pemKeys';


describe('Verifiable Credentials', () => {
  const issuer = 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
  const holder = 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
  const subject = {
    test: '123'
  };
  let privateKey;

  beforeAll(async () => {
    privateKey = importKeyPrivatePem(privatePem);
  });

  test('should create credential', async () => {
    const vc = await createVC(
      issuer,
      'TestCredential'
    )
    .setHolder(holder)
    .setExpirationDate(new Date('2021-06-29').toISOString())
    .setValidFrom(new Date('2021-05-30').toISOString())
    .setValidUntil(new Date('2021-06-28').toISOString())
    .setCredentialSubject(subject)
    .sign(privateKey);

    console.log(vc);
  });
});
