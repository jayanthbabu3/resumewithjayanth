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
      <div className="px-16 py-12">
        {/* Header Section */}
        <div className="mb-10 pb-8 border-b-2" style={{ borderColor: `${themeColor}30` }}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1
                className="mb-3 text-6xl font-extralight tracking-tight"
                style={{ color: themeColor }}
              >
                {personalInfo.fullName}
              </h1>
              <h2 className="mb-5 text-base font-medium uppercase tracking-[0.2em] text-gray-700">
                {personalInfo.title}
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                {personalInfo.email && (
                  <span className="flex items-center gap-2">
                    <span style={{ color: themeColor }}>✉</span>
                    {personalInfo.email}
                  </span>
                )}
                {personalInfo.phone && (
                  <span className="flex items-center gap-2">
                    <span style={{ color: themeColor }}>☎</span>
                    {personalInfo.phone}
                  </span>
                )}
                {personalInfo.location && (
                  <span className="flex items-center gap-2">
                    <span style={{ color: themeColor }}>⌂</span>
                    {personalInfo.location}
                  </span>
                )}
              </div>
            </div>
            {personalInfo.photo && (
              <div className="ml-10">
                <ProfilePhoto src={personalInfo.photo} sizeClass="h-32 w-32" />
              </div>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {personalInfo.summary && (
          <div className="mb-10">
            <h3
              className="mb-4 text-sm font-bold uppercase tracking-[0.15em]"
              style={{ color: themeColor }}
            >
              <span className="inline-block mr-3 align-middle h-[2px] w-8" style={{ backgroundColor: themeColor }} />
              Summary
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 font-light">
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Professional Experience */}
        {experience.length > 0 && (
          <div className="mb-10">
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-[0.15em]"
              style={{ color: themeColor }}
            >
              <span className="inline-block mr-3 align-middle h-[2px] w-8" style={{ backgroundColor: themeColor }} />
              Experience
            </h3>
            <div className="space-y-7">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-6 border-l-2" style={{ borderColor: `${themeColor}20` }}>
                  <div
                    className="absolute left-[-5px] top-1 h-2 w-2 rounded-full"
                    style={{ backgroundColor: themeColor }}
                  />
                  <div className="mb-2 flex items-baseline justify-between">
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900">
                        {exp.position}
                      </h4>
                      <p className="text-sm font-medium mt-1" style={{ color: themeColor }}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="ml-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {exp.description.split("\n").map((line, idx) => (
                      <p key={idx} className="text-sm leading-relaxed text-gray-700 font-light">
                        • {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-10">
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-[0.15em]"
              style={{ color: themeColor }}
            >
              <span className="inline-block mr-3 align-middle h-[2px] w-8" style={{ backgroundColor: themeColor }} />
              Education
            </h3>
            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.id} className="pl-6 border-l-2" style={{ borderColor: `${themeColor}20` }}>
                  <div className="flex items-baseline justify-between">
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-gray-900">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h4>
                      <p className="text-sm font-medium mt-1" style={{ color: themeColor }}>
                        {edu.school}
                      </p>
                    </div>
                    <span className="ml-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {edu.startDate} — {edu.endDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-10">
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-[0.15em]"
              style={{ color: themeColor }}
            >
              <span className="inline-block mr-3 align-middle h-[2px] w-8" style={{ backgroundColor: themeColor }} />
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-4 py-2 text-sm font-light text-gray-700 border rounded-full"
                  style={{ borderColor: `${themeColor}30` }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Custom Sections */}
        {sections.map((section) => (
          <div key={section.id} className="mb-10">
            <h3
              className="mb-5 text-sm font-bold uppercase tracking-[0.15em]"
              style={{ color: themeColor }}
            >
              <span className="inline-block mr-3 align-middle h-[2px] w-8" style={{ backgroundColor: themeColor }} />
              {section.title}
            </h3>
            <div className="space-y-2">
              {section.content.split("\n").map((line, idx) => (
                <p key={idx} className="text-sm text-gray-700 font-light">
                  • {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};