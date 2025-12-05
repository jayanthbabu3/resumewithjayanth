import type { ResumeData } from "@/types/resume";
import { Mail, Phone, MapPin, Calendar, Hexagon } from "lucide-react";
import { ProfilePhoto } from "./ProfilePhoto";
import { InlineEditableText } from "@/components/resume/InlineEditableText";
import { InlineEditableDate } from "@/components/resume/InlineEditableDate";
import { InlineEditableList } from "@/components/resume/InlineEditableList";
import { InlineEditableSkills } from "@/components/resume/InlineEditableSkills";
import { InlineExperienceSection } from "@/components/resume/sections/InlineExperienceSection";
import { InlineCustomSections } from "@/components/resume/sections/InlineCustomSections";

interface FresherGeometricTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
  editable?: boolean;
}

export const FresherGeometricTemplate = ({
  resumeData,
  themeColor = "#3B82F6",
  editable = false,
}: FresherGeometricTemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const photo = resumeData.personalInfo.photo;

  return (
    <div className="w-full h-full bg-white overflow-auto relative">
      {/* Geometric decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <div className="w-full h-full border-8 border-current rotate-45 transform translate-x-32 -translate-y-32" style={{ borderColor: themeColor }} />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 pointer-events-none">
        <div className="w-full h-full rounded-full border-8 border-current transform -translate-x-24 translate-y-24" style={{ borderColor: themeColor }} />
      </div>

      <div className="max-w-[850px] mx-auto px-8 py-6 relative z-10">
        {/* Header with Geometric Accent */}
        <div className="flex items-start gap-8 mb-8">
          <div className="flex-shrink-0 relative">
            <div className="absolute -top-2 -left-2 w-20 h-20 rounded-full opacity-20" style={{ backgroundColor: themeColor }} />
            <ProfilePhoto
              src={photo}
              borderClass="border-4 relative z-10"
              className="text-gray-300"
              style={{ borderColor: themeColor }}
            />
          </div>

          <div className="flex-1">
            {editable ? (
              <InlineEditableText
                path="personalInfo.fullName"
                value={resumeData.personalInfo.fullName}
                className="text-4xl font-bold text-gray-900 tracking-tight mb-2 block"
                as="h1"
              />
            ) : (
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">
                {resumeData.personalInfo.fullName}
              </h1>
            )}

            {resumeData.personalInfo.title && (
              <div className="flex items-center gap-3 mb-4">
                <Hexagon className="h-5 w-5" style={{ color: themeColor, fill: themeColor, opacity: 0.3 }} />
                {editable ? (
                  <InlineEditableText
                    path="personalInfo.title"
                    value={resumeData.personalInfo.title}
                    className="text-lg font-medium inline-block"
                    style={{ color: themeColor }}
                  />
                ) : (
                  <p className="text-lg font-medium" style={{ color: themeColor }}>
                    {resumeData.personalInfo.title}
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
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
          </div>
        </div>

        {/* Professional Summary with Geometric Accent */}
        {resumeData.personalInfo.summary && (
          <section className="mb-8 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1" style={{ backgroundColor: themeColor }} />
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 transform rotate-45" style={{ backgroundColor: themeColor }} />
                <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: themeColor }}>
                  Professional Summary
                </h2>
              </div>
              {editable ? (
                <InlineEditableText
                  path="personalInfo.summary"
                  value={resumeData.personalInfo.summary}
                  className="text-sm leading-relaxed text-gray-700 block"
                  multiline
                  as="p"
                />
              ) : (
                <p className="text-sm leading-relaxed text-gray-700">
                  {resumeData.personalInfo.summary}
                </p>
              )}
            </div>
          </section>
        )}

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Skills */}
          <div className="col-span-1 space-y-8">
            {/* Skills with Geometric Accent */}
            {resumeData.skills && resumeData.skills.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 transform rotate-45" style={{ backgroundColor: themeColor }} />
                  <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: themeColor }}>
                    Skills
                  </h2>
                </div>
                {editable ? (
                  <InlineEditableSkills
                    path="skills"
                    skills={resumeData.skills}
                    renderSkill={(skill, index) => (
                      <div className="mb-3 relative group">
                        <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
                        <div className="px-3 py-1.5 bg-gray-50 text-xs font-medium text-gray-800 rounded-r-lg">
                          {skill.name}
                        </div>
                      </div>
                    )}
                  />
                ) : (
                  <div className="space-y-3">
                    {resumeData.skills.map((skill) => (
                      <div key={skill.id} className="relative group">
                        <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: themeColor }} />
                        <div className="px-3 py-1.5 bg-gray-50 text-xs font-medium text-gray-800 rounded-r-lg">
                          {skill.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Right Column - Education & Experience */}
          <div className="col-span-2 space-y-8">
            {/* Education with Geometric Accents */}
            {resumeData.education && resumeData.education.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Hexagon className="h-4 w-4" style={{ color: themeColor, fill: themeColor, opacity: 0.3 }} />
                  <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: themeColor }}>
                    Education
                  </h2>
                </div>
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
                      <div className="mb-4 relative pl-6">
                        <div className="absolute left-0 top-2 w-3 h-3 border-2 rounded-full bg-white" style={{ borderColor: themeColor }} />
                        <InlineEditableText
                          path={`education[${index}].degree`}
                          value={edu.degree}
                          className="font-semibold text-sm text-gray-900 leading-tight block"
                          as="h3"
                        />
                        {edu.field && (
                          <InlineEditableText
                            path={`education[${index}].field`}
                            value={edu.field}
                            className="text-xs text-gray-600 mt-1 block"
                            as="p"
                          />
                        )}
                        <InlineEditableText
                          path={`education[${index}].school`}
                          value={edu.school}
                          className="text-xs font-medium mt-1 block"
                          style={{ color: themeColor }}
                          as="p"
                        />
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                          <Calendar className="h-3 w-3" />
                          <InlineEditableDate
                            path={`education[${index}].startDate`}
                            value={edu.startDate}
                            formatDisplay={formatDate}
                            className="inline-block"
                          />
                          <span> - </span>
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
                  <div className="space-y-4">
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="relative pl-6">
                        <div className="absolute left-0 top-2 w-3 h-3 border-2 rounded-full bg-white" style={{ borderColor: themeColor }} />
                        <h3 className="font-semibold text-sm text-gray-900 leading-tight">
                          {edu.degree}
                        </h3>
                        {edu.field && (
                          <p className="text-xs text-gray-600 mt-1">{edu.field}</p>
                        )}
                        <p className="text-xs font-medium mt-1" style={{ color: themeColor }}>
                          {edu.school}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                          <Calendar className="h-3 w-3" />
                          {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Custom Sections - Most Important for Freshers */}
            {resumeData.sections && resumeData.sections.length > 0 && (
              <InlineCustomSections
                sections={resumeData.sections}
                editable={editable}
                accentColor={themeColor}
                containerClassName="space-y-8"
                renderHeader={(title) => (
                  <div className="flex items-center gap-3 mb-4">
                    <Hexagon className="h-4 w-4" style={{ color: themeColor, fill: themeColor, opacity: 0.3 }} />
                    <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: themeColor }}>
                      {title}
                    </h2>
                  </div>
                )}
              />
            )}

            {/* Internship Experience - Optional for Freshers */}
            {resumeData.experience && resumeData.experience.length > 0 && (
              <section>
                <InlineExperienceSection
                  items={resumeData.experience}
                  editable={editable}
                  accentColor={themeColor}
                  title="Internship Experience"
                  renderHeader={(title) => (
                    <div className="flex items-center gap-3 mb-4">
                      <Hexagon className="h-4 w-4" style={{ color: themeColor, fill: themeColor, opacity: 0.3 }} />
                      <h2 className="text-sm font-bold uppercase tracking-wider" style={{ color: themeColor }}>
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
                        <div className="mb-6 relative pl-6">
                          <div className="absolute left-0 top-2 w-3 h-3 border-2 rounded-full bg-white" style={{ borderColor: themeColor }} />
                          <InlineEditableText
                            path={`experience[${index}].position`}
                            value={exp.position || ""}
                            className="font-semibold text-sm text-gray-900 block"
                            as="h3"
                          />
                          <InlineEditableText
                            path={`experience[${index}].company`}
                            value={exp.company || ""}
                            className="text-xs font-medium mt-1 block"
                            style={{ color: themeColor }}
                            as="p"
                          />
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                            <Calendar className="h-3 w-3" />
                            <InlineEditableDate
                              path={`experience[${index}].startDate`}
                              value={exp.startDate}
                              formatDisplay={formatDate}
                              className="inline-block"
                            />
                            <span> - </span>
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
                          {bulletPoints.length > 0 && (
                            <ul className="ml-4 list-disc space-y-1 text-sm leading-relaxed text-gray-600 mt-2">
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
                      <div className="mb-6 relative pl-6">
                        <div className="absolute left-0 top-2 w-3 h-3 border-2 rounded-full bg-white" style={{ borderColor: themeColor }} />
                        <h3 className="font-semibold text-sm text-gray-900">
                          {exp.position}
                        </h3>
                        <p className="text-xs font-medium mt-1" style={{ color: themeColor }}>
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                        </div>
                        {bulletPoints.length > 0 && (
                          <ul className="ml-4 list-disc space-y-1 text-sm leading-relaxed text-gray-600 mt-2">
                            {bulletPoints.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  }}
                />
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
