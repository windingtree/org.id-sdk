// Simple object clone
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const clone = (obj: unknown): any =>
  JSON.parse(JSON.stringify(obj));
