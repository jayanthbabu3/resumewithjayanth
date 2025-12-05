import React from "react";
import type { ResumeData } from "@/types/resume";
import { InlineEditableText } from "@/components/resume/InlineEditableText";
import { InlineEditableDate } from "@/components/resume/InlineEditableDate";
import { InlineEditableList } from "@/components/resume/InlineEditableList";
import { InlineEditableSkills } from "@/components/resume/InlineEditableSkills";
import { InlineExperienceSection } from "@/components/resume/sections/InlineExperienceSection";
import { InlineCustomSections } from "@/components/resume/sections/InlineCustomSections";

interface FresherProgressiveTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
  editable?: boolean;
}

const normalizeHex = (color?: string) => {
  if (!color || !color.startsWith("#")) return undefined;
  if (color.length === 4) {
    const [_, r, g, b] = color;
    return `#${r}${r}${g}${g}${b}${b}`;
  }
  return color.slice(0, 7);
};

const withOpacity = (color: string | undefined, alpha: string) => {
  const normalized = normalizeHex(color);
  if (!normalized) return color;
  return `${normalized}${alpha}`;
};

export const FresherProgressiveTemplate = ({
  resumeData,
  themeColor = "#10b981",
  editable = false,
}: FresherProgressiveTemplateProps) => {
  const accent = normalizeHex(themeColor) ?? "#10b981";

  return (
    <div className="w-full h-full bg-white text-gray-900 p-12">
      {/* Progressive header bar */}
      <div className="mb-8">
        <div className="h-2 mb-6 rounded-full overflow-hidden bg-gray-200">
          <div className="h-full w-1/3" style={{ backgroundColor: accent }}></div>
        </div>

        <InlineEditableText
          text={resumeData.personalInfo.fullName}
          className="text-[40px] font-bold mb-2"
          style={{ color: accent }}
          editable={editable}
          field="resumeData.personalInfo.fullName"
        />
        <InlineEditableText
          text={resumeData.personalInfo.title}
          className="text-[18px] text-gray-700 mb-4 font-semibold"
          editable={editable}
          field="resumeData.personalInfo.title"
        />
        <div className="flex gap-4 text-[13px] text-gray-600 flex-wrap">
          <InlineEditableText text={resumeData.personalInfo.email} editable={editable} field="resumeData.personalInfo.email" />
          <span>•</span>
          <InlineEditableText text={resumeData.personalInfo.phone} editable={editable} field="resumeData.personalInfo.phone" />
          {resumeData.personalInfo.location && (
            <>
              <span>•</span>
              <InlineEditableText text={resumeData.personalInfo.location} editable={editable} field="resumeData.personalInfo.location" />
            </>
          )}
        </div>
      </div>

      {/* Summary */}
      {resumeData.personalInfo.summary && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: accent }}>
              1
            </div>
            <h2 className="text-[16px] font-bold uppercase tracking-wider" style={{ color: accent }}>
              Profile
            </h2>
          </div>
          <InlineEditableText
            text={resumeData.personalInfo.summary}
            className="text-[13px] text-gray-700 leading-relaxed ml-11"
            editable={editable}
            field="resumeData.personalInfo.summary"
          />
        </div>
      )}

      {/* Education */}
      {resumeData.education && resumeData.education.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: accent }}>
              2
            </div>
            <h2 className="text-[16px] font-bold uppercase tracking-wider" style={{ color: accent }}>
              Education
            </h2>
          </div>
          <div className="ml-11">
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="mb-5 last:mb-0">
                <InlineEditableText
                  text={edu.degree}
                  className="text-[15px] font-bold mb-1"
                  style={{ color: accent }}
                  editable={editable}
                  field={`resumeData.education[${index}].degree`}
                />
                <InlineEditableText
                  text={edu.school}
                  className="text-[14px] font-semibold text-gray-700 mb-1"
                  editable={editable}
                  field={`resumeData.education[${index}].school`}
                />
                <div className="text-[12px] text-gray-600 flex items-center gap-2">
                  <InlineEditableDate
                    date={edu.graduationDate}
                    editable={editable}
                    field={`resumeData.education[${index}].graduationDate`}
                  />
                  {edu.gpa && (
                    <>
                      <span>•</span>
                      <InlineEditableText text={`GPA: ${edu.gpa}`} editable={editable} field={`resumeData.education[${index}].gpa`} />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {resumeData.experience && resumeData.experience.length > 0 && (
        <div className="mb-8">
          <InlineExperienceSection
            items={resumeData.experience}
            editable={editable}
            accentColor={accent}
            title="Experience"
            renderHeader={(title) => (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: accent }}>
                  3
                </div>
                <h2 className="text-[16px] font-bold uppercase tracking-wider" style={{ color: accent }}>
                  {title}
                </h2>
              </div>
            )}
            renderItem={(exp, index, isEditable) => {
              const bulletPoints = exp.bulletPoints && exp.bulletPoints.length > 0
                ? exp.bulletPoints
                : (exp.description || "")
                    .split("\n")
                    .map((line) => line.trim())
                    .filter(Boolean);

              if (isEditable) {
                return (
                  <div className="mb-5 last:mb-0">
                    <div className="flex justify-between items-baseline mb-1">
                      <InlineEditableText
                        path={`experience[${index}].position`}
                        value={exp.position || ""}
                        className="text-[15px] font-bold"
                        style={{ color: accent }}
                        as="h3"
                      />
                      <div className="text-[12px] text-gray-600 flex items-center gap-1">
                        <InlineEditableDate
                          path={`experience[${index}].startDate`}
                          value={exp.startDate}
                          className="inline-block"
                        />
                        <span>-</span>
                        {exp.current ? (
                          <span>Present</span>
                        ) : (
                          <InlineEditableDate
                            path={`experience[${index}].endDate`}
                            value={exp.endDate}
                            className="inline-block"
                          />
                        )}
                      </div>
                    </div>
                    <InlineEditableText
                      path={`experience[${index}].company`}
                      value={exp.company || ""}
                      className="text-[14px] font-semibold text-gray-700 mb-2"
                      as="p"
                    />
                    {bulletPoints.length > 0 && (
                      <ul className="ml-4 list-disc space-y-1 text-[13px] text-gray-700">
                        {bulletPoints.map((point, i) => (
                          <li key={i}>
                            <InlineEditableText
                              path={`experience[${index}].bulletPoints[${i}]`}
                              value={point || ""}
                              className="inline-block"
                              placeholder="Click to add achievement..."
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              return (
                <div className="mb-5 last:mb-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[15px] font-bold" style={{ color: accent }}>
                      {exp.position}
                    </h3>
                    <div className="text-[12px] text-gray-600">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </div>
                  </div>
                  <p className="text-[14px] font-semibold text-gray-700 mb-2">
                    {exp.company}
                  </p>
                  {bulletPoints.length > 0 && (
                    <ul className="ml-4 list-disc space-y-1 text-[13px] text-gray-700">
                      {bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            }}
          />
          <div className="ml-11">
          </div>
        </div>
      )}

      {/* Skills */}
      {resumeData.skills && resumeData.skills.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: accent }}>
              4
            </div>
            <h2 className="text-[16px] font-bold uppercase tracking-wider" style={{ color: accent }}>
              Skills
            </h2>
          </div>
          <div className="ml-11">
            <InlineEditableSkills skills={resumeData.skills} editable={editable} themeColor={accent} />
          </div>
        </div>
      )}

      {/* Custom Sections */}
      {resumeData.sections && resumeData.sections.length > 0 && (
        <InlineCustomSections
          sections={resumeData.sections}
          editable={editable}
          accentColor={accent}
          containerClassName="mb-8"
          renderHeader={(title, sectionIndex) => (
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: accent }}>
                {5 + (sectionIndex || 0)}
              </div>
              <h2 className="text-[16px] font-bold uppercase tracking-wider" style={{ color: accent }}>
                {title}
              </h2>
            </div>
          )}
        />
      )}
    </div>
  );
};
