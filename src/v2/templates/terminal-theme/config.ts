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
      fontSize: '32px',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '0.02em',
      color: '#f5d061',
    },
    title: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#8ef3a5',
    },
    sectionHeading: {
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#f5d061',
    },
    itemTitle: {
      fontSize: '13px',
      fontWeight: 700,
      lineHeight: 1.45,
      color: '#e6f0d5',
    },
    itemSubtitle: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: 1.35,
      color: '#8ef3a5',
    },
    dates: {
      fontSize: '11px',
      fontWeight: 500,
      lineHeight: 1.3,
      color: '#92b57a',
    },
    body: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#d7e7be',
    },
    contact: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#d7e7be',
    },
    small: {
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: 1.35,
      color: '#92b57a',
    },
  },

  spacing: {
    pagePadding: {
      top: '28px',
      right: '32px',
      bottom: '28px',
      left: '32px',
    },
    sectionGap: '20px',
    itemGap: '14px',
    headingToContent: '8px',
    bulletGap: '6px',
    contactGap: '12px',
    skillGap: '8px',
  },

  layout: {
    type: 'two-column-right',
    mainWidth: '62%',
    sidebarWidth: '34%',
    columnGap: '28px',
    sidebarPadding: '12px 14px',
  },

  colors: {
    primary: '#f5d061',
    secondary: '#8ef3a5',
    text: {
      primary: '#e6f0d5',
      secondary: '#d7e7be',
      muted: '#8fb070',
      light: '#0f1410',
    },
    background: {
      page: '#0c120c',
      section: '#0f1a0f',
      sidebar: '#0f1a0f',
      accent: '#0f1a0f',
    },
    border: '#1e2b1e',
  },

  sectionHeading: {
    style: 'simple',
    marginBottom: '6px',
  },

  header: {
    variant: 'banner',
    showPhoto: false,
    padding: '16px 20px',
    contactIcons: {
      show: true,
      size: '14px',
      color: '#8ef3a5',
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
      backgroundColor: '#101810',
      textColor: '#d7e7be',
      borderColor: '#1e2b1e',
    },
  },

  experience: {
    variant: 'accent-card',
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
    { id: 'summary', type: 'summary', title: '{summary}', enabled: true, order: 1, column: 'main' },
    { id: 'experience', type: 'experience', title: '{experience}', enabled: true, order: 2, column: 'main' },
    { id: 'projects', type: 'projects', title: '{projects}', enabled: true, order: 3, column: 'main' },
    { id: 'education', type: 'education', title: '{education}', enabled: true, order: 4, column: 'sidebar' },
    { id: 'courses', type: 'courses', title: '{courses}', enabled: true, order: 5, column: 'sidebar' },
    { id: 'skills', type: 'skills', title: '{skills}', enabled: true, order: 6, column: 'sidebar' },
    { id: 'languages', type: 'languages', title: '{languages}', enabled: true, order: 7, column: 'sidebar' },
  ],

  fontFamily: {
    primary: "'Fira Code', 'JetBrains Mono', 'SFMono-Regular', 'Menlo', monospace",
    secondary: "'Fira Code', 'JetBrains Mono', 'SFMono-Regular', 'Menlo', monospace",
  },
});

export default terminalThemeConfig;
