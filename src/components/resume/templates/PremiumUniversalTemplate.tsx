import { ResumeData } from "@/pages/Editor";

interface PremiumUniversalTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
}

export const PremiumUniversalTemplate = ({
  resumeData,
  themeColor = "#2563eb",
}: PremiumUniversalTemplateProps) => {
  return (
    <div className="w-full h-full bg-white text-gray-900 p-12">
      {/* Header */}
      <div className="mb-8 pb-6 border-b-2" style={{ borderColor: themeColor }}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: themeColor }}>
          {resumeData.personalInfo.fullName}
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
          {resumeData.personalInfo.email && (
            <span>{resumeData.personalInfo.email}</span>
          )}
          {resumeData.personalInfo.phone && (
            <span>{resumeData.personalInfo.phone}</span>
          )}
          {resumeData.personalInfo.location && (
            <span>{resumeData.personalInfo.location}</span>
          )}
        </div>
      </div>

      {/* Professional Summary */}
      {resumeData.personalInfo.summary && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3" style={{ color: themeColor }}>
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {resumeData.personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {resumeData.experience && resumeData.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4" style={{ color: themeColor }}>
            Professional Experience
          </h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {exp.position}
                  </h3>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </p>
                </div>
              </div>
              {exp.description && (
                <div className="text-gray-700 leading-relaxed">
                  {exp.description.split("\n").map((line, i) => (
                    <p key={i} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {resumeData.education && resumeData.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4" style={{ color: themeColor }}>
            Education
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-700">{edu.school}</p>
                </div>
                <div className="text-right text-sm text-gray-600">
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {resumeData.skills && resumeData.skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4" style={{ color: themeColor }}>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Custom Sections */}
      {resumeData.sections &&
        resumeData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h2 className="text-xl font-bold mb-4" style={{ color: themeColor }}>
              {section.title}
            </h2>
            <div className="text-gray-700 leading-relaxed">
              {section.content.split("\n").map((line, i) => (
                <p key={i} className="mb-1">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
