/**
 * Languages Compact Variant
 */

import React from 'react';
import { X, Plus } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { LanguagesVariantProps } from '../types';

export const LanguagesCompact: React.FC<LanguagesVariantProps> = ({
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
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
      {items.map((lang, index) => (
        <div key={lang.id || index} className="group relative" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {editable ? (
            <InlineEditableText
              path={`languages.${index}.language`}
              value={lang.language}
              style={{ fontWeight: 600, color: typography.itemTitle.color }}
              placeholder="Language"
            />
          ) : (
            <span style={{ fontWeight: 600, color: typography.itemTitle.color }}>
              {lang.language}
            </span>
          )}
          <span style={{ color: '#9ca3af' }}>({lang.proficiency})</span>
          
          {editable && onRemoveLanguage && (
            <button
              onClick={() => onRemoveLanguage(lang.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:bg-red-100 rounded"
            >
              <X className="w-3 h-3 text-red-500" />
            </button>
          )}
        </div>
      ))}
      
      {editable && onAddLanguage && (
        <button
          onClick={onAddLanguage}
          className="flex items-center gap-1 text-xs px-2 py-0.5 rounded border border-dashed hover:bg-gray-50 transition-colors"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};

export default LanguagesCompact;
