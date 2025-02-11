'use client';

import { Background } from '@/components/ui/Background';
import { FounderOnboarding } from '@/components/onboarding/founders/FounderOnboarding';

export default function FoundersPage() {
  return (
    <Background>
      <div className="min-h-screen flex items-center justify-center px-4" style={{ marginTop: '-10vh' }}>
        <div className="w-full max-w-md">
          <FounderOnboarding />
        </div>
      </div>
    </Background>
  );
}