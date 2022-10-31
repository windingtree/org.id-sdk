# Creation of ORGiD with delegated key

> ORGiD VC can be signed using delegated key (verification method). Here the steps of how to make it in the right way

## Generation and registration of keys

### Registration of EOA key pair

### Generate keys in PEM format

```bash
openssl ecparam -name secp256k1 -genkey -out ./key.pem
openssl pkcs8 -in ./key.pem -topk8 -nocrypt -out ./pkcs8.pem
openssl ec -in ./pkcs8.pem -pubout > ./key.pub
```

### Import EOA keys into project

```bash
orgid --operation keys:import --keyType ethereum
```

### Import PEM keys into project

```bash
orgid --operation keys:import --keyType pem --pubPem ./key.pub --privPem ./pkcs8.pem
```

> Important! You can import `pkcs8`-formatted private key only

## Bootstrap a new ORGiD

```bash
orgid --operation bootstrap --output ./rawMultisigOrgId.json
```

> Important! During bootstrap process you must select a key tag of `multisig` type, that you imported earlier

## Add your PEM key as delegate

```bash
orgid --operation keys:add --keyType ethereum --delegated true
orgid --operation keys:add --keyType pem --delegated true
```

## Create ORGiD VC

```bash
orgid --operation orgIdVc --output ./temp/multisigOrgIdVc.json --deploy ipfs
```

## Create ORGiD using multisig

```bash
orgid --operation create
```
