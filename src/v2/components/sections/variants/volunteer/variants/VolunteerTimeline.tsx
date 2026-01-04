/**
 * Volunteer Timeline Variant
 *
 * Timeline-based layout for volunteer experience.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { VolunteerVariantProps } from '../types';

export const VolunteerTimeline: React.FC<VolunteerVariantProps> = ({
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
    <div style={{ position: 'relative', paddingLeft: '24px' }}>
      {/* Timeline line */}
      <div
        style={{
          position: 'absolute',
          left: '7px',
          top: '4px',
          bottom: editable ? '60px' : '4px',
          width: '2px',
          backgroundColor: `${accentColor}30`,
          borderRadius: '1px',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className="group relative"
            style={{ position: 'relative' }}
          >
            {editable && onRemoveVolunteer && (
              <button
                onClick={() => onRemoveVolunteer(item.id)}
                className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
              >
                <X className="w-3 h-3 text-red-600" />
              </button>
            )}

            {/* Timeline dot */}
            <div
              style={{
                position: 'absolute',
                left: '-21px',
                top: '6px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: accentColor,
                border: '2px solid white',
                boxShadow: `0 0 0 2px ${accentColor}30`,
              }}
            />

            <div>
              {/* Date badge */}
              <div
                style={{
                  display: 'inline-block',
                  fontSize: '11px',
                  color: accentColor,
                  backgroundColor: `${accentColor}15`,
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontWeight: 500,
                  marginBottom: '6px',
                }}
              >
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

              {/* Role */}
              <div
                style={{
                  fontSize: typography.itemTitle.fontSize,
                  fontWeight: 600,
                  color: typography.itemTitle.color,
                  marginBottom: '2px',
                }}
              >
                {editable ? (
                  <InlineEditableText
                    path={`volunteer.${index}.role`}
                    value={item.role}
                    style={{
                      fontSize: typography.itemTitle.fontSize,
                      fontWeight: 600,
                      color: typography.itemTitle.color,
                    }}
                    placeholder="Role"
                  />
                ) : (
                  item.role
                )}
              </div>

              {/* Organization & Location */}
              <div
                style={{
                  fontSize: typography.body.fontSize,
                  color: '#6b7280',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  flexWrap: 'wrap',
                }}
              >
                {editable ? (
                  <InlineEditableText
                    path={`volunteer.${index}.organization`}
                    value={item.organization}
                    style={{ color: accentColor, fontWeight: 500 }}
                    placeholder="Organization"
                  />
                ) : (
                  <span style={{ color: accentColor, fontWeight: 500 }}>{item.organization}</span>
                )}
                {(item.location || editable) && (
                  <>
                    <span style={{ color: '#d1d5db' }}>•</span>
                    {editable ? (
                      <InlineEditableText
                        path={`volunteer.${index}.location`}
                        value={item.location || ''}
                        style={{ color: '#6b7280' }}
                        placeholder="Location"
                      />
                    ) : (
                      <span>{item.location}</span>
                    )}
                  </>
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
                    />
                  ) : (
                    item.description
                  )}
                </div>
              )}

              {/* Highlights */}
              {(item.highlights?.length || editable) && (
                <ul
                  style={{
                    marginTop: '6px',
                    paddingLeft: '16px',
                    fontSize: typography.body.fontSize,
                    color: typography.body.color,
                  }}
                >
                  {item.highlights?.map((highlight, hIndex) => (
                    <li key={hIndex} style={{ marginBottom: '2px' }}>
                      {editable ? (
                        <InlineEditableText
                          path={`volunteer.${index}.highlights.${hIndex}`}
                          value={highlight}
                          placeholder="Highlight"
                        />
                      ) : (
                        highlight
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {editable && onAddVolunteer && (
        <button
          onClick={onAddVolunteer}
          className="mt-4 flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-dashed hover:bg-gray-50 transition-colors"
          style={{ color: accentColor, borderColor: accentColor, marginLeft: '-24px' }}
        >
          <Plus className="h-3 w-3" />
          Add Volunteer Experience
        </button>
      )}
    </div>
  );
};

export default VolunteerTimeline;
