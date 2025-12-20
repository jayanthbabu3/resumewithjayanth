/**
 * Terminal Theme Template Component
 *
 * Dark, terminal-inspired layout with neon accents and monospaced typography.
 */

import React from 'react';
import { Mail, Phone, Linkedin, Globe, MapPin } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { TemplateComponentProps } from '../types';
import {
  BaseTemplateProvider,
  useBaseTemplate,
  useOrderedSections,
  TemplateSectionRenderer,
} from '../BaseTemplate';

const WindowControls: React.FC = () => {
  const colors = ['#ef4444', '#fbbf24', '#22c55e'];
  return (
    <div style={{ display: 'flex', gap: '6px' }}>
      {colors.map(color => (
        <div key={color} style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: color }} />
      ))}
    </div>
  );
};

const ContactRow: React.FC = () => {
  const { resumeData, config, editable } = useBaseTemplate();
  const { personalInfo } = resumeData;
  const accent = config.colors.primary;

  const ContactItem: React.FC<{
    icon: React.ElementType;
    value?: string;
    path: string;
    href?: (value: string) => string;
  }> = ({ icon: Icon, value, path, href }) => {
    if (!editable && !value) return null;

    const displayValue = value || 'Click to edit';
    const content = (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: config.typography.contact.fontSize,
          color: config.typography.contact.color,
          backgroundColor: '#111827',
          padding: '6px 10px',
          borderRadius: '999px',
          border: `1px solid ${config.colors.border}`,
        }}
      >
        <Icon style={{ width: 14, height: 14, color: accent }} />
        {editable ? <InlineEditableText path={path} value={displayValue} /> : <span>{displayValue}</span>}
      </span>
    );

    if (!editable && href && value) {
      return (
        <a href={href(value)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          {content}
        </a>
      );
    }

    return content;
  };

  return (
    <div style={{ display: 'flex', gap: config.spacing.contactGap, flexWrap: 'wrap' }}>
      <ContactItem icon={Mail} value={personalInfo.email} path="personalInfo.email" />
      <ContactItem icon={Phone} value={personalInfo.phone} path="personalInfo.phone" />
      <ContactItem
        icon={Linkedin}
        value={personalInfo.linkedin}
        path="personalInfo.linkedin"
        href={val => (val.startsWith('http') ? val : `https://${val}`)}
      />
      <ContactItem
        icon={Globe}
        value={personalInfo.portfolio}
        path="personalInfo.portfolio"
        href={val => (val.startsWith('http') ? val : `https://${val}`)}
      />
    </div>
  );
};

const TerminalHeader: React.FC = () => {
  const { resumeData, config, editable } = useBaseTemplate();
  const { personalInfo } = resumeData;

  return (
    <div
      style={{
        backgroundColor: config.colors.background.section,
        border: `1px solid ${config.colors.border}`,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 16px',
          borderBottom: `1px solid ${config.colors.border}`,
          backgroundColor: '#0d1628',
        }}
      >
        <WindowControls />
        {(personalInfo.location || editable) && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: config.typography.small.color }}>
            <MapPin style={{ width: 14, height: 14, color: config.colors.primary }} />
            <InlineEditableText
              path="personalInfo.location"
              value={personalInfo.location || 'Location'}
              style={{ fontSize: config.typography.small.fontSize, color: config.typography.small.color }}
            />
          </div>
        )}
      </div>

      <div style={{ padding: '18px 20px 14px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
          <InlineEditableText
            path="personalInfo.fullName"
            value={personalInfo.fullName || 'Your Name'}
            as="h1"
            style={{
              margin: 0,
              fontSize: config.typography.name.fontSize,
              fontWeight: config.typography.name.fontWeight,
              color: config.typography.name.color,
              letterSpacing: config.typography.name.letterSpacing,
            }}
          />
          <InlineEditableText
            path="personalInfo.title"
            value={personalInfo.title || 'Your title'}
            as="p"
            style={{
              margin: 0,
              fontSize: config.typography.title.fontSize,
              fontWeight: config.typography.title.fontWeight,
              color: config.typography.title.color,
              letterSpacing: config.typography.title.letterSpacing,
              textTransform: config.typography.title.textTransform,
            }}
          />
        </div>

        <div style={{ marginTop: '12px' }}>
          <ContactRow />
        </div>
      </div>

      <div
        style={{
          height: '6px',
          background: `linear-gradient(90deg, ${config.colors.primary}, ${config.colors.secondary || config.colors.primary})`,
        }}
      />
    </div>
  );
};

const TerminalThemeContent: React.FC<Omit<TemplateComponentProps, 'config'>> = props => {
  const { config } = useBaseTemplate();
  const sections = useOrderedSections();

  const outerStyle: React.CSSProperties = {
    background: 'radial-gradient(circle at 20% 20%, rgba(78, 228, 128, 0.06), transparent 35%), #020617',
    padding: '18px 0',
    display: 'flex',
    justifyContent: 'center',
  };

  const pageStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '880px',
    backgroundColor: config.colors.background.page,
    borderRadius: '16px',
    padding: `${config.spacing.pagePadding.top} ${config.spacing.pagePadding.right} ${config.spacing.pagePadding.bottom} ${config.spacing.pagePadding.left}`,
    boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
    border: `1px solid ${config.colors.border}`,
    color: config.typography.body.color,
    fontFamily: config.fontFamily?.primary,
  };

  const sectionsContainerStyle: React.CSSProperties = {
    marginTop: config.spacing.sectionGap,
    display: 'flex',
    flexDirection: 'column',
    gap: config.spacing.sectionGap,
  };

  return (
    <div style={outerStyle}>
      <div style={pageStyle}>
        <TerminalHeader />

        <div style={sectionsContainerStyle}>
          {sections.map(section => (
            <TemplateSectionRenderer
              key={section.id}
              section={section}
              onAddBulletPoint={props.onAddBulletPoint}
              onRemoveBulletPoint={props.onRemoveBulletPoint}
              onAddExperience={props.onAddExperience}
              onRemoveExperience={props.onRemoveExperience}
              onAddEducation={props.onAddEducation}
              onRemoveEducation={props.onRemoveEducation}
              onAddProject={props.onAddProject}
              onRemoveProject={props.onRemoveProject}
              onAddLanguage={props.onAddLanguage}
              onRemoveLanguage={props.onRemoveLanguage}
              onUpdateLanguage={props.onUpdateLanguage}
              onAddCustomSectionItem={props.onAddCustomSectionItem}
              onRemoveCustomSectionItem={props.onRemoveCustomSectionItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const TerminalThemeTemplate: React.FC<TemplateComponentProps> = props => {
  return (
    <BaseTemplateProvider {...props}>
      <TerminalThemeContent {...props} />
    </BaseTemplateProvider>
  );
};

export default TerminalThemeTemplate;
