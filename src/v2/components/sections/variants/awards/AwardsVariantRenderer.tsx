/**
 * Awards Variant Renderer
 */

import React from 'react';
import type { AwardsVariantProps, AwardsVariant } from './types';
import {
  AwardsStandard,
  AwardsTrophies,
  AwardsCompact,
} from './variants';

export type { AwardsVariantProps, AwardsVariant } from './types';

interface AwardsVariantRendererProps extends AwardsVariantProps {
  variant: AwardsVariant;
}

export const AwardsVariantRenderer: React.FC<AwardsVariantRendererProps> = ({
  variant,
  items,
  config,
  accentColor,
  editable = false,
  onAddAward,
  onRemoveAward,
  formatDate,
}) => {
  const props: AwardsVariantProps = {
    items,
    config,
    accentColor,
    editable,
    onAddAward,
    onRemoveAward,
    formatDate,
  };

  switch (variant) {
    case 'standard':
    case 'cards':
    case 'timeline':
      return <AwardsStandard {...props} />;
    case 'trophies':
      return <AwardsTrophies {...props} />;
    case 'compact':
    default:
      return <AwardsCompact {...props} />;
  }
};

export default AwardsVariantRenderer;
