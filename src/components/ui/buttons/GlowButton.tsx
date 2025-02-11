'use client';

import { motion } from 'framer-motion';
import { buttonFlash } from '@/animations/heroAnimations';

interface GlowButtonProps {
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function GlowButton({ 
  onClick, 
  variant = 'primary', 
  children, 
  className = '',
  type = 'button'
}: GlowButtonProps) {
  const baseStyles = "w-full py-3 px-6 rounded-lg font-medium transition-all duration-300";
  const variants = {
    primary: `${baseStyles} bg-[#42dcff]/10 text-[#42dcff] border border-[#42dcff]/20 
              hover:bg-[#42dcff]/20 hover:border-[#42dcff]/30 
              drop-shadow-[0_0_10px_rgba(66,220,255,0.2)]`,
    secondary: `${baseStyles} bg-white/5 text-gray-300 border border-white/10 
                hover:bg-white/10 hover:text-[#42dcff] hover:border-[#42dcff]/20`
  };

  return (
    <motion.button
      type={type}
      variants={buttonFlash}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}