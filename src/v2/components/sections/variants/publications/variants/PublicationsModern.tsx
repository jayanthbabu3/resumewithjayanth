/**
 * Publications Modern Variant
 *
 * Clean modern layout with icon and card-like appearance.
 * Uses theme colors for styling.
 */

import React from 'react';
import { X, Plus, BookOpen, ExternalLink } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { PublicationsVariantProps } from '../types';

export const PublicationsModern: React.FC<PublicationsVariantProps> = ({
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
            padding: '14px 16px',
            backgroundColor: `${accentColor}08`,
            borderRadius: '10px',
            border: `1px solid ${accentColor}15`,
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

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            {/* Icon */}
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: accentColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <BookOpen style={{ width: '18px', height: '18px', color: '#fff' }} />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Title & Date Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  {editable ? (
                    <InlineEditableText
                      path={`publications.${index}.title`}
                      value={pub.title}
                      style={{
                        fontSize: typography.itemTitle.fontSize,
                        fontWeight: 600,
                        color: typography.itemTitle.color,
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

                <div style={{
                  fontSize: typography.dates.fontSize,
                  color: typography.dates.color,
                  whiteSpace: 'nowrap',
                  padding: '2px 8px',
                  backgroundColor: `${accentColor}15`,
                  borderRadius: '4px',
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

              {/* Publisher */}
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

              {/* Authors */}
              {(pub.authors?.length || editable) && (
                <div style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  marginTop: '4px',
                }}>
                  {editable ? (
                    <InlineEditableText
                      path={`publications.${index}.authors`}
                      value={Array.isArray(pub.authors) ? pub.authors.join(', ') : (pub.authors || '')}
                      style={{ fontSize: '12px', color: '#6b7280' }}
                      placeholder="Authors (comma-separated)"
                    />
                  ) : (
                    Array.isArray(pub.authors) ? pub.authors.join(', ') : pub.authors
                  )}
                </div>
              )}

              {/* Description */}
              {(pub.description || editable) && (
                <div style={{
                  fontSize: typography.body.fontSize,
                  color: typography.body.color,
                  marginTop: '8px',
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

              {/* DOI & URL for editing */}
              {editable && (
                <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ fontSize: '11px', color: '#6b7280' }}>
                    DOI: <InlineEditableText
                      path={`publications.${index}.doi`}
                      value={pub.doi || ''}
                      style={{ fontSize: '11px', color: '#6b7280' }}
                      placeholder="DOI (optional)"
                    />
                  </div>
                  <div style={{ fontSize: '11px', color: accentColor, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ExternalLink style={{ width: '10px', height: '10px' }} />
                    <InlineEditableText
                      path={`publications.${index}.url`}
                      value={pub.url || ''}
                      style={{ fontSize: '11px', color: accentColor }}
                      placeholder="URL (optional)"
                    />
                  </div>
                </div>
              )}

              {/* DOI for display */}
              {!editable && pub.doi && (
                <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
                  DOI: {pub.doi}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {editable && onAddPublication && (
        <button
          onClick={onAddPublication}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '14px',
            borderRadius: '10px',
            border: `2px dashed ${accentColor}40`,
            backgroundColor: 'transparent',
            color: accentColor,
            fontSize: '12px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
          className="hover:bg-gray-50 transition-colors"
        >
          <Plus style={{ width: '14px', height: '14px' }} />
          Add Publication
        </button>
      )}
    </div>
  );
};

export default PublicationsModern;
