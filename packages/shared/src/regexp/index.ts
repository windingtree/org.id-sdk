// Common
export const phone = /^([+]{0,1})([0-9- ()/]+)$/;
export const uri = /^(https|http|wss|ws)+:\/\/([\w.-]+)(:(\d*))?(\/\w*(\/[\w\-?=#]*)?)?$/i;
export const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-_0-9]+\.)+[a-zA-Z]{2,}))$/;

// Crypto addresses
export const ethereumAddress = /^0x[a-fA-F0-9]{40}$/i;
export const bitcoinAddress = /^(bc1|[13]{1})([a-zA-HJ-NP-Z0-9]{25,39})$/i;

// Public keys (as strings)
export const X25519 = /^(MCowBQYDK2VuAyEA[a-zA-Z0-9/]{43}=)$/;
export const secp256k1 = /^MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE[a-zA-Z0-9+/]{86}==$/;

// Hashes
export const bytes32 = /^0x[a-fA-F0-9]{64}$/i;

// Banks accounts
export const swift = /^[a-zA-Z]{4}[ -]{0,1}[a-zA-Z]{2}[ -]{0,1}[a-zA-Z0-9]{2}[ -]{0,1}[XXX0-9]{0,3}$/;
export const iban = /^([A-Z]{2}[ -]?[0-9]{2})(?=(?:[ -]?[A-Z0-9]){9,30}$)((?:[ -]?[A-Z0-9]{3,5}){2,7})([ -]?[A-Z0-9]{1,3})?$/;

// DID
export const did = /^(?<did>did:(?<method>[\w]+)(?:[:]{1})(?<submethod>[\w]+)?(?:[:]{1})?(?<id>0x\w{64}))(?<query>\?[\w=&%-]+)?(?:#)?(?<fragment>([\w-]+))?$/i;
