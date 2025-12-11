/**
 * Strengths Section Component (V2)
 * 
 * Renders strengths as cards with title-description format.
 */

import React from 'react';
import type { TemplateConfig } from '../../types';
import type { StrengthItem } from '@/types/resume';
import { SectionHeading } from './SectionHeading';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { Target } from 'lucide-react';

interface StrengthsSectionProps {
  items: StrengthItem[];
  config: TemplateConfig;
  editable?: boolean;
  sectionTitle?: string;
  onAddItem?: () => void;
  onRemoveItem?: (id: string) => void;
}

export const StrengthsSection: React.FC<StrengthsSectionProps> = ({
  items,
  config,
  editable = false,
  sectionTitle = 'Strengths',
  onAddItem,
  onRemoveItem,
}) => {
  const { typography, spacing, colors } = config;

  if (!items || items.length === 0) {
    if (!editable) return null;
  }

  const cardStyle: React.CSSProperties = {
    padding: '12px',
    marginBottom: spacing.itemGap,
    backgroundColor: colors.background.accent || '#f8fafc',
    borderRadius: '6px',
    borderLeft: `3px solid ${colors.primary}`,
  };

  const titleStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 600,
    fontSize: typography.itemTitle.fontSize,
    color: typography.itemTitle.color,
    marginBottom: '4px',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    color: typography.body.color,
  };

  return (
    <div style={{ marginBottom: spacing.sectionGap }}>
      <SectionHeading title={sectionTitle} config={config} />
      
      <div style={{ marginTop: spacing.headingToContent }}>
        {(items || []).map((item, index) => (
          <div key={item.id} style={cardStyle}>
            <div style={titleStyle}>
              <Target 
                style={{ 
                  width: '14px', 
                  height: '14px', 
                  color: colors.primary,
                  flexShrink: 0,
                }} 
              />
              {editable ? (
                <InlineEditableText
                  value={item.title}
                  path={`strengths.${index}.title`}
                  placeholder="Strength title"
                />
              ) : (
                <span>{item.title}</span>
              )}
            </div>
            <div style={descriptionStyle}>
              {editable ? (
                <InlineEditableText
                  value={item.description}
                  path={`strengths.${index}.description`}
                  placeholder="Strength description"
                  multiline
                />
              ) : (
                item.description
              )}
            </div>
          </div>
        ))}
        
        {editable && onAddItem && (
          <button
            onClick={onAddItem}
            style={{
              marginTop: '8px',
              padding: '4px 8px',
              fontSize: '11px',
              color: colors.primary,
              background: 'transparent',
              border: `1px dashed ${colors.primary}`,
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            + Add Strength
          </button>
        )}
      </div>
    </div>
  );
};

export default StrengthsSection;
