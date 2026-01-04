/**
 * Patents Standard Variant
 *
 * Clean layout with patent icons and status badges.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, FileText, ExternalLink } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { PatentsVariantProps } from '../types';

const STATUS_COLORS: Record<string, string> = {
  Pending: '#f59e0b',
  Granted: '#10b981',
  Published: '#3b82f6',
};

export const PatentsStandard: React.FC<PatentsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddPatent,
  onRemovePatent,
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
            borderRadius: '8px',
            borderLeft: `3px solid ${accentColor}`,
          }}
        >
          {editable && onRemovePatent && (
            <button
              onClick={() => onRemovePatent(item.id)}
              className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Title with icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText style={{ width: '16px', height: '16px', color: accentColor, flexShrink: 0 }} />
                {editable ? (
                  <InlineEditableText
                    path={`patents.${index}.title`}
                    value={item.title}
                    style={{
                      fontSize: typography.itemTitle.fontSize,
                      fontWeight: 600,
                      color: typography.itemTitle.color,
                    }}
                    placeholder="Patent Title"
                  />
                ) : (
                  <span style={{
                    fontSize: typography.itemTitle.fontSize,
                    fontWeight: 600,
                    color: typography.itemTitle.color,
                  }}>
                    {item.title}
                  </span>
                )}
                {!editable && item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: accentColor, flexShrink: 0 }}
                  >
                    <ExternalLink style={{ width: '14px', height: '14px' }} />
                  </a>
                )}
              </div>

              {/* Patent number and status */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', marginLeft: '24px' }}>
                {editable ? (
                  <InlineEditableText
                    path={`patents.${index}.patentNumber`}
                    value={item.patentNumber || ''}
                    style={{ fontSize: '12px', color: '#6b7280' }}
                    placeholder="Patent Number"
                  />
                ) : (
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>
                    {item.patentNumber}
                  </span>
                )}
                <span
                  style={{
                    fontSize: '10px',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: `${STATUS_COLORS[item.status] || STATUS_COLORS.Pending}20`,
                    color: STATUS_COLORS[item.status] || STATUS_COLORS.Pending,
                    fontWeight: 500,
                  }}
                >
                  {editable ? (
                    <InlineEditableText
                      path={`patents.${index}.status`}
                      value={item.status || 'Pending'}
                      style={{ fontSize: '10px', fontWeight: 500 }}
                      placeholder="Status"
                    />
                  ) : (
                    item.status
                  )}
                </span>
              </div>

              {/* Inventors */}
              {(item.inventors?.length || editable) && (
                <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px', marginLeft: '24px' }}>
                  <span>Inventors: </span>
                  {editable ? (
                    <InlineEditableText
                      path={`patents.${index}.inventors`}
                      value={Array.isArray(item.inventors) ? item.inventors.join(', ') : (item.inventors || '')}
                      style={{ fontSize: '11px', color: '#6b7280' }}
                      placeholder="Names (comma-separated)"
                    />
                  ) : (
                    Array.isArray(item.inventors) ? item.inventors.join(', ') : item.inventors
                  )}
                </div>
              )}

              {/* Description */}
              {(item.description || editable) && (
                <div style={{
                  fontSize: typography.body.fontSize,
                  color: typography.body.color,
                  marginTop: '6px',
                  marginLeft: '24px',
                  lineHeight: 1.5,
                }}>
                  {editable ? (
                    <InlineEditableText
                      path={`patents.${index}.description`}
                      value={item.description || ''}
                      multiline
                      placeholder="Description..."
                    />
                  ) : (
                    item.description
                  )}
                </div>
              )}

              {/* Editable URL */}
              {editable && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', marginLeft: '24px' }}>
                  <ExternalLink style={{ width: '10px', height: '10px', color: accentColor }} />
                  <InlineEditableText
                    path={`patents.${index}.url`}
                    value={item.url || ''}
                    style={{ fontSize: '10px', color: accentColor }}
                    placeholder="Patent URL (optional)"
                  />
                </div>
              )}
            </div>

            {/* Date */}
            <div style={{
              fontSize: typography.dates.fontSize,
              color: typography.dates.color,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}>
              {editable ? (
                <InlineEditableDate
                  path={`patents.${index}.date`}
                  value={item.date}
                  formatDisplay={formatDate}
                  style={{ fontSize: typography.dates.fontSize }}
                />
              ) : (
                formatDate ? formatDate(item.date) : item.date
              )}
            </div>
          </div>
        </div>
      ))}

      {editable && onAddPatent && (
        <button
          onClick={onAddPatent}
          className="mt-2 flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border border-dashed hover:bg-gray-50 transition-colors"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="h-3 w-3" />
          Add Patent
        </button>
      )}
    </div>
  );
};

export default PatentsStandard;
