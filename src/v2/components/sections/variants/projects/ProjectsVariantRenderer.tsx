/**
 * Projects Variant Renderer
 * 
 * Dispatcher component that renders projects based on the selected variant.
 * Supports multiple industry-ready variants with full inline editing support.
 */

import React from 'react';
import type { ProjectsVariantProps, ProjectsVariant } from './types';
import {
  ProjectsStandard,
  ProjectsCards,
  ProjectsCompact,
} from './variants';

// Re-export types for external use
export type { ProjectsVariantProps, ProjectsVariant } from './types';

interface ProjectsVariantRendererProps extends ProjectsVariantProps {
  /** Variant to render */
  variant: ProjectsVariant;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const ProjectsVariantRenderer: React.FC<ProjectsVariantRendererProps> = ({
  variant,
  items,
  config,
  accentColor,
  editable = false,
  onAddProject,
  onRemoveProject,
  formatDate,
}) => {
  const props: ProjectsVariantProps = {
    items,
    config,
    accentColor,
    editable,
    onAddProject,
    onRemoveProject,
    formatDate,
  };

  // Dispatch based on variant
  switch (variant) {
    case 'standard':
    case 'detailed':
      return <ProjectsStandard {...props} />;
    case 'cards':
    case 'showcase':
      return <ProjectsCards {...props} />;
    case 'compact':
    case 'minimal':
    case 'timeline':
    default:
      return <ProjectsCompact {...props} />;
  }
};

export default ProjectsVariantRenderer;
