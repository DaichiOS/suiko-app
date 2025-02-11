'use client';

import { motion } from 'framer-motion';
import { GlowButton } from '@/components/ui/buttons/GlowButton';
import { ConnectButton } from "@mysten/dapp-kit";
import { useCurrentAccount } from '@mysten/dapp-kit';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function BuilderOnboarding() {
  const currentAccount = useCurrentAccount();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentAccount) {
      setIsLoading(true);
      router.push('/profile');
    }
  }, [currentAccount, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#42dcff] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="text-center"
    >
      <div className="p-8 rounded-xl bg-black/40 backdrop-blur-md border border-white/10
                    shadow-lg relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#42dcff]/20 to-transparent" />
        
        <h2 className="text-2xl font-bold text-white mb-6">
          Join Suiko
        </h2>
        
        <p className="text-gray-200 mb-8">
          Connect your wallet or sign up with email to start building your presence on Suiko.
        </p>

        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <div className="relative group z-50">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#42dcff]/50 to-[#42dcff]/20 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300" />
            <ConnectButton 
              connectText="Connect Wallet"
              className="relative w-full py-3 px-6 rounded-lg bg-black/60 
                       border border-[#42dcff]/30 hover:border-[#42dcff]/50 
                       text-[#42dcff] font-medium transition-all duration-300"
            />
          </div>

          <div className="flex items-center gap-4 my-2 px-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <GlowButton 
            onClick={() => {}} 
            variant="secondary"
            className="w-full bg-white/5 hover:bg-white/10"
          >
            Continue with Email
          </GlowButton>
        </div>

        <p className="text-gray-300 text-sm mt-6">
          Already have a profile? 
          <button className="text-[#42dcff] hover:text-[#42dcff]/80 transition-colors duration-200 ml-1">
            Sign In
          </button>
        </p>
      </div>
    </motion.div>
  );
} 