/**
 * Projects Cards Variant
 * 
 * Card-based grid layout for portfolio showcase.
 */

import React from 'react';
import { X, Plus, ExternalLink, Github, Folder } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { ProjectsVariantProps } from '../types';

export const ProjectsCards: React.FC<ProjectsVariantProps> = ({
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
      {items.map((project, index) => (
        <div 
          key={project.id || index}
          className="group relative"
          style={{ 
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {editable && onRemoveProject && (
            <button
              onClick={() => onRemoveProject(project.id)}
              className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3.5 h-3.5 text-red-600" />
            </button>
          )}
          
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: `${accentColor}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Folder style={{ width: '20px', height: '20px', color: accentColor }} />
            </div>
            
            <div style={{ flex: 1 }}>
              {editable ? (
                <InlineEditableText
                  path={`projects.${index}.name`}
                  value={project.name}
                  as="h3"
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: 700,
                    color: typography.itemTitle.color,
                    margin: 0,
                  }}
                  placeholder="Project Name"
                />
              ) : (
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: 700,
                  color: typography.itemTitle.color,
                  margin: 0,
                }}>
                  {project.name}
                </h3>
              )}
              
              {project.role && (
                <div style={{ fontSize: '13px', color: accentColor, fontWeight: 500, marginTop: '2px' }}>
                  {project.role}
                </div>
              )}
            </div>
          </div>
          
          {/* Description */}
          <div style={{ 
            fontSize: '13px', 
            color: typography.body.color,
            lineHeight: 1.5,
            flex: 1,
            marginBottom: '12px',
          }}>
            {editable ? (
              <InlineEditableText
                path={`projects.${index}.description`}
                value={project.description}
                multiline
                style={{ fontSize: '13px' }}
                placeholder="Project description..."
              />
            ) : (
              project.description
            )}
          </div>
          
          {/* Technologies */}
          {project.technologies?.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  style={{
                    fontSize: '10px',
                    fontWeight: 500,
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: '#f3f4f6',
                    color: '#6b7280',
                  }}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span style={{ fontSize: '10px', color: '#9ca3af' }}>
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )}
          
          {/* Links */}
          {!editable && (project.url || project.githubUrl) && (
            <div style={{ display: 'flex', gap: '12px', paddingTop: '12px', borderTop: '1px solid #e5e7eb' }}>
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '4px',
                    fontSize: '12px',
                    color: accentColor,
                    fontWeight: 500,
                  }}
                >
                  <ExternalLink style={{ width: '12px', height: '12px' }} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '4px',
                    fontSize: '12px',
                    color: '#6b7280',
                    fontWeight: 500,
                  }}
                >
                  <Github style={{ width: '12px', height: '12px' }} />
                  Source
                </a>
              )}
            </div>
          )}
        </div>
      ))}
      
      {editable && onAddProject && (
        <button
          onClick={onAddProject}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            minHeight: '200px',
            borderRadius: '12px',
            border: `2px dashed ${accentColor}40`,
            backgroundColor: `${accentColor}05`,
            color: accentColor,
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <Plus style={{ width: '24px', height: '24px' }} />
          Add Project
        </button>
      )}
    </div>
  );
};

export default ProjectsCards;
