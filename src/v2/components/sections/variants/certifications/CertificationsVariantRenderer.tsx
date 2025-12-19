/**
 * Certifications Variant Renderer
 */

import React from 'react';
import type { CertificationsVariantProps, CertificationsVariant } from './types';
import {
  CertificationsStandard,
  CertificationsBadges,
  CertificationsCompact,
} from './variants';

export type { CertificationsVariantProps, CertificationsVariant } from './types';

interface CertificationsVariantRendererProps extends CertificationsVariantProps {
  variant: CertificationsVariant;
}

export const CertificationsVariantRenderer: React.FC<CertificationsVariantRendererProps> = ({
  variant,
  items,
  config,
  accentColor,
  editable = false,
  onAddCertification,
  onRemoveCertification,
  formatDate,
}) => {
  const props: CertificationsVariantProps = {
    items,
    config,
    accentColor,
    editable,
    onAddCertification,
    onRemoveCertification,
    formatDate,
  };

  switch (variant) {
    case 'standard':
    case 'cards':
    case 'timeline':
      return <CertificationsStandard {...props} />;
    case 'badges':
      return <CertificationsBadges {...props} />;
    case 'compact':
    default:
      return <CertificationsCompact {...props} />;
  }
};

export default CertificationsVariantRenderer;
