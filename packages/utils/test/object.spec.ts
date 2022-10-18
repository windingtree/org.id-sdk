import {
  org as orgJsonSchema,
  vc as vcJsonSchema
} from '@windingtree/org.json-schema';
import {
  getDeepValue,
  validateWithSchemaOrRef,
  safeObjectStringify
} from '../src/object';
import vcJson from './fixtures/vc.json';
import { expect } from 'chai';

describe('Object utils', () => {

  describe('#safeObjectStringify', () => {

    it('should stringify an object with circular refs', async () => {
      const obj: any = { prop: 111 };
      obj.circular = obj;
      expect(JSON.parse(safeObjectStringify(obj)))
        .to.haveOwnProperty('circular').eq('[Circular]');
    });

    it('should process objects with multiple copies without reduction', async () => {
      const obj = { aaa: 'aaa' };
      const objWithCopies = {
        prop1: obj,
        prop2: obj,
        prop3: {
          ...obj,
          prop4: obj
        }
      };
      expect(JSON.parse(safeObjectStringify(objWithCopies)))
        .to.deep.eq(objWithCopies);
    });
  });

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

    it('should get value from deep object', async () => {
      expect(getDeepValue(obj, 'a.b.c')).to.equal(obj.a.b.c);
    });

    it('should get value from deep object (with array)', async () => {
      expect(getDeepValue(obj, 'a.x[1]')).to.equal(obj.a.x[1]);
    });

    it('should return undefined if variable does not exist', async () => {
      expect(typeof getDeepValue(obj, 'a.v')).to.equal('undefined');
    });
  });

  describe('#validateWithSchemaOrRef', () => {

    it('should throw if schema not provided', async () => {
      expect(
        () => validateWithSchemaOrRef(
          undefined as any,
          '#/definitions/CredentialReference',
          vcJson
        )
      ).to.throw('Validation schema not found');
      expect(
        () => validateWithSchemaOrRef(
          '' as any,
          '#/definitions/CredentialReference',
          vcJson
        )
      ).to.throw('Validation schema not found');
    });

    it('should validate data against given schema', async () => {
      // Using embedded definition
      let result = validateWithSchemaOrRef(
        orgJsonSchema,
        '#/definitions/CredentialReference',
        vcJson
      );
      expect(result).to.be.null;

      // Using the root definition
      result = validateWithSchemaOrRef(
        vcJsonSchema,
        '',
        vcJson
      );
      expect(result).to.be.null;
    });

    it('should return errors if object does not match schema', async () => {
      const subject = {
        unknownKey: '123'
      };
      const subjectSchema = {
        type: 'object',
        properties: {
          test: {
            type: 'string'
          }
        },
        required: [
          'test'
        ]
      };
      const result = validateWithSchemaOrRef(
        subjectSchema,
        '',
        subject
      );
      expect(result).to.not.be.null;
    });
  });
});
