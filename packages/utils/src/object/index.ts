import type { AnySchema, Plugin } from 'ajv';
import type { FormatOptions } from 'ajv-formats';

import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

export type { AnySchema }

// Because of wrong typings in ajv@8.6.2
// @todo Refactor after next ajv version will be released
const addFormats = ajvFormats as unknown as Plugin<FormatOptions>;

// Get value by path from the object
// Usage: const value = getDeepValue(obj, 'path.to.variable');
export const getDeepValue = (
  obj: Record<string, unknown>,
  path: string
): unknown =>
  path
    .split('.')
    .reduce(
      (res: unknown[], prop: string) => {
        const arrProp = prop.match(/(\w+)\[(\d+)\]$/i);
        if (arrProp) {
          return res ? res[arrProp[1]][Number(arrProp[2])] : undefined;
        }
        return res ? res[prop] : undefined;
      },
      obj
    );

// Validate given data against the schema or $ref
export const validateWithSchemaOrRef = (
  schemaJson: AnySchema,
  ref: AnySchema | string,
  data: unknown
): string | null => {
  schemaJson = schemaJson ? schemaJson : {};// Can be null or undefined in case properties validation

  const ajv = new Ajv({
    useDefaults: true,
    coerceTypes: true,
    strict: false
  });
  addFormats(ajv);
  ajv.addSchema(schemaJson, 'schema.json');

  if (typeof ref === 'object') {
    // object with rules
    ajv.validate(
      ref,
      data
    );
  } else {
    // case with reference
    ajv.validate(
      {
        $ref: `schema.json${ref}`
      },
      data
    );
  }

  return ajv.errors !== null
    ? ajv.errorsText(ajv.errors)
    : null;
};
