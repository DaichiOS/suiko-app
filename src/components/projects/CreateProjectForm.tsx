'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { IconArrowLeft } from '@tabler/icons-react';
import { GlowButton } from '@/components/ui/buttons/GlowButton';

interface ProjectFormData {
  title: string;
  description: string;
  requirements: string;
  compensation: string;
  duration: string;
  skills: string[];
}

export function CreateProjectForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    description: '',
    requirements: '',
    compensation: '',
    duration: '',
    skills: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement project creation logic
    console.log('Project data:', formData);
    router.push('/profile/projects');
  };

  const handleSkillInput = (value: string) => {
    if (value.endsWith(',')) {
      const skill = value.slice(0, -1).trim();
      if (skill && !formData.skills.includes(skill)) {
        setFormData(prev => ({
          ...prev,
          skills: [...prev.skills, skill]
        }));
      }
      return '';
    }
    return value;
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <IconArrowLeft size={18} />
          Back to Projects
        </button>
        <h1 className="text-2xl font-bold text-white mt-4">Create New Project</h1>
      </div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="space-y-4 p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Project Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                       text-white placeholder-gray-400 focus:outline-none focus:border-[#42dcff]/30"
              placeholder="Enter project title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                       text-white placeholder-gray-400 focus:outline-none focus:border-[#42dcff]/30
                       min-h-[100px]"
              placeholder="Describe your project"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Requirements
            </label>
            <textarea
              value={formData.requirements}
              onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                       text-white placeholder-gray-400 focus:outline-none focus:border-[#42dcff]/30"
              placeholder="List project requirements"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Compensation
              </label>
              <input
                type="text"
                value={formData.compensation}
                onChange={(e) => setFormData(prev => ({ ...prev, compensation: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         text-white placeholder-gray-400 focus:outline-none focus:border-[#42dcff]/30"
                placeholder="e.g., $1000-$2000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Duration
              </label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                         text-white placeholder-gray-400 focus:outline-none focus:border-[#42dcff]/30"
                placeholder="e.g., 2 weeks"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Required Skills (comma-separated)
            </label>
            <input
              type="text"
              onChange={(e) => {
                const newValue = handleSkillInput(e.target.value);
                if (newValue !== undefined) {
                  e.target.value = newValue;
                }
              }}
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                       text-white placeholder-gray-400 focus:outline-none focus:border-[#42dcff]/30"
              placeholder="e.g., React, Solidity, TypeScript"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-md bg-[#42dcff]/10 text-[#42dcff] text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <GlowButton
            onClick={() => router.back()}
            variant="secondary"
          >
            Cancel
          </GlowButton>
          <GlowButton
            onClick={() => handleSubmit}
            type="submit"
            variant="primary"
          >
            Create Project
          </GlowButton>
        </div>
      </motion.form>
    </div>
  );
} 