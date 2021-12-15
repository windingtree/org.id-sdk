import { createReadStream } from 'fs';
import FormData from 'form-data';
import { http } from '@windingtree/org.id-utils';

export interface IpfsApiAddResponse {
  Name: string;
  Hash: string;
  Size: string;
}

export const defaultIpfsApiHost =
  'https://staging-ipfs.marketplace.windingtree.com';

// Adds and pin a file to IPFS
export const addToIpfs = (
  filePath: string,
  pin = true
): Promise<IpfsApiAddResponse> => {
  const readStream = createReadStream(filePath);
    const form = new FormData();
    form.append(
      'file',
      readStream
    );

    return http.request(
      `${defaultIpfsApiHost}/api/v0/add?pin=${pin}`,
      'POST',
      form,
      {
        ...form.getHeaders()
      }
    ) as Promise<IpfsApiAddResponse>;
};

// Remove file pin
export const removeFromIpfs = (
  cid: string
): Promise<IpfsApiAddResponse> =>
  http.request(
    `${defaultIpfsApiHost}/api/v0/pin/rm?arg=${cid}&recursive=true`,
    'POST'
  ) as Promise<IpfsApiAddResponse>;
