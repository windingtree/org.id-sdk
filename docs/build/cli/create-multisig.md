# Creation of ORGiD compatible with multisig ownership

## Create Gnosis Safe multisig

https://gnosis-safe.io/app

Use network supported by ORGiD:

- Gnosis Chain
- Polygon
- Goerli

## Import multisig config into project

```bash
orgid --operation keys:import --keyType multisig
```

> Adding this types of keys does not require encryption password because an only wallet address will be saved to the project file.

## Generate keys in PEM format

```bash
openssl ecparam -name secp256k1 -genkey -out ./key.pem
openssl pkcs8 -in ./key.pem -topk8 -nocrypt -out ./pkcs8.pem
openssl ec -in ./pkcs8.pem -pubout > ./key.pub
```

## Import keys into project

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

> You will be prompted for private key of one of the multisig wallet owners account. This key will not be saved in the project and used for the transaction signing only.

> In the Gnosis Safe transactions queue will be added two transactions that have to be executed.
