import type { ResumeData } from "@/types/resume";
import { ProfilePhoto } from "./ProfilePhoto";
import { InlineEditableText } from "@/components/resume/InlineEditableText";
import { InlineEditableDate } from "@/components/resume/InlineEditableDate";
import { InlineEditableList } from "@/components/resume/InlineEditableList";
import { InlineEditableSkillsWithRating } from "@/components/resume/InlineEditableSkillsWithRating";
import { cn } from "@/lib/utils";
import { useInlineEdit } from "@/contexts/InlineEditContext";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface RefinedTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
  editable?: boolean;
}

export const RefinedTemplate = ({
  resumeData,
  themeColor = "#4f46e5",
  editable = false,
}: RefinedTemplateProps) => {
  const { addBulletPoint, removeBulletPoint } = useInlineEdit();

  return (
    <div className="mx-auto bg-white font-sans text-gray-900">
      <div className="grid grid-cols-[280px,1fr]">
        {/* Left Sidebar */}
        <div className="px-8 py-12" style={{ backgroundColor: `${themeColor}15` }}>
          {/* Photo */}
          {resumeData.personalInfo.photo && (
            <div className="mb-8">
              <ProfilePhoto src={resumeData.personalInfo.photo} sizeClass="h-40 w-40 mx-auto" />
            </div>
          )}

          {/* Contact */}
          <div className="mb-8">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-900">
              Contact
            </h3>
            <div className="space-y-3 text-xs text-gray-700">
              {resumeData.personalInfo.email && (
                <div className="break-words">
                  <div className="mb-1 font-semibold" style={{ color: themeColor }}>
                    Email
                  </div>
                  {editable ? (
                    <InlineEditableText
                      path="personalInfo.email"
                      value={resumeData.personalInfo.email}
                      className="font-light text-xs text-gray-700"
                      as="div"
                    />
                  ) : (
                    <div className="font-light">{resumeData.personalInfo.email}</div>
                  )}
                </div>
              )}
              {resumeData.personalInfo.phone && (
                <div>
                  <div className="mb-1 font-semibold" style={{ color: themeColor }}>
                    Phone
                  </div>
                  {editable ? (
                    <InlineEditableText
                      path="personalInfo.phone"
                      value={resumeData.personalInfo.phone}
                      className="font-light text-xs text-gray-700"
                      as="div"
                    />
                  ) : (
                    <div className="font-light">{resumeData.personalInfo.phone}</div>
                  )}
                </div>
              )}
              {resumeData.personalInfo.location && (
                <div>
                  <div className="mb-1 font-semibold" style={{ color: themeColor }}>
                    Location
                  </div>
                  {editable ? (
                    <InlineEditableText
                      path="personalInfo.location"
                      value={resumeData.personalInfo.location}
                      className="font-light text-xs text-gray-700"
                      as="div"
                    />
                  ) : (
                    <div className="font-light">{resumeData.personalInfo.location}</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {resumeData.skills.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-900">
                Skills
              </h3>
              {editable ? (
                <InlineEditableSkillsWithRating
                  path="skills"
                  skills={resumeData.skills}
                  showRating={resumeData.skills.some(skill => skill.rating && skill.rating.trim() !== "")}
                  verticalLayout={resumeData.skills.some(skill => skill.rating && skill.rating.trim() !== "")}
                  renderSkill={(skill, index) => (
                    <div className="text-xs font-light text-gray-700 leading-relaxed">
                      {skill.name}
                      {skill.rating && skill.rating.trim() !== "" && (
                        <span className="ml-2 text-gray-500">({skill.rating})</span>
                      )}
                    </div>
                  )}
                />
              ) : (
                <div className={cn(
                  resumeData.skills.some(skill => skill.rating && skill.rating.trim() !== "") ? "space-y-1" : "space-y-2"
                )}>
                  {resumeData.skills.map((skill, index) => (
                    resumeData.skills.some(skill => skill.rating && skill.rating.trim() !== "") ? (
                      // Vertical layout with ratings
                      <div key={skill.id} className="flex items-center justify-between">
                        <div className="text-xs font-light text-gray-700 leading-relaxed">
                          {skill.name}
                        </div>
                        {skill.rating && skill.rating.trim() !== "" && (
                          <span className="text-xs text-gray-500 ml-2">
                            {skill.rating}
                          </span>
                        )}
                      </div>
                    ) : (
                      // Horizontal layout without ratings
                      <div
                        key={skill.id}
                        className="text-xs font-light text-gray-700 leading-relaxed"
                      >
                        {skill.name}
                      </div>
                    )
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Education */}
          {resumeData.education.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-900">
                Education
              </h3>
              {editable ? (
                <InlineEditableList
                  path="education"
                  items={resumeData.education}
                  defaultItem={{
                    id: Date.now().toString(),
                    degree: "Degree",
                    school: "School Name",
                    field: "Field of Study",
                    startDate: "2020-01",
                    endDate: "2024-01",
                  }}
                  addButtonLabel="Add Education"
                  renderItem={(edu, index) => (
                    <div>
                      <InlineEditableText
                        path={`education[${index}].degree`}
                        value={edu.degree}
                        className="text-xs font-semibold text-gray-900 mb-1"
                        as="div"
                      />
                      {edu.field && (
                        <InlineEditableText
                          path={`education[${index}].field`}
                          value={edu.field}
                          className="text-xs font-light text-gray-700 mb-1"
                          as="div"
                        />
                      )}
                      <InlineEditableText
                        path={`education[${index}].school`}
                        value={edu.school}
                        className="text-xs font-medium mb-1"
                        as="div"
                        style={{ color: themeColor }}
                      />
                      <div className="text-xs font-light text-gray-600">
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <InlineEditableDate
                            path={`education[${index}].startDate`}
                            value={edu.startDate}
                            className="inline-block"
                          />
                          <span> — </span>
                          <InlineEditableDate
                            path={`education[${index}].endDate`}
                            value={edu.endDate}
                            className="inline-block"
                          />
                        </div>
                        {edu.gpa && (
                          <div className="text-xs text-gray-500 mt-1">
                            GPA: <InlineEditableText
                              path={`education[${index}].gpa`}
                              value={edu.gpa}
                              className="inline-block"
                              as="span"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                />
              ) : (
                <div className="space-y-4">
                  {resumeData.education.map((edu) => (
                    <div key={edu.id}>
                      <div className="text-xs font-semibold text-gray-900 mb-1">
                        {edu.degree}
                      </div>
                      {edu.field && (
                        <div className="text-xs font-light text-gray-700 mb-1">
                          {edu.field}
                        </div>
                      )}
                      <div className="text-xs font-medium mb-1" style={{ color: themeColor }}>
                        {edu.school}
                      </div>
                      <div className="text-xs font-light text-gray-600">
                        {edu.startDate} — {edu.endDate}
                        {edu.gpa && (
                          <div className="text-xs text-gray-500 mt-1">
                            GPA: {edu.gpa}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="px-12 py-12">
          {/* Header */}
          <div className="mb-10">
            {editable ? (
              <InlineEditableText
                path="personalInfo.fullName"
                value={resumeData.personalInfo.fullName}
                className="mb-3 text-4xl font-normal tracking-tight leading-none"
                as="h1"
                style={{ color: themeColor }}
              />
            ) : (
              <h1
                className="mb-3 text-4xl font-normal tracking-tight leading-none"
                style={{ color: themeColor }}
              >
                {resumeData.personalInfo.fullName}
              </h1>
            )}
            {editable ? (
              <InlineEditableText
                path="personalInfo.title"
                value={resumeData.personalInfo.title}
                className="mb-6 text-lg font-semibold uppercase tracking-wider text-gray-700"
                as="h2"
              />
            ) : (
              <h2 className="mb-6 text-lg font-semibold uppercase tracking-wider text-gray-700">
                {resumeData.personalInfo.title}
              </h2>
            )}
            {resumeData.personalInfo.summary && (
              editable ? (
                <InlineEditableText
                  path="personalInfo.summary"
                  value={resumeData.personalInfo.summary}
                  className="text-xs leading-relaxed text-gray-700 font-light"
                  as="p"
                  multiline
                />
              ) : (
                <p className="text-xs leading-relaxed text-gray-700 font-light">
                  {resumeData.personalInfo.summary}
                </p>
              )
            )}
          </div>

          {/* Professional Experience */}
          {resumeData.experience.length > 0 && (
            <div className="mb-10">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-900 pb-2 border-b" style={{ borderColor: themeColor }}>
                Professional Experience
              </h3>
              {editable ? (
                <InlineEditableList
                  path="experience"
                  items={resumeData.experience}
                  defaultItem={{
                    id: Date.now().toString(),
                    company: "Company Name",
                    position: "Position Title",
                    startDate: "2023-01",
                    endDate: "2024-01",
                    description: "Job description",
                    bulletPoints: [],
                    current: false,
                  }}
                  addButtonLabel="Add Experience"
                  renderItem={(exp, index) => (
                    <div>
                      <div className="mb-3">
                        <InlineEditableText
                          path={`experience[${index}].position`}
                          value={exp.position}
                          className="text-xs font-semibold text-gray-900 mb-1"
                          as="h4"
                        />
                        <div className="flex items-baseline justify-between">
                          <InlineEditableText
                            path={`experience[${index}].company`}
                            value={exp.company}
                            className="text-xs font-medium"
                            as="p"
                            style={{ color: themeColor }}
                          />
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <InlineEditableDate
                                path={`experience[${index}].startDate`}
                                value={exp.startDate}
                                className="inline-block"
                              />
                              <span> — </span>
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
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        {editable ? (
                          <>
                            {(exp.bulletPoints && exp.bulletPoints.length > 0) ? (
                              exp.bulletPoints.map((bullet, bulletIndex) => (
                                <div key={bulletIndex} className="flex items-start gap-2 group">
                                  <div className="flex-1">
                                    <InlineEditableText
                                      path={`experience[${index}].bulletPoints[${bulletIndex}]`}
                                      value={bullet}
                                      className="text-xs leading-relaxed text-gray-700 font-light pl-4 relative"
                                      placeholder="Enter bullet point..."
                                      as="div"
                                      multiline
                                    />
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeBulletPoint(exp.id, bulletIndex)}
                                    className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:text-red-600"
                                    disabled={exp.bulletPoints.length <= 1}
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                </div>
                              ))
                            ) : (
                              <div className="text-xs leading-relaxed text-gray-700 font-light pl-4 relative before:content-['•'] before:absolute before:left-0">
                                No bullet points yet. Click "Add Bullet Point" to add one.
                              </div>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => addBulletPoint(exp.id)}
                              className="h-7 px-2 text-xs border-dashed w-full justify-start"
                            >
                              <Plus className="h-3 w-3 mr-1" />
                              Add Bullet Point
                            </Button>
                          </>
                        ) : (
                          // Non-editable mode (read-only)
                          (exp.bulletPoints && exp.bulletPoints.length > 0) ? (
                            exp.bulletPoints.map((bullet, bulletIndex) => (
                              <p key={bulletIndex} className="text-xs leading-relaxed text-gray-700 font-light pl-4 relative before:content-['•'] before:absolute before:left-0" style={{ color: 'inherit' }}>
                                {bullet}
                              </p>
                            ))
                          ) : (
                            exp.description && (
                              <p className="text-xs leading-relaxed text-gray-700 font-light">
                                {exp.description}
                              </p>
                            )
                          )
                        )}
                      </div>
                    </div>
                  )}
                />
              ) : (
                <div className="space-y-6">
                  {resumeData.experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-gray-900 mb-1">
                          {exp.position}
                        </h4>
                        <div className="flex items-baseline justify-between">
                          <p className="text-xs font-medium" style={{ color: themeColor }}>
                            {exp.company}
                          </p>
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        {(exp.bulletPoints && exp.bulletPoints.length > 0) ? (
                          exp.bulletPoints.map((bullet, bulletIndex) => (
                            <p key={bulletIndex} className="text-xs leading-relaxed text-gray-700 font-light pl-4 relative before:content-['•'] before:absolute before:left-0" style={{ color: 'inherit' }}>
                              {bullet}
                            </p>
                          ))
                        ) : (
                          exp.description && exp.description.split("\n").map((line, idx) => (
                            <p key={idx} className="text-xs leading-relaxed text-gray-700 font-light pl-4 relative before:content-['•'] before:absolute before:left-0" style={{ color: 'inherit' }}>
                              {line}
                            </p>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Custom Sections */}
          {editable ? (
            <InlineEditableList
              path="sections"
              items={resumeData.sections}
              defaultItem={{
                id: Date.now().toString(),
                title: "Section Title",
                content: "Section content",
              }}
              addButtonLabel="Add Section"
              renderItem={(section, index) => (
                <div className="mb-10">
                  <InlineEditableText
                    path={`sections[${index}].title`}
                    value={section.title}
                    className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-900 pb-2 border-b"
                    as="h3"
                    style={{ borderColor: themeColor }}
                  />
                  <InlineEditableText
                    path={`sections[${index}].content`}
                    value={section.content}
                    className="text-xs leading-relaxed text-gray-700 font-light"
                    as="div"
                    multiline
                  />
                </div>
              )}
            />
          ) : (
            resumeData.sections.map((section) => (
              <div key={section.id} className="mb-10">
                <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-900 pb-2 border-b" style={{ borderColor: themeColor }}>
                  {section.title}
                </h3>
                <div className="space-y-1.5">
                  {section.content.split("\n").map((line, idx) => (
                    <p key={idx} className="text-sm leading-relaxed text-gray-700 font-light pl-4 relative before:content-['•'] before:absolute before:left-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};