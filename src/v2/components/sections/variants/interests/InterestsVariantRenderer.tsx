/**
 * Interests Variant Renderer
 */

import React from 'react';
import type { InterestsVariantProps, InterestsVariant } from './types';
import {
  InterestsStandard,
  InterestsPills,
} from './variants';

export type { InterestsVariantProps, InterestsVariant } from './types';

interface InterestsVariantRendererProps extends InterestsVariantProps {
  variant: InterestsVariant;
}

export const InterestsVariantRenderer: React.FC<InterestsVariantRendererProps> = ({
  variant,
  items,
  config,
  accentColor,
  editable = false,
  onAddInterest,
  onRemoveInterest,
}) => {
  const props: InterestsVariantProps = {
    items,
    config,
    accentColor,
    editable,
    onAddInterest,
    onRemoveInterest,
  };

  switch (variant) {
    case 'standard':
    case 'detailed':
    case 'list':
      return <InterestsStandard {...props} />;
    case 'pills':
    default:
      return <InterestsPills {...props} />;
  }
};

export default InterestsVariantRenderer;
