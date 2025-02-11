'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  status: 'Open' | 'Closed';
  applicants: number;
  onClick: () => void;
}

export function ProjectCard({ title, description, status, applicants, onClick }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      onClick={onClick}
      className="p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 
                cursor-pointer transition-colors hover:border-[#42dcff]/30"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium
          ${status === 'Open' 
            ? 'bg-[#42dcff]/10 text-[#42dcff]' 
            : 'bg-gray-500/10 text-gray-400'
          }`}
        >
          {status}
        </span>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-400">
        <span>{applicants} applicants</span>
      </div>
    </motion.div>
  );
} 