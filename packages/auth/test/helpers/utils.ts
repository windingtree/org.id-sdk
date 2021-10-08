// Simple object clone
export const clone = (obj: unknown): any =>
  JSON.parse(JSON.stringify(obj)) as any;
