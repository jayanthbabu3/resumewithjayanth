/**
 * Volunteer Cards Variant
 *
 * Card-based grid layout for volunteer experience.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, Heart, MapPin, Calendar } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { VolunteerVariantProps } from '../types';

export const VolunteerCards: React.FC<VolunteerVariantProps> = ({
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
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
      }}
    >
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="group relative"
          style={{
            padding: '16px',
            backgroundColor: `${accentColor}08`,
            borderRadius: '12px',
            border: `1px solid ${accentColor}20`,
          }}
        >
          {editable && onRemoveVolunteer && (
            <button
              onClick={() => onRemoveVolunteer(item.id)}
              className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          {/* Header with heart icon */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: `linear-gradient(135deg, ${accentColor}, ${accentColor}99)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Heart style={{ width: '18px', height: '18px', color: '#fff', fill: '#fff' }} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Role */}
              {editable ? (
                <InlineEditableText
                  path={`volunteer.${index}.role`}
                  value={item.role}
                  style={{
                    fontSize: typography.itemTitle.fontSize,
                    fontWeight: 600,
                    color: typography.itemTitle.color,
                    display: 'block',
                  }}
                  placeholder="Role"
                />
              ) : (
                <div
                  style={{
                    fontSize: typography.itemTitle.fontSize,
                    fontWeight: 600,
                    color: typography.itemTitle.color,
                  }}
                >
                  {item.role}
                </div>
              )}

              {/* Organization */}
              <div
                style={{
                  fontSize: '12px',
                  color: accentColor,
                  fontWeight: 500,
                  marginTop: '2px',
                }}
              >
                {editable ? (
                  <InlineEditableText
                    path={`volunteer.${index}.organization`}
                    value={item.organization}
                    style={{ fontSize: '12px', color: accentColor, fontWeight: 500 }}
                    placeholder="Organization"
                  />
                ) : (
                  item.organization
                )}
              </div>
            </div>
          </div>

          {/* Location */}
          {(item.location || editable) && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '11px',
                color: '#6b7280',
                marginBottom: '6px',
              }}
            >
              <MapPin style={{ width: '10px', height: '10px' }} />
              {editable ? (
                <InlineEditableText
                  path={`volunteer.${index}.location`}
                  value={item.location || ''}
                  style={{ fontSize: '11px', color: '#6b7280' }}
                  placeholder="Location"
                />
              ) : (
                item.location
              )}
            </div>
          )}

          {/* Date */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              color: typography.dates.color,
              marginBottom: '8px',
            }}
          >
            <Calendar style={{ width: '10px', height: '10px' }} />
            {editable ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <InlineEditableDate
                  path={`volunteer.${index}.startDate`}
                  value={item.startDate}
                  formatDisplay={formatDate}
                  style={{ fontSize: '11px' }}
                />
                <span>-</span>
                {item.current ? (
                  <span>Present</span>
                ) : (
                  <InlineEditableDate
                    path={`volunteer.${index}.endDate`}
                    value={item.endDate}
                    formatDisplay={formatDate}
                    style={{ fontSize: '11px' }}
                  />
                )}
              </span>
            ) : (
              <span>
                {formatDate ? formatDate(item.startDate) : item.startDate} - {item.current ? 'Present' : (formatDate ? formatDate(item.endDate) : item.endDate)}
              </span>
            )}
          </div>

          {/* Description */}
          {(item.description || editable) && (
            <div
              style={{
                fontSize: typography.body.fontSize,
                color: typography.body.color,
                lineHeight: 1.5,
              }}
            >
              {editable ? (
                <InlineEditableText
                  path={`volunteer.${index}.description`}
                  value={item.description || ''}
                  multiline
                  placeholder="Describe your volunteer work..."
                  style={{ fontSize: typography.body.fontSize }}
                />
              ) : (
                item.description
              )}
            </div>
          )}

          {/* Highlights */}
          {item.highlights?.length && !editable ? (
            <ul
              style={{
                marginTop: '8px',
                paddingLeft: '14px',
                fontSize: '12px',
                color: typography.body.color,
              }}
            >
              {item.highlights.slice(0, 2).map((highlight, hIndex) => (
                <li key={hIndex} style={{ marginBottom: '2px' }}>
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}

      {editable && onAddVolunteer && (
        <button
          onClick={onAddVolunteer}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '20px',
            borderRadius: '12px',
            border: `2px dashed ${accentColor}40`,
            backgroundColor: 'transparent',
            color: accentColor,
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
            minHeight: '120px',
          }}
          className="hover:bg-gray-50 transition-colors"
        >
          <Plus style={{ width: '16px', height: '16px' }} />
          Add Volunteer
        </button>
      )}
    </div>
  );
};

export default VolunteerCards;
