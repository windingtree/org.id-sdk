import type { Spec, Result } from 'arg';
import arg from 'arg';
import * as regex from './regex';

export interface ParsedEnv {
  [k: string]: string
}

export interface CliSpec extends Spec {
  '--operation': StringConstructor;
  '--payload': StringConstructor;
  '--method': StringConstructor;
  '--output': StringConstructor;
  '--nftName': StringConstructor;
  '--nftDescription': StringConstructor;
  '--nftImage': StringConstructor;
  '--path': StringConstructor;
  '--deploy': StringConstructor;
  '--keytype': StringConstructor;
  '--record': StringConstructor;
  '--filetype': StringConstructor;
  '--did': StringConstructor;
  '--newOwner': StringConstructor;
}

export type ParsedArgv = Result<CliSpec>;

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
  config: CliSpec,
  argv: string[]
): ParsedArgv => arg(
  config,
  {
    argv
  }
);
