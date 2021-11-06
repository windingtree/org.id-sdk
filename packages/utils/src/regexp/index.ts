// Common
export const phone = /^([+]{0,1})([0-9- ()/]+)$/;
export const uri = /^(https|http|wss|ws){1}:\/\/([\w\d.-]+)(:(\d*))?(\/[\w\d.-?=#&%]*)?$/;
export const uriHttp = /^(https|http){1}:\/\/([\w\d.-]+)(:(\d*))?(\/[\w\d.-?=#&%]*)?$/;
export const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-_0-9]+\.)+[a-zA-Z]{2,}))$/i;
export const isoDate = /(\d{4})-(\d{2})-(\d{2})T((\d{2}):(\d{2}):(\d{2}))\.(\d{3})([Z]*([+]\d{2}:\d{2})*)/;

// Crypto addresses
export const ethereumAddress = /^0x[a-fA-F0-9]{40}$/;
export const bitcoinAddress = /^(bc1|[13]{1})([a-zA-HJ-NP-Z0-9]{25,39})$/;
export const blockchainAccountId = /^([a-zA-Z-0-9]+)@([a-zA-Z-0-9]+):([a-zA-Z-0-9]+)$/;
export const blockchainAccountIdGrouped = /^(?<accountId>[a-zA-Z-0-9]+)@(?<blockchainType>[a-zA-Z-0-9]+):(?<blockchainId>[a-zA-Z-0-9]+)$/;

// Public keys (as strings)
export const X25519 = /^(MCowBQYDK2VuAyEA[a-zA-Z0-9/]{43}=)$/;
export const secp256k1 = /^MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE[a-zA-Z0-9+/]{86}==$/;

// Hashes
export const bytes32 = /^0x[a-fA-F0-9]{64}$/;

// Banks accounts
export const swift = /^[a-zA-Z]{4}[ -]{0,1}[a-zA-Z]{2}[ -]{0,1}[a-zA-Z0-9]{2}[ -]{0,1}[XXX0-9]{0,3}$/;
export const iban = /^([A-Z]{2}[ -]?[0-9]{2})(?=(?:[ -]?[A-Z0-9]){9,30}$)((?:[ -]?[A-Z0-9]{3,5}){2,7})([ -]?[A-Z0-9]{1,3})?$/;

// DID
export const did = /^did:orgid:([0-9])*(?::)?(0x[a-fA-F0-9]{64})+(?:[?])?([0-9a-zA-Z_=&%-]+)?(?:#)?([[0-9a-zA-Z-]+)?$/;
export const didOnly = /^did:orgid:([0-9])*(?::)?(0x[a-fA-F0-9]{64})+$/;
export const didGrouped = /^(?<did>did:(?<method>orgid):(?<network>[0-9]*)?(?::)?(?<id>0x[a-fA-F0-9]{64})+)(?:[?])?(?<query>[0-9a-zA-Z_=&%-]+)?(?:#)?(?<fragment>[[0-9a-zA-Z-]+)?$/;

// UUID
export const uuid4 = /^(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)$/;

// IPFS/IPNS
export const ipfs = /^((?:Qm|QM|qm|qM){1}[1-9A-Za-z]{44})|([bB]{1}[A-Za-z2-7]{58})|([zZ]{1}[1-9A-HJ-NP-Za-km-z]{48})$/;
export const ipfsCidV0 = /^(Qm|QM|qm|qM){1}[1-9A-Za-z]{44}$/;
export const ipfsCidV1Base32 = /^[bB]{1}[A-Za-z2-7]{58}$/;
export const ipfsCidV1Base58btc = /^[zZ]{1}[1-9A-HJ-NP-Za-km-z]{48}$/;
export const ipfsUri = /^ipfs:\/\/(((?:Qm|QM|qm|qM){1}[1-9A-Za-z]{44})|([bB]{1}[A-Za-z2-7]{58})|([zZ]{1}[1-9A-HJ-NP-Za-km-z]{48}))$/;
export const ipfsUriGrouped = /^(?<protocol>ipfs:\/\/)(?<cid>((?:Qm|QM|qm|qM){1}[1-9A-Za-z]{44})|([bB]{1}[A-Za-z2-7]{58})|([zZ]{1}[1-9A-HJ-NP-Za-km-z]{48}))$/;
