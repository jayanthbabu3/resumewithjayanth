/**
 * Languages Grid Variant
 *
 * Displays languages in a structured grid with visual proficiency indicators.
 * Clean, organized layout ideal for corporate resumes.
 */

import React from 'react';
import { X, Plus } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { LanguagesVariantProps } from '../types';

const proficiencyLevels: Record<string, number> = {
  'Native': 5,
  'Fluent': 5,
  'Professional': 4,
  'Advanced': 4,
  'Intermediate': 3,
  'Basic': 2,
  'Elementary': 1,
};

export const LanguagesGrid: React.FC<LanguagesVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddLanguage,
  onRemoveLanguage,
}) => {
  const { typography } = config;

  if (!items.length && !editable) return null;

  const renderDots = (level: number) => {
    return (
      <div style={{ display: 'flex', gap: '4px' }}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: dot <= level ? accentColor : '#e5e7eb',
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px 24px',
    }}>
      {items.map((lang, index) => {
        const level = proficiencyLevels[lang.proficiency] || 3;

        return (
          <div
            key={lang.id || index}
            className="group relative"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 12px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #f3f4f6',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {editable ? (
                <InlineEditableText
                  path={`languages.${index}.language`}
                  value={lang.language}
                  style={{ fontWeight: 600, color: typography.itemTitle.color, fontSize: typography.body.fontSize }}
                  placeholder="Language"
                />
              ) : (
                <span style={{ fontWeight: 600, color: typography.itemTitle.color, fontSize: typography.body.fontSize }}>
                  {lang.language}
                </span>
              )}
              <span style={{ fontSize: '11px', color: '#9ca3af' }}>
                {lang.proficiency}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {renderDots(level)}

              {editable && onRemoveLanguage && (
                <button
                  onClick={() => onRemoveLanguage(lang.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-red-100 rounded"
                >
                  <X className="w-3 h-3 text-red-500" />
                </button>
              )}
            </div>
          </div>
        );
      })}

      {editable && onAddLanguage && (
        <button
          onClick={onAddLanguage}
          className="flex items-center justify-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-dashed hover:bg-gray-50 transition-colors"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="h-3 w-3" />
          Add Language
        </button>
      )}
    </div>
  );
};

export default LanguagesGrid;
