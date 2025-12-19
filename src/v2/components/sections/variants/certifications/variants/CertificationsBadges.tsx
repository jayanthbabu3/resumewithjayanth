/**
 * Certifications Badges Variant
 * 
 * Badge-style layout for certifications.
 */

import React from 'react';
import { X, Plus, Award, CheckCircle } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { CertificationsVariantProps } from '../types';

export const CertificationsBadges: React.FC<CertificationsVariantProps> = ({
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
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {items.map((cert, index) => (
        <div 
          key={cert.id || index}
          className="group relative"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 16px',
            backgroundColor: `${accentColor}08`,
            borderRadius: '8px',
            border: `1px solid ${accentColor}30`,
          }}
        >
          {editable && onRemoveCertification && (
            <button
              onClick={() => onRemoveCertification(cert.id)}
              className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 bg-red-100 hover:bg-red-200 rounded-full z-10"
            >
              <X className="w-3 h-3 text-red-600" />
            </button>
          )}
          
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: accentColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <Award style={{ width: '18px', height: '18px', color: '#fff' }} />
          </div>
          
          <div>
            {editable ? (
              <InlineEditableText
                path={`certifications.${index}.name`}
                value={cert.name}
                style={{ 
                  fontSize: '14px', 
                  fontWeight: 600,
                  color: typography.itemTitle.color,
                }}
                placeholder="Certification"
              />
            ) : (
              <div style={{ 
                fontSize: '14px', 
                fontWeight: 600,
                color: typography.itemTitle.color,
              }}>
                {cert.name}
              </div>
            )}
            
            <div style={{ 
              fontSize: '12px', 
              color: '#6b7280',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <CheckCircle style={{ width: '10px', height: '10px', color: '#22c55e' }} />
              {cert.issuer}
            </div>
          </div>
        </div>
      ))}
      
      {editable && onAddCertification && (
        <button
          onClick={onAddCertification}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '10px 16px',
            borderRadius: '8px',
            border: `2px dashed ${accentColor}40`,
            backgroundColor: `${accentColor}05`,
            color: accentColor,
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
          }}
        >
          <Plus style={{ width: '16px', height: '16px' }} />
          Add
        </button>
      )}
    </div>
  );
};

export default CertificationsBadges;
