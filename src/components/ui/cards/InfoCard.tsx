'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { cardFlash } from '@/animations/heroAnimations';

interface InfoCardProps {
  title: string;
  description: string;
  route?: string;
}

export function InfoCard({ title, description, route }: InfoCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <motion.div 
      variants={cardFlash}
      whileHover={{ 
        scale: 1.02, 
        filter: 'brightness(1.1)',
        y: -4
      }}
      onClick={handleClick}
      className={`p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10
                relative overflow-hidden group
                ${route ? 'cursor-pointer' : ''}`}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#42dcff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[#42dcff] font-semibold drop-shadow-[0_0_8px_rgba(66,220,255,0.3)]">
          {title}
        </h3>
        {route && (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#42dcff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -5 }}
            animate={{ x: 0 }}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </motion.svg>
        )}
      </div>
      <p className="text-gray-300 text-sm">
        {description}
      </p>
    </motion.div>
  );
}