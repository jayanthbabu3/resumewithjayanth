import type { ResumeData } from "@/pages/Editor";
import { Mail, Phone, MapPin } from "lucide-react";

interface TemplateProps {
  resumeData: ResumeData;
}

export const MinimalTemplate = ({ resumeData }: TemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="w-full h-full bg-white p-16 text-gray-900">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-light text-gray-900 mb-3 tracking-tight">
          {resumeData.personalInfo.fullName || "Your Name"}
        </h1>
        {resumeData.personalInfo.title && (
          <p className="text-lg text-gray-600 font-light mb-6 tracking-wide">
            {resumeData.personalInfo.title}
          </p>
        )}
        <div className="flex justify-center gap-6 text-xs text-gray-600">
          {resumeData.personalInfo.email && (
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              {resumeData.personalInfo.email}
            </span>
          )}
          {resumeData.personalInfo.phone && (
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              {resumeData.personalInfo.phone}
            </span>
          )}
          {resumeData.personalInfo.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {resumeData.personalInfo.location}
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      {resumeData.personalInfo.summary && (
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-sm text-gray-700 leading-relaxed text-center font-light">
            {resumeData.personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {resumeData.experience.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs font-semibold text-gray-900 mb-8 uppercase tracking-widest text-center">
            Experience
          </h2>
          <div className="space-y-10 max-w-3xl mx-auto">
            {resumeData.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {exp.position || "Position Title"}
                    </h3>
                    <p className="text-sm text-gray-600 font-light">
                      {exp.company || "Company Name"}
                    </p>
                  </div>
                  <div className="text-xs text-gray-500 font-light">
                    {formatDate(exp.startDate)} — {exp.current ? "Present" : formatDate(exp.endDate)}
                  </div>
                </div>
                {exp.description && (
                  <p className="text-sm text-gray-700 leading-relaxed font-light whitespace-pre-line">
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
        <div className="mb-12">
          <h2 className="text-xs font-semibold text-gray-900 mb-8 uppercase tracking-widest text-center">
            Education
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {resumeData.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {edu.degree || "Degree"} {edu.field && `, ${edu.field}`}
                    </h3>
                    <p className="text-sm text-gray-600 font-light">
                      {edu.school || "School Name"}
                    </p>
                  </div>
                  <div className="text-xs text-gray-500 font-light">
                    {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {resumeData.skills.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs font-semibold text-gray-900 mb-6 uppercase tracking-widest text-center">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-700 font-light max-w-3xl mx-auto">
            {resumeData.skills.map((skill, index) => (
              skill && (
                <span key={index}>
                  {skill}
                </span>
              )
            ))}
          </div>
        </div>
      )}

      {/* Custom Sections */}
      {resumeData.sections.map((section) => (
        <div key={section.id} className="mb-12">
          <h2 className="text-xs font-semibold text-gray-900 mb-6 uppercase tracking-widest text-center">
            {section.title}
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed font-light whitespace-pre-line max-w-3xl mx-auto">
            {section.content}
          </p>
        </div>
      ))}
    </div>
  );
};
