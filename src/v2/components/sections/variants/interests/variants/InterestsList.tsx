/**
 * Interests List Variant
 *
 * Clean bullet list layout for interests/hobbies.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, Circle } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { InterestsVariantProps } from '../types';

export const InterestsList: React.FC<InterestsVariantProps> = ({
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {items.map((interest, index) => (
        <div
          key={interest.id || index}
          className="group relative"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
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

          <Circle
            style={{
              width: '6px',
              height: '6px',
              fill: accentColor,
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
                color: typography.body.color,
              }}
              placeholder="Interest/Hobby"
            />
          ) : (
            <span
              style={{
                fontSize: typography.body.fontSize,
                color: typography.body.color,
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
          className="mt-2 flex items-center gap-1 text-xs px-2 py-1 rounded border border-dashed hover:bg-gray-50 transition-colors w-fit"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="h-3 w-3" />
          Add
        </button>
      )}
    </div>
  );
};

export default InterestsList;
