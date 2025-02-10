'use client';

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

type NavigationContextType = {
  currentPage: string;
  navigate: (path: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('/');

  const navigate = (path: string) => {
    setCurrentPage(path);
    router.push(path);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
} 