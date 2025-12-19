/**
 * Languages Variant Renderer
 */

import React from 'react';
import type { LanguagesVariantProps, LanguagesVariant } from './types';
import {
  LanguagesStandard,
  LanguagesCompact,
} from './variants';

export type { LanguagesVariantProps, LanguagesVariant } from './types';

interface LanguagesVariantRendererProps extends LanguagesVariantProps {
  variant: LanguagesVariant;
}

export const LanguagesVariantRenderer: React.FC<LanguagesVariantRendererProps> = ({
  variant,
  items,
  config,
  accentColor,
  editable = false,
  onAddLanguage,
  onRemoveLanguage,
}) => {
  const props: LanguagesVariantProps = {
    items,
    config,
    accentColor,
    editable,
    onAddLanguage,
    onRemoveLanguage,
  };

  switch (variant) {
    case 'standard':
    case 'bars':
    case 'grid':
      return <LanguagesStandard {...props} />;
    case 'compact':
    case 'inline':
    default:
      return <LanguagesCompact {...props} />;
  }
};

export default LanguagesVariantRenderer;
