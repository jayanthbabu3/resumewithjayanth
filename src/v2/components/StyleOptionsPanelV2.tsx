/**
 * Resume Builder V2 - Style Options Panel
 *
 * Premium, production-ready style options with modern UX.
 * Clean design with intuitive controls and visual previews.
 */

import React from 'react';
import { useStyleOptions, type HeaderCase, type FontSizeScale, type DividerStyle, type DateFormat, type BulletStyle } from '@/contexts/StyleOptionsContext';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import {
  Type,
  Minus,
  Eye,
  RotateCcw,
  Calendar,
  List,
  Image,
  FileText,
  Briefcase,
  GraduationCap,
  Lightbulb,
  LayoutGrid,
  Target,
  Trophy,
  Award,
  Star,
  Zap,
  CheckCircle2,
  Heart,
  Globe,
  Code,
  FolderOpen,
  LucideIcon,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { V2ResumeData } from '../types';

// Icon mapping for different section types
const SECTION_ICONS: Record<string, LucideIcon> = {
  strengths: Target,
  strength: Target,
  achievements: Trophy,
  achievement: Trophy,
  awards: Award,
  award: Award,
  highlights: Star,
  highlight: Star,
  competencies: Zap,
  competency: Zap,
  qualifications: CheckCircle2,
  qualification: CheckCircle2,
  interests: Heart,
  interest: Heart,
  hobbies: Heart,
  hobby: Heart,
  languages: Globe,
  language: Globe,
  projects: FolderOpen,
  project: FolderOpen,
  certifications: Award,
  certification: Award,
  skills: Lightbulb,
  skill: Lightbulb,
  technical: Code,
};

const getSectionIcon = (sectionId: string, title: string): LucideIcon => {
  const idLower = sectionId.toLowerCase();
  const titleLower = title.toLowerCase();

  for (const [key, icon] of Object.entries(SECTION_ICONS)) {
    if (idLower.includes(key) || titleLower.includes(key)) {
      return icon;
    }
  }

  return LayoutGrid;
};

interface StyleOptionsPanelV2Props {
  inPopover?: boolean;
  className?: string;
  resumeData?: V2ResumeData;
  enabledSections?: string[];
  onToggleSection?: (sectionId: string) => void;
}

// Collapsible Section Component
const CollapsibleSection: React.FC<{
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, icon: Icon, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 hover:bg-gray-50/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
        <ChevronDown className={cn(
          "w-4 h-4 text-gray-400 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>
      {isOpen && (
        <div className="px-3 pb-3 pt-1">
          {children}
        </div>
      )}
    </div>
  );
};

// Option Button Component for consistent styling
const OptionButton: React.FC<{
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}> = ({ selected, onClick, children, className }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200",
      selected
        ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
        : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50",
      className
    )}
  >
    {children}
  </button>
);

