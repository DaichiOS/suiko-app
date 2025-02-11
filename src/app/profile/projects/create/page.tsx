'use client';

import { Background } from '@/components/ui/Background';
import { CreateProjectForm } from '@/components/projects/CreateProjectForm';
import { Sidebar } from '@/components/navigation/Sidebar';

export default function CreateProjectPage() {
  return (
    <Background>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-y-0 -left-[200px] w-[200px] bg-gradient-to-r from-[#0a0f1a] to-transparent" />
        <div className="absolute inset-y-0 -right-[200px] w-[200px] bg-gradient-to-l from-[#0a0f1a] to-transparent" />
        
        <div className="flex">
          <aside className="w-48 shrink-0">
            <div className="fixed w-48 h-[calc(100vh-3.5rem)] border-r border-white/5">
              <div className="h-full">
                <Sidebar />
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="px-8 pt-8">
              <CreateProjectForm />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
