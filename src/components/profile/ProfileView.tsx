'use client';

import { useCurrentAccount } from '@mysten/dapp-kit';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileTabs } from '@/components/profile/ProfileTabs';
import { ProfileSignIn } from '@/components/profile/ProfileSignIn';

const founderStats = {
  builderScore: 0,
  socialRank: 'Founder',
  reputation: 'New'
};

export function ProfileView() {
  const currentAccount = useCurrentAccount();
  const isFounder = true;

  if (!currentAccount) {
    return <ProfileSignIn />;
  }

  return (
    <div className="w-full">
      <ProfileHeader 
        stats={founderStats} 
        isFounder={isFounder}
        address={currentAccount.address}
      />
      <ProfileTabs />
    </div>
  );
} 