export const StyleOptionsPanelV2: React.FC<StyleOptionsPanelV2Props> = ({
  inPopover = false,
  className,
  resumeData,
  enabledSections = [],
  onToggleSection,
}) => {
  const { styleOptions, updateStyleOption, resetStyleOptions } = useStyleOptions() || {
    styleOptions: {
      headerCase: 'uppercase' as HeaderCase,
      fontSizeScale: 'normal' as FontSizeScale,
      dividerStyle: 'thin' as DividerStyle,
      dateFormat: 'short' as DateFormat,
      bulletStyle: '•' as BulletStyle,
      showPhoto: true,
      showSummary: true,
      showExperience: true,
      showEducation: true,
      showSkills: true,
      showAchievements: true,
      showStrengths: true,
      showSections: true,
    },
    updateStyleOption: () => {},
    resetStyleOptions: () => {},
  };

  const customSections = resumeData?.sections || [];

  return (
    <div className={cn("bg-gray-50/50", className)}>
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h3 className="font-semibold text-gray-900">Style Options</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetStyleOptions}
          className="h-8 px-3 text-sm text-gray-500 hover:text-gray-700"
        >
          <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
          Reset
        </Button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Typography Section */}
        <CollapsibleSection title="Typography" icon={Type}>
          <div className="space-y-4">
            {/* Header Case */}
            <div>
              <Label className="text-xs text-gray-500 mb-2 block">Header Case</Label>
              <div className="grid grid-cols-3 gap-2">
                <OptionButton
                  selected={styleOptions.headerCase === 'uppercase'}
                  onClick={() => updateStyleOption('headerCase', 'uppercase')}
                >
                  ABC
                </OptionButton>
                <OptionButton
                  selected={styleOptions.headerCase === 'capitalize'}
                  onClick={() => updateStyleOption('headerCase', 'capitalize')}
                >
                  Abc
                </OptionButton>
                <OptionButton
                  selected={styleOptions.headerCase === 'lowercase'}
                  onClick={() => updateStyleOption('headerCase', 'lowercase')}
                >
                  abc
                </OptionButton>
              </div>
            </div>

            {/* Font Size */}
            <div>
              <Label className="text-xs text-gray-500 mb-2 block">Font Size</Label>
              <div className="grid grid-cols-3 gap-2">
                <OptionButton
                  selected={styleOptions.fontSizeScale === 'compact'}
                  onClick={() => updateStyleOption('fontSizeScale', 'compact')}
                >
                  <span className="text-xs">Compact</span>
                </OptionButton>
                <OptionButton
                  selected={styleOptions.fontSizeScale === 'normal'}
                  onClick={() => updateStyleOption('fontSizeScale', 'normal')}
                >
                  <span className="text-sm">Normal</span>
                </OptionButton>
                <OptionButton
                  selected={styleOptions.fontSizeScale === 'large'}
                  onClick={() => updateStyleOption('fontSizeScale', 'large')}
                >
                  <span className="text-base">Large</span>
                </OptionButton>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Section Dividers */}
        <CollapsibleSection title="Section Dividers" icon={Minus}>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: 'none', label: 'None', preview: null },
              { value: 'thin', label: 'Thin', preview: <div className="w-full h-px bg-gray-300" /> },
              { value: 'line', label: 'Line', preview: <div className="w-full h-0.5 bg-gray-400" /> },
              { value: 'dotted', label: 'Dotted', preview: <div className="w-full border-b-2 border-dotted border-gray-400" /> },
              { value: 'double', label: 'Double', preview: <div className="w-full border-b-[3px] border-double border-gray-400" /> },
            ].map((style) => (
              <button
                key={style.value}
                onClick={() => updateStyleOption('dividerStyle', style.value as DividerStyle)}
                className={cn(
                  "flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200",
                  styleOptions.dividerStyle === style.value
                    ? "border-blue-500 bg-blue-50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                )}
              >
                <div className="w-full h-4 flex items-center justify-center">
                  {style.preview || <span className="text-xs text-gray-400">—</span>}
                </div>
                <span className={cn(
                  "text-xs font-medium",
                  styleOptions.dividerStyle === style.value ? "text-blue-700" : "text-gray-600"
                )}>
                  {style.label}
                </span>
              </button>
            ))}
          </div>
        </CollapsibleSection>

        {/* Date Format */}
        <CollapsibleSection title="Date Format" icon={Calendar}>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: 'short', label: 'Jan 2024' },
              { value: 'long', label: 'January 2024' },
              { value: 'medium', label: '01/2024' },
            ].map((format) => (
              <OptionButton
                key={format.value}
                selected={styleOptions.dateFormat === format.value}
                onClick={() => updateStyleOption('dateFormat', format.value as DateFormat)}
                className="text-xs"
              >
                {format.label}
              </OptionButton>
            ))}
          </div>
        </CollapsibleSection>

        {/* Bullet Style */}
        <CollapsibleSection title="Bullet Style" icon={List}>
          <div className="grid grid-cols-6 gap-2">
            {[
              { value: '•', label: '•', name: 'Disc' },
              { value: '◦', label: '◦', name: 'Circle' },
              { value: '▪', label: '▪', name: 'Square' },
              { value: '▸', label: '▸', name: 'Arrow' },
              { value: '–', label: '–', name: 'Dash' },
              { value: 'none', label: '—', name: 'None' },
            ].map((bullet) => (
              <button
                key={bullet.value}
                onClick={() => updateStyleOption('bulletStyle', bullet.value as BulletStyle)}
                className={cn(
                  "aspect-square flex items-center justify-center rounded-lg border text-lg transition-all duration-200",
                  styleOptions.bulletStyle === bullet.value
                    ? "border-blue-500 bg-blue-50 text-blue-700 shadow-sm"
                    : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                )}
                title={bullet.name}
              >
                {bullet.label}
              </button>
            ))}
          </div>
        </CollapsibleSection>

        {/* Sections Visibility */}
        <CollapsibleSection title="Show/Hide Sections" icon={Eye} defaultOpen={false}>
          <div className="space-y-1">
            {[
              { key: 'showPhoto', label: 'Photo', icon: Image },
              { key: 'showSummary', label: 'Summary', icon: FileText },
              { key: 'showExperience', label: 'Experience', icon: Briefcase },
              { key: 'showEducation', label: 'Education', icon: GraduationCap },
              { key: 'showSkills', label: 'Skills', icon: Lightbulb },
              { key: 'showAchievements', label: 'Achievements', icon: Trophy },
              { key: 'showStrengths', label: 'Strengths', icon: Target },
            ].map((item) => {
              const Icon = item.icon;
              const isChecked = styleOptions[item.key as keyof typeof styleOptions] as boolean;
              return (
                <div
                  key={item.key}
                  className={cn(
                    "flex items-center justify-between py-2.5 px-3 rounded-lg transition-all duration-200 cursor-pointer",
                    isChecked ? "bg-white border border-gray-100" : "hover:bg-white/80"
                  )}
                  onClick={() => updateStyleOption(item.key as any, !isChecked)}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={cn(
                      "w-4 h-4",
                      isChecked ? "text-blue-500" : "text-gray-400"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      isChecked ? "text-gray-800" : "text-gray-500"
                    )}>
                      {item.label}
                    </span>
                  </div>
                  <Switch
                    checked={isChecked}
                    onCheckedChange={(checked) => updateStyleOption(item.key as any, checked)}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              );
            })}
          </div>

          {/* Custom Sections */}
          {customSections.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Label className="text-xs text-gray-500 mb-2 block">Custom Sections</Label>
              <div className="space-y-1">
                {customSections.map((section) => {
                  const Icon = getSectionIcon(section.id, section.title);
                  const isChecked = enabledSections.includes(section.id);
                  return (
                    <div
                      key={section.id}
                      className={cn(
                        "flex items-center justify-between py-2.5 px-3 rounded-lg transition-all duration-200 cursor-pointer",
                        isChecked ? "bg-white border border-gray-100" : "hover:bg-white/80"
                      )}
                      onClick={() => onToggleSection?.(section.id)}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={cn(
                          "w-4 h-4",
                          isChecked ? "text-blue-500" : "text-gray-400"
                        )} />
                        <span className={cn(
                          "text-sm font-medium",
                          isChecked ? "text-gray-800" : "text-gray-500"
                        )}>
                          {section.title}
                        </span>
                      </div>
                      <Switch
                        checked={isChecked}
                        onCheckedChange={() => onToggleSection?.(section.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default StyleOptionsPanelV2;
