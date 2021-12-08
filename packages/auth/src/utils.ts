import { base64url as joseBase64url } from 'jose';

export interface Base64Url {
  encode(unencoded: string | Uint8Array): string;
  decode(encoded: string | Uint8Array): string | Uint8Array
}

// Detect node.js environment
export const isNodeJs = (): boolean => !!process?.versions?.node;

// base64url wrapper that fix unusual behavior in browser environment
export const base64url: Base64Url = {
  encode: joseBase64url.encode,
  decode: (encoded: string | Uint8Array): string | Uint8Array =>
    isNodeJs()
      ? joseBase64url.decode(encoded)
      : (new TextDecoder()).decode(joseBase64url.decode(encoded))
};
