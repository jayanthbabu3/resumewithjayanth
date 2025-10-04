import type { ResumeData } from "@/pages/Editor";
import { Mail, Phone, MapPin } from "lucide-react";

interface TemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
}

const formatDate = (date: string) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const BackendTemplate = ({ resumeData, themeColor = "#059669" }: TemplateProps) => {
  return (
    <div className="w-full min-h-[297mm] bg-white font-sans text-gray-900">
      {/* Header Section */}
      <div className="text-white px-8 py-8" style={{ backgroundColor: themeColor }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-2 tracking-tight">{resumeData.personalInfo.fullName}</h1>
          <p className="text-xl font-light mb-5 opacity-90">{resumeData.personalInfo.title}</p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-5 text-sm">
            {resumeData.personalInfo.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
            {resumeData.personalInfo.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{resumeData.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8">
        {/* Professional Summary */}
        {resumeData.personalInfo.summary && (
          <div className="mb-8 pb-6" style={{ borderBottom: `2px solid ${themeColor}20` }}>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 uppercase tracking-wide" style={{ color: themeColor }}>
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{resumeData.personalInfo.summary}</p>
          </div>
        )}

        {/* Technical Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div className="mb-8 pb-6" style={{ borderBottom: `2px solid ${themeColor}20` }}>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase tracking-wide" style={{ color: themeColor }}>
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-md text-sm font-semibold"
                  style={{ 
                    backgroundColor: `${themeColor}15`, 
                    color: themeColor,
                    border: `1px solid ${themeColor}30`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Professional Experience */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <div className="mb-8 pb-6" style={{ borderBottom: `2px solid ${themeColor}20` }}>
            <h2 className="text-2xl font-bold mb-5 text-gray-900 uppercase tracking-wide" style={{ color: themeColor }}>
              Professional Experience
            </h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-lg font-semibold" style={{ color: themeColor }}>{exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-600 font-medium px-3 py-1 rounded" style={{ backgroundColor: `${themeColor}10` }}>
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div className="mb-8 pb-6" style={{ borderBottom: `2px solid ${themeColor}20` }}>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase tracking-wide" style={{ color: themeColor }}>
              Education
            </h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                    {edu.field && <p className="text-gray-700 font-medium">{edu.field}</p>}
                    <p className="font-semibold" style={{ color: themeColor }}>{edu.school}</p>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Sections */}
        {resumeData.sections &&
          resumeData.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold mb-3 text-gray-900 uppercase tracking-wide" style={{ color: themeColor }}>
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{section.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
