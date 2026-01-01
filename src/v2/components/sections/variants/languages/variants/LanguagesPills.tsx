/**
 * Languages Pills Variant
 *
 * Displays languages as stylish pill badges with proficiency levels.
 * Modern, clean look perfect for tech and creative resumes.
 */

import React from 'react';
import { X, Plus } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { LanguagesVariantProps } from '../types';

const proficiencyColors: Record<string, { bg: string; text: string; border: string }> = {
  'Native': { bg: '#dcfce7', text: '#166534', border: '#86efac' },
  'Fluent': { bg: '#dbeafe', text: '#1e40af', border: '#93c5fd' },
  'Professional': { bg: '#e0e7ff', text: '#3730a3', border: '#a5b4fc' },
  'Advanced': { bg: '#fae8ff', text: '#86198f', border: '#f0abfc' },
  'Intermediate': { bg: '#fef3c7', text: '#92400e', border: '#fcd34d' },
  'Basic': { bg: '#f3f4f6', text: '#374151', border: '#d1d5db' },
  'Elementary': { bg: '#f9fafb', text: '#6b7280', border: '#e5e7eb' },
};

export const LanguagesPills: React.FC<LanguagesVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddLanguage,
  onRemoveLanguage,
}) => {
  const { typography } = config;

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
      {items.map((lang, index) => {
        const colors = proficiencyColors[lang.proficiency] || { bg: '#f3f4f6', text: '#374151', border: '#d1d5db' };

        return (
          <div
            key={lang.id || index}
            className="group relative"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: colors.bg,
              border: `1px solid ${colors.border}`,
              borderRadius: '20px',
              fontSize: typography.body.fontSize,
            }}
          >
            {editable ? (
              <InlineEditableText
                path={`languages.${index}.language`}
                value={lang.language}
                style={{ fontWeight: 600, color: colors.text }}
                placeholder="Language"
              />
            ) : (
              <span style={{ fontWeight: 600, color: colors.text }}>
                {lang.language}
              </span>
            )}
            <span style={{
              fontSize: '11px',
              color: colors.text,
              opacity: 0.8,
            }}>
              {lang.proficiency}
            </span>

            {editable && onRemoveLanguage && (
              <button
                onClick={() => onRemoveLanguage(lang.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-red-100 rounded-full ml-1"
              >
                <X className="w-3 h-3 text-red-500" />
              </button>
            )}
          </div>
        );
      })}

      {editable && onAddLanguage && (
        <button
          onClick={onAddLanguage}
          className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-dashed hover:bg-gray-50 transition-colors"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="w-3 h-3" />
          Add
        </button>
      )}
    </div>
  );
};

export default LanguagesPills;
