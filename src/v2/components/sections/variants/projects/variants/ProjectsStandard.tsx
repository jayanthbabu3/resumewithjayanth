/**
 * Projects Standard Variant
 * 
 * Classic professional layout with project details.
 */

import React from 'react';
import { X, Plus, ExternalLink, Github } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { ProjectsVariantProps } from '../types';

export const ProjectsStandard: React.FC<ProjectsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddProject,
  onRemoveProject,
}) => {
  const { typography, spacing } = config;

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.itemGap }}>
      {items.map((project, index) => (
        <div 
          key={project.id || index}
          className="group relative"
        >
          {editable && onRemoveProject && (
            <button
              onClick={() => onRemoveProject(project.id)}
              className="absolute -right-2 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {editable ? (
                  <InlineEditableText
                    path={`projects.${index}.name`}
                    value={project.name}
                    as="h3"
                    style={{ 
                      fontSize: typography.itemTitle.fontSize, 
                      fontWeight: typography.itemTitle.fontWeight,
                      color: typography.itemTitle.color,
                      margin: 0,
                    }}
                    placeholder="Project Name"
                  />
                ) : (
                  <h3 style={{ 
                    fontSize: typography.itemTitle.fontSize, 
                    fontWeight: typography.itemTitle.fontWeight,
                    color: typography.itemTitle.color,
                    margin: 0,
                  }}>
                    {project.name}
                  </h3>
                )}
                
                {!editable && project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: accentColor }}>
                    <ExternalLink style={{ width: '14px', height: '14px' }} />
                  </a>
                )}
                {!editable && project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#6b7280' }}>
                    <Github style={{ width: '14px', height: '14px' }} />
                  </a>
                )}
              </div>
              
              {project.role && (
                <div style={{ 
                  fontSize: typography.body.fontSize, 
                  color: accentColor,
                  fontWeight: 500,
                  marginTop: '2px',
                }}>
                  {editable ? (
                    <InlineEditableText
                      path={`projects.${index}.role`}
                      value={project.role}
                      style={{ color: accentColor, fontWeight: 500 }}
                      placeholder="Your Role"
                    />
                  ) : (
                    project.role
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Description */}
          <div style={{ 
            fontSize: typography.body.fontSize, 
            color: typography.body.color,
            lineHeight: typography.body.lineHeight,
            marginBottom: '8px',
          }}>
            {editable ? (
              <InlineEditableText
                path={`projects.${index}.description`}
                value={project.description}
                multiline
                placeholder="Project description..."
              />
            ) : (
              project.description
            )}
          </div>
          
          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    padding: '2px 8px',
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
          
          {/* Highlights */}
          {project.highlights?.length > 0 && (
            <ul style={{ 
              margin: '8px 0 0 0', 
              paddingLeft: '16px',
              listStyleType: 'disc',
            }}>
              {project.highlights.map((highlight, hIndex) => (
                <li key={hIndex} style={{ 
                  fontSize: typography.body.fontSize,
                  color: typography.body.color,
                  marginBottom: '4px',
                }}>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
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

export default ProjectsStandard;
