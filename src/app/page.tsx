'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-[60vh] flex items-start justify-center pt-20">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#fff7ad] to-[#ffa9f9] bg-clip-text text-transparent mb-12"
        >
          Choose Your Path
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/founder')}
            className="group cursor-pointer"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#fff7ad]/10 to-[#fff7ad]/5 
                          border border-[#fff7ad]/20 backdrop-blur-sm
                          hover:from-[#fff7ad]/20 hover:to-[#fff7ad]/10 
                          transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#fff7ad]/10 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#fff7ad] mb-3">Founder</h2>
              <p className="text-gray-400">Launch your vision and find talented builders</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/builder')}
            className="group cursor-pointer"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#ffa9f9]/10 to-[#ffa9f9]/5 
                          border border-[#ffa9f9]/20 backdrop-blur-sm
                          hover:from-[#ffa9f9]/20 hover:to-[#ffa9f9]/10 
                          transition-all duration-300">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ffa9f9]/10 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h2 className="text-2xl font-bold text-[#ffa9f9] mb-3">Builder</h2>
              <p className="text-gray-400">Discover projects and showcase your skills</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
