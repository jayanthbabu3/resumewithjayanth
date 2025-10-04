import type { ResumeData } from "@/pages/Editor";
import { Mail, Phone, MapPin, Code2, Database, Server } from "lucide-react";

interface TemplateProps {
  resumeData: ResumeData;
}

const formatDate = (date: string) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const FullstackTemplate = ({ resumeData }: TemplateProps) => {
  return (
    <div className="w-full min-h-[297mm] bg-white font-sans text-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-3 tracking-tight">{resumeData.personalInfo.fullName}</h1>
          <p className="text-2xl font-light mb-6 text-purple-100">{resumeData.personalInfo.title}</p>
          
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
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
              <div className="w-1.5 h-7 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify pl-6">{resumeData.personalInfo.summary}</p>
          </div>
        )}

        {/* Technical Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
              <div className="w-1.5 h-7 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
              Technical Skills
            </h2>
            <div className="grid grid-cols-3 gap-3 pl-6">
              {resumeData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-2.5 rounded-lg border-l-4 border-purple-600 text-sm font-semibold text-gray-800 shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Professional Experience */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
              <div className="w-1.5 h-7 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
              Professional Experience
            </h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6 pl-6">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-purple-600 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="bg-purple-100 px-3 py-1.5 rounded-lg text-sm text-purple-700 font-semibold whitespace-nowrap">
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
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
              <div className="w-1.5 h-7 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
              Education
            </h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border-l-4 border-purple-600 ml-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                    {edu.field && <p className="text-gray-700 font-medium">{edu.field}</p>}
                    <p className="text-purple-600 font-semibold">{edu.school}</p>
                  </div>
                  <div className="text-sm text-gray-600 font-medium whitespace-nowrap">
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
              <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-3">
                <div className="w-1.5 h-7 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap pl-6">{section.content}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
