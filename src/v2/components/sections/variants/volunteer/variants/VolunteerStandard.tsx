/**
 * Volunteer Standard Variant
 *
 * Traditional experience-like layout for volunteer work.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, Heart } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { VolunteerVariantProps } from '../types';

export const VolunteerStandard: React.FC<VolunteerVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddVolunteer,
  onRemoveVolunteer,
  formatDate,
}) => {
  const { typography, spacing } = config;

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.itemGap }}>
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="group relative"
          style={{
            padding: '12px 16px',
            backgroundColor: `${accentColor}06`,
            borderRadius: '10px',
            borderLeft: `3px solid ${accentColor}`,
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

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              {/* Role */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Heart style={{ width: '16px', height: '16px', color: accentColor, flexShrink: 0 }} />
                {editable ? (
                  <InlineEditableText
                    path={`volunteer.${index}.role`}
                    value={item.role}
                    style={{
                      fontSize: typography.itemTitle.fontSize,
                      fontWeight: 600,
                      color: typography.itemTitle.color,
                    }}
                    placeholder="Role/Position"
                  />
                ) : (
                  <span style={{
                    fontSize: typography.itemTitle.fontSize,
                    fontWeight: 600,
                    color: typography.itemTitle.color,
                  }}>
                    {item.role}
                  </span>
                )}
              </div>

              {/* Organization */}
              <div style={{
                fontSize: typography.body.fontSize,
                color: accentColor,
                fontWeight: 500,
                marginTop: '2px',
                marginLeft: '24px',
              }}>
                {editable ? (
                  <InlineEditableText
                    path={`volunteer.${index}.organization`}
                    value={item.organization}
                    style={{ color: accentColor, fontWeight: 500 }}
                    placeholder="Organization"
                  />
                ) : (
                  item.organization
                )}
              </div>

              {/* Location */}
              {(item.location || editable) && (
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginTop: '2px',
                  marginLeft: '24px',
                }}>
                  {editable ? (
                    <InlineEditableText
                      path={`volunteer.${index}.location`}
                      value={item.location || ''}
                      style={{ fontSize: '12px', color: '#6b7280' }}
                      placeholder="Location (optional)"
                    />
                  ) : (
                    item.location
                  )}
                </div>
              )}
            </div>

            {/* Date Range */}
            <div style={{
              fontSize: typography.dates.fontSize,
              color: typography.dates.color,
              whiteSpace: 'nowrap',
              padding: '2px 8px',
              backgroundColor: `${accentColor}15`,
              borderRadius: '4px',
            }}>
              {editable ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <InlineEditableDate
                    path={`volunteer.${index}.startDate`}
                    value={item.startDate}
                    formatDisplay={formatDate}
                  />
                  <span>-</span>
                  {item.current ? (
                    <span>Present</span>
                  ) : (
                    <InlineEditableDate
                      path={`volunteer.${index}.endDate`}
                      value={item.endDate}
                      formatDisplay={formatDate}
                    />
                  )}
                </div>
              ) : (
                <span>
                  {formatDate ? formatDate(item.startDate) : item.startDate} - {item.current ? 'Present' : (formatDate ? formatDate(item.endDate) : item.endDate)}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          {(item.description || editable) && (
            <div style={{
              fontSize: typography.body.fontSize,
              color: typography.body.color,
              marginTop: '10px',
              marginLeft: '24px',
              lineHeight: typography.body.lineHeight,
            }}>
              {editable ? (
                <InlineEditableText
                  path={`volunteer.${index}.description`}
                  value={item.description || ''}
                  multiline
                  placeholder="Description of your volunteer work..."
                />
              ) : (
                item.description
              )}
            </div>
          )}

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <ul style={{
              marginTop: '8px',
              marginLeft: '24px',
              paddingLeft: '16px',
              listStyleType: 'disc',
            }}>
              {item.highlights.map((highlight, hIndex) => (
                <li key={hIndex} style={{
                  fontSize: typography.body.fontSize,
                  color: typography.body.color,
                  marginBottom: '2px',
                }}>
                  {editable ? (
                    <InlineEditableText
                      path={`volunteer.${index}.highlights.${hIndex}`}
                      value={highlight}
                    />
                  ) : (
                    highlight
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {editable && onAddVolunteer && (
        <button
          onClick={onAddVolunteer}
          className="mt-2 flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg border border-dashed hover:bg-gray-50 transition-colors w-fit"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="h-3 w-3" />
          Add Volunteer Experience
        </button>
      )}
    </div>
  );
};

export default VolunteerStandard;
