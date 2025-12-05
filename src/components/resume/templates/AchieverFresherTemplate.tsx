import type { ResumeData } from "@/types/resume";
import { InlineEditableText } from "@/components/resume/InlineEditableText";
import { InlineEditableDate } from "@/components/resume/InlineEditableDate";
import { InlineEditableList } from "@/components/resume/InlineEditableList";
import { InlineEditableSkills } from "@/components/resume/InlineEditableSkills";
import { InlineExperienceSection } from "@/components/resume/sections/InlineExperienceSection";
import { InlineCustomSections } from "@/components/resume/sections/InlineCustomSections";

interface AchieverFresherTemplateProps {
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

export const AchieverFresherTemplate = ({
  resumeData,
  themeColor = "#059669",
  editable = false,
}: AchieverFresherTemplateProps) => {
  const accent = normalizeHex(themeColor) ?? "#059669";
  const accentLight = withOpacity(accent, "15") ?? "#05966915";
  const accentBorder = withOpacity(accent, "33") ?? "#05966933";

  return (
    <div className="w-full h-full bg-white text-gray-900 p-12 text-[13px] leading-relaxed">
      {/* Header Section */}
      <div className="mb-8 pb-6 border-b-2" style={{ borderColor: accent }}>
        {editable ? (
          <InlineEditableText
            path="personalInfo.fullName"
            value={resumeData.personalInfo.fullName}
            className="text-[32px] font-bold mb-3 block tracking-tight"
            style={{ color: accent }}
            as="h1"
          />
        ) : (
          <h1 className="text-[32px] font-bold mb-3 tracking-tight" style={{ color: accent }}>
            {resumeData.personalInfo.fullName}
          </h1>
        )}

        <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-[12px] text-gray-600 mt-2">
          {resumeData.personalInfo.email && (
            editable ? (
              <InlineEditableText
                path="personalInfo.email"
                value={resumeData.personalInfo.email}
                className="inline-flex items-center gap-1.5"
              />
            ) : (
              <span className="flex items-center gap-1.5">{resumeData.personalInfo.email}</span>
            )
          )}
          {resumeData.personalInfo.phone && (
            editable ? (
              <InlineEditableText
                path="personalInfo.phone"
                value={resumeData.personalInfo.phone}
                className="inline-flex items-center gap-1.5"
              />
            ) : (
              <span className="flex items-center gap-1.5">{resumeData.personalInfo.phone}</span>
            )
          )}
          {resumeData.personalInfo.location && (
            editable ? (
              <InlineEditableText
                path="personalInfo.location"
                value={resumeData.personalInfo.location}
                className="inline-flex items-center gap-1.5"
              />
            ) : (
              <span className="flex items-center gap-1.5">{resumeData.personalInfo.location}</span>
            )
          )}
          {resumeData.personalInfo.linkedin && (
            editable ? (
              <InlineEditableText
                path="personalInfo.linkedin"
                value={resumeData.personalInfo.linkedin}
                className="inline-flex items-center gap-1.5"
              />
            ) : (
              <span className="flex items-center gap-1.5">{resumeData.personalInfo.linkedin}</span>
            )
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {resumeData.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-[16px] font-bold mb-3 uppercase tracking-wider" style={{ color: accent }}>
            Professional Summary
          </h2>
          {editable ? (
            <InlineEditableText
              path="personalInfo.summary"
              value={resumeData.personalInfo.summary}
              className="text-[13px] text-gray-700 leading-[1.8] block"
              multiline
              as="p"
            />
          ) : (
            <p className="text-[13px] text-gray-700 leading-[1.8]">
              {resumeData.personalInfo.summary}
            </p>
          )}
        </div>
      )}

      {/* Experience Section */}
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

      {/* Education Section */}
      {resumeData.education && resumeData.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[16px] font-bold mb-4 uppercase tracking-wider" style={{ color: accent }}>
            Education
          </h2>
          {editable ? (
            <InlineEditableList
              path="education"
              items={resumeData.education}
              defaultItem={{
                id: Date.now().toString(),
                school: "School Name",
                degree: "Degree",
                field: "Field of Study",
                startDate: "2019-09",
                endDate: "2023-05",
              }}
              addButtonLabel="Add Education"
              renderItem={(edu, index) => (
                <div className="mb-4 last:mb-0">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <InlineEditableText
                        path={`education[${index}].degree`}
                        value={`${edu.degree}${edu.field ? ` in ${edu.field}` : ""}`}
                        className="text-[14px] font-semibold text-gray-900 block mb-1"
                        as="h3"
                      />
                      <InlineEditableText
                        path={`education[${index}].school`}
                        value={edu.school}
                        className="text-[13px] text-gray-700 block"
                        as="p"
                      />
                    </div>
                    <div className="text-right text-[11.5px] text-gray-600 ml-4">
                      <p>
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            />
          ) : (
            resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-[14px] font-semibold text-gray-900 mb-1">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p className="text-[13px] text-gray-700">{edu.school}</p>
                  </div>
                  <div className="text-right text-[11.5px] text-gray-600 ml-4">
                    <p>
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Skills Section */}
      {resumeData.skills && resumeData.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[16px] font-bold mb-4 uppercase tracking-wider" style={{ color: accent }}>
            Skills
          </h2>
          {editable ? (
            <InlineEditableSkills
              path="skills"
              skills={resumeData.skills}
              renderSkill={(skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-[12px] font-medium text-gray-900 rounded-md"
                  style={{ border: `1.5px solid ${accentBorder}`, backgroundColor: accentLight }}
                >
                  {skill.name}
                </span>
              )}
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 text-[12px] font-medium text-gray-900 rounded-md"
                  style={{ border: `1.5px solid ${accentBorder}`, backgroundColor: accentLight }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          )}
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
