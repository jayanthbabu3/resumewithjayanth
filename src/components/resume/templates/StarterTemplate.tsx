import type { ResumeData } from "@/pages/Editor";
import { Mail, Phone, MapPin } from "lucide-react";
import { ProfilePhoto } from "./ProfilePhoto";

interface StarterTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
}

export const StarterTemplate = ({ resumeData, themeColor = "#0EA5E9" }: StarterTemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  const photo = resumeData.personalInfo.photo;

  return (
    <div className="w-full h-full bg-white p-12 overflow-auto">
      <div className="max-w-[800px] mx-auto space-y-6">
        {/* Header */}
        <div className="pb-5 border-b-2" style={{ borderColor: themeColor }}>
          <div className="flex justify-center mb-4">
            <ProfilePhoto src={photo} borderClass="border-2 border-gray-200" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
            {resumeData.personalInfo.fullName}
          </h1>
          {resumeData.personalInfo.title && (
            <p className="text-base text-gray-600 mb-3">{resumeData.personalInfo.title}</p>
          )}
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            {resumeData.personalInfo.email && (
              <span className="flex items-center gap-1.5">
                <Mail className="h-3 w-3" />
                {resumeData.personalInfo.email}
              </span>
            )}
            {resumeData.personalInfo.phone && (
              <span className="flex items-center gap-1.5">
                <Phone className="h-3 w-3" />
                {resumeData.personalInfo.phone}
              </span>
            )}
            {resumeData.personalInfo.location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3" />
                {resumeData.personalInfo.location}
              </span>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {resumeData.personalInfo.summary && (
          <section className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Profile
            </h2>
            <p className="text-xs leading-relaxed text-gray-700">{resumeData.personalInfo.summary}</p>
          </section>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Education
            </h2>
            <div className="space-y-3">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-gray-900">{edu.degree}</h3>
                      {edu.field && <div className="text-xs text-gray-600">{edu.field}</div>}
                      <div className="text-xs font-medium" style={{ color: themeColor }}>{edu.school}</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {resumeData.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section - Prominent for Freshers */}
        {resumeData.sections && resumeData.sections.length > 0 && (
          <>
            {resumeData.sections.map((section, index) => (
              <section key={index} className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
                  {section.title}
                </h2>
                <div className="text-xs leading-relaxed text-gray-700 whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            ))}
          </>
        )}

        {/* Experience/Internships */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Internships & Experience
            </h2>
            <div className="space-y-4">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-gray-900">{exp.position}</h3>
                      <div className="text-xs font-medium" style={{ color: themeColor }}>{exp.company}</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                    </div>
                  </div>
                  {exp.description && (
                    <div className="text-xs leading-relaxed text-gray-600 whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
