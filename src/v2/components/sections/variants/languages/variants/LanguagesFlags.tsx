/**
 * Languages Flags Variant
 *
 * Displays languages with emoji flags for a visual, friendly look.
 * Great for international professionals and creative industries.
 */

import React from 'react';
import { X, Plus } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { LanguagesVariantProps } from '../types';

// Common language to flag emoji mapping
const languageFlags: Record<string, string> = {
  'English': '🇬🇧',
  'Spanish': '🇪🇸',
  'French': '🇫🇷',
  'German': '🇩🇪',
  'Italian': '🇮🇹',
  'Portuguese': '🇵🇹',
  'Russian': '🇷🇺',
  'Chinese': '🇨🇳',
  'Mandarin': '🇨🇳',
  'Japanese': '🇯🇵',
  'Korean': '🇰🇷',
  'Arabic': '🇸🇦',
  'Hindi': '🇮🇳',
  'Dutch': '🇳🇱',
  'Swedish': '🇸🇪',
  'Norwegian': '🇳🇴',
  'Danish': '🇩🇰',
  'Finnish': '🇫🇮',
  'Polish': '🇵🇱',
  'Turkish': '🇹🇷',
  'Greek': '🇬🇷',
  'Hebrew': '🇮🇱',
  'Thai': '🇹🇭',
  'Vietnamese': '🇻🇳',
  'Indonesian': '🇮🇩',
  'Malay': '🇲🇾',
  'Tagalog': '🇵🇭',
  'Filipino': '🇵🇭',
  'Czech': '🇨🇿',
  'Hungarian': '🇭🇺',
  'Romanian': '🇷🇴',
  'Ukrainian': '🇺🇦',
  'Bengali': '🇧🇩',
  'Tamil': '🇮🇳',
  'Telugu': '🇮🇳',
  'Kannada': '🇮🇳',
  'Malayalam': '🇮🇳',
  'Marathi': '🇮🇳',
  'Gujarati': '🇮🇳',
  'Punjabi': '🇮🇳',
  'Urdu': '🇵🇰',
  'Persian': '🇮🇷',
  'Farsi': '🇮🇷',
  'Swahili': '🇰🇪',
};

const getFlag = (language: string): string => {
  return languageFlags[language] || '🌐';
};

export const LanguagesFlags: React.FC<LanguagesVariantProps> = ({
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
        <div
          key={lang.id || index}
          className="group relative"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ fontSize: '20px' }}>{getFlag(lang.language)}</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {editable ? (
              <InlineEditableText
                path={`languages.${index}.language`}
                value={lang.language}
                style={{ fontWeight: 600, color: typography.itemTitle.color, fontSize: typography.body.fontSize, lineHeight: 1.2 }}
                placeholder="Language"
              />
            ) : (
              <span style={{ fontWeight: 600, color: typography.itemTitle.color, fontSize: typography.body.fontSize, lineHeight: 1.2 }}>
                {lang.language}
              </span>
            )}
            <span style={{ fontSize: '11px', color: '#9ca3af', lineHeight: 1.2 }}>
              {lang.proficiency}
            </span>
          </div>

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
          className="flex items-center gap-1 text-xs px-2 py-1 rounded border border-dashed hover:bg-gray-50 transition-colors"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="w-3 h-3" />
          Add
        </button>
      )}
    </div>
  );
};

export default LanguagesFlags;
