/**
 * Patents Detailed Variant
 *
 * Full detailed view with all patent information prominently displayed.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, FileText, ExternalLink, Users, Calendar, Hash } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { PatentsVariantProps } from '../types';

const STATUS_COLORS: Record<string, string> = {
  Pending: '#f59e0b',
  Granted: '#10b981',
  Published: '#3b82f6',
};

export const PatentsDetailed: React.FC<PatentsVariantProps> = ({
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="group relative"
          style={{
            padding: '16px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: `1px solid ${accentColor}20`,
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
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

          {/* Header with icon and status */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: `${accentColor}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText style={{ width: '20px', height: '20px', color: accentColor }} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Title */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  {editable ? (
                    <InlineEditableText
                      path={`patents.${index}.title`}
                      value={item.title}
                      style={{
                        fontSize: typography.itemTitle.fontSize,
                        fontWeight: 600,
                        color: typography.itemTitle.color,
                        display: 'block',
                      }}
                      placeholder="Patent Title"
                    />
                  ) : (
                    <div style={{
                      fontSize: typography.itemTitle.fontSize,
                      fontWeight: 600,
                      color: typography.itemTitle.color,
                    }}>
                      {item.title}
                    </div>
                  )}
                </div>

                {/* Status badge */}
                <span
                  style={{
                    fontSize: '11px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    backgroundColor: `${STATUS_COLORS[item.status] || STATUS_COLORS.Pending}15`,
                    color: STATUS_COLORS[item.status] || STATUS_COLORS.Pending,
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  {editable ? (
                    <InlineEditableText
                      path={`patents.${index}.status`}
                      value={item.status || 'Pending'}
                      style={{ fontSize: '11px', fontWeight: 600 }}
                      placeholder="Status"
                    />
                  ) : (
                    item.status
                  )}
                </span>
              </div>

              {/* Meta information row */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginTop: '8px',
                fontSize: '12px',
                color: '#6b7280',
              }}>
                {/* Patent Number */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Hash style={{ width: '12px', height: '12px', color: accentColor }} />
                  {editable ? (
                    <InlineEditableText
                      path={`patents.${index}.patentNumber`}
                      value={item.patentNumber || ''}
                      style={{ fontSize: '12px', color: '#6b7280' }}
                      placeholder="Patent Number"
                    />
                  ) : (
                    <span>{item.patentNumber}</span>
                  )}
                </div>

                {/* Date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar style={{ width: '12px', height: '12px', color: accentColor }} />
                  {editable ? (
                    <InlineEditableDate
                      path={`patents.${index}.date`}
                      value={item.date}
                      formatDisplay={formatDate}
                      style={{ fontSize: '12px' }}
                    />
                  ) : (
                    <span>{formatDate ? formatDate(item.date) : item.date}</span>
                  )}
                </div>

                {/* URL link */}
                {!editable && item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: accentColor,
                      textDecoration: 'none',
                    }}
                  >
                    <ExternalLink style={{ width: '12px', height: '12px' }} />
                    <span>View Patent</span>
                  </a>
                )}
              </div>

              {/* Inventors */}
              {(item.inventors?.length || editable) && (
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '6px',
                  marginTop: '10px',
                  fontSize: '12px',
                  color: '#6b7280',
                }}>
                  <Users style={{ width: '12px', height: '12px', color: accentColor, marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 500 }}>Inventors: </span>
                    {editable ? (
                      <InlineEditableText
                        path={`patents.${index}.inventors`}
                        value={Array.isArray(item.inventors) ? item.inventors.join(', ') : (item.inventors || '')}
                        style={{ fontSize: '12px', color: '#6b7280' }}
                        placeholder="Names (comma-separated)"
                      />
                    ) : (
                      Array.isArray(item.inventors) ? item.inventors.join(', ') : item.inventors
                    )}
                  </div>
                </div>
              )}

              {/* Description */}
              {(item.description || editable) && (
                <div style={{
                  fontSize: typography.body.fontSize,
                  color: typography.body.color,
                  marginTop: '12px',
                  lineHeight: 1.6,
                  padding: '10px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '6px',
                }}>
                  {editable ? (
                    <InlineEditableText
                      path={`patents.${index}.description`}
                      value={item.description || ''}
                      multiline
                      placeholder="Describe the patent..."
                      style={{ fontSize: typography.body.fontSize }}
                    />
                  ) : (
                    item.description
                  )}
                </div>
              )}

              {/* Editable URL */}
              {editable && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
                  <ExternalLink style={{ width: '12px', height: '12px', color: accentColor }} />
                  <InlineEditableText
                    path={`patents.${index}.url`}
                    value={item.url || ''}
                    style={{ fontSize: '11px', color: accentColor }}
                    placeholder="Patent URL (optional)"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {editable && onAddPatent && (
        <button
          onClick={onAddPatent}
          className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed hover:bg-gray-50 transition-colors"
          style={{ color: accentColor, borderColor: `${accentColor}40` }}
        >
          <Plus className="h-4 w-4" />
          <span className="text-sm font-medium">Add Patent</span>
        </button>
      )}
    </div>
  );
};

export default PatentsDetailed;
