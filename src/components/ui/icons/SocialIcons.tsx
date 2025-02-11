'use client';

import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaTwitter, 
  FaDiscord, 
  FaLinkedin, 
  FaTelegram 
} from 'react-icons/fa';

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      type: "spring",
      stiffness: 200,
    }
  }),
  hover: {
    scale: 1.1,
    filter: 'brightness(1.2)',
    transition: { duration: 0.2 }
  }
};

const icons = [
  { name: 'GitHub', Icon: FaGithub, color: '#6e5494' },
  { name: 'Twitter', Icon: FaTwitter, color: '#1DA1F2' },
  { name: 'Discord', Icon: FaDiscord, color: '#7289DA' },
  { name: 'LinkedIn', Icon: FaLinkedin, color: '#0077B5' },
  { name: 'Telegram', Icon: FaTelegram, color: '#0088cc' },
];

export function SocialIcons() {
  return (
    <div className="flex justify-center gap-4">
      {icons.map((icon, i) => (
        <motion.div
          key={icon.name}
          custom={i}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={`w-10 h-10 rounded-lg flex items-center justify-center
                     bg-white/5 border border-[#42dcff]/20 backdrop-blur-sm
                     hover:border-[#42dcff]/30 transition-colors duration-300
                     cursor-pointer`}
          style={{
            boxShadow: `0 0 10px rgba(66, 220, 255, 0.1)`
          }}
        >
          <icon.Icon 
            className="w-5 h-5"
            style={{ 
              color: icon.color,
              filter: 'drop-shadow(0 0 8px rgba(66, 220, 255, 0.3))'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
} 