/**
 * Skills Bars Enhanced Variant
 * 
 * Progress bars with proficiency levels and inline editing.
 */

import React from 'react';
import { X, Plus } from 'lucide-react';
import { InlineEditableText } from '@/components/resume/InlineEditableText';
import type { SkillsVariantProps } from '../types';

export const SkillsBarsEnhanced: React.FC<SkillsVariantProps> = ({
  items,
  config,
  accentColor,
  editable = false,
  onAddSkill,
  onRemoveSkill,
  onUpdateSkill,
}) => {
  const { typography } = config;

  if (!items.length && !editable) return null;

  const handleLevelChange = (skillId: string, newLevel: number) => {
    if (onUpdateSkill) {
      onUpdateSkill(skillId, 'level', newLevel);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {items.map((skill, index) => {
        const level = skill.level || 3;
        const percentage = (level / 5) * 100;
        
        return (
          <div key={skill.id || index} className="group relative">
            {editable && onRemoveSkill && (
              <button
                onClick={() => onRemoveSkill(skill.id)}
                className="absolute -right-2 -top-1 opacity-0 group-hover:opacity-100 transition-opacity p-0.5 bg-red-100 hover:bg-red-200 rounded-full z-10"
              >
                <X className="w-3 h-3 text-red-600" />
              </button>
            )}
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
              <div style={{ flex: 1, minWidth: '100px' }}>
                {editable ? (
                  <InlineEditableText
                    path={`skills.${index}.name`}
                    value={skill.name}
                    style={{ 
                      fontSize: typography.body.fontSize,
                      color: typography.body.color,
                      fontWeight: 500,
                    }}
                    placeholder="Skill name"
                  />
                ) : (
                  <span style={{ 
                    fontSize: typography.body.fontSize,
                    color: typography.body.color,
                    fontWeight: 500,
                  }}>
                    {skill.name}
                  </span>
                )}
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, maxWidth: '200px' }}>
                <div
                  style={{
                    flex: 1,
                    height: '8px',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    cursor: editable ? 'pointer' : 'default',
                  }}
                  onClick={(e) => {
                    if (editable && onUpdateSkill) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const newLevel = Math.max(1, Math.min(5, Math.ceil((x / rect.width) * 5)));
                      handleLevelChange(skill.id, newLevel);
                    }
                  }}
                >
                  <div
                    style={{
                      width: `${percentage}%`,
                      height: '100%',
                      backgroundColor: accentColor,
                      borderRadius: '4px',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#9ca3af', minWidth: '24px' }}>
                  {level}/5
                </span>
              </div>
            </div>
          </div>
        );
      })}
      
      {editable && onAddSkill && (
        <button
          onClick={onAddSkill}
          className="mt-2 flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded border border-dashed hover:bg-gray-50 transition-colors w-fit"
          style={{ color: accentColor, borderColor: accentColor }}
        >
          <Plus className="h-3 w-3" />
          Add Skill
        </button>
      )}
    </div>
  );
};

export default SkillsBarsEnhanced;
