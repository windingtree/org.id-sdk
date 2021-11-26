export const privatePem =
`-----BEGIN PRIVATE KEY-----
MIGEAgEAMBAGByqGSM49AgEGBSuBBAAKBG0wawIBAQQgV6PloCFsJsoZmZ5K3Uj2
6YQwAwOQuyHrFne/p8mXheWhRANCAARtXfQSK+p6pJzFNAVL2lDbdLBjYKHAnkVh
iI05R8Idksukb/eOuZQc2QhdDtilJlhid8qzHetlkkmycRJv1Ygc
-----END PRIVATE KEY-----`;

export const privatePemJwk = {
  "kty": "EC",
  "crv": "secp256k1",
  "x": "bV30EivqeqScxTQFS9pQ23SwY2ChwJ5FYYiNOUfCHZI",
  "y": "y6Rv9465lBzZCF0O2KUmWGJ3yrMd62WSSbJxEm_ViBw",
  "d": "V6PloCFsJsoZmZ5K3Uj26YQwAwOQuyHrFne_p8mXheU"
};

export const publicPem =
`-----BEGIN PUBLIC KEY-----
MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEbV30EivqeqScxTQFS9pQ23SwY2ChwJ5F
YYiNOUfCHZLLpG/3jrmUHNkIXQ7YpSZYYnfKsx3rZZJJsnESb9WIHA==
-----END PUBLIC KEY-----`;

export const publicKeyJwk = {
  "kty": "EC",
  "crv": "secp256k1",
  "x": "bV30EivqeqScxTQFS9pQ23SwY2ChwJ5FYYiNOUfCHZI",
  "y": "y6Rv9465lBzZCF0O2KUmWGJ3yrMd62WSSbJxEm_ViBw"
};
