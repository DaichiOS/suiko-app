'use client';

import { motion } from 'framer-motion';
import { ConnectButton } from "@mysten/dapp-kit";
import { GlowButton } from '@/components/ui/buttons/GlowButton';

export function ProfileSignIn() {
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
          Connect Your Account
        </h2>
        
        <p className="text-gray-200 mb-8">
          Connect your wallet or sign up to view and manage your profile.
        </p>

        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <ConnectButton 
            connectText="Connect Wallet"
            className="w-full py-3 px-6 rounded-lg bg-black/60 
                     border border-[#42dcff]/30 hover:border-[#42dcff]/50 
                     text-[#42dcff] font-medium transition-all duration-300"
          />

          <div className="flex items-center gap-4 my-2">
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
      </div>
    </motion.div>
  );
} 