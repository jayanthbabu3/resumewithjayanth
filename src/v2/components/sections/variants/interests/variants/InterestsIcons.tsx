/**
 * Interests Icons Variant
 *
 * Visual icon-based cards for interests/hobbies.
 * Uses theme colors for styling.
 */

import React from 'react';
import {
  X,
  Plus,
  Heart,
  Music,
  Camera,
  Book,
  Gamepad2,
  Palette,
  Plane,
  Coffee,
  Dumbbell,
  Film,
} from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { InterestsVariantProps } from '../types';

// Rotating icons for visual variety
const interestIcons = [Heart, Music, Camera, Book, Gamepad2, Palette, Plane, Coffee, Dumbbell, Film];

export const InterestsIcons: React.FC<InterestsVariantProps> = ({
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
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {items.map((interest, index) => {
        const IconComponent = interestIcons[index % interestIcons.length];

        return (
          <div
            key={interest.id || index}
            className="group relative"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '14px 16px',
              minWidth: '90px',
              maxWidth: '120px',
              backgroundColor: `${accentColor}08`,
              borderRadius: '12px',
              border: `1px solid ${accentColor}20`,
            }}
          >
            {editable && onRemoveInterest && (
              <button
                onClick={() => onRemoveInterest(interest.id)}
                className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
              >
                <X className="w-3 h-3 text-red-600" />
              </button>
            )}

            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: accentColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
                boxShadow: `0 2px 4px -1px ${accentColor}40`,
              }}
            >
              <IconComponent style={{ width: '18px', height: '18px', color: '#fff' }} />
            </div>

            {editable ? (
              <InlineEditableText
                path={`interests.${index}.name`}
                value={interest.name}
                style={{
                  fontSize: typography.body.fontSize,
                  fontWeight: 500,
                  color: typography.itemTitle.color,
                  textAlign: 'center',
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
        );
      })}

      {editable && onAddInterest && (
        <button
          onClick={onAddInterest}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '14px 16px',
            minWidth: '90px',
            borderRadius: '12px',
            border: `2px dashed ${accentColor}40`,
            backgroundColor: 'transparent',
            color: accentColor,
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
            minHeight: '80px',
          }}
          className="hover:bg-gray-50 transition-colors"
        >
          <Plus style={{ width: '18px', height: '18px' }} />
          Add
        </button>
      )}
    </div>
  );
};

export default InterestsIcons;
