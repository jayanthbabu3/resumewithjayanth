/**
 * Languages Standard Variant
 *
 * Shows languages with proficiency levels and progress bars.
 * Supports inline editing for language name and proficiency level.
 */

import React, { useState, useRef, useEffect } from 'react';
import { X, Plus, ChevronDown } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import { useInlineEdit } from '@/contexts/InlineEditContext';
import type { LanguagesVariantProps } from '../types';

const proficiencyOptions: { key: string; level: number; label: string }[] = [
  { key: 'Native', level: 100, label: 'Native speaker' },
  { key: 'Fluent', level: 95, label: 'Fluent' },
  { key: 'Professional', level: 85, label: 'Professional' },
  { key: 'Advanced', level: 75, label: 'Advanced' },
  { key: 'Intermediate', level: 55, label: 'Intermediate' },
  { key: 'Basic', level: 35, label: 'Basic' },
  { key: 'Elementary', level: 20, label: 'Elementary' },
];

const proficiencyLevels: Record<string, { level: number; label: string }> = {
  'Native': { level: 100, label: 'Native speaker' },
  'Fluent': { level: 95, label: 'Fluent' },
  'Professional': { level: 85, label: 'Professional' },
  'Advanced': { level: 75, label: 'Advanced' },
  'Intermediate': { level: 55, label: 'Intermediate' },
  'Basic': { level: 35, label: 'Basic' },
  'Elementary': { level: 20, label: 'Elementary' },
};

const ceferLevels: Record<string, string> = {
  'Native': 'C2',
  'Fluent': 'C2',
  'Professional': 'C1',
  'Advanced': 'B2',
  'Intermediate': 'B1',
  'Basic': 'A2',
  'Elementary': 'A1',
};

export const LanguagesStandard: React.FC<LanguagesVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddLanguage,
  onRemoveLanguage,
}) => {
  const { typography } = config;
  const inlineEdit = useInlineEdit();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProficiencyChange = (index: number, newProficiency: string) => {
    if (inlineEdit) {
      inlineEdit.updateField(`languages.${index}.proficiency`, newProficiency);
    }
    setOpenDropdown(null);
  };

  if (!items.length && !editable) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((lang, index) => {
        const profInfo = proficiencyLevels[lang.proficiency] || { level: 50, label: lang.proficiency };
        const cefer = ceferLevels[lang.proficiency] || '';
        
        return (
          <div key={lang.id || index} className="group relative">
            {editable && onRemoveLanguage && (
              <button
                onClick={() => onRemoveLanguage(lang.id)}
                className="absolute -right-2 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-red-100 hover:bg-red-200 rounded-full z-10"
              >
                <X className="w-3 h-3 text-red-600" />
              </button>
            )}
            
            {/* Native speaker - no bar */}
            {lang.proficiency === 'Native' ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {editable ? (
                    <InlineEditableText
                      path={`languages.${index}.language`}
                      value={lang.language}
                      style={{ fontWeight: 600, color: typography.itemTitle.color }}
                      placeholder="Language"
                    />
                  ) : (
                    <span style={{ fontWeight: 600, color: typography.itemTitle.color }}>
                      {lang.language}:
                    </span>
                  )}
                  <span style={{ color: typography.body.color }}>Native speaker</span>
                </div>
                {/* Proficiency selector for Native */}
                {editable && (
                  <div className="relative" ref={openDropdown === index ? dropdownRef : null}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                      className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-gray-100 transition-colors"
                      style={{ fontSize: '11px', color: '#6b7280' }}
                    >
                      Change
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {openDropdown === index && (
                      <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-20 py-1 min-w-[140px]">
                        {proficiencyOptions.map((level) => (
                          <button
                            key={level.key}
                            onClick={() => handleProficiencyChange(index, level.key)}
                            className={`w-full text-left px-3 py-1.5 text-xs hover:bg-gray-50 transition-colors ${
                              lang.proficiency === level.key ? 'bg-gray-100 font-medium' : ''
                            }`}
                            style={{ color: '#374151' }}
                          >
                            {level.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    {editable ? (
                      <>
                        <InlineEditableText
                          path={`languages.${index}.language`}
                          value={lang.language}
                          style={{ fontWeight: 500, color: typography.itemTitle.color }}
                          placeholder="Language"
                        />
                        {lang.certification && (
                          <>
                            <span style={{ color: typography.body.color }}>•</span>
                            <InlineEditableText
                              path={`languages.${index}.certification`}
                              value={lang.certification}
                              style={{ fontSize: '12px', color: typography.body.color }}
                              placeholder="Certification"
                            />
                          </>
                        )}
                      </>
                    ) : (
                      <span style={{ fontWeight: 500, color: typography.itemTitle.color }}>
                        {lang.language}
                        {lang.certification && (
                          <span style={{ fontWeight: 400, color: typography.body.color }}> • {lang.certification}</span>
                        )}
                        :
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {cefer && <span style={{ fontSize: '13px', color: '#6b7280' }}>{cefer}</span>}
                    {/* Proficiency selector */}
                    {editable && (
                      <div className="relative" ref={openDropdown === index ? dropdownRef : null}>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                          className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-gray-100 transition-colors"
                          style={{ fontSize: '11px', color: '#6b7280' }}
                        >
                          {profInfo.label}
                          <ChevronDown className="w-3 h-3" />
                        </button>
                        {openDropdown === index && (
                          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-20 py-1 min-w-[140px]">
                            {proficiencyOptions.map((level) => (
                              <button
                                key={level.key}
                                onClick={() => handleProficiencyChange(index, level.key)}
                                className={`w-full text-left px-3 py-1.5 text-xs hover:bg-gray-50 transition-colors ${
                                  lang.proficiency === level.key ? 'bg-gray-100 font-medium' : ''
                                }`}
                                style={{ color: '#374151' }}
                              >
                                {level.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    flex: 1,
                    height: '6px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '3px',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${profInfo.level}%`,
                      height: '100%',
                      backgroundColor: accentColor,
                      borderRadius: '3px',
                      transition: 'width 0.3s ease',
                    }} />
                  </div>
                  {!editable && (
                    <span style={{ fontSize: '12px', color: '#9ca3af', minWidth: '100px' }}>
                      {profInfo.label}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
      
      {editable && onAddLanguage && (
        <button
          onClick={onAddLanguage}
          className="mt-2 flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded border border-dashed hover:bg-gray-50 transition-colors w-fit"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="h-3 w-3" />
          Add Language
        </button>
      )}
    </div>
  );
};

export default LanguagesStandard;
