/**
 * Publications Cards Variant
 *
 * Card-based grid layout for publications.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, BookOpen, ExternalLink } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { PublicationsVariantProps } from '../types';

export const PublicationsCards: React.FC<PublicationsVariantProps> = ({
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
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px',
    }}>
      {items.map((pub, index) => (
        <div
          key={pub.id || index}
          className="group relative"
          style={{
            padding: '16px',
            backgroundColor: `${accentColor}08`,
            borderRadius: '12px',
            border: `1px solid ${accentColor}20`,
          }}
        >
          {editable && onRemovePublication && (
            <button
              onClick={() => onRemovePublication(pub.id)}
              className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          {/* Header with icon */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: accentColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <BookOpen style={{ width: '16px', height: '16px', color: '#fff' }} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Title */}
              {editable ? (
                <InlineEditableText
                  path={`publications.${index}.title`}
                  value={pub.title}
                  style={{
                    fontSize: typography.itemTitle.fontSize,
                    fontWeight: 600,
                    color: typography.itemTitle.color,
                    display: 'block',
                  }}
                  placeholder="Publication Title"
                />
              ) : (
                <div style={{
                  fontSize: typography.itemTitle.fontSize,
                  fontWeight: 600,
                  color: typography.itemTitle.color,
                }}>
                  {pub.title}
                </div>
              )}

              {/* Publisher */}
              <div style={{
                fontSize: '12px',
                color: accentColor,
                fontWeight: 500,
                marginTop: '2px',
              }}>
                {editable ? (
                  <InlineEditableText
                    path={`publications.${index}.publisher`}
                    value={pub.publisher}
                    style={{ fontSize: '12px', color: accentColor, fontWeight: 500 }}
                    placeholder="Publisher"
                  />
                ) : (
                  pub.publisher
                )}
              </div>
            </div>
          </div>

          {/* Authors */}
          {(pub.authors?.length || editable) && (
            <div style={{
              fontSize: '11px',
              color: '#6b7280',
              marginBottom: '6px',
            }}>
              {editable ? (
                <InlineEditableText
                  path={`publications.${index}.authors`}
                  value={Array.isArray(pub.authors) ? pub.authors.join(', ') : (pub.authors || '')}
                  style={{ fontSize: '11px', color: '#6b7280' }}
                  placeholder="Authors (comma-separated)"
                />
              ) : (
                Array.isArray(pub.authors) ? pub.authors.join(', ') : pub.authors
              )}
            </div>
          )}

          {/* Date */}
          <div style={{
            fontSize: '11px',
            color: typography.dates.color,
            marginBottom: '8px',
          }}>
            {editable ? (
              <InlineEditableDate
                path={`publications.${index}.date`}
                value={pub.date}
                formatDisplay={formatDate}
                style={{ fontSize: '11px' }}
              />
            ) : (
              formatDate ? formatDate(pub.date) : pub.date
            )}
          </div>

          {/* Description */}
          {(pub.description || editable) && (
            <div style={{
              fontSize: typography.body.fontSize,
              color: typography.body.color,
              lineHeight: 1.5,
            }}>
              {editable ? (
                <InlineEditableText
                  path={`publications.${index}.description`}
                  value={pub.description || ''}
                  multiline
                  placeholder="Description..."
                  style={{ fontSize: typography.body.fontSize }}
                />
              ) : (
                pub.description
              )}
            </div>
          )}

          {/* URL & DOI */}
          {editable && (
            <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ fontSize: '10px', color: accentColor, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <ExternalLink style={{ width: '10px', height: '10px' }} />
                <InlineEditableText
                  path={`publications.${index}.url`}
                  value={pub.url || ''}
                  style={{ fontSize: '10px', color: accentColor }}
                  placeholder="URL (optional)"
                />
              </div>
              <div style={{ fontSize: '10px', color: '#6b7280' }}>
                DOI: <InlineEditableText
                  path={`publications.${index}.doi`}
                  value={pub.doi || ''}
                  style={{ fontSize: '10px', color: '#6b7280' }}
                  placeholder="optional"
                />
              </div>
            </div>
          )}

          {/* Display URL link */}
          {!editable && pub.url && (
            <a
              href={pub.url}
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

      {editable && onAddPublication && (
        <button
          onClick={onAddPublication}
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
          Add Publication
        </button>
      )}
    </div>
  );
};

export default PublicationsCards;
