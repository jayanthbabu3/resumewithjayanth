import type { ResumeData } from "@/pages/Editor";
import { ProfilePhoto } from "./ProfilePhoto";

interface PremiumProTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
}

export const PremiumProTemplate = ({
  resumeData,
  themeColor = "#0f766e",
}: PremiumProTemplateProps) => {
  const photo = resumeData.personalInfo.photo;

  return (
    <div className="w-full h-full bg-white flex">
      {/* Left Accent Panel */}
      <div 
        className="w-2 flex-shrink-0" 
        style={{ backgroundColor: themeColor }}
      />
      
      <div className="flex-1 p-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {resumeData.personalInfo.fullName}
              </h1>
              {resumeData.personalInfo.title && (
                <p className="text-lg font-medium text-gray-600 mb-4">
                  {resumeData.personalInfo.title}
                </p>
              )}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700">
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
            {photo && (
              <div className="ml-6">
                <div style={{ borderColor: themeColor }} className="border-3 rounded-xl overflow-hidden">
                  <ProfilePhoto
                    src={photo}
                    borderClass=""
                    className="rounded-none"
                  />
                </div>
              </div>
            )}
          </div>
          
          {resumeData.personalInfo.summary && (
            <div className="relative pl-4">
              <div 
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full" 
                style={{ backgroundColor: themeColor }}
              />
              <p className="text-sm text-gray-700 leading-relaxed">
                {resumeData.personalInfo.summary}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="col-span-4 space-y-7">
            {/* Education */}
            {resumeData.education && resumeData.education.length > 0 && (
              <div>
                <h2 
                  className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b-2"
                  style={{ color: themeColor, borderColor: themeColor }}
                >
                  Education
                </h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div key={index}>
                      <h3 className="text-sm font-bold text-gray-900">
                        {edu.degree}
                      </h3>
                      {edu.field && (
                        <p className="text-xs text-gray-600 mt-1">{edu.field}</p>
                      )}
                      <p className="text-xs font-semibold mt-1" style={{ color: themeColor }}>
                        {edu.school}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {resumeData.skills && resumeData.skills.length > 0 && (
              <div>
                <h2 
                  className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b-2"
                  style={{ color: themeColor, borderColor: themeColor }}
                >
                  Skills
                </h2>
                <div className="space-y-3">
                  {resumeData.skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-xs text-gray-500">
                            {skill.level}/10
                          </span>
                        )}
                      </div>
                      {skill.level && (
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${skill.level * 10}%`,
                              backgroundColor: themeColor,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="col-span-8 space-y-7">
            {/* Experience */}
            {resumeData.experience && resumeData.experience.length > 0 && (
              <div>
                <h2 
                  className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b-2"
                  style={{ color: themeColor, borderColor: themeColor }}
                >
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-gray-900">
                            {exp.position}
                          </h3>
                          <p 
                            className="text-sm font-semibold mt-1"
                            style={{ color: themeColor }}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <div 
                          className="text-xs font-medium px-3 py-1 rounded-full"
                          style={{ 
                            backgroundColor: `${themeColor}20`,
                            color: themeColor 
                          }}
                        >
                          {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                        </div>
                      </div>
                      {exp.description && (
                        <div className="text-sm text-gray-700 leading-relaxed">
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
              </div>
            )}

            {/* Sections */}
            {resumeData.sections &&
              resumeData.sections.map((section, index) => (
                <div key={index}>
                  <h2 
                    className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b-2"
                    style={{ color: themeColor, borderColor: themeColor }}
                  >
                    {section.title}
                  </h2>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    {section.content.split("\n").map((line, i) => (
                      <p key={i} className="mb-1">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
