/**
 * Projects Compact Variant
 * 
 * Space-efficient layout for many projects.
 */

import React from 'react';
import { X, Plus, ExternalLink } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { ProjectsVariantProps } from '../types';

export const ProjectsCompact: React.FC<ProjectsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddProject,
  onRemoveProject,
}) => {
  const { typography } = config;

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map((project, index) => (
        <div 
          key={project.id || index}
          className="group relative"
          style={{ 
            padding: '10px 12px',
            backgroundColor: index % 2 === 0 ? '#f9fafb' : 'transparent',
            borderRadius: '6px',
          }}
        >
          {editable && onRemoveProject && (
            <button
              onClick={() => onRemoveProject(project.id)}
              className="absolute -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                {editable ? (
                  <InlineEditableText
                    path={`projects.${index}.name`}
                    value={project.name}
                    style={{ 
                      fontWeight: 600, 
                      color: typography.itemTitle.color,
                      fontSize: typography.itemTitle.fontSize,
                    }}
                    placeholder="Project Name"
                  />
                ) : (
                  <span style={{ fontWeight: 600, color: typography.itemTitle.color }}>
                    {project.name}
                  </span>
                )}
                
                {!editable && project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: accentColor }}>
                    <ExternalLink style={{ width: '12px', height: '12px' }} />
                  </a>
                )}
              </div>
              
              <div style={{ 
                fontSize: '13px', 
                color: typography.body.color,
                lineHeight: 1.4,
              }}>
                {editable ? (
                  <InlineEditableText
                    path={`projects.${index}.description`}
                    value={project.description}
                    style={{ fontSize: '13px' }}
                    placeholder="Brief description..."
                  />
                ) : (
                  project.description
                )}
              </div>
            </div>
            
            {project.technologies?.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', maxWidth: '150px', justifyContent: 'flex-end' }}>
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      fontSize: '10px',
                      fontWeight: 500,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      backgroundColor: `${accentColor}15`,
                      color: accentColor,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      
      {editable && onAddProject && (
        <button
          onClick={onAddProject}
          className="mt-2 flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded border border-dashed hover:bg-gray-50 transition-colors"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="h-3 w-3" />
          Add Project
        </button>
      )}
    </div>
  );
};

export default ProjectsCompact;
