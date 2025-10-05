import type { ResumeData } from "@/pages/Editor";
import { Mail, Phone, MapPin } from "lucide-react";
import { ProfilePhoto } from "./ProfilePhoto";

interface TemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
}

const formatDate = (date: string) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const BackendTemplate = ({ resumeData, themeColor = "#374151" }: TemplateProps) => {
  const photo = resumeData.personalInfo.photo;

  return (
    <div className="w-full min-h-[297mm] bg-white font-sans text-gray-900">
      {/* Header Section - Minimal with subtle accent */}
      <div className="px-12 pt-10 pb-8 border-b-2 border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">{resumeData.personalInfo.fullName}</h1>
              <p className="text-lg font-medium text-gray-600">{resumeData.personalInfo.title}</p>
            </div>
            <ProfilePhoto src={photo} borderClass="border-2 border-gray-200" />
          </div>
          
          {/* Contact Info */}
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600">
            {resumeData.personalInfo.email && (
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
            {resumeData.personalInfo.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{resumeData.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-12 py-8">
        {/* Professional Summary */}
        {resumeData.personalInfo.summary && (
          <div className="mb-7">
            <h2 className="text-sm font-bold mb-3 text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{resumeData.personalInfo.summary}</p>
          </div>
        )}

        {/* Technical Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div className="mb-7">
            <h2 className="text-sm font-bold mb-3 text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
              Technical Skills
            </h2>
            <div className="text-sm text-gray-700 leading-relaxed">
              {resumeData.skills.map(skill => skill.name).join(" • ")}
            </div>
          </div>
        )}

        {/* Professional Experience */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <div className="mb-7">
            <h2 className="text-sm font-bold mb-3 text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
              Professional Experience
            </h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-5 last:mb-0">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-sm font-medium text-gray-700">{exp.company}</p>
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div className="mb-7">
            <h2 className="text-sm font-bold mb-3 text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
              Education
            </h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                    {edu.field && <p className="text-sm text-gray-600">{edu.field}</p>}
                    <p className="text-sm text-gray-700">{edu.school}</p>
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
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
            <div key={index} className="mb-7">
              <h2 className="text-sm font-bold mb-3 text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
                {section.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{section.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
