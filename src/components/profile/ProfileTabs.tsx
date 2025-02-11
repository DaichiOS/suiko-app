'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/tabs/Tabs";
import { ProfileCredentials } from "@/components/profile/ProfileCredentials";

export function ProfileTabs() {
  return (
    <Tabs defaultValue="activity" className="w-full mt-6">
      <TabsList className="relative mb-8 p-1 h-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#42dcff]/20 to-transparent" />
        <TabsTrigger 
          value="activity"
          className="relative h-8 px-4 rounded-md data-[state=active]:bg-white/10 
                   data-[state=active]:text-white data-[state=active]:shadow-none
                   text-sm text-gray-400 transition-colors hover:text-white"
        >
          Activity
        </TabsTrigger>
        <TabsTrigger 
          value="identity"
          className="relative h-8 px-4 rounded-md data-[state=active]:bg-white/10 
                   data-[state=active]:text-white data-[state=active]:shadow-none
                   text-sm text-gray-400 transition-colors hover:text-white"
        >
          Identity
        </TabsTrigger>
        <TabsTrigger 
          value="skills"
          className="relative h-8 px-4 rounded-md data-[state=active]:bg-white/10 
                   data-[state=active]:text-white data-[state=active]:shadow-none
                   text-sm text-gray-400 transition-colors hover:text-white"
        >
          Skills
        </TabsTrigger>
      </TabsList>

      <TabsContent value="identity">
        <ProfileCredentials />
      </TabsContent>
    </Tabs>
  );
} 