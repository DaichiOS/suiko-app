import { getFullnodeUrl } from "@mysten/sui/client";
import { createNetworkConfig } from "@mysten/dapp-kit";

export const { networkConfig, useNetworkVariable } = createNetworkConfig({
  localnet: {
    url: getFullnodeUrl("localnet"),
  },
  devnet: {
    url: getFullnodeUrl("devnet"),
  },
  testnet: {
    url: getFullnodeUrl("testnet"),
  },
  mainnet: {
    url: getFullnodeUrl("mainnet"),
  },
});

type NetworkType = 'localnet' | 'devnet' | 'testnet' | 'mainnet';

export function getDefaultNetwork(): NetworkType {
  const network = process.env.NEXT_PUBLIC_NETWORK?.toLowerCase() as NetworkType;
  return network && network in networkConfig ? network : 'testnet';
} 