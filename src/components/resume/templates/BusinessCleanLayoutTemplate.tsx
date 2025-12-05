import React from "react";
import type { ResumeData } from "@/types/resume";
import { InlineEditableText } from "@/components/resume/InlineEditableText";
import { InlineEditableDate } from "@/components/resume/InlineEditableDate";
import { InlineEditableList } from "@/components/resume/InlineEditableList";
import { InlineEditableSkills } from "@/components/resume/InlineEditableSkills";
import { InlineExperienceSection } from "@/components/resume/sections/InlineExperienceSection";
import { InlineEducationSection } from "@/components/resume/sections/InlineEducationSection";
import { InlineCustomSections } from "@/components/resume/sections/InlineCustomSections";

interface BusinessCleanLayoutTemplateProps {
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

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthIndex = parseInt(month || "0", 10) - 1;
  if (Number.isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
    return date;
  }
  return `${monthNames[monthIndex]} ${year}`;
};

export const BusinessCleanLayoutTemplate = ({
  resumeData,
  themeColor = "#3b82f6",
  editable = false,
}: BusinessCleanLayoutTemplateProps) => {
  const accent = normalizeHex(themeColor) ?? "#3b82f6";

  return (
    <div className="w-full h-full bg-white text-gray-900 p-12">
      <div className="mb-8 pb-6 border-b-2" style={{ borderColor: accent }}>
        {editable ? (
          <InlineEditableText
            path="personalInfo.fullName"
            value={resumeData.personalInfo.fullName}
            className="text-[38px] font-bold mb-2 block"
            style={{ color: accent }}
            as="h1"
          />
        ) : (
          <h1 className="text-[38px] font-bold mb-2" style={{ color: accent }}>
            {resumeData.personalInfo.fullName}
          </h1>
        )}
        {editable ? (
          <InlineEditableText
            path="personalInfo.title"
            value={resumeData.personalInfo.title}
            className="text-[16px] text-gray-700 mb-4 font-medium tracking-wide block"
            as="p"
          />
        ) : (
          <p className="text-[16px] text-gray-700 mb-4 font-medium tracking-wide">
            {resumeData.personalInfo.title}
          </p>
        )}
        <div className="flex gap-4 text-[13px] text-gray-600 flex-wrap">
          {resumeData.personalInfo.email && (
            <>
              {editable ? (
                <InlineEditableText
                  path="personalInfo.email"
                  value={resumeData.personalInfo.email}
                  className="inline-block"
                />
              ) : (
                <span>{resumeData.personalInfo.email}</span>
              )}
              <span>•</span>
            </>
          )}
          {resumeData.personalInfo.phone && (
            <>
              {editable ? (
                <InlineEditableText
                  path="personalInfo.phone"
                  value={resumeData.personalInfo.phone}
                  className="inline-block"
                />
              ) : (
                <span>{resumeData.personalInfo.phone}</span>
              )}
            </>
          )}
          {resumeData.personalInfo.location && (
            <>
              <span>•</span>
              {editable ? (
                <InlineEditableText
                  path="personalInfo.location"
                  value={resumeData.personalInfo.location}
                  className="inline-block"
                />
              ) : (
                <span>{resumeData.personalInfo.location}</span>
              )}
            </>
          )}
        </div>
      </div>
      {resumeData.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-[16px] font-bold mb-3 uppercase tracking-wider" style={{ color: accent }}>
            Professional Summary
          </h2>
          {editable ? (
            <InlineEditableText
              path="personalInfo.summary"
              value={resumeData.personalInfo.summary}
              className="text-[13px] text-gray-700 leading-relaxed block"
              multiline
              as="p"
            />
          ) : (
            <p className="text-[13px] text-gray-700 leading-relaxed whitespace-pre-line">
              {resumeData.personalInfo.summary}
            </p>
          )}
        </div>
      )}
      {resumeData.experience && resumeData.experience.length > 0 && (
        <div className="mb-8">
          <InlineExperienceSection
            items={resumeData.experience}
            editable={editable}
            accentColor={accent}
            title="Professional Experience"
            renderHeader={(title) => (
              <h2 className="text-[16px] font-bold mb-4 uppercase tracking-wider" style={{ color: accent }}>
                {title}
              </h2>
            )}
          />
        </div>
      )}
      {resumeData.education && resumeData.education.length > 0 && (
        <div className="mb-8">
          <InlineEducationSection
            items={resumeData.education}
            editable={editable}
            accentColor={accent}
            title="Education"
            renderHeader={(title) => (
              <h2 className="text-[16px] font-bold mb-4 uppercase tracking-wider" style={{ color: accent }}>
                {title}
              </h2>
            )}
          />
        </div>
      )}
      {resumeData.skills && resumeData.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[16px] font-bold mb-4 uppercase tracking-wider" style={{ color: accent }}>
            Skills & Competencies
          </h2>
          {editable ? (
            <InlineEditableSkills
              path="skills"
              skills={resumeData.skills}
              editable={editable}
              themeColor={accent}
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-3 py-1 rounded text-[13px] font-medium"
                  style={{
                    backgroundColor: `${accent}15`,
                    color: accent,
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
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
