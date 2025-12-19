/**
 * Certifications Standard Variant
 */

import React from 'react';
import { X, Plus, Award, ExternalLink } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { InlineEditableDate } from '@/components/resume/InlineEditableDate';
import type { CertificationsVariantProps } from '../types';

export const CertificationsStandard: React.FC<CertificationsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddCertification,
  onRemoveCertification,
  formatDate,
}) => {
  const { typography, spacing } = config;

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.itemGap }}>
      {items.map((cert, index) => (
        <div key={cert.id || index} className="group relative">
          {editable && onRemoveCertification && (
            <button
              onClick={() => onRemoveCertification(cert.id)}
              className="absolute -right-2 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: `${accentColor}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Award style={{ width: '16px', height: '16px', color: accentColor }} />
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {editable ? (
                  <InlineEditableText
                    path={`certifications.${index}.name`}
                    value={cert.name}
                    style={{ 
                      fontSize: typography.itemTitle.fontSize, 
                      fontWeight: typography.itemTitle.fontWeight,
                      color: typography.itemTitle.color,
                    }}
                    placeholder="Certification Name"
                  />
                ) : (
                  <span style={{ 
                    fontSize: typography.itemTitle.fontSize, 
                    fontWeight: typography.itemTitle.fontWeight,
                    color: typography.itemTitle.color,
                  }}>
                    {cert.name}
                  </span>
                )}
                
                {!editable && cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" style={{ color: accentColor }}>
                    <ExternalLink style={{ width: '12px', height: '12px' }} />
                  </a>
                )}
              </div>
              
              <div style={{ 
                fontSize: typography.body.fontSize, 
                color: accentColor,
                fontWeight: 500,
                marginTop: '2px',
              }}>
                {editable ? (
                  <InlineEditableText
                    path={`certifications.${index}.issuer`}
                    value={cert.issuer}
                    style={{ color: accentColor, fontWeight: 500 }}
                    placeholder="Issuing Organization"
                  />
                ) : (
                  cert.issuer
                )}
              </div>
              
              <div style={{ 
                fontSize: '13px', 
                color: '#6b7280',
                marginTop: '4px',
              }}>
                {editable ? (
                  <InlineEditableDate
                    path={`certifications.${index}.date`}
                    value={cert.date}
                    formatDisplay={formatDate}
                  />
                ) : (
                  formatDate ? formatDate(cert.date) : cert.date
                )}
                {cert.expiryDate && (
                  <span> – Expires: {formatDate ? formatDate(cert.expiryDate) : cert.expiryDate}</span>
                )}
              </div>
              
              {cert.credentialId && (
                <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '2px' }}>
                  Credential ID: {cert.credentialId}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {editable && onAddCertification && (
        <button
          onClick={onAddCertification}
          className="mt-2 flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded border border-dashed hover:bg-gray-50 transition-colors"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="h-3 w-3" />
          Add Certification
        </button>
      )}
    </div>
  );
};

export default CertificationsStandard;
