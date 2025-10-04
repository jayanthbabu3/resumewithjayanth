import type { ResumeData } from "@/pages/Editor";
import { Mail, Phone, MapPin } from "lucide-react";

interface TemplateProps {
  resumeData: ResumeData;
}

export const ExecutiveTemplate = ({ resumeData }: TemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="w-full h-full bg-white text-gray-900">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-3 tracking-tight">
            {resumeData.personalInfo.fullName || "Your Name"}
          </h1>
          {resumeData.personalInfo.title && (
            <p className="text-2xl font-light text-slate-300 mb-6">
              {resumeData.personalInfo.title}
            </p>
          )}
          <div className="flex gap-8 text-sm text-slate-300">
            {resumeData.personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
            {resumeData.personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{resumeData.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-12 max-w-5xl mx-auto">
        {/* Executive Summary */}
        {resumeData.personalInfo.summary && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-slate-900 pl-4">
              Executive Summary
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              {resumeData.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Professional Experience */}
        {resumeData.experience.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-slate-900 pl-4">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="bg-slate-50 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {exp.position || "Position Title"}
                      </h3>
                      <p className="text-lg text-slate-700 font-semibold">
                        {exp.company || "Company Name"}
                      </p>
                    </div>
                    <div className="text-sm text-slate-600 bg-white px-4 py-2 rounded">
                      {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-slate-900 pl-4">
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="bg-slate-50 p-5 rounded-lg">
                  <h3 className="text-base font-bold text-slate-900">
                    {edu.degree || "Degree"}
                  </h3>
                  <p className="text-sm text-slate-700 font-semibold mb-1">
                    {edu.school || "School Name"}
                  </p>
                  {edu.field && (
                    <p className="text-sm text-gray-600 mb-2">{edu.field}</p>
                  )}
                  <p className="text-xs text-slate-600">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Core Competencies */}
        {resumeData.skills.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-slate-900 pl-4">
              Core Competencies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {resumeData.skills.map((skill, index) => (
                skill && (
                  <div
                    key={index}
                    className="bg-slate-50 px-4 py-3 rounded text-sm font-semibold text-slate-800 text-center"
                  >
                    {skill}
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {/* Custom Sections */}
        {resumeData.sections.map((section) => (
          <div key={section.id} className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-l-4 border-slate-900 pl-4">
              {section.title}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
