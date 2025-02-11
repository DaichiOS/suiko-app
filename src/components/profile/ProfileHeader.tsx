'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from "@/components/profile/Badge";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { ProfileStats as ProfileStatsType } from '@/types/profile';

interface ProfileHeaderProps {
  stats: ProfileStatsType;
  isFounder: boolean;
  address: string;
}

export function ProfileHeader({ stats, isFounder, address }: ProfileHeaderProps) {
  return (
    <div className="relative p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#42dcff]/5 to-[#ffa9f9]/5" />
      
      <div className="relative flex items-center gap-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
            <Image
              src="/suiko-avatar.png"
              alt="Profile"
              width={64}
              height={64}
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white">
              {address.slice(0, 6)}...{address.slice(-4)}
            </h1>
            <Badge variant={isFounder ? "founder" : "builder"}>
              {isFounder ? "Founder" : "Builder"}
            </Badge>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            ID #{address.slice(-6)}
          </p>
        </div>

        <ProfileStats stats={stats} />
      </div>
    </div>
  );
} 