'use client';

import { motion } from 'framer-motion';
import { glowAnimation } from '@/animations/heroAnimations';

interface GlowContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowContainer({ children, className }: GlowContainerProps) {
  return (
    <motion.div 
      className={`relative ${className}`}
    >
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={glowAnimation.initial}
        animate={glowAnimation.animate}
        transition={glowAnimation.transition}
        style={{
          background: 'radial-gradient(circle at center, rgba(66, 220, 255, 0.2) 0%, transparent 70%)'
        }}
      />
      {children}
    </motion.div>
  );
} 