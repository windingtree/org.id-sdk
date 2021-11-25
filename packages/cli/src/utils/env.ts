import type { Spec, Result } from 'arg';
import arg from 'arg';
import * as regex from './regex';

export interface ParsedEnv {
  [k: string]: string
}

export interface CliArgs extends Spec {
  '--type': string;
  '--payload': string;
  '--method': string;
  '--output': string;
  '--nftName': string;
  '--nftDescription': string;
  '--nftImage': string;
}

export type ParsedArgv = Result<CliArgs>;

// Extracts strings from quotes
export const parseQuotedValue = (value: string): string => {
  const result = regex.stripQuotes.exec(value);
  const parsedValue: string = result !== null ? result[1] : value;
  return parsedValue
    .toString()
    .replace(
      regex.reNewLines,
      regex.newLine
    )
    .trim();
};

// Parses raw env file into an object
export const parseEnv = (envRaw: string): ParsedEnv =>
  envRaw
    .toString()
    .split(regex.allNewLines)
    .map(line => regex.keyVal.exec(line))
    .reduce(
      (a, v) => ({
        ...a,
        ...(
          v
          ? {
            [v[1]]: parseQuotedValue(v[2])
          }
          : {}
        )
      }),
      {
        PATH: process.env.PATH as string
      }
    );

// Argv parser
export const parseArguments = (
  config: Spec,
  argv: string[]
): ParsedArgv => arg(
  config,
  {
    argv
  }
);
