'use client';

import { motion } from 'framer-motion';
import { cardFlash } from '@/animations/heroAnimations';

interface InfoCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

export function InfoCard({ title, description, onClick }: InfoCardProps) {
  return (
    <motion.div
      variants={cardFlash}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="relative p-6 rounded-xl cursor-pointer
        bg-white/5 border border-[#42dcff]/20 backdrop-blur-sm
        hover:border-[#42dcff]/30 transition-colors duration-300"
      style={{
        boxShadow: '0 0 20px rgba(66, 220, 255, 0.1)'
      }}
    >
      <h3 className="text-[#42dcff] text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-gray-300 text-base leading-relaxed min-h-[3rem]">
        {description}
      </p>
    </motion.div>
  );
}