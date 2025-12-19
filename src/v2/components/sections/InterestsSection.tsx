/**
 * Interests Section Component (V2)
 * 
 * Renders interests and hobbies.
 */

import React from 'react';
import type { TemplateConfig } from '../../types';
import { SectionHeading } from './SectionHeading';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { Plus, X, Sparkles } from 'lucide-react';

interface InterestItem {
  id: string;
  name: string;
  description?: string;
}

interface InterestsSectionProps {
  items: InterestItem[];
  config: TemplateConfig;
  editable?: boolean;
  sectionTitle?: string;
  onAddItem?: () => void;
  onRemoveItem?: (id: string) => void;
}

export const InterestsSection: React.FC<InterestsSectionProps> = ({
  items,
  config,
  editable = false,
  sectionTitle = 'Interests',
  onAddItem,
  onRemoveItem,
}) => {
  const { typography, spacing, colors } = config;
  const accent = colors.primary;

  if (!items?.length && !editable) return null;

  const tagStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 12px',
    fontSize: typography.body.fontSize,
    backgroundColor: colors.background.accent || `${accent}10`,
    color: typography.body.color,
    borderRadius: '16px',
    marginRight: '8px',
    marginBottom: '8px',
  };

  return (
    <section style={{ marginBottom: spacing.sectionGap }}>
      <SectionHeading title={sectionTitle} config={config} editable={editable} accentColor={accent} />
      
      <div style={{ marginTop: spacing.headingToContent }}>
        <div className="flex flex-wrap">
          {(items || []).map((item, index) => (
            <div key={item.id} className="group relative">
              <span style={tagStyle}>
                <Sparkles className="w-3 h-3" style={{ color: accent }} />
                {editable ? (
                  <InlineEditableText
                    path={`interests.${index}.name`}
                    value={item.name}
                    style={{ fontSize: typography.body.fontSize }}
                    placeholder="Interest"
                  />
                ) : (
                  item.name
                )}
              </span>
              {editable && onRemoveItem && (
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-red-100 hover:bg-red-200 rounded-full"
                >
                  <X className="w-2.5 h-2.5 text-red-600" />
                </button>
              )}
            </div>
          ))}
        </div>
        
        {editable && onAddItem && (
          <button
            onClick={onAddItem}
            className="mt-2 flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded border border-dashed hover:bg-gray-50 transition-colors"
            style={{ color: accent, borderColor: accent }}
          >
            <Plus className="h-3 w-3" />
            Add Interest
          </button>
        )}
      </div>
    </section>
  );
};

export default InterestsSection;
