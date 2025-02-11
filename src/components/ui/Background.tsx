'use client';

import { cn } from "@/lib/utils";

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function Background({ children, className }: BackgroundProps) {
  return (
    <div className={cn("relative min-h-screen w-full overflow-hidden", className)}>
      {/* Base background */}
      <div className="fixed inset-0 bg-[#0a0f1a]" />
      
      {/* Side gradients for focus effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0f1a] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0f1a] to-transparent" />
      </div>

      {/* Grid overlay */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(66, 220, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(66, 220, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          backgroundPosition: '0 -100px',
          mask: 'linear-gradient(to right, transparent, black 25%, black 75%, transparent)'
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  );
} 