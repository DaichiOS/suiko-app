'use client';

import { ConnectButton } from "@mysten/dapp-kit";

export const ConnectWalletButton = () => {
  return (
    <ConnectButton 
      connectText={
        <span className="text-sm font-medium">
          Connect Wallet
        </span>
      }
    />
  );
}; 