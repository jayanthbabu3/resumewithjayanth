/**
 * Projects Variant Types
 * 
 * Shared types for all projects variant components.
 */

import type { TemplateConfig } from '../../../../types';
import type { ProjectItem } from '../../../../types/resumeData';

export interface ProjectsVariantProps {
  /** Projects data */
  items: ProjectItem[];
  /** Template configuration */
  config: TemplateConfig;
  /** Primary/accent color */
  accentColor: string;
  /** Enable inline editing */
  editable?: boolean;
  /** Callbacks for editing */
  onAddProject?: () => void;
  onRemoveProject?: (projectId: string) => void;
  /** Date formatter function */
  formatDate?: (date: string) => string;
}

export type ProjectsVariant = 
  | 'standard'      // Classic layout with description
  | 'cards'         // Card-based grid layout
  | 'compact'       // Space-efficient layout
  | 'timeline'      // Timeline with dates
  | 'showcase'      // Portfolio showcase style
  | 'minimal'       // Ultra-minimal
  | 'detailed';     // Full details with highlights
