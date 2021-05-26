import * as rules from '../src/regexp';

describe('Regular expressions', () => {

  describe('Common', () => {

    test('should validate emails', async () => {
      expect(rules.email.exec('test.bla_bladomain-1.com')).toBeNull();
      expect(rules.email.exec('test@bla_bla@domain-1.com')).toBeNull();
      expect(rules.email.exec('test.bla_bla@doma_in-1.com')).not.toBeNull();
    });

    test('should validate URIs', async () => {
      expect(rules.uri.exec(
        'https://blaqwert1-as^dsad.domain1-2-aaa.io:8080/path/to/file?user=allowed#readme'
      )).toBeNull();
      expect(rules.uri.exec(
        'https://blaqwert1-asdsad.domain1-2-aaa.io@8080/path/to?user=allowed#readme'
      )).toBeNull();
      expect(rules.uri.exec(
        'hzzz://blaqwert1-asdsad.domain1-2-aaa.io@8080/path/to?user=allowed#readme'
      )).toBeNull();
      expect(rules.uri.exec(
        'https://blaqwert1-asdsad.domain1-2-aaa.io:8080/path/to?user=allowed#readme'
      )).not.toBeNull();
      const validUris = [
        'https://dsfsdf.sdfsdfsd-sf.io:8080/path/to?user=allowed#readme',
        'http://dsfsdf.sdfsdfsd-sf.io:8080/path/to?user=allowed#readme',
        'http://ibm.com:443/path/',
        'https://ibm.com',
        'https://ibm.com/path/to',
        'ws://0.0.0.0:8654/ws',
        'wss://0.0.0.0:8654/ws'
      ];
      validUris.forEach(u => {
        expect(rules.uri.exec(u)).not.toBeNull();
      });
    });

    test('should validate phone numbers', async () => {
      expect(rules.phone.exec('+1-AAA-754-3010')).toBeNull();
      const validPhones = [
        '754-3010',
        '(541) 754-3010',
        '+1-541-754-3010',
        '1-541-754-3010',
        '001-541-754-3010',
        '191 541 754 3010',
        '636-48018',
        '(089) / 636-48018',
        '+49-89-636-48018',
        '19-49-89-636-48018',
      ];
      validPhones.forEach(p => {
        expect(rules.phone.exec(p)).not.toBeNull();
      });
    });
  });

  describe('Crypto addresses', () => {

    test('should validate ethereum address', async () => {
      expect(rules.ethereumAddress.exec('0x7f06d9c09b5627a9d48693A1dB7e1f62cAc')).toBeNull();
      const valid = [
        '0x7f06d9c09b5627a9d48693A1dB7e1f62cAc90c36',
        '0x135f874692c0C44e0196AF9c4cE0141f3E23197a',
        '0x427B05781308e7c35b3724Cf890A6EC20A6ED0e2'
      ];
      valid.forEach(s => {
        expect(rules.ethereumAddress.exec(s)).not.toBeNull();
      });
    });

    test('should validate bitcoin address', async () => {
      expect(rules.ethereumAddress.exec('151Y4HsfkDk6NjhyqPThPdVzFpsKc9P7')).toBeNull();
      expect(rules.ethereumAddress.exec('2NapBXatQueFQqsLjqJcsMCbdGjn8AHPiR')).toBeNull();
      const valid = [
        '151Y4HsfkDk6NjhyqPThPdVdrzFpsKc9P7',
        '1NapBXatQueFQqsLjqJcsMCbdGjn8AHPiR',
        '3MAkFF2R1u4z9MfQGdvQPPbiYUxqDdgbqG',
        '31xY2Gy38jjoSUh9s3d3HfNmMbd9pADWbW',
        'bc1qpeeutqy7raf4rj9trgpv72u4e8nsl7z9mp23ap',
        'bc1q7eucu99xzuz76nkkypt9h6kv5ua94eg3gcu68h'
      ];
      valid.forEach(s => {
        expect(rules.bitcoinAddress.exec(s)).not.toBeNull();
      });
    });

    describe('blockchainAccountId', () => {
      const validIds = [
        {
          '0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb@eip155:1': {
            accountId: '0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb',
            blockchainType: 'eip155',
            blockchainId: '1',
          }
        },
        {
          '128Lkh3S7CkDTBZ8W7BbpsN3YYizJMp8p6@bip122:000000000019d6689c085ae165831e93': {
            accountId: '128Lkh3S7CkDTBZ8W7BbpsN3YYizJMp8p6',
            blockchainType: 'bip122',
            blockchainId: '000000000019d6689c085ae165831e93',
          }
        },
        {
          'cosmos1t2uflqwqe0fsj0shcfkrvpukewcw40yjj6hdc0@cosmos:cosmoshub-3': {
            accountId: 'cosmos1t2uflqwqe0fsj0shcfkrvpukewcw40yjj6hdc0',
            blockchainType: 'cosmos',
            blockchainId: 'cosmoshub-3',
          }
        },
        {
          '5hmuyxw9xdgbpptgypokw4thfyoe3ryenebr381z9iaegmfy@polkadot:b0a8d493285c2df73290dfb7e61f870f': {
            accountId: '5hmuyxw9xdgbpptgypokw4thfyoe3ryenebr381z9iaegmfy',
            blockchainType: 'polkadot',
            blockchainId: 'b0a8d493285c2df73290dfb7e61f870f',
          }
        },
        {
          'bd57219062044ed77c7e5b865339a6d727309c548763141f11e26e9242bbd34@max-namespace-16:xip3343-8c3444cf8970a9e41a706fab93e7a6c4-xxxyyy': {
            accountId: 'bd57219062044ed77c7e5b865339a6d727309c548763141f11e26e9242bbd34',
            blockchainType: 'max-namespace-16',
            blockchainId: 'xip3343-8c3444cf8970a9e41a706fab93e7a6c4-xxxyyy',
          }
        }
      ];

      test('should validate blockchainAccountId format', async () => {
        validIds.forEach((s: any) => {
          const string = Object.keys(s)[0];
          const values = s[string];
          const result = rules.blockchainAccountIdGrouped.exec(string).groups;
          expect(result.accountId).toBe(values.accountId);
          expect(result.blockchainType).toBe(values.blockchainType);
          expect(result.blockchainId).toBe(values.blockchainId);
        });
      });
    });
  });

  describe('Public keys (as strings)', () => {

    test('should validate X25519 key', async () => {
      expect(rules.X25519.exec('MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE76VV1vw+capJ7m4AlKP=')).toBeNull();
      const valid = [
        'MCowBQYDK2VuAyEAMjwLgeDT9Eabvd/sBg0T3Cl9WE81JafABI8tKXMhnnM=',
      ];
      valid.forEach(s => {
        expect(rules.X25519.exec(s)).not.toBeNull();
      });
    });

    test('should validate secp256k1 key', async () => {
      expect(rules.secp256k1.exec('capJ7m4AlKP+qZ0Sh516y25ErauRkRgJShSPtKdYP3a4eFjRtfUsvCnl903mr4hSPt+KVxudoMUOYw==')).toBeNull();
      const valid = [
        'MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE76VV1vw+capJ7m4AlKP+qZ0Sh516y25ErauRkRgJShSPtKdYP3a4eFjRtfUsvCnl903mr4hSPt+KVxudoMUOYw==',
      ];
      valid.forEach(s => {
        expect(rules.secp256k1.exec(s)).not.toBeNull();
      });
    });
  });

  describe('Hashes', () => {

    test('should validate bytes32 hash string', async () => {
      expect(rules.bytes32.exec('0x7f06d9c09b5627a9d48693A1dB7e1f62cAc90c36')).toBeNull();
      const valid = [
        '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
      ];
      valid.forEach(s => {
        expect(rules.bytes32.exec(s)).not.toBeNull();
      });
    });
  });

  describe('Banks accounts', () => {

    test('should validate SWIFT account', async () => {
      expect(rules.swift.exec('CTBAAUG2S')).toBeNull();
      const valid = [
        'CTBAAU2S',
      ];
      valid.forEach(s => {
        expect(rules.swift.exec(s)).not.toBeNull();
      });
    });

    test('should validate IBAN account', async () => {
      expect(rules.iban.exec('CTBAAU2S')).toBeNull();
      const valid = [
        'CY 17 002 00128 00000012005276002',
        'LU 28 001 94006447500003',
        'NO 93 8601 11179474',
        'AL47 2121 1009 0000 0002 3569 87411'
      ];
      valid.forEach(s => {
        expect(rules.iban.exec(s)).not.toBeNull();
      });
    });
  });

  describe('DID', () => {

    test('should validate ORGiD DID', async () => {
      expect(rules.did.exec('0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d')).toBeNull();
      const valid = [
        'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
        'did:orgid:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
        'did:orgid:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d?service=files&relative-ref=%2Fmyresume%2Fdoc%3Fversion%3Dlatest#intro',
        'did:orgid:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d?service=files&relative-ref=%2Fmyresume%2Fdoc%3Fversion%3Dlatest',
        'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1',
        'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d?service=files&relative-ref=%2Fmyresume%2Fdoc%3Fversion%3Dlatest#intro',
      ];
      valid.forEach(s => {
        expect(rules.did.exec(s)).not.toBeNull();
      });
    });

    test('should validate ORGiD by DID parameters', async () => {
      const valid = [
        {
          'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d': {
            did: 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
            method: 'orgid',
            submethod: 'ropsten',
            id: '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d'
          }
        },
        {
          'did:orgid:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d?service=files&relative-ref=%2Fmyresume%2Fdoc%3Fversion%3Dlatest#intro': {
            did: 'did:orgid:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
            method: 'orgid',
            id: '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
            query: 'service=files&relative-ref=%2Fmyresume%2Fdoc%3Fversion%3Dlatest',
            fragment: 'intro'
          }
        },
        {
          'did:orgid:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d?service=files&relative-ref=%2Fmyresume%2Fdoc%3Fversion%3Dlatest': {
            did: 'did:orgid:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
            method: 'orgid',
            id: '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
            query: 'service=files&relative-ref=%2Fmyresume%2Fdoc%3Fversion%3Dlatest'
          }
        },
        {
          'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1': {
            did: 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
            method: 'orgid',
            submethod: 'ropsten',
            id: '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
            fragment: 'key-1'
          }
        },
        {
          'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d?service=files&relative-ref=%2Fmyresume%2Fdoc%3Fversion%3Dlatest#intro': {
            did: 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
            method: 'orgid',
            submethod: 'ropsten',
            id: '0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
            query: 'service=files&relative-ref=%2Fmyresume%2Fdoc%3Fversion%3Dlatest',
            fragment: 'intro'
          }
        },
      ];
      valid.forEach((s: any) => {
        const variant: string = Object.keys(s)[0];
        const result: any = rules.didGrouped.exec(variant);
        expect(result).not.toBeNull();
        expect(result.groups.did).toBe(s[variant].did);
        expect(result.groups.method).toBe(s[variant].method);
        expect(result.groups.submethod).toBe(s[variant].submethod);
        expect(result.groups.id).toBe(s[variant].id);
        expect(result.groups.query).toBe(s[variant].query);
        expect(result.groups.fragment).toBe(s[variant].fragment);
      });
    });
  });
});
