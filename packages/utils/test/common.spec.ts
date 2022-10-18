import type { Signer } from 'ethers';
import {
  generateSalt,
  generateOrgIdWithSigner,
  generateOrgIdWithAddress
} from '../src/common';
import * as regex from '../src/regexp';
import { expect } from 'chai';
import { ethers } from 'ethers';

describe('Common ORGiD utils', () => {
  let address: string;
  let signer: Signer;

  before(async () => {
    const mnemonic = "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol"
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    address = await wallet.getAddress();
    signer = new ethers.VoidSigner(address, wallet.provider);
  });

  describe('#generateSalt',  () => {

    it('should generate salt', async () => {
      expect(generateSalt()).to.match(regex.bytes32);
    });
  });

  describe('#generateOrgIdWithSigner',  () => {

    it('should generate ORGiD', async () => {
      expect(
        await generateOrgIdWithSigner(signer, generateSalt())
      ).to.match(regex.bytes32);
    });
  });

  describe('@generateOrgIdWithAddress',  () => {

    it('should generate ORGiD', async () => {
      expect(
        generateOrgIdWithAddress(address, generateSalt())
      ).to.match(regex.bytes32);
    });
  });
});
