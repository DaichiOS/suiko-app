'use client';

import { useRouter } from 'next/navigation';
import { IconPlus } from '@tabler/icons-react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { GlowButton } from '@/components/ui/buttons/GlowButton';

export function ProjectsView() {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">My Projects</h1>
        <GlowButton
          onClick={() => router.push('/profile/projects/create')}
          className="flex items-center gap-2"
        >
          <IconPlus size={18} />
          Create Project
        </GlowButton>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <ProjectCard
          title="Example Project"
          description="This is an example project description"
          status="Open"
          applicants={5}
          onClick={() => router.push('/profile/projects/1')}
        />
      </div>
    </div>
  );
} 