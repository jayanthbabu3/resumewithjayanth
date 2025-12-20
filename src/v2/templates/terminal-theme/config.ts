/**
 * Terminal Theme Template Configuration (V2)
 */

import type { TemplateConfig } from '../../types';
import { createTemplateConfig } from '../../config/defaultConfig';

export const terminalThemeConfig: TemplateConfig = createTemplateConfig({
  id: 'terminal-theme-v2',
  name: 'Terminal Theme',
  description: 'Terminal-inspired dark layout with neon accents and monospaced typography.',
  category: 'professional',

  typography: {
    name: {
      fontSize: '30px',
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: '0.03em',
      color: '#e2e8f0',
    },
    title: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#9be7c4',
    },
    sectionHeading: {
      fontSize: '11px',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: '#9be7c4',
    },
    itemTitle: {
      fontSize: '13px',
      fontWeight: 700,
      lineHeight: 1.45,
      color: '#e5e7eb',
    },
    itemSubtitle: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: 1.35,
      color: '#67f7a3',
    },
    dates: {
      fontSize: '11px',
      fontWeight: 500,
      lineHeight: 1.3,
      color: '#94a3b8',
    },
    body: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#cbd5e1',
    },
    contact: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#e2e8f0',
    },
    small: {
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: 1.35,
      color: '#94a3b8',
    },
  },

  spacing: {
    pagePadding: {
      top: '26px',
      right: '30px',
      bottom: '26px',
      left: '30px',
    },
    sectionGap: '18px',
    itemGap: '14px',
    headingToContent: '8px',
    bulletGap: '6px',
    contactGap: '10px',
    skillGap: '8px',
  },

  layout: {
    type: 'single-column',
    mainWidth: '100%',
  },

  colors: {
    primary: '#4ade80',
    secondary: '#22d3ee',
    text: {
      primary: '#e2e8f0',
      secondary: '#cbd5e1',
      muted: '#94a3b8',
      light: '#0b1220',
    },
    background: {
      page: '#0b1220',
      section: '#0f172a',
      accent: '#111827',
    },
    border: '#1f2937',
  },

  sectionHeading: {
    style: 'left-border',
    borderWidth: '3px',
    borderColor: '#4ade80',
    padding: '0 0 0 10px',
    marginBottom: '8px',
  },

  header: {
    variant: 'banner',
    showPhoto: false,
    padding: '18px 20px',
    contactIcons: {
      show: true,
      size: '14px',
      color: '#67f7a3',
    },
  },

  skills: {
    variant: 'category-lines',
    columns: 2,
    separator: ' • ',
    badge: {
      fontSize: '11px',
      padding: '4px 10px',
      borderRadius: '8px',
      borderWidth: '1px',
      backgroundColor: '#0b1727',
      textColor: '#e2e8f0',
      borderColor: '#1f2937',
    },
  },

  experience: {
    variant: 'accent-side',
    showLocation: true,
  },

  achievements: {
    variant: 'bullets',
    showIndicators: true,
  },

  languages: {
    variant: 'inline',
    showCertification: false,
  },

  sections: [
    { id: 'header', type: 'header', title: 'Header', enabled: true, order: 0 },
    { id: 'summary', type: 'summary', title: 'Profile', enabled: true, order: 1 },
    { id: 'skills', type: 'skills', title: 'Stack', enabled: true, order: 2 },
    { id: 'experience', type: 'experience', title: 'Experience', enabled: true, order: 3 },
    { id: 'projects', type: 'projects', title: 'Projects', enabled: true, order: 4 },
    { id: 'achievements', type: 'achievements', title: 'Achievements', enabled: true, order: 5 },
    { id: 'education', type: 'education', title: 'Education', enabled: true, order: 6 },
    { id: 'languages', type: 'languages', title: 'Languages', enabled: true, order: 7 },
  ],

  fontFamily: {
    primary: 'JetBrains Mono, SFMono-Regular, Menlo, monospace',
    secondary: 'Inter, Arial, sans-serif',
  },
});

export default terminalThemeConfig;
