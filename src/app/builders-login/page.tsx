'use client';

import { Background } from '@/components/ui/Background';
import { BuilderOnboarding } from '@/components/onboarding/builders/BuilderOnboarding';

export default function BuildersPage() {
  return (
    <Background>
      <div className="min-h-screen flex items-center justify-center px-4" style={{ marginTop: '-10vh' }}>
        <div className="w-full max-w-md">
          <BuilderOnboarding />
        </div>
      </div>
    </Background>
  );
}