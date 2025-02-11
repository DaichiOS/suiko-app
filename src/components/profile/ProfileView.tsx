'use client';

import { useCurrentAccount } from '@mysten/dapp-kit';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileTabs } from '@/components/profile/ProfileTabs';
import { ProfileSignIn } from '@/components/profile/ProfileSignIn';
import { useUserTypeStore } from '@/store/userTypeStore';

const founderStats = {
  builderScore: 0,
  socialRank: 'Founder',
  reputation: 'New'
};

const builderStats = {
  builderScore: 0,
  socialRank: 'Builder',
  reputation: 'New'
};

export function ProfileView() {
  const currentAccount = useCurrentAccount();
  const userType = useUserTypeStore((state) => state.userType);
  const isFounder = userType === 'founder';

  if (!currentAccount) {
    return <ProfileSignIn />;
  }

  return (
    <div className="w-full">
      <ProfileHeader 
        stats={isFounder ? founderStats : builderStats} 
        isFounder={isFounder}
        address={currentAccount.address}
      />
      <ProfileTabs />
    </div>
  );
} 