import { useState } from 'react';
import type { ResumeSection } from '@/types/resume';
import { useInlineEdit } from '@/contexts/InlineEditContext';
import { InlineEditableText } from './InlineEditableText';
import { Button } from '@/components/ui/button';
import { GripVertical, Trash2, Plus } from 'lucide-react';

interface ScratchBuilderSectionProps {
  section: ResumeSection;
  sectionIndex: number;
  onDelete: (id: string) => void;
  dragHandleProps?: any;
  themeColor?: string;
}

export function ScratchBuilderSection({
  section,
  sectionIndex,
  onDelete,
  dragHandleProps,
  themeColor = '#7c3aed',
}: ScratchBuilderSectionProps) {
  const { updateField, addArrayItem, removeArrayItem } = useInlineEdit();
  const basePath = `dynamicSections[${sectionIndex}]`;

  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const renderSection = () => {
    const data = section.data;

    switch (data.type) {
      case 'summary':
        return (
          <InlineEditableText
            path={`${basePath}.data.content`}
            value={data.content}
            multiline
            placeholder="Write your professional summary..."
            className="block text-sm leading-relaxed"
          />
        );

      case 'experience':
        return (
          <div className="space-y-4">
            {data.items?.map((exp, idx) => (
              <div key={exp.id} className="border-l-2 pl-4" style={{ borderColor: themeColor }}>
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].position`}
                  value={exp.position}
                  className="font-semibold text-lg block mb-1"
                  placeholder="Position Title"
                />
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].company`}
                  value={exp.company}
                  className="block mb-2"
                  placeholder="Company Name"
                  style={{ color: themeColor }}
                />
                <div className="text-sm text-muted-foreground mb-2">
                  <InlineEditableText
                    path={`${basePath}.data.items[${idx}].startDate`}
                    value={formatDate(exp.startDate)}
                    placeholder="Start Date"
                  />
                  {' - '}
                  {exp.current ? (
                    'Present'
                  ) : (
                    <InlineEditableText
                      path={`${basePath}.data.items[${idx}].endDate`}
                      value={formatDate(exp.endDate)}
                      placeholder="End Date"
                    />
                  )}
                </div>
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].description`}
                  value={exp.description}
                  multiline
                  placeholder="Job description..."
                  className="text-sm whitespace-pre-line"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArrayItem(`${basePath}.data.items`, idx)}
                  className="mt-2 text-destructive"
                >
                  <Trash2 className="h-3 w-3 mr-1" />
                  Remove
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                addArrayItem(`${basePath}.data.items`, {
                  id: Date.now().toString(),
                  company: '',
                  position: '',
                  startDate: '',
                  endDate: '',
                  current: false,
                  description: '',
                })
              }
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Experience
            </Button>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-4">
            {data.items?.map((edu, idx) => (
              <div key={edu.id} className="border-l-2 pl-4" style={{ borderColor: themeColor }}>
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].degree`}
                  value={edu.degree}
                  className="font-semibold text-lg block mb-1"
                  placeholder="Degree"
                />
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].school`}
                  value={edu.school}
                  className="block mb-1"
                  placeholder="School Name"
                  style={{ color: themeColor }}
                />
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].field`}
                  value={edu.field}
                  className="text-sm block mb-2"
                  placeholder="Field of Study"
                />
                <div className="text-sm text-muted-foreground">
                  <InlineEditableText
                    path={`${basePath}.data.items[${idx}].startDate`}
                    value={formatDate(edu.startDate)}
                    placeholder="Start Date"
                  />
                  {' - '}
                  <InlineEditableText
                    path={`${basePath}.data.items[${idx}].endDate`}
                    value={formatDate(edu.endDate)}
                    placeholder="End Date"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArrayItem(`${basePath}.data.items`, idx)}
                  className="mt-2 text-destructive"
                >
                  <Trash2 className="h-3 w-3 mr-1" />
                  Remove
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                addArrayItem(`${basePath}.data.items`, {
                  id: Date.now().toString(),
                  school: '',
                  degree: '',
                  field: '',
                  startDate: '',
                  endDate: '',
                })
              }
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Education
            </Button>
          </div>
        );

      case 'skills':
        return (
          <div className="flex flex-wrap gap-2">
            {data.items?.map((skill, idx) => (
              <div
                key={skill.id}
                className="px-3 py-1 rounded-full border flex items-center gap-2"
                style={{ borderColor: themeColor }}
              >
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].name`}
                  value={skill.name}
                  placeholder="Skill"
                  className="text-sm"
                />
                <button
                  onClick={() => removeArrayItem(`${basePath}.data.items`, idx)}
                  className="text-destructive hover:text-destructive/80"
                >
                  ×
                </button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                addArrayItem(`${basePath}.data.items`, {
                  id: Date.now().toString(),
                  name: '',
                  level: 80,
                  category: 'core',
                })
              }
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Skill
            </Button>
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-3">
            {data.items?.map((cert, idx) => (
              <div key={cert.id} className="border-l-2 pl-4" style={{ borderColor: themeColor }}>
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].name`}
                  value={cert.name}
                  className="font-semibold block mb-1"
                  placeholder="Certification Name"
                />
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].issuer`}
                  value={cert.issuer}
                  className="text-sm block mb-1"
                  placeholder="Issuing Organization"
                  style={{ color: themeColor }}
                />
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].date`}
                  value={formatDate(cert.date)}
                  className="text-sm text-muted-foreground block"
                  placeholder="Date"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArrayItem(`${basePath}.data.items`, idx)}
                  className="mt-2 text-destructive"
                >
                  <Trash2 className="h-3 w-3 mr-1" />
                  Remove
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                addArrayItem(`${basePath}.data.items`, {
                  id: Date.now().toString(),
                  name: '',
                  issuer: '',
                  date: '',
                  credentialId: '',
                  url: '',
                })
              }
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Certification
            </Button>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-4">
            {data.items?.map((project, idx) => (
              <div key={project.id} className="border-l-2 pl-4" style={{ borderColor: themeColor }}>
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].name`}
                  value={project.name}
                  className="font-semibold text-lg block mb-1"
                  placeholder="Project Name"
                />
                <InlineEditableText
                  path={`${basePath}.data.items[${idx}].description`}
                  value={project.description}
                  multiline
                  placeholder="Project description..."
                  className="text-sm block mb-2"
                />
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.techStack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-2 py-1 rounded"
                        style={{ backgroundColor: `${themeColor}20`, color: themeColor }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeArrayItem(`${basePath}.data.items`, idx)}
                  className="mt-2 text-destructive"
                >
                  <Trash2 className="h-3 w-3 mr-1" />
                  Remove
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                addArrayItem(`${basePath}.data.items`, {
                  id: Date.now().toString(),
                  name: '',
                  description: '',
                  techStack: [],
                  url: '',
                  githubUrl: '',
                })
              }
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Project
            </Button>
          </div>
        );

      // Add more cases for other section types
      case 'languages':
      case 'awards':
      case 'publications':
      case 'volunteer':
      case 'speaking':
      case 'patents':
      case 'portfolio':
        return (
          <div className="text-sm text-muted-foreground">
            {data.items?.length || 0} items - Click to edit
          </div>
        );

      case 'custom':
        return (
          <InlineEditableText
            path={`${basePath}.data.content`}
            value={data.content}
            multiline
            placeholder="Add your custom content..."
            className="block text-sm"
          />
        );

      default:
        return <div className="text-sm text-muted-foreground">Content goes here</div>;
    }
  };

  return (
    <div className="group relative">
      <div className="flex items-start gap-2 mb-2">
        <div {...dragHandleProps} className="cursor-grab active:cursor-grabbing pt-1">
          <GripVertical className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <InlineEditableText
              path={`${basePath}.title`}
              value={section.title}
              className="font-bold text-lg uppercase tracking-wide"
              placeholder="Section Title"
              style={{ color: themeColor }}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(section.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          {renderSection()}
        </div>
      </div>
    </div>
  );
}
