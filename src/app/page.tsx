'use client';

import { Background } from '@/components/ui/Background';
import { Hero } from '@/components/home/Hero';

export default function Home() {
  return (
    <Background>
      <div className="min-h-screen flex items-center justify-center px-4">
        <Hero />
      </div>
    </Background>
  );
}
