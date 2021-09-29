import {
  org as orgJsonSchema,
  vc as vcJsonSchema
} from '@windingtree/org.json-schema';
import {
  getDeepValue,
  validateWithSchemaOrRef
} from '../src/object';
import vcJson from './fixtures/vc.json';

describe('Object utils', () => {

  describe('#getDeepValue', () => {
    const obj = {
      a: {
        b : {
          c: 'ccc'
        },
        x: [
          'xxx',
          'zzz'
        ]
      }
    };

    test('should get value from deep object', async () => {
      expect(getDeepValue(obj, 'a.b.c')).toBe(obj.a.b.c);
    });

    test('should get value from deep object (with array)', async () => {
      expect(getDeepValue(obj, 'a.x[1]')).toBe(obj.a.x[1]);
    });

    test('should return undefined if variable does not exist', async () => {
      expect(typeof getDeepValue(obj, 'a.v')).toBe('undefined');
    });
  });

  describe('#validateWithSchemaOrRef', () => {

    test('should validate data against given schema', async () => {
      // Using embedded definition
      let result = validateWithSchemaOrRef(
        orgJsonSchema,
        '#/definitions/CredentialReference',
        vcJson
      );
      expect(result).toBeNull();

      // Using the root definition
      result = validateWithSchemaOrRef(
        vcJsonSchema,
        '',
        vcJson
      );
      expect(result).toBeNull();
    });
  });
});
