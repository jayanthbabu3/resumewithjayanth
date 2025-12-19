/**
 * References Section Component (V2)
 * 
 * Renders professional references.
 */

import React from 'react';
import type { TemplateConfig } from '../../types';
import { SectionHeading } from './SectionHeading';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { Plus, X, User, Mail, Phone } from 'lucide-react';

interface ReferenceItem {
  id: string;
  name: string;
  title: string;
  company: string;
  email?: string;
  phone?: string;
  relationship: string;
}

interface ReferencesSectionProps {
  items: ReferenceItem[];
  config: TemplateConfig;
  editable?: boolean;
  sectionTitle?: string;
  onAddItem?: () => void;
  onRemoveItem?: (id: string) => void;
}

export const ReferencesSection: React.FC<ReferencesSectionProps> = ({
  items,
  config,
  editable = false,
  sectionTitle = 'References',
  onAddItem,
  onRemoveItem,
}) => {
  const { typography, spacing, colors } = config;
  const accent = colors.primary;

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
    color: accent,
  };

  const bodyStyle: React.CSSProperties = {
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    color: typography.body.color,
  };

  const renderItem = (item: ReferenceItem, index: number) => (
    <div
      key={item.id}
      className="group relative"
      style={{ marginBottom: index < items.length - 1 ? spacing.itemGap : 0 }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
          style={{ backgroundColor: `${accent}15` }}
        >
          <User className="w-5 h-5" style={{ color: accent }} />
        </div>
        
        <div className="flex-1">
          {editable ? (
            <InlineEditableText
              path={`references.${index}.name`}
              value={item.name}
              as="h3"
              style={titleStyle}
              placeholder="Name"
            />
          ) : (
            <h3 style={titleStyle}>{item.name}</h3>
          )}
          
          <div style={subtitleStyle}>
            {editable ? (
              <span className="flex items-center gap-1">
                <InlineEditableText
                  path={`references.${index}.title`}
                  value={item.title}
                  style={subtitleStyle}
                  placeholder="Title"
                />
                <span style={{ color: typography.body.color }}> at </span>
                <InlineEditableText
                  path={`references.${index}.company`}
                  value={item.company}
                  style={subtitleStyle}
                  placeholder="Company"
                />
              </span>
            ) : (
              <>{item.title} at {item.company}</>
            )}
          </div>

          <div style={{ ...typography.small, color: typography.small.color, marginTop: '2px' }}>
            {editable ? (
              <InlineEditableText
                path={`references.${index}.relationship`}
                value={item.relationship}
                style={{ ...typography.small }}
                placeholder="Relationship (e.g., Former Manager)"
              />
            ) : (
              item.relationship
            )}
          </div>

          {(item.email || item.phone) && (
            <div className="flex items-center gap-4 mt-2" style={bodyStyle}>
              {item.email && (
                <div className="flex items-center gap-1">
                  <Mail className="w-3 h-3" style={{ color: accent }} />
                  {editable ? (
                    <InlineEditableText
                      path={`references.${index}.email`}
                      value={item.email}
                      style={bodyStyle}
                      placeholder="email@example.com"
                    />
                  ) : (
                    <a href={`mailto:${item.email}`} style={{ color: accent }}>{item.email}</a>
                  )}
                </div>
              )}
              {item.phone && (
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3" style={{ color: accent }} />
                  {editable ? (
                    <InlineEditableText
                      path={`references.${index}.phone`}
                      value={item.phone}
                      style={bodyStyle}
                      placeholder="+1 (555) 000-0000"
                    />
                  ) : (
                    item.phone
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {editable && onRemoveItem && (
        <button
          onClick={() => onRemoveItem(item.id)}
          className="absolute -right-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full"
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
            Add Reference
          </button>
        )}
      </div>
    </section>
  );
};

export default ReferencesSection;
