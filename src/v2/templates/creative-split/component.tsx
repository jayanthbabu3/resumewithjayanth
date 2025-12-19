/**
 * Creative Split Template Component
 * 
 * Bold two-column layout for creative professionals.
 * Left sidebar with skills, languages, etc. Main content with experience, education.
 */

import React from 'react';
import type { TemplateComponentProps } from '../types';
import {
  BaseTemplateProvider,
  useBaseTemplate,
  useOrderedSections,
  TemplateSectionRenderer,
  HeaderSection,
} from '../BaseTemplate';

// ============================================================================
// TEMPLATE CONTENT
// ============================================================================

const CreativeSplitContent: React.FC<Omit<TemplateComponentProps, 'config'>> = (props) => {
  const { config, resumeData, editable } = useBaseTemplate();
  const { spacing, colors, fontFamily, layout } = config;
  
  const sections = useOrderedSections();

  // Separate sections by column
  const sidebarSections = sections.filter(s => s.column === 'sidebar');
  const mainSections = sections.filter(s => s.column !== 'sidebar' && s.type !== 'header');

  // Container styles
  const containerStyle: React.CSSProperties = {
    fontFamily: fontFamily.primary,
    fontSize: config.typography.body.fontSize,
    lineHeight: config.typography.body.lineHeight,
    color: config.typography.body.color,
    backgroundColor: colors.background.page,
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
  };

  // Two-column body layout
  const bodyStyle: React.CSSProperties = {
    display: 'flex',
    minHeight: '100%',
  };

  // Sidebar styles - WHITE background, proper padding
  const sidebarStyle: React.CSSProperties = {
    width: layout.sidebarWidth || '40%',
    backgroundColor: colors.background.page,
    padding: '20px 16px 24px 28px', // top right bottom LEFT (28px left padding)
    boxSizing: 'border-box',
  };

  // Main content styles - proper padding for right column
  const mainStyle: React.CSSProperties = {
    flex: 1,
    padding: '20px 28px 24px 16px', // top right bottom left
    backgroundColor: colors.background.page,
    boxSizing: 'border-box',
  };

  // Render section with props
  const renderSection = (section: typeof sections[0]) => (
    <TemplateSectionRenderer
      key={section.id}
      section={section}
      onAddBulletPoint={props.onAddBulletPoint}
      onRemoveBulletPoint={props.onRemoveBulletPoint}
      onAddExperience={props.onAddExperience}
      onRemoveExperience={props.onRemoveExperience}
      onAddEducation={props.onAddEducation}
      onRemoveEducation={props.onRemoveEducation}
      onAddLanguage={props.onAddLanguage}
      onRemoveLanguage={props.onRemoveLanguage}
      onUpdateLanguage={props.onUpdateLanguage}
      onAddCustomSectionItem={props.onAddCustomSectionItem}
      onRemoveCustomSectionItem={props.onRemoveCustomSectionItem}
    />
  );

  return (
    <div style={containerStyle}>
      {/* Header - full bleed banner */}
      <HeaderSection
        resumeData={resumeData}
        config={config}
        editable={editable}
      />

      {/* Two-column body */}
      <div style={bodyStyle}>
        {/* Sidebar */}
        {sidebarSections.length > 0 && (
          <div style={sidebarStyle}>
            {sidebarSections.map(renderSection)}
          </div>
        )}

        {/* Main content */}
        <div style={mainStyle}>
          {mainSections.map(renderSection)}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const CreativeSplitTemplate: React.FC<TemplateComponentProps> = (props) => {
  return (
    <BaseTemplateProvider {...props}>
      <CreativeSplitContent {...props} />
    </BaseTemplateProvider>
  );
};

export default CreativeSplitTemplate;
