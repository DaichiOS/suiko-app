'use client';

import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { NavigationProvider } from './navigation/NavigationContext';
import { networkConfig, getDefaultNetwork } from '@/config/networkConfig';
import { walletTheme } from '@/theme/walletTheme';
import '@mysten/dapp-kit/dist/index.css';

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider defaultNetwork={getDefaultNetwork()} networks={networkConfig}>
        <WalletProvider autoConnect theme={walletTheme}>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
} 