/**
 * Professional Blue Template Mock Data
 * 
 * Front-end Developer resume sample data.
 */

import type { V2ResumeData } from '@/v2/types/resumeData';

export const mockData: V2ResumeData = {
  version: '2.0',
  personalInfo: {
    fullName: 'Alex Chen',
    email: 'alex.chen@email.com',
    phone: '+1 555 123 4567',
    location: 'San Francisco, CA 94102',
    title: 'Senior Front-End Developer',
    summary: 'Results-driven Front-End Developer with 6+ years of experience building responsive, performant web applications. Expert in React, TypeScript, and modern CSS frameworks. Passionate about creating intuitive user interfaces and optimizing web performance. Proven track record of leading front-end architecture decisions and mentoring junior developers.',
    linkedin: 'linkedin.com/in/alexchen',
    github: 'github.com/alexchen',
    portfolio: 'alexchen.dev',
  },
  experience: [
    {
      id: 'exp-1',
      company: 'TechCorp Inc.',
      position: 'Senior Front-End Developer',
      location: 'San Francisco, CA',
      startDate: '2021-03',
      endDate: '',
      current: true,
      bulletPoints: [
        'Led the front-end architecture redesign, improving page load times by 40% and reducing bundle size by 35%',
        'Built and maintained a component library used across 5 product teams, ensuring design consistency and reducing development time by 25%',
        'Implemented comprehensive testing strategy with Jest and Cypress, achieving 85% code coverage',
        'Mentored 4 junior developers through code reviews, pair programming, and technical workshops',
      ],
    },
    {
      id: 'exp-2',
      company: 'StartupXYZ',
      position: 'Front-End Developer',
      location: 'San Francisco, CA',
      startDate: '2018-06',
      endDate: '2021-02',
      current: false,
      bulletPoints: [
        'Developed responsive web applications using React, Redux, and TypeScript serving 100K+ daily active users',
        'Collaborated with UX designers to implement pixel-perfect interfaces following accessibility standards (WCAG 2.1)',
        'Integrated RESTful APIs and GraphQL endpoints, optimizing data fetching patterns for improved performance',
        'Contributed to the migration from legacy jQuery codebase to modern React architecture',
      ],
    },
  ],
  education: [
    {
      id: 'edu-1',
      school: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'Berkeley, CA',
      startDate: '2014-08',
      endDate: '2018-05',
      gpa: '3.7',
      honors: ['Magna Cum Laude', "Dean's List"],
    },
  ],
  skills: [
    { id: 'skill-1', name: 'React', level: 5, category: 'Frontend' },
    { id: 'skill-2', name: 'TypeScript', level: 5, category: 'Frontend' },
    { id: 'skill-3', name: 'JavaScript (ES6+)', level: 5, category: 'Frontend' },
    { id: 'skill-4', name: 'Next.js', level: 4, category: 'Frontend' },
    { id: 'skill-5', name: 'HTML5/CSS3', level: 5, category: 'Frontend' },
    { id: 'skill-6', name: 'Tailwind CSS', level: 5, category: 'Styling' },
    { id: 'skill-7', name: 'Redux/Zustand', level: 4, category: 'State Management' },
    { id: 'skill-8', name: 'Jest/Cypress', level: 4, category: 'Testing' },
    { id: 'skill-9', name: 'Git/GitHub', level: 5, category: 'Tools' },
    { id: 'skill-10', name: 'Webpack/Vite', level: 4, category: 'Build Tools' },
    { id: 'skill-11', name: 'REST APIs', level: 5, category: 'Backend' },
    { id: 'skill-12', name: 'GraphQL', level: 4, category: 'Backend' },
  ],
  languages: [
    { id: 'lang-1', language: 'English', proficiency: 'Native' },
    { id: 'lang-2', language: 'Mandarin', proficiency: 'Professional' },
    { id: 'lang-3', language: 'Spanish', proficiency: 'Intermediate' },
  ],
  interests: [
    { id: 'int-1', name: 'Open Source Contributions', description: 'Active contributor to React ecosystem projects\nMaintainer of a popular UI component library with 2K+ stars' },
    { id: 'int-2', name: 'Tech Community', description: 'Speaker at local JavaScript meetups\nMentor at coding bootcamps' },
    { id: 'int-3', name: 'Photography', description: 'Landscape and street photography enthusiast' },
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023-06',
      credentialId: 'AWS-CCP-2023',
    },
    {
      id: 'cert-2',
      name: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta (Coursera)',
      date: '2022-12',
    },
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'React Component Library',
      description: 'Open-source UI component library with 50+ accessible, customizable components. Built with TypeScript, Storybook, and comprehensive testing.',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Tailwind CSS'],
      url: 'https://github.com/alexchen/ui-components',
      highlights: ['2,000+ GitHub stars', 'Used by 100+ projects', 'Full accessibility compliance'],
    },
    {
      id: 'proj-2',
      name: 'Performance Dashboard',
      description: 'Real-time web performance monitoring dashboard with customizable widgets and alerting system.',
      technologies: ['Next.js', 'D3.js', 'WebSocket', 'PostgreSQL'],
      highlights: ['Handles 10K+ metrics per minute', 'Sub-100ms render times'],
    },
  ],
  settings: {
    includeSocialLinks: true,
    includePhoto: false,
    dateFormat: 'MMM YYYY',
  },
};

export default mockData;
