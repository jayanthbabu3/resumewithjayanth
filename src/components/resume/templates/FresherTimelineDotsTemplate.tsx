import React from "react";
import type { ResumeData } from "@/types/resume";
import { InlineEditableText } from "@/components/resume/InlineEditableText";
import { InlineEditableDate } from "@/components/resume/InlineEditableDate";
import { InlineEditableList } from "@/components/resume/InlineEditableList";
import { InlineEditableSkills } from "@/components/resume/InlineEditableSkills";
import { InlineExperienceSection } from "@/components/resume/sections/InlineExperienceSection";
import { InlineCustomSections } from "@/components/resume/sections/InlineCustomSections";

interface FresherTimelineDotsTemplateProps {
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

export const FresherTimelineDotsTemplate = ({
  resumeData,
  themeColor = "#10b981",
  editable = false,
}: FresherTimelineDotsTemplateProps) => {
  const accent = normalizeHex(themeColor) ?? "#10b981";

  return (
    <div className="w-full h-full bg-white text-gray-900 p-12">
      {/* Header */}
      <div className="mb-8 pb-6 border-b" style={{ borderColor: withOpacity(accent, "30") }}>
        <InlineEditableText
          text={resumeData.personalInfo.fullName}
          className="text-[38px] font-bold mb-2"
          style={{ color: accent }}
          editable={editable}
          field="resumeData.personalInfo.fullName"
        />
        <InlineEditableText
          text={resumeData.personalInfo.title}
          className="text-[17px] text-gray-700 mb-4 font-medium"
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
          <h2 className="text-[16px] font-bold mb-3 uppercase tracking-wider" style={{ color: accent }}>
            Profile
          </h2>
          <InlineEditableText
            text={resumeData.personalInfo.summary}
            className="text-[13px] text-gray-700 leading-relaxed"
            editable={editable}
            field="resumeData.personalInfo.summary"
          />
        </div>
      )}

      {/* Education - Timeline with Dots */}
      {resumeData.education && resumeData.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[16px] font-bold mb-4 uppercase tracking-wider" style={{ color: accent }}>
            Education
          </h2>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="mb-8 last:mb-0 relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white" style={{ backgroundColor: accent }}></div>
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

      {/* Experience - Timeline with Dots */}
      {resumeData.experience && resumeData.experience.length > 0 && (
        <div className="mb-8">
          <InlineExperienceSection
            items={resumeData.experience}
            editable={editable}
            accentColor={accent}
            title="Experience"
            renderHeader={(title) => (
              <h2 className="text-[16px] font-bold mb-4 uppercase tracking-wider" style={{ color: accent }}>
                {title}
              </h2>
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
                  <div className="mb-8 last:mb-0 relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white" style={{ backgroundColor: accent }}></div>
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
                <div className="mb-8 last:mb-0 relative pl-10">
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white" style={{ backgroundColor: accent }}></div>
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
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          </div>
        </div>
      )}

      {/* Skills */}
      {resumeData.skills && resumeData.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[16px] font-bold mb-4 uppercase tracking-wider" style={{ color: accent }}>
            Skills
          </h2>
          <InlineEditableSkills skills={resumeData.skills} editable={editable} themeColor={accent} />
        </div>
      )}

      {/* Custom Sections */}
      {resumeData.sections && resumeData.sections.length > 0 && (
        <InlineCustomSections
          sections={resumeData.sections}
          editable={editable}
          accentColor={accent}
          containerClassName="mb-8"
          renderHeader={(title) => (
            <h2 className="text-[16px] font-bold mb-4 uppercase tracking-wider" style={{ color: accent }}>
              {title}
            </h2>
          )}
        />
      )}
    </div>
  );
};
