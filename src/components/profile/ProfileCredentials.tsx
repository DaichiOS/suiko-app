'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProfileCredentials() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 
                 relative group hover:border-[#42dcff]/30 transition-all duration-300"
      >
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#42dcff]/20 to-transparent" />
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-3 rounded-full bg-white/5 flex items-center justify-center">
            <Image src="/suiko.svg" alt="Credential" width={24} height={24} />
          </div>
          <h3 className="text-white font-medium mb-1">Suiko Account</h3>
          <p className="text-gray-400 text-sm">Connected</p>
        </div>
      </motion.div>
    </div>
  );
} 