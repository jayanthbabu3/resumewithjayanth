/**
 * Patents Compact Variant
 *
 * Space-efficient layout for patents.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, ExternalLink } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { PatentsVariantProps } from '../types';

const STATUS_COLORS: Record<string, string> = {
  Pending: '#f59e0b',
  Granted: '#10b981',
  Published: '#3b82f6',
};

export const PatentsCompact: React.FC<PatentsVariantProps> = ({
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item, index) => (
        <div
          key={item.id || index}
          className="group relative"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 12px',
            backgroundColor: index % 2 === 0 ? `${accentColor}06` : 'transparent',
            borderRadius: '6px',
          }}
        >
          {editable && onRemovePatent && (
            <button
              onClick={() => onRemovePatent(item.id)}
              className="absolute -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          {/* Status dot */}
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: STATUS_COLORS[item.status] || STATUS_COLORS.Pending,
              flexShrink: 0,
            }}
          />

          {/* Title and Patent Number */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {editable ? (
              <InlineEditableText
                path={`patents.${index}.title`}
                value={item.title}
                style={{
                  fontWeight: 600,
                  color: typography.itemTitle.color,
                  fontSize: typography.body.fontSize,
                }}
                placeholder="Patent Title"
              />
            ) : (
              <span style={{
                fontWeight: 600,
                color: typography.itemTitle.color,
                fontSize: typography.body.fontSize,
              }}>
                {item.title}
              </span>
            )}

            <span style={{ color: '#d1d5db' }}>|</span>

            {editable ? (
              <InlineEditableText
                path={`patents.${index}.patentNumber`}
                value={item.patentNumber || ''}
                style={{ color: '#6b7280', fontSize: '12px' }}
                placeholder="Patent #"
              />
            ) : (
              <span style={{ color: '#6b7280', fontSize: '12px' }}>
                {item.patentNumber}
              </span>
            )}

            {/* Status badge */}
            <span
              style={{
                fontSize: '10px',
                padding: '1px 6px',
                borderRadius: '4px',
                backgroundColor: `${STATUS_COLORS[item.status] || STATUS_COLORS.Pending}15`,
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

            {!editable && item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: accentColor, flexShrink: 0 }}
              >
                <ExternalLink style={{ width: '12px', height: '12px' }} />
              </a>
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
        </div>
      ))}

      {editable && onAddPatent && (
        <button
          onClick={onAddPatent}
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

export default PatentsCompact;
