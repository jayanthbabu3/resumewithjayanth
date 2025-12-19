/**
 * Projects Section Component (V2)
 * 
 * Renders projects with multiple visual variants.
 */

import React from 'react';
import type { TemplateConfig } from '../../types';
import { SectionHeading } from './SectionHeading';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import { Plus, X, ExternalLink, Github } from 'lucide-react';
import { useStyleOptions } from '@/contexts/StyleOptionsContext';

interface ProjectItem {
  id: string;
  name: string;
  description: string;
  techStack?: string[];
  technologies?: string[];
  startDate?: string;
  endDate?: string;
  current?: boolean;
  url?: string;
  githubUrl?: string;
  role?: string;
  highlights?: string[];
}

interface ProjectsSectionProps {
  items: ProjectItem[];
  config: TemplateConfig;
  editable?: boolean;
  sectionTitle?: string;
  onAddItem?: () => void;
  onRemoveItem?: (id: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  items,
  config,
  editable = false,
  sectionTitle = 'Projects',
  onAddItem,
  onRemoveItem,
}) => {
  const { typography, spacing, colors } = config;
  const accent = colors.primary;

  const styleContext = useStyleOptions();
  const formatDate = styleContext?.formatDate || ((date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  });

  if (!items?.length && !editable) return null;

  const titleStyle: React.CSSProperties = {
    fontSize: typography.itemTitle.fontSize,
    fontWeight: typography.itemTitle.fontWeight,
    lineHeight: typography.itemTitle.lineHeight,
    color: typography.itemTitle.color,
    margin: 0,
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: typography.itemSubtitle.fontSize,
    fontWeight: typography.itemSubtitle.fontWeight,
    lineHeight: typography.itemSubtitle.lineHeight,
    color: accent,
    margin: 0,
  };

  const dateStyle: React.CSSProperties = {
    fontSize: typography.dates.fontSize,
    fontWeight: typography.dates.fontWeight,
    color: typography.dates.color,
  };

  const bodyStyle: React.CSSProperties = {
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight,
    lineHeight: typography.body.lineHeight,
    color: typography.body.color,
  };

  const tagStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '2px 8px',
    fontSize: '11px',
    backgroundColor: colors.background.accent || `${accent}15`,
    color: accent,
    borderRadius: '4px',
    marginRight: '4px',
    marginBottom: '4px',
  };

  const renderItem = (item: ProjectItem, index: number) => (
    <div
      key={item.id}
      className="group relative"
      style={{ marginBottom: index < items.length - 1 ? spacing.itemGap : 0 }}
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            {editable ? (
              <InlineEditableText
                path={`projects.${index}.name`}
                value={item.name}
                as="h3"
                style={titleStyle}
                placeholder="Project Name"
              />
            ) : (
              <h3 style={titleStyle}>{item.name}</h3>
            )}
            
            {/* Links */}
            {!editable && (item.url || item.githubUrl) && (
              <div className="flex items-center gap-1.5">
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: accent }}>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {item.githubUrl && (
                  <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: accent }}>
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )}
          </div>
          
          {item.role && (
            editable ? (
              <InlineEditableText
                path={`projects.${index}.role`}
                value={item.role}
                style={subtitleStyle}
                placeholder="Your Role"
              />
            ) : (
              <div style={subtitleStyle}>{item.role}</div>
            )
          )}
        </div>

        {/* Dates */}
        {(item.startDate || item.endDate) && (
          <div style={dateStyle} className="flex-shrink-0">
            {editable ? (
              <div className="flex items-center gap-1">
                <InlineEditableDate
                  path={`projects.${index}.startDate`}
                  value={item.startDate || ''}
                  style={dateStyle}
                  formatDisplay={formatDate}
                />
                {(item.startDate || item.endDate) && <span>-</span>}
                {item.current ? (
                  <span>Present</span>
                ) : (
                  <InlineEditableDate
                    path={`projects.${index}.endDate`}
                    value={item.endDate || ''}
                    style={dateStyle}
                    formatDisplay={formatDate}
                  />
                )}
              </div>
            ) : (
              <span>
                {formatDate(item.startDate || '')}
                {(item.startDate || item.endDate) && ' - '}
                {item.current ? 'Present' : formatDate(item.endDate || '')}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Description */}
      <div style={{ ...bodyStyle, marginTop: '6px' }}>
        {editable ? (
          <InlineEditableText
            path={`projects.${index}.description`}
            value={item.description}
            style={bodyStyle}
            multiline
            placeholder="Project description..."
          />
        ) : (
          item.description
        )}
      </div>

      {/* Technologies */}
      {(item.technologies?.length > 0 || item.techStack?.length > 0) && (
        <div style={{ marginTop: '8px' }}>
          {(item.technologies || item.techStack || []).map((tech, techIndex) => (
            <span key={techIndex} style={tagStyle}>{tech}</span>
          ))}
        </div>
      )}

      {/* Highlights */}
      {item.highlights?.length > 0 && (
        <ul style={{ ...bodyStyle, marginTop: '6px', paddingLeft: '20px', margin: 0 }}>
          {item.highlights.map((highlight, hIndex) => (
            <li key={hIndex} style={{ marginBottom: spacing.bulletGap }}>
              {editable ? (
                <InlineEditableText
                  path={`projects.${index}.highlights.${hIndex}`}
                  value={highlight}
                  style={bodyStyle}
                />
              ) : (
                highlight
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Remove button */}
      {editable && onRemoveItem && (
        <button
          onClick={() => onRemoveItem(item.id)}
          className="absolute -right-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full"
          title="Remove project"
        >
          <X className="w-3 h-3 text-red-600" />
        </button>
      )}
    </div>
  );

  return (
    <section style={{ marginBottom: spacing.sectionGap }}>
      <SectionHeading title={sectionTitle} config={config} editable={editable} accentColor={accent} />
      
      <div style={{ marginTop: spacing.headingToContent }}>
        {(items || []).map((item, index) => renderItem(item, index))}
        
        {editable && onAddItem && (
          <button
            onClick={onAddItem}
            className="mt-3 flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded border border-dashed hover:bg-gray-50 transition-colors"
            style={{ color: accent, borderColor: accent }}
          >
            <Plus className="h-3 w-3" />
            Add Project
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
