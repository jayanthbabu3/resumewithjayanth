import type { ResumeData } from "@/pages/Editor";
import { Mail, Phone, MapPin, Code2, Database, Server } from "lucide-react";
import { ProfilePhoto } from "./ProfilePhoto";

interface TemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
}

const normalizeHex = (color?: string) => {
  if (!color || !color.startsWith("#")) return undefined;
  if (color.length === 4) {
    const [_, r, g, b] = color;
    return `#${r}${r}${g}${g}${b}${b}`;
  }
  return color.slice(0, 7);
};

const withOpacity = (color: string | undefined, alpha: string) => {
  const normalized = normalizeHex(color);
  if (!normalized) return color;
  return `${normalized}${alpha}`;
};

const formatDate = (date: string) => {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const FullstackTemplate = ({ resumeData, themeColor = "#7c3aed" }: TemplateProps) => {
  const photo = resumeData.personalInfo.photo;
  const accent = normalizeHex(themeColor) ?? "#7c3aed";
  const accentBorder = withOpacity(accent, "33") ?? "#e5e7eb";
  const accentSoft = withOpacity(accent, "18") ?? "#f5f3ff";

  return (
    <div className="w-full min-h-[297mm] bg-white font-sans text-gray-900 flex text-[13px] leading-relaxed">
      {/* Left Sidebar */}
      <div className="w-[35%] bg-gray-50 p-8" style={{ borderRight: `1px solid ${accentBorder}` }}>
        <div className="mb-6 flex justify-center">
          <ProfilePhoto src={photo} borderClass="border-4 border-white" />
        </div>
        {/* Header */}
        <div className="mb-8 pb-4" style={{ borderBottom: `1px solid ${accent}` }}>
          <h1 className="text-[24px] font-bold mb-1.5 text-gray-900 leading-tight">
            {resumeData.personalInfo.fullName}
          </h1>
          <p className="text-[12.5px] font-semibold" style={{ color: accent }}>
            {resumeData.personalInfo.title}
          </p>
        </div>

        {/* Contact Info */}
        <div className="mb-8 pb-6" style={{ borderBottom: `1px solid ${accentBorder}` }}>
          <h2 className="text-[11px] font-semibold mb-3 uppercase tracking-wide text-gray-900">
            Contact
          </h2>
          <div className="space-y-2 text-[11px] text-gray-700">
            {resumeData.personalInfo.email && (
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                <span className="break-all">{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: accent }} />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
            {resumeData.personalInfo.location && (
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                <span>{resumeData.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>

        {/* Technical Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div className="mb-8 pb-6" style={{ borderBottom: `1px solid ${accentBorder}` }}>
            <h2 className="text-[11px] font-semibold mb-3 uppercase tracking-wide" style={{ color: accent }}>
              Skills
            </h2>
            <div className="space-y-1.5">
              {resumeData.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="text-[11px] font-medium text-gray-800 py-1.5 px-2.5 rounded"
                  style={{
                    backgroundColor: accentSoft,
                    borderLeft: `2px solid ${accent}`,
                  }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div>
            <h2 className="text-[11px] font-semibold mb-3 uppercase tracking-wide" style={{ color: accent }}>
              Education
            </h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="text-[12px] font-semibold text-gray-900 mb-1">
                  {edu.degree}
                </h3>
                {edu.field && (
                  <p className="text-[11px] text-gray-600 mb-0.5">{edu.field}</p>
                )}
                <p className="text-[11px] text-gray-700 font-medium">{edu.school}</p>
                <p className="text-[10px] text-gray-500 mt-1">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Main Content */}
      <div className="w-[65%] p-8">
        {/* Professional Summary */}
        {resumeData.personalInfo.summary && (
          <div className="mb-7">
            <h2
              className="text-[13px] font-semibold mb-3 uppercase tracking-wide pb-2"
              style={{ color: accent, borderBottom: `1px solid ${accent}` }}
            >
              Professional Summary
            </h2>
            <p className="text-[12.5px] text-gray-700 leading-[1.7]">
              {resumeData.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Professional Experience */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <div className="mb-7">
            <h2
              className="text-[13px] font-semibold mb-3 uppercase tracking-wide pb-2"
              style={{ color: accent, borderBottom: `1px solid ${accent}` }}
            >
              Professional Experience
            </h2>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="mb-5 last:mb-0">
                <div className="flex justify-between items-start mb-1 gap-4">
                  <div>
                    <h3 className="text-[14px] font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-[12.5px] font-medium text-gray-700">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium whitespace-nowrap">
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </div>
                </div>
                <p className="text-[12.5px] text-gray-600 leading-[1.7] whitespace-pre-wrap">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Custom Sections */}
        {resumeData.sections &&
          resumeData.sections.map((section, index) => (
            <div key={index} className="mb-7">
              <h2
                className="text-[13px] font-semibold mb-3 uppercase tracking-wide pb-2"
                style={{ color: accent, borderBottom: `1px solid ${accent}` }}
              >
                {section.title}
              </h2>
              <p className="text-[12.5px] text-gray-700 leading-[1.7] whitespace-pre-wrap">
                {section.content}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};
