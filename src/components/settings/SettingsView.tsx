'use client';

import { useDisconnectWallet } from "@mysten/dapp-kit";
import { IconEdit, IconLink, IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const settingsItems = [
  {
    name: 'Edit profile',
    description: 'Update your profile information',
    icon: IconEdit,
    href: '/profile/settings/edit',
  },
  {
    name: 'Connected Accounts',
    description: 'Manage your connected accounts and credentials',
    icon: IconLink,
    href: '/profile/settings/accounts',
  },
];

export function SettingsView() {
  const { mutate: disconnect } = useDisconnectWallet();
  const router = useRouter();

  const handleSignOut = async () => {
    disconnect();
    router.push('/');
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>
      
      <div className="space-y-4">
        {settingsItems.map((item) => (
          <button
            key={item.name}
            onClick={() => router.push(item.href)}
            className="w-full p-4 flex items-center gap-4 rounded-xl bg-black/40 
                     backdrop-blur-md border border-white/10 transition-all duration-300
                     hover:border-[#42dcff]/30 group"
          >
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#42dcff]/10 transition-colors">
              <item.icon size={20} className="text-white/70 group-hover:text-[#42dcff]" />
            </div>
            <div className="text-left">
              <h3 className="text-white font-medium">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </button>
        ))}

        <button
          onClick={handleSignOut}
          className="w-full p-4 flex items-center gap-4 rounded-xl bg-black/40 
                   backdrop-blur-md border border-white/10 transition-all duration-300
                   hover:border-red-500/30 group"
        >
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-red-500/10 transition-colors">
            <IconLogout size={20} className="text-white/70 group-hover:text-red-500" />
          </div>
          <div className="text-left">
            <h3 className="text-white font-medium">Sign out</h3>
            <p className="text-sm text-gray-400">Sign out of your wallet</p>
          </div>
        </button>
      </div>
    </div>
  );
} 