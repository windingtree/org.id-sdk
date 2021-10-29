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
  ref: string,
  data: unknown
): string | null => {

  if (schemaJson === undefined || typeof schemaJson !== 'object') {
    throw new Error('Validation schema not found');
  }

  const ajv = new Ajv({
    useDefaults: true,
    coerceTypes: true,
    strict: false
  });
  addFormats(ajv);
  ajv.addSchema(schemaJson, 'schema.json');

  // case with reference
  ajv.validate(
    {
      $ref: `schema.json${ref}`
    },
    data
  );

  return ajv.errors !== null
      ? ajv.errorsText(ajv.errors)
      : null;
};
