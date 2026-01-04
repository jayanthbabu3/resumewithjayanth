/**
 * Publications Compact Variant
 *
 * Space-efficient single-line layout for publications.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, BookOpen, ExternalLink } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { PublicationsVariantProps } from '../types';

export const PublicationsCompact: React.FC<PublicationsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddPublication,
  onRemovePublication,
  formatDate,
}) => {
  const { typography } = config;

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((pub, index) => (
        <div
          key={pub.id || index}
          className="group relative"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 12px',
            backgroundColor: index % 2 === 0 ? `${accentColor}06` : 'transparent',
            borderRadius: '6px',
          }}
        >
          {editable && onRemovePublication && (
            <button
              onClick={() => onRemovePublication(pub.id)}
              className="absolute -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          <BookOpen style={{ width: '14px', height: '14px', color: accentColor, flexShrink: 0 }} />

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {/* Title */}
              {editable ? (
                <InlineEditableText
                  path={`publications.${index}.title`}
                  value={pub.title}
                  style={{
                    fontWeight: 600,
                    color: typography.itemTitle.color,
                    fontSize: typography.body.fontSize,
                  }}
                  placeholder="Title"
                />
              ) : (
                <span style={{
                  fontWeight: 600,
                  color: typography.itemTitle.color,
                  fontSize: typography.body.fontSize,
                }}>
                  {pub.title}
                </span>
              )}

              <span style={{ color: '#d1d5db' }}>•</span>

              {/* Publisher */}
              {editable ? (
                <InlineEditableText
                  path={`publications.${index}.publisher`}
                  value={pub.publisher}
                  style={{ color: accentColor, fontSize: typography.body.fontSize }}
                  placeholder="Publisher"
                />
              ) : (
                <span style={{ color: accentColor, fontSize: typography.body.fontSize }}>
                  {pub.publisher}
                </span>
              )}

              {/* Authors (if present) */}
              {(pub.authors?.length || editable) && (
                <>
                  <span style={{ color: '#d1d5db' }}>•</span>
                  {editable ? (
                    <InlineEditableText
                      path={`publications.${index}.authors`}
                      value={Array.isArray(pub.authors) ? pub.authors.join(', ') : (pub.authors || '')}
                      style={{ color: '#6b7280', fontSize: '12px' }}
                      placeholder="Authors"
                    />
                  ) : (
                    <span style={{ color: '#6b7280', fontSize: '12px' }}>
                      {Array.isArray(pub.authors) ? pub.authors.join(', ') : pub.authors}
                    </span>
                  )}
                </>
              )}

              {/* URL link */}
              {!editable && pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: accentColor }}
                >
                  <ExternalLink style={{ width: '12px', height: '12px' }} />
                </a>
              )}
            </div>

            {/* Editable fields for URL/DOI */}
            {editable && (
              <div style={{ display: 'flex', gap: '12px', marginTop: '4px', flexWrap: 'wrap' }}>
                <div style={{ fontSize: '11px', color: accentColor, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ExternalLink style={{ width: '10px', height: '10px' }} />
                  <InlineEditableText
                    path={`publications.${index}.url`}
                    value={pub.url || ''}
                    style={{ fontSize: '11px', color: accentColor }}
                    placeholder="URL (optional)"
                  />
                </div>
                <div style={{ fontSize: '11px', color: '#6b7280' }}>
                  DOI: <InlineEditableText
                    path={`publications.${index}.doi`}
                    value={pub.doi || ''}
                    style={{ fontSize: '11px', color: '#6b7280' }}
                    placeholder="DOI (optional)"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Date */}
          <div style={{
            fontSize: '12px',
            color: typography.dates.color,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            {editable ? (
              <InlineEditableDate
                path={`publications.${index}.date`}
                value={pub.date}
                formatDisplay={formatDate}
              />
            ) : (
              formatDate ? formatDate(pub.date) : pub.date
            )}
          </div>
        </div>
      ))}

      {editable && onAddPublication && (
        <button
          onClick={onAddPublication}
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

export default PublicationsCompact;
