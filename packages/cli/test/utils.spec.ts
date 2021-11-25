import { parseArguments, parseQuotedValue, parseEnv } from '../src/utils/env';

describe('Utils tests', () => {

  describe('ENV utils', () => {
    const env = { KEY1: 'key1', KEY2: 'key2', KEY3: 'key3' };
    const rawEnv =
`KEY1=key1
KEY2="key2"
KEY3='key3'
`;

    describe('#parseQuotedValue', () => {
      const unQuoted = 'value';
      const singleQuoted = '\'value\'';
      const singleStartQuoted = '\'value';
      const singleEndQuoted = 'value\'';
      const doubleQuoted = '"value"';
      const doubleStartQuoted = '"value';
      const doubleEndQuoted = 'value"';

      it('should extract string', async () => {
        expect(parseQuotedValue(unQuoted)).toBe(unQuoted);
        expect(parseQuotedValue(singleQuoted)).toBe(unQuoted);
        expect(parseQuotedValue(singleStartQuoted)).toBe(singleStartQuoted);
        expect(parseQuotedValue(singleEndQuoted)).toBe(singleEndQuoted);
        expect(parseQuotedValue(doubleQuoted)).toBe(unQuoted);
        expect(parseQuotedValue(doubleStartQuoted)).toBe(doubleStartQuoted);
        expect(parseQuotedValue(doubleEndQuoted)).toBe(doubleEndQuoted);
      });
    });

    describe('#parseEnv', () => {

      it('should par raw ENV file source', async () => {
        const { KEY1, KEY2, KEY3 } = parseEnv(rawEnv);
        expect(KEY1).toBe(env.KEY1);
        expect(KEY2).toBe(env.KEY2);
        expect(KEY3).toBe(env.KEY3);
      });
    });
  });

  describe('Argv utils', () => {
    const config = {
      '--encrypt': String,
      '--decrypt': String,
    };
    const argvExec = [
      '/home/host/.nvm/versions/node/v12.20.2/bin/node',
      '/home/host/dev/secure-env-cli/bin/index.js',
      './test.senv',
      'node --version'
    ];
    const argvEncrypt = [
      '/home/host/.nvm/versions/node/v12.20.2/bin/node',
      '/home/host/dev/secure-env-cli/bin/index.js',
      '--encrypt',
      './test.env'
    ];
    const argvDecrypt = [
      '/home/host/.nvm/versions/node/v12.20.2/bin/node',
      '/home/host/dev/secure-env-cli/bin/index.js',
      '--decrypt',
      './test.senv'
    ];

    const argvEncryptDecrypt = [
      '/home/host/.nvm/versions/node/v12.20.2/bin/node',
      '/home/host/dev/secure-env-cli/bin/index.js',
      '--encrypt',
      './test.env',
      '--decrypt',
      './test.senv'
    ];

    describe('#parseArguments', () => {

      it('should parse argvExec', async () => {
        const result = parseArguments(
          config,
          argvExec
        );
        expect(result).toHaveProperty('_');
        expect(result['_'][2]).toBe(argvExec[2]);
        expect(result['_'][3]).toBe(argvExec[3]);
      });

      it('should parse argvEncrypt', async () => {
        const result = parseArguments(
          config,
          argvEncrypt
        );
        expect(result).toHaveProperty('--encrypt');
        expect(result['--encrypt']).toBe(argvEncrypt[3]);
      });

      it('should parse argvDecrypt', async () => {
        const result = parseArguments(
          config,
          argvDecrypt
        );
        expect(result).toHaveProperty('--decrypt');
        expect(result['--decrypt']).toBe(argvDecrypt[3]);
      });

      it('should parse argvEncryptDecrypt', async () => {
        const result = parseArguments(
          config,
          argvEncryptDecrypt
        );
        expect(result).toHaveProperty('--encrypt');
        expect(result).toHaveProperty('--decrypt');
        expect(result['--encrypt']).toBe(argvEncryptDecrypt[3]);
        expect(result['--decrypt']).toBe(argvEncryptDecrypt[5]);
      });
    });
  });
});
