/**
 * Creative Split Template Mock Data
 */

import type { V2ResumeData } from '@/v2/types/resumeData';
import { FULL_STACK_DATA } from '@/v2/data/mockData';

export const mockData: V2ResumeData = {
  ...FULL_STACK_DATA,
  personalInfo: {
    ...FULL_STACK_DATA.personalInfo,
    fullName: 'Marcus Rivera',
    title: 'Creative Director',
    email: 'marcus@creative.studio',
    phone: '+1 (555) 987-6543',
    location: 'Los Angeles, CA',
    linkedin: 'linkedin.com/in/marcusrivera',
    github: 'github.com/mrivera',
    portfolio: 'marcusrivera.studio',
    summary: 'Award-winning creative director with 10+ years of experience leading high-impact campaigns for Fortune 500 brands. Expert in visual storytelling, brand strategy, and building world-class creative teams.',
  },
  skills: [
    { id: 'skill-1', name: 'Brand Strategy' },
    { id: 'skill-2', name: 'Art Direction' },
    { id: 'skill-3', name: 'Team Leadership' },
    { id: 'skill-4', name: 'Adobe Creative Suite' },
    { id: 'skill-5', name: 'Motion Design' },
    { id: 'skill-6', name: 'UX Design' },
    { id: 'skill-7', name: 'Photography' },
    { id: 'skill-8', name: 'Video Production' },
  ],
  languages: [
    { id: 'lang-1', language: 'English', proficiency: 'Native' },
    { id: 'lang-2', language: 'Spanish', proficiency: 'Professional' },
    { id: 'lang-3', language: 'French', proficiency: 'Intermediate' },
  ],
  interests: [
    { id: 'int-1', name: 'Film Photography' },
    { id: 'int-2', name: 'Street Art' },
    { id: 'int-3', name: 'Jazz Music' },
    { id: 'int-4', name: 'Travel' },
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'Nike "Just Dream" Campaign',
      description: 'Led creative direction for global campaign reaching 50M+ viewers',
      technologies: ['After Effects', 'Cinema 4D', 'Photoshop'],
      highlights: ['Cannes Lions Gold Award', '200% increase in brand engagement'],
    },
    {
      id: 'proj-2',
      name: 'Spotify Wrapped 2023',
      description: 'Art directed the visual identity for annual user experience',
      technologies: ['Figma', 'Illustrator', 'Motion Graphics'],
      highlights: ['1B+ social impressions', 'Featured in Adweek'],
    },
  ],
};

export default mockData;
