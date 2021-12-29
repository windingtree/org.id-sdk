import type { ORGJSONVCNFT } from '@windingtree/org.json-schema/types/orgVc';
import type {
  ResolverOptions,
  FetcherResolver,
  FetcherConfig
} from '@windingtree/org.id-resolver';
import type { ParsedArgv } from '../utils/env';
import {
  buildEvmChainConfig,
  buildHttpFetcherConfig,
  OrgIdResolver
} from '@windingtree/org.id-resolver';
import {
  parseDid,
  getEthersProvider,
  getSupportedNetworkConfig
} from './common';
import { getFromIpfs } from './ipfs';
import { printInfo, printObject } from '../utils/console';

export const resolveOrgId = async (
  basePath: string,
  args: ParsedArgv
): Promise<void> => {

  if (!args['--did']) {
    throw new Error(
      'ORGiD DID must be provided using "--did" option'
    );
  }

  const { network } = parseDid(args['--did']);

  const provider = await getEthersProvider(basePath, network);

  const { address } = getSupportedNetworkConfig(network);

  const chainConfig = buildEvmChainConfig(
    network,
    'eip155',
    address,
    provider
  );

  const ipfsFetcherInitializer = (): FetcherResolver => ({
    getOrgJson: async (uri: string): Promise<ORGJSONVCNFT> =>
      getFromIpfs(uri) as Promise<ORGJSONVCNFT>
  });

  const buildIpfsFetcherConfig = (): FetcherConfig => ({
    id: 'ipfs',
    name: 'ORG.JSON IPFS fetcher',
    init: ipfsFetcherInitializer
  });

  const resolverOptions: ResolverOptions = {
    chains: [
      chainConfig
    ],
    fetchers: [
      buildHttpFetcherConfig(),
      buildIpfsFetcherConfig()
    ]
  };

  const resolver = OrgIdResolver(resolverOptions);

  const didResponse = await resolver.resolve(args['--did']);

  printInfo(
    `ORGiD with DID: "${args['--did']}" has been successfully resolved`
  );

  printObject(didResponse);
};
