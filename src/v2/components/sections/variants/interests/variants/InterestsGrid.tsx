/**
 * Interests Grid Variant
 *
 * 2-column grid layout for interests/hobbies.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, Sparkles } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { InterestsVariantProps } from '../types';

export const InterestsGrid: React.FC<InterestsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddInterest,
  onRemoveInterest,
}) => {
  const { typography } = config;

  if (!items.length && !editable) return null;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px',
      }}
    >
      {items.map((interest, index) => (
        <div
          key={interest.id || index}
          className="group relative"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 12px',
            backgroundColor: `${accentColor}08`,
            borderRadius: '8px',
            border: `1px solid ${accentColor}15`,
          }}
        >
          {editable && onRemoveInterest && (
            <button
              onClick={() => onRemoveInterest(interest.id)}
              className="absolute -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          <Sparkles
            style={{
              width: '14px',
              height: '14px',
              color: accentColor,
              flexShrink: 0,
            }}
          />

          {editable ? (
            <InlineEditableText
              path={`interests.${index}.name`}
              value={interest.name}
              style={{
                fontSize: typography.body.fontSize,
                fontWeight: 500,
                color: typography.itemTitle.color,
              }}
              placeholder="Interest"
            />
          ) : (
            <span
              style={{
                fontSize: typography.body.fontSize,
                fontWeight: 500,
                color: typography.itemTitle.color,
              }}
            >
              {interest.name}
            </span>
          )}
        </div>
      ))}

      {editable && onAddInterest && (
        <button
          onClick={onAddInterest}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '10px 12px',
            borderRadius: '8px',
            border: `2px dashed ${accentColor}40`,
            backgroundColor: 'transparent',
            color: accentColor,
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
          className="hover:bg-gray-50 transition-colors"
        >
          <Plus style={{ width: '14px', height: '14px' }} />
          Add
        </button>
      )}
    </div>
  );
};

export default InterestsGrid;
