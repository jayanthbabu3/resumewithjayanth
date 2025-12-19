/**
 * Refined Portrait Template Mock Data
 */

import type { V2ResumeData } from '@/v2/types';

export const mockData: V2ResumeData = {
  version: '2.0',
  personalInfo: {
    fullName: 'Ellie Thompson',
    title: 'Full Stack Developer',
    email: 'ellie.thompson@example.com',
    phone: '+1 555-555-5555',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/elliethompson',
    github: 'github.com/elliethompson',
    portfolio: 'www.elliethompson.dev',
    summary:
      'Full Stack Developer with over 8 years of experience in Java/JS, Angular, Spring MVC, Node.js, MySQL, Python, Node.js, Selenium, HTML5, and CSS3. Led development of $500K+ web and mobile apps and designed Java/J2EE solutions that improved internal system performance and reduced support tickets by 30%.',
    photo:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80',
  },
  experience: [
    {
      id: 'exp-1',
      company: 'Boyle',
      position: 'Senior Full Stack Developer',
      location: 'Austin, TX',
      startDate: '2018',
      endDate: 'Present',
      description:
        'Boyle is an IT/industrial technology and Management Consulting Group, powering the next generation of global healthcare organizations. Built with exclusive members to monitor and achieve results efficiently.',
      bulletPoints: [
        'Automated data extraction, visualization, and inferencing to generate client-facing reports 30% faster.',
        'Enhanced iOS and Android performance across 20+ mobile apps by analyzing code and optimizing API usage.',
        'Solved critical bugs and shipped production-ready features while maintaining 98% sprint predictability.',
      ],
    },
    {
      id: 'exp-2',
      company: 'Lauzon',
      position: 'Full Stack Developer',
      location: 'San Francisco, CA',
      startDate: '2013',
      endDate: '2018',
      description:
        'Lauzon is a professional digital platform that offers unique and relevant places to explore wherever users go.',
      bulletPoints: [
        'Worked directly with a team of six members to maintain and enhance the core product.',
        'Developed features for 50+ members globally, delivering analytics and marketing pages in React and Spring.',
        'Analyzed and optimized existing codebases to reduce support tickets by 30% across multiple teams.',
      ],
    },
  ],
  education: [
    {
      id: 'edu-1',
      school: 'Stanford University',
      degree: 'MS in Computer Science',
      field: 'Computer Science',
      location: 'Stanford, CA',
      startDate: '2008',
      endDate: '2009',
      gpa: '',
    },
    {
      id: 'edu-2',
      school: 'University of California',
      degree: 'BS in Computer Science',
      field: 'Computer Science',
      location: 'Berkeley, CA',
      startDate: '2003',
      endDate: '2007',
    },
  ],
  projects: [
    {
      id: 'project-1',
      name: 'Java: Designed Farewell',
      role: 'Lead Developer',
      description:
        'Open source marketplace platform with integrated messaging and order tracking.',
      technologies: ['Java', 'Spring MVC', 'MySQL', 'AngularJS'],
      highlights: [
        'Built the workflow engine to process 10k+ monthly orders with SLA tracking.',
        'Designed modular AngularJS components for messaging, invoicing, and status tracking.',
        'Coordinated community contributors and code reviews to keep releases stable.',
      ],
      link: 'https://github.com/elliethompson/farewell-platform',
    },
    {
      id: 'project-2',
      name: 'Open Source: Service API Toolkit',
      role: 'Maintainer',
      description: 'Library of reusable service connectors and monitoring utilities.',
      technologies: ['Java', 'Spring Boot', 'JUnit', 'Gradle'],
      highlights: [
        'Published reusable auth middleware adopted by 15+ client teams.',
        'Improved CI reliability by adding contract tests and staging smoke checks.',
      ],
      link: 'https://github.com/elliethompson/service-api-toolkit',
    },
  ],
  languages: [
    { id: 'lang-1', language: 'English', proficiency: 'Native' },
    { id: 'lang-2', language: 'French', proficiency: 'Fluent' },
    { id: 'lang-3', language: 'Spanish', proficiency: 'Intermediate' },
  ],
  customSections: [
    {
      id: 'skills-highlights',
      title: 'Skills',
      items: [
        {
          id: 'skill-primary',
          title: 'Primary',
          content: 'Java · Angular · Spring MVC · HTML5 · CSS3 · MySQL · Python · Node.js · Selenium',
        },
        {
          id: 'skill-secondary',
          title: 'Secondary',
          content: 'JDK · J2EE · Spring · JDBC · Junit · MVC · Struts · JavaScript · AJAX · JSP · JSTL · Servlets · XHTML · XML · XSLT · WSDL · RESTful APIs',
        },
        {
          id: 'skill-technical',
          title: 'Technical',
          content: 'Java Development Kit (JDK) · Java 8/7/6 · JavaFX · NetBeans · Struts · MVC · JavaServer Pages · Java Persistence API · JS · Selenium · JUnit',
        },
      ],
    },
  ],
  strengths: [],
  achievements: [],
  skills: [],
  certifications: [],
  awards: [],
  publications: [],
  volunteer: [],
  speaking: [],
  patents: [],
  interests: [],
  references: [],
  courses: [],
  settings: {
    includeSocialLinks: true,
  },
};

export default mockData;
