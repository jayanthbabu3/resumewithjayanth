/**
 * Interests Standard Variant
 * 
 * Shows interests with optional descriptions and bullet points.
 */

import React from 'react';
import { X, Plus } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { InterestsVariantProps } from '../types';

export const InterestsStandard: React.FC<InterestsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddInterest,
  onRemoveInterest,
}) => {
  const { typography, spacing } = config;

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.itemGap }}>
      {items.map((interest, index) => (
        <div key={interest.id || index} className="group relative">
          {editable && onRemoveInterest && (
            <button
              onClick={() => onRemoveInterest(interest.id)}
              className="absolute -right-2 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}
          
          <div>
            {editable ? (
              <InlineEditableText
                path={`interests.${index}.name`}
                value={interest.name}
                style={{ 
                  fontWeight: 600, 
                  color: typography.itemTitle.color,
                  fontSize: typography.itemTitle.fontSize,
                }}
                placeholder="Interest/Hobby"
              />
            ) : (
              <span style={{ 
                fontWeight: 600, 
                color: typography.itemTitle.color,
                fontSize: typography.itemTitle.fontSize,
              }}>
                {interest.name}
              </span>
            )}
            
            {interest.description && (
              <ul style={{ 
                margin: '4px 0 0 0', 
                paddingLeft: '20px',
                listStyleType: 'disc',
              }}>
                {interest.description.split('\n').filter(Boolean).map((line, i) => (
                  <li key={i} style={{ 
                    fontSize: typography.body.fontSize,
                    color: typography.body.color,
                    marginBottom: '2px',
                  }}>
                    {editable ? (
                      <InlineEditableText
                        path={`interests.${index}.description`}
                        value={line}
                        placeholder="Detail..."
                      />
                    ) : (
                      line
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
      
      {editable && onAddInterest && (
        <button
          onClick={onAddInterest}
          className="mt-2 flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded border border-dashed hover:bg-gray-50 transition-colors w-fit"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="h-3 w-3" />
          Add Interest
        </button>
      )}
    </div>
  );
};

export default InterestsStandard;
