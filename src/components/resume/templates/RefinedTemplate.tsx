import type { ResumeData } from "@/pages/Editor";
import { ProfilePhoto } from "./ProfilePhoto";

interface RefinedTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
}

export const RefinedTemplate = ({
  resumeData,
  themeColor = "#2563eb",
}: RefinedTemplateProps) => {
  const { personalInfo, experience, education, skills, sections } = resumeData;

  return (
    <div className="mx-auto bg-white font-sans text-gray-900">
      <div className="grid grid-cols-[280px,1fr]">
        {/* Left Sidebar */}
        <div className="px-8 py-12" style={{ backgroundColor: `${themeColor}15` }}>
          {/* Photo */}
          {personalInfo.photo && (
            <div className="mb-8">
              <ProfilePhoto src={personalInfo.photo} sizeClass="h-40 w-40 mx-auto" />
            </div>
          )}

          {/* Contact */}
          <div className="mb-8">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-900">
              Contact
            </h3>
            <div className="space-y-3 text-xs text-gray-700">
              {personalInfo.email && (
                <div className="break-words">
                  <div className="mb-1 font-semibold" style={{ color: themeColor }}>
                    Email
                  </div>
                  <div className="font-light">{personalInfo.email}</div>
                </div>
              )}
              {personalInfo.phone && (
                <div>
                  <div className="mb-1 font-semibold" style={{ color: themeColor }}>
                    Phone
                  </div>
                  <div className="font-light">{personalInfo.phone}</div>
                </div>
              )}
              {personalInfo.location && (
                <div>
                  <div className="mb-1 font-semibold" style={{ color: themeColor }}>
                    Location
                  </div>
                  <div className="font-light">{personalInfo.location}</div>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-900">
                Skills
              </h3>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="text-xs font-light text-gray-700 leading-relaxed"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-900">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu) => (
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="px-12 py-12">
          {/* Header */}
          <div className="mb-10">
            <h1
              className="mb-2 text-5xl font-light tracking-tight leading-tight"
              style={{ color: themeColor }}
            >
              {personalInfo.fullName}
            </h1>
            <h2 className="mb-6 text-lg font-semibold uppercase tracking-wider text-gray-700">
              {personalInfo.title}
            </h2>
            {personalInfo.summary && (
              <p className="text-sm leading-relaxed text-gray-700 font-light">
                {personalInfo.summary}
              </p>
            )}
          </div>

          {/* Professional Experience */}
          {experience.length > 0 && (
            <div className="mb-10">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-900 pb-2 border-b-2" style={{ borderColor: themeColor }}>
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="mb-3">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">
                        {exp.position}
                      </h4>
                      <div className="flex items-baseline justify-between">
                        <p className="text-sm font-medium" style={{ color: themeColor }}>
                          {exp.company}
                        </p>
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {exp.description.split("\n").map((line, idx) => (
                        <p key={idx} className="text-sm leading-relaxed text-gray-700 font-light pl-4 relative before:content-['•'] before:absolute before:left-0" style={{ color: 'inherit' }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Custom Sections */}
          {sections.map((section) => (
            <div key={section.id} className="mb-10">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-900 pb-2 border-b-2" style={{ borderColor: themeColor }}>
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
          ))}
        </div>
      </div>
    </div>
  );
};