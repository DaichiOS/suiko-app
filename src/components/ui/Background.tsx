'use client';

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { Block, createInitialBlocks, drawShape, checkCollision, handleCollision, updateBlock, handleBlockMouseInteraction } from "@/lib/animations/tetris";

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function Background({ children, className }: BackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const blocksRef = useRef<Block[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    blocksRef.current = createInitialBlocks(canvas.width, canvas.height);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blocksRef.current.forEach(block => {
        handleBlockMouseInteraction(mouseRef.current.x, mouseRef.current.y, block);
      });

      for (let i = 0; i < blocksRef.current.length; i++) {
        for (let j = i + 1; j < blocksRef.current.length; j++) {
          if (checkCollision(blocksRef.current[i], blocksRef.current[j])) {
            handleCollision(blocksRef.current[i], blocksRef.current[j]);
          }
        }
      }

      blocksRef.current.forEach(block => {
        updateBlock(block, canvas.width, canvas.height);
        drawShape(ctx, block.x, block.y, block.size, block.rotationX, block.rotationY, block.rotationZ, block.shape);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={cn("relative min-h-screen w-full overflow-hidden", className)}>
      <div className="fixed inset-0 bg-[#0a0f1a]" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 opacity-40"
      />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0f1a] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0f1a] to-transparent" />
      </div>
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
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