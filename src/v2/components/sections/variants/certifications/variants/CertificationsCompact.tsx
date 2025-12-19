/**
 * Certifications Compact Variant
 */

import React from 'react';
import { X, Plus } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { CertificationsVariantProps } from '../types';

export const CertificationsCompact: React.FC<CertificationsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddCertification,
  onRemoveCertification,
  formatDate,
}) => {
  const { typography } = config;

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((cert, index) => (
        <div 
          key={cert.id || index}
          className="group relative"
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '6px 10px',
            backgroundColor: index % 2 === 0 ? '#f9fafb' : 'transparent',
            borderRadius: '4px',
          }}
        >
          {editable && onRemoveCertification && (
            <button
              onClick={() => onRemoveCertification(cert.id)}
              className="absolute -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
            {editable ? (
              <>
                <InlineEditableText
                  path={`certifications.${index}.name`}
                  value={cert.name}
                  style={{ fontWeight: 600, color: typography.itemTitle.color }}
                  placeholder="Certification"
                />
                <span style={{ color: '#d1d5db' }}>•</span>
                <InlineEditableText
                  path={`certifications.${index}.issuer`}
                  value={cert.issuer}
                  style={{ color: accentColor, fontWeight: 500 }}
                  placeholder="Issuer"
                />
              </>
            ) : (
              <>
                <span style={{ fontWeight: 600, color: typography.itemTitle.color }}>
                  {cert.name}
                </span>
                <span style={{ color: '#d1d5db' }}>•</span>
                <span style={{ color: accentColor, fontWeight: 500 }}>{cert.issuer}</span>
              </>
            )}
          </div>
          
          <div style={{ fontSize: '12px', color: '#6b7280', whiteSpace: 'nowrap' }}>
            {formatDate ? formatDate(cert.date) : cert.date}
          </div>
        </div>
      ))}
      
      {editable && onAddCertification && (
        <button
          onClick={onAddCertification}
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

export default CertificationsCompact;
