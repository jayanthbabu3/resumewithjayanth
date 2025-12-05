import type { ResumeData } from "@/types/resume";
import { Mail, Phone, MapPin, Calendar, Plus, X } from "lucide-react";
import { ProfilePhoto } from "./ProfilePhoto";
import { InlineEditableText } from "@/components/resume/InlineEditableText";
import { InlineEditableDate } from "@/components/resume/InlineEditableDate";
import { InlineEditableList } from "@/components/resume/InlineEditableList";
import { InlineEditableSkills } from "@/components/resume/InlineEditableSkills";
import { InlineExperienceSection } from "@/components/resume/sections/InlineExperienceSection";
import { InlineCustomSections } from "@/components/resume/sections/InlineCustomSections";
import { useInlineEdit } from "@/contexts/InlineEditContext";

interface FresherCenteredElegantTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
  editable?: boolean;
}

export const FresherCenteredElegantTemplate = ({
  resumeData,
  themeColor = "#A855F7",
  editable = false,
}: FresherCenteredElegantTemplateProps) => {
  const inlineEdit = useInlineEdit();
  const { addBulletPoint, removeBulletPoint } = inlineEdit || {};

  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const photo = resumeData.personalInfo.photo;

  return (
    <div className="w-full h-full bg-white overflow-auto">
      <div className="max-w-[850px] mx-auto px-16 py-12">
        {/* Centered Header */}
        <div className="text-center mb-10">
          <div className="mb-6">
            <ProfilePhoto
              src={photo}
              borderClass="border-3"
              className="text-gray-300"
              style={{ borderColor: themeColor }}
            />
          </div>

          {editable ? (
            <InlineEditableText
              path="personalInfo.fullName"
              value={resumeData.personalInfo.fullName}
              className="text-4xl font-serif font-bold text-gray-900 tracking-wide mb-3 block"
              as="h1"
            />
          ) : (
            <h1 className="text-4xl font-serif font-bold text-gray-900 tracking-wide mb-3">
              {resumeData.personalInfo.fullName}
            </h1>
          )}

          {resumeData.personalInfo.title && (
            <div className="mb-4">
              {editable ? (
                <InlineEditableText
                  path="personalInfo.title"
                  value={resumeData.personalInfo.title}
                  className="text-lg font-serif italic inline-block"
                  style={{ color: themeColor }}
                />
              ) : (
                <p className="text-lg font-serif italic" style={{ color: themeColor }}>
                  {resumeData.personalInfo.title}
                </p>
              )}
            </div>
          )}

          <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-600">
            {resumeData.personalInfo.email && (
              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: themeColor }} />
                {editable ? (
                  <InlineEditableText
                    path="personalInfo.email"
                    value={resumeData.personalInfo.email}
                    className="inline-block"
                  />
                ) : (
                  resumeData.personalInfo.email
                )}
              </span>
            )}
            {resumeData.personalInfo.phone && (
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" style={{ color: themeColor }} />
                {editable ? (
                  <InlineEditableText
                    path="personalInfo.phone"
                    value={resumeData.personalInfo.phone}
                    className="inline-block"
                  />
                ) : (
                  resumeData.personalInfo.phone
                )}
              </span>
            )}
            {resumeData.personalInfo.location && (
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" style={{ color: themeColor }} />
                {editable ? (
                  <InlineEditableText
                    path="personalInfo.location"
                    value={resumeData.personalInfo.location}
                    className="inline-block"
                  />
                ) : (
                  resumeData.personalInfo.location
                )}
              </span>
            )}
          </div>

          {/* Decorative line */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-16 h-px" style={{ backgroundColor: themeColor }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
            <div className="w-16 h-px" style={{ backgroundColor: themeColor }} />
          </div>
        </div>

        {/* Professional Summary - Centered */}
        {resumeData.personalInfo.summary && (
          <section className="mb-10 text-center">
            {editable ? (
              <InlineEditableText
                path="personalInfo.summary"
                value={resumeData.personalInfo.summary}
                className="text-sm leading-relaxed text-gray-700 max-w-3xl mx-auto block font-serif"
                multiline
                as="p"
              />
            ) : (
              <p className="text-sm leading-relaxed text-gray-700 max-w-3xl mx-auto font-serif">
                {resumeData.personalInfo.summary}
              </p>
            )}
          </section>
        )}

        {/* Skills - Centered Grid */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-serif font-bold text-center mb-6" style={{ color: themeColor }}>
              Technical Expertise
            </h2>
            {editable ? (
              <InlineEditableSkills
                path="skills"
                skills={resumeData.skills}
                renderSkill={(skill, index) => (
                  <div className="inline-block mx-2 mb-3">
                    <div className="px-5 py-2 border-2 rounded-full text-sm font-medium text-gray-800" style={{ borderColor: themeColor }}>
                      {skill.name}
                    </div>
                  </div>
                )}
              />
            ) : (
              <div className="flex flex-wrap justify-center">
                {resumeData.skills.map((skill) => (
                  <div key={skill.id} className="inline-block mx-2 mb-3">
                    <div className="px-5 py-2 border-2 rounded-full text-sm font-medium text-gray-800" style={{ borderColor: themeColor }}>
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Education - Centered */}
        {resumeData.education && resumeData.education.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-serif font-bold text-center mb-6" style={{ color: themeColor }}>
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
                  <div className="text-center mb-6">
                    <InlineEditableText
                      path={`education[${index}].degree`}
                      value={edu.degree}
                      className="font-serif font-semibold text-base text-gray-900 leading-tight block"
                      as="h3"
                    />
                    {edu.field && (
                      <InlineEditableText
                        path={`education[${index}].field`}
                        value={edu.field}
                        className="font-serif text-sm text-gray-600 mt-1 block"
                        as="p"
                      />
                    )}
                    <InlineEditableText
                      path={`education[${index}].school`}
                      value={edu.school}
                      className="text-sm font-medium mt-1 block"
                      style={{ color: themeColor }}
                      as="p"
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      <InlineEditableDate
                        path={`education[${index}].startDate`}
                        value={edu.startDate}
                        formatDisplay={formatDate}
                        className="inline-block"
                      />
                      <span> – </span>
                      <InlineEditableDate
                        path={`education[${index}].endDate`}
                        value={edu.endDate}
                        formatDisplay={formatDate}
                        className="inline-block"
                      />
                    </div>
                  </div>
                )}
              />
            ) : (
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="text-center">
                    <h3 className="font-serif font-semibold text-base text-gray-900 leading-tight">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="font-serif text-sm text-gray-600 mt-1">{edu.field}</p>
                    )}
                    <p className="text-sm font-medium mt-1" style={{ color: themeColor }}>
                      {edu.school}
                    </p>
                    <div className="text-xs text-gray-500 mt-2">
                      {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Custom Sections - Centered - Most Important for Freshers */}
        {resumeData.sections && resumeData.sections.length > 0 && (
          <InlineCustomSections
            sections={resumeData.sections}
            editable={editable}
            accentColor={themeColor}
            containerClassName="mb-10"
            renderHeader={(title) => (
              <h2 className="text-xl font-serif font-bold text-center mb-6" style={{ color: themeColor }}>
                {title}
              </h2>
            )}
            itemStyle={{
              textAlign: "center",
              maxWidth: "42rem",
              margin: "0 auto",
            }}
          />
        )}

        {/* Internship Experience - Centered - Optional for Freshers */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <div className="mb-10">
            <InlineExperienceSection
              items={resumeData.experience}
              editable={editable}
              accentColor={themeColor}
              title="Internship Experience"
              className="max-w-2xl mx-auto"
              renderHeader={(title) => (
                <h2 className="text-xl font-serif font-bold text-center mb-6" style={{ color: themeColor }}>
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
                    <div className="mb-8 text-center">
                      <div className="mb-3">
                        <InlineEditableText
                          path={`experience[${index}].position`}
                          value={exp.position || ""}
                          className="font-serif font-semibold text-base text-gray-900 block"
                          as="h3"
                        />
                        <InlineEditableText
                          path={`experience[${index}].company`}
                          value={exp.company || ""}
                          className="text-sm font-medium mt-1 block"
                          style={{ color: themeColor }}
                          as="p"
                        />
                        <div className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                          <InlineEditableDate
                            path={`experience[${index}].startDate`}
                            value={exp.startDate}
                            formatDisplay={formatDate}
                            className="inline-block"
                          />
                          <span>–</span>
                          {exp.current ? (
                            <span>Present</span>
                          ) : (
                            <InlineEditableDate
                              path={`experience[${index}].endDate`}
                              value={exp.endDate}
                              formatDisplay={formatDate}
                              className="inline-block"
                            />
                          )}
                        </div>
                      </div>
                      {bulletPoints.length > 0 && (
                        <ul className="text-sm leading-relaxed text-gray-600 text-center font-serif space-y-1 list-none">
                          {bulletPoints.map((point, i) => (
                            <li key={i} className="group flex items-center justify-center gap-2">
                              <InlineEditableText
                                path={`experience[${index}].bulletPoints[${i}]`}
                                value={point || ""}
                                className="inline-block flex-1"
                                placeholder="Click to add achievement..."
                                multiline
                              />
                              {editable && removeBulletPoint && (
                                <button
                                  type="button"
                                  onClick={() => removeBulletPoint(exp.id, i)}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-50 rounded text-red-500"
                                  disabled={bulletPoints.length <= 1}
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                      {editable && addBulletPoint && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addBulletPoint(exp.id);
                          }}
                          className="mt-2 flex items-center justify-center gap-1 text-xs text-purple-600 hover:text-purple-800 font-medium mx-auto"
                        >
                          <Plus className="h-3 w-3" />
                          Add Achievement
                        </button>
                      )}
                    </div>
                  );
                }

                return (
                  <div className="mb-8 text-center">
                    <div className="mb-3">
                      <h3 className="font-serif font-semibold text-base text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-medium mt-1" style={{ color: themeColor }}>
                        {exp.company}
                      </p>
                      <div className="text-xs text-gray-500 mt-1">
                        {formatDate(exp.startDate)} – {exp.current ? "Present" : formatDate(exp.endDate)}
                      </div>
                    </div>
                    {bulletPoints.length > 0 && (
                      <ul className="text-sm leading-relaxed text-gray-600 text-center font-serif space-y-1 list-none">
                        {bulletPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
