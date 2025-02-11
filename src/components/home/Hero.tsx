'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useCurrentAccount } from '@mysten/dapp-kit';
import { thunderFlash, textFlash } from '@/animations/heroAnimations';
import { GlowContainer } from '@/components/ui/containers/GlowContainer';
import { InfoCard } from '@/components/ui/cards/InfoCard';
import { GlowButton } from '@/components/ui/buttons/GlowButton';
import { useUserTypeStore } from '@/store/userTypeStore';
import { useEffect } from 'react';

export function Hero() {
  const router = useRouter();
  const currentAccount = useCurrentAccount();
  const setUserType = useUserTypeStore((state) => state.setUserType);
  const userType = useUserTypeStore((state) => state.userType);

  useEffect(() => {
    if (currentAccount && userType) {
      router.push('/profile');
    }
  }, [currentAccount, userType, router]);

  // TODO: Handle the user type based on wallet address
  const handleFounderClick = () => {
    setUserType('founder');
    router.push(currentAccount ? '/profile' : '/founders-login');
  };

  const handleBuilderClick = () => {
    setUserType('builder');
    router.push(currentAccount ? '/profile' : '/builders-login');
  };

  return (
    <motion.div 
      variants={thunderFlash}
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl mx-auto text-center relative"
    >
      <GlowContainer>
        <motion.h1 
          variants={textFlash}
          className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(66,220,255,0.3)]"
        >
          Where <span className="text-[#42dcff] drop-shadow-[0_0_10px_rgba(66,220,255,0.5)]">web3 talent</span> meets opportunity
        </motion.h1>
        
        <motion.p variants={textFlash} className="text-gray-300 text-lg mb-8">
          The first talent marketplace built for web3 natives. 
          Connect your onchain reputation and find your next opportunity.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <InfoCard 
            title="For Founders"
            description="Post opportunities and find verified web3 builders with proven onchain experience"
            onClick={handleFounderClick}
          />
          <InfoCard 
            title="For Builders"
            description="Showcase your contributions and connect with innovative web3 projects"
            onClick={handleBuilderClick}
          />
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          <GlowButton onClick={() => router.push('/create')}>
            Get Started
          </GlowButton>
          <GlowButton onClick={() => router.push('/explore')} variant="secondary">
            Explore Opportunities
          </GlowButton>
        </div>
      </GlowContainer>
    </motion.div>
  );
} 