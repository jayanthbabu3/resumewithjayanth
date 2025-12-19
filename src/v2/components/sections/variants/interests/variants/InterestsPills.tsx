/**
 * Interests Pills Variant
 */

import React from 'react';
import { X, Plus } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { InterestsVariantProps } from '../types';

export const InterestsPills: React.FC<InterestsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddInterest,
  onRemoveInterest,
}) => {
  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
      {items.map((interest, index) => (
        <div key={interest.id || index} className="group relative">
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: '12px',
            fontWeight: 500,
            padding: '4px 12px',
            borderRadius: '9999px',
            border: `1px solid ${accentColor}`,
            backgroundColor: 'transparent',
            color: accentColor,
          }}>
            {editable ? (
              <InlineEditableText
                path={`interests.${index}.name`}
                value={interest.name}
                style={{ fontSize: '12px' }}
                placeholder="Interest"
              />
            ) : (
              interest.name
            )}
          </span>
          {editable && onRemoveInterest && (
            <button
              onClick={() => onRemoveInterest(interest.id)}
              className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-red-100 hover:bg-red-200 rounded-full"
            >
              <X className="w-2.5 h-2.5 text-red-600" />
            </button>
          )}
        </div>
      ))}
      
      {editable && onAddInterest && (
        <button
          onClick={onAddInterest}
          className="flex items-center gap-1 text-xs px-3 py-1 rounded-full border border-dashed hover:bg-gray-50 transition-colors"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="w-3 h-3" />
          Add
        </button>
      )}
    </div>
  );
};

export default InterestsPills;
