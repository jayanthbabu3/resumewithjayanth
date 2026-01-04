/**
 * Volunteer Compact Variant
 *
 * Space-efficient layout for volunteer experience.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, Heart } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { VolunteerVariantProps } from '../types';

export const VolunteerCompact: React.FC<VolunteerVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddVolunteer,
  onRemoveVolunteer,
  formatDate,
}) => {
  const { typography } = config;

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="group relative"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px',
            padding: '8px 12px',
            backgroundColor: index % 2 === 0 ? `${accentColor}06` : 'transparent',
            borderRadius: '6px',
          }}
        >
          {editable && onRemoveVolunteer && (
            <button
              onClick={() => onRemoveVolunteer(item.id)}
              className="absolute -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          <Heart style={{ width: '14px', height: '14px', color: accentColor, flexShrink: 0, marginTop: '2px' }} />

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {/* Role */}
              {editable ? (
                <InlineEditableText
                  path={`volunteer.${index}.role`}
                  value={item.role}
                  style={{
                    fontWeight: 600,
                    color: typography.itemTitle.color,
                    fontSize: typography.body.fontSize,
                  }}
                  placeholder="Role"
                />
              ) : (
                <span style={{
                  fontWeight: 600,
                  color: typography.itemTitle.color,
                  fontSize: typography.body.fontSize,
                }}>
                  {item.role}
                </span>
              )}

              <span style={{ color: '#d1d5db' }}>@</span>

              {/* Organization */}
              {editable ? (
                <InlineEditableText
                  path={`volunteer.${index}.organization`}
                  value={item.organization}
                  style={{ color: accentColor, fontSize: typography.body.fontSize }}
                  placeholder="Organization"
                />
              ) : (
                <span style={{ color: accentColor, fontSize: typography.body.fontSize }}>
                  {item.organization}
                </span>
              )}

              {/* Location */}
              {(item.location || editable) && (
                <>
                  <span style={{ color: '#d1d5db' }}>•</span>
                  {editable ? (
                    <InlineEditableText
                      path={`volunteer.${index}.location`}
                      value={item.location || ''}
                      style={{ color: '#6b7280', fontSize: '12px' }}
                      placeholder="Location"
                    />
                  ) : (
                    <span style={{ color: '#6b7280', fontSize: '12px' }}>
                      {item.location}
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Description (collapsed) */}
            {(item.description || editable) && (
              <div style={{
                fontSize: '12px',
                color: typography.body.color,
                marginTop: '4px',
                lineHeight: 1.4,
              }}>
                {editable ? (
                  <InlineEditableText
                    path={`volunteer.${index}.description`}
                    value={item.description || ''}
                    placeholder="Brief description..."
                  />
                ) : (
                  item.description
                )}
              </div>
            )}
          </div>

          {/* Date */}
          <div style={{
            fontSize: '11px',
            color: typography.dates.color,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            {editable ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <InlineEditableDate
                  path={`volunteer.${index}.startDate`}
                  value={item.startDate}
                  formatDisplay={formatDate}
                  style={{ fontSize: '11px' }}
                />
                <span>-</span>
                {item.current ? (
                  <span>Now</span>
                ) : (
                  <InlineEditableDate
                    path={`volunteer.${index}.endDate`}
                    value={item.endDate}
                    formatDisplay={formatDate}
                    style={{ fontSize: '11px' }}
                  />
                )}
              </div>
            ) : (
              <span>
                {formatDate ? formatDate(item.startDate) : item.startDate} - {item.current ? 'Now' : (formatDate ? formatDate(item.endDate) : item.endDate)}
              </span>
            )}
          </div>
        </div>
      ))}

      {editable && onAddVolunteer && (
        <button
          onClick={onAddVolunteer}
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

export default VolunteerCompact;
