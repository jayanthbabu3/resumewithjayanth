/**
 * Patents Cards Variant
 *
 * Card-based grid layout for patents.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, FileText, ExternalLink, Users } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { PatentsVariantProps } from '../types';

const STATUS_COLORS: Record<string, string> = {
  Pending: '#f59e0b',
  Granted: '#10b981',
  Published: '#3b82f6',
};

export const PatentsCards: React.FC<PatentsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddPatent,
  onRemovePatent,
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
          {editable && onRemovePatent && (
            <button
              onClick={() => onRemovePatent(item.id)}
              className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          {/* Header with icon and status */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: accentColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText style={{ width: '16px', height: '16px', color: '#fff' }} />
            </div>

            {/* Status badge */}
            <span
              style={{
                fontSize: '10px',
                padding: '3px 8px',
                borderRadius: '6px',
                backgroundColor: `${STATUS_COLORS[item.status] || STATUS_COLORS.Pending}15`,
                color: STATUS_COLORS[item.status] || STATUS_COLORS.Pending,
                fontWeight: 600,
              }}
            >
              {editable ? (
                <InlineEditableText
                  path={`patents.${index}.status`}
                  value={item.status || 'Pending'}
                  style={{ fontSize: '10px', fontWeight: 600 }}
                  placeholder="Status"
                />
              ) : (
                item.status
              )}
            </span>
          </div>

          {/* Title */}
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

          {/* Patent Number */}
          <div style={{
            fontSize: '11px',
            color: accentColor,
            fontWeight: 500,
            marginTop: '4px',
          }}>
            {editable ? (
              <InlineEditableText
                path={`patents.${index}.patentNumber`}
                value={item.patentNumber || ''}
                style={{ fontSize: '11px', color: accentColor, fontWeight: 500 }}
                placeholder="Patent Number"
              />
            ) : (
              item.patentNumber
            )}
          </div>

          {/* Inventors */}
          {(item.inventors?.length || editable) && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              color: '#6b7280',
              marginTop: '6px',
            }}>
              <Users style={{ width: '10px', height: '10px' }} />
              {editable ? (
                <InlineEditableText
                  path={`patents.${index}.inventors`}
                  value={Array.isArray(item.inventors) ? item.inventors.join(', ') : (item.inventors || '')}
                  style={{ fontSize: '11px', color: '#6b7280' }}
                  placeholder="Inventors"
                />
              ) : (
                Array.isArray(item.inventors) ? item.inventors.join(', ') : item.inventors
              )}
            </div>
          )}

          {/* Date */}
          <div style={{
            fontSize: '11px',
            color: typography.dates.color,
            marginTop: '6px',
          }}>
            {editable ? (
              <InlineEditableDate
                path={`patents.${index}.date`}
                value={item.date}
                formatDisplay={formatDate}
                style={{ fontSize: '11px' }}
              />
            ) : (
              formatDate ? formatDate(item.date) : item.date
            )}
          </div>

          {/* Description */}
          {(item.description || editable) && (
            <div style={{
              fontSize: typography.body.fontSize,
              color: typography.body.color,
              lineHeight: 1.5,
              marginTop: '8px',
            }}>
              {editable ? (
                <InlineEditableText
                  path={`patents.${index}.description`}
                  value={item.description || ''}
                  multiline
                  placeholder="Description..."
                  style={{ fontSize: typography.body.fontSize }}
                />
              ) : (
                item.description
              )}
            </div>
          )}

          {/* URL */}
          {editable && (
            <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ExternalLink style={{ width: '10px', height: '10px', color: accentColor }} />
              <InlineEditableText
                path={`patents.${index}.url`}
                value={item.url || ''}
                style={{ fontSize: '10px', color: accentColor }}
                placeholder="URL (optional)"
              />
            </div>
          )}

          {/* Display URL link */}
          {!editable && item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '11px',
                color: accentColor,
                marginTop: '8px',
              }}
            >
              <ExternalLink style={{ width: '10px', height: '10px' }} />
              View
            </a>
          )}
        </div>
      ))}

      {editable && onAddPatent && (
        <button
          onClick={onAddPatent}
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
            minHeight: '100px',
          }}
          className="hover:bg-gray-50 transition-colors"
        >
          <Plus style={{ width: '16px', height: '16px' }} />
          Add Patent
        </button>
      )}
    </div>
  );
};

export default PatentsCards;
