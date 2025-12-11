/**
 * Achievements Section Component (V2)
 * 
 * Renders achievements as a list with title-description format.
 */

import React from 'react';
import type { TemplateConfig } from '../../types';
import type { AchievementItem } from '@/types/resume';
import { SectionHeading } from './SectionHeading';
import { InlineEditableText } from '@/components/resume/InlineEditableText';

interface AchievementsSectionProps {
  items: AchievementItem[];
  config: TemplateConfig;
  editable?: boolean;
  sectionTitle?: string;
  onAddItem?: () => void;
  onRemoveItem?: (id: string) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  items,
  config,
  editable = false,
  sectionTitle = 'Achievements',
  onAddItem,
  onRemoveItem,
}) => {
  const { typography, spacing, colors } = config;

  if (!items || items.length === 0) {
    if (!editable) return null;
  }

  const itemStyle: React.CSSProperties = {
    marginBottom: spacing.bulletGap,
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    color: typography.body.color,
  };

  const titleStyle: React.CSSProperties = {
    fontWeight: 600,
    color: typography.itemTitle.color,
  };

  return (
    <div style={{ marginBottom: spacing.sectionGap }}>
      <SectionHeading title={sectionTitle} config={config} />
      
      <div style={{ marginTop: spacing.headingToContent }}>
        {(items || []).map((item, index) => (
          <div key={item.id} style={itemStyle}>
            {editable ? (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                <span style={titleStyle}>
                  <InlineEditableText
                    value={item.title}
                    path={`achievements.${index}.title`}
                    placeholder="Achievement title"
                  />
                </span>
                <span> - </span>
                <span>
                  <InlineEditableText
                    value={item.description}
                    path={`achievements.${index}.description`}
                    placeholder="Achievement description"
                    multiline
                  />
                </span>
              </div>
            ) : (
              <>
                <span style={titleStyle}>{item.title}</span>
                <span> - </span>
                <span>{item.description}</span>
              </>
            )}
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
            + Add Achievement
          </button>
        )}
      </div>
    </div>
  );
};

export default AchievementsSection;
