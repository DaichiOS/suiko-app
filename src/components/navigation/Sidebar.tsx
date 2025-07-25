'use client';

import { IconUser, IconBell, IconSettings, IconBriefcase, IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUserTypeStore } from '@/store/userTypeStore';

const commonNavigationItems = [
  {
    name: 'Profile',
    href: '/profile',
    icon: IconUser,
  },
  {
    name: 'Notifications',
    href: '/profile/notifications',
    icon: IconBell,
  },
  {
    name: 'Settings',
    href: '/profile/settings',
    icon: IconSettings,
  },
];

const founderNavigationItems = [
  {
    name: 'Projects',
    href: '/profile/projects',
    icon: IconBriefcase,
  },
  {
    name: 'Create Project',
    href: '/profile/projects/create',
    icon: IconPlus,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const userType = useUserTypeStore((state) => state.userType);
  const isFounder = userType === 'founder';

  const navigationItems = [
    ...commonNavigationItems,
    ...(isFounder ? founderNavigationItems : []),
  ];

  return (
    <nav className="pt-7">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors rounded-lg mb-1
              ${isActive 
                ? 'bg-white/10 text-white' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
          >
            <item.icon size={18} />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
} 