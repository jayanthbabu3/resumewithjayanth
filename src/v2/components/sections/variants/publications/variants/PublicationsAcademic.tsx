/**
 * Publications Academic Variant
 *
 * Formal citation-style layout for academic publications.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, BookOpen, ExternalLink } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { PublicationsVariantProps } from '../types';

export const PublicationsAcademic: React.FC<PublicationsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddPublication,
  onRemovePublication,
  formatDate,
}) => {
  const { typography, spacing } = config;

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.itemGap }}>
      {items.map((pub, index) => (
        <div
          key={pub.id || index}
          className="group relative"
          style={{
            paddingLeft: '16px',
            borderLeft: `3px solid ${accentColor}`,
          }}
        >
          {editable && onRemovePublication && (
            <button
              onClick={() => onRemovePublication(pub.id)}
              className="absolute -right-2 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          {/* Title */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              {editable ? (
                <InlineEditableText
                  path={`publications.${index}.title`}
                  value={pub.title}
                  style={{
                    fontSize: typography.itemTitle.fontSize,
                    fontWeight: 600,
                    color: typography.itemTitle.color,
                    fontStyle: 'italic',
                  }}
                  placeholder="Publication Title"
                />
              ) : (
                <div style={{
                  fontSize: typography.itemTitle.fontSize,
                  fontWeight: 600,
                  color: typography.itemTitle.color,
                  fontStyle: 'italic',
                }}>
                  {pub.title}
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: accentColor, marginLeft: '6px' }}
                    >
                      <ExternalLink style={{ width: '12px', height: '12px', display: 'inline' }} />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Date */}
            <div style={{
              fontSize: typography.dates.fontSize,
              color: typography.dates.color,
              whiteSpace: 'nowrap',
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

          {/* Authors */}
          {(pub.authors?.length || editable) && (
            <div style={{
              fontSize: typography.body.fontSize,
              color: typography.body.color,
              marginTop: '2px',
            }}>
              {editable ? (
                <InlineEditableText
                  path={`publications.${index}.authors`}
                  value={Array.isArray(pub.authors) ? pub.authors.join(', ') : (pub.authors || '')}
                  placeholder="Authors (comma-separated)"
                />
              ) : (
                Array.isArray(pub.authors) ? pub.authors.join(', ') : pub.authors
              )}
            </div>
          )}

          {/* Publisher/Journal */}
          <div style={{
            fontSize: typography.body.fontSize,
            color: accentColor,
            fontWeight: 500,
            marginTop: '2px',
          }}>
            {editable ? (
              <InlineEditableText
                path={`publications.${index}.publisher`}
                value={pub.publisher}
                style={{ color: accentColor, fontWeight: 500 }}
                placeholder="Publisher / Journal"
              />
            ) : (
              pub.publisher
            )}
          </div>

          {/* Description */}
          {(pub.description || editable) && (
            <div style={{
              fontSize: typography.body.fontSize,
              color: typography.body.color,
              marginTop: '6px',
              lineHeight: typography.body.lineHeight,
            }}>
              {editable ? (
                <InlineEditableText
                  path={`publications.${index}.description`}
                  value={pub.description || ''}
                  multiline
                  placeholder="Description (optional)..."
                />
              ) : (
                pub.description
              )}
            </div>
          )}

          {/* DOI */}
          {(pub.doi || editable) && (
            <div style={{
              fontSize: '11px',
              color: '#6b7280',
              marginTop: '4px',
            }}>
              DOI: {editable ? (
                <InlineEditableText
                  path={`publications.${index}.doi`}
                  value={pub.doi || ''}
                  style={{ fontSize: '11px', color: '#6b7280' }}
                  placeholder="DOI (optional)"
                />
              ) : (
                pub.doi
              )}
            </div>
          )}

          {/* Editable URL */}
          {editable && (
            <div style={{
              fontSize: '11px',
              color: accentColor,
              marginTop: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <ExternalLink style={{ width: '10px', height: '10px' }} />
              <InlineEditableText
                path={`publications.${index}.url`}
                value={pub.url || ''}
                style={{ fontSize: '11px', color: accentColor }}
                placeholder="URL (optional)"
              />
            </div>
          )}
        </div>
      ))}

      {editable && onAddPublication && (
        <button
          onClick={onAddPublication}
          className="mt-2 flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded border border-dashed hover:bg-gray-50 transition-colors w-fit"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="h-3 w-3" />
          Add Publication
        </button>
      )}
    </div>
  );
};

export default PublicationsAcademic;
