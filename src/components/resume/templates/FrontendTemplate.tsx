import type { ResumeData } from "@/pages/Editor";
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";
import { ProfilePhoto } from "./ProfilePhoto";

interface TemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
  editable?: boolean;
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

export const FrontendTemplate = ({ resumeData, themeColor = "#4f46e5" }: TemplateProps) => {
  const photo = resumeData.personalInfo.photo;
  const accent = normalizeHex(themeColor) ?? "#4f46e5";
  const accentBorder = withOpacity(accent, "22") ?? "#e5e7eb";

  return (
    <div className="w-full min-h-[297mm] bg-white font-sans text-gray-800 text-[13px] leading-relaxed">
      {/* Header Section - Minimal with accent color */}
      <div className="px-12 pt-10 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-[32px] font-bold tracking-tight text-gray-900">
                {resumeData.personalInfo.fullName}
              </h1>
              <p className="text-[13px] font-semibold" style={{ color: accent }}>
                {resumeData.personalInfo.title}
              </p>
            </div>
            <ProfilePhoto src={photo} borderClass="border-4 border-white" />
          </div>
          
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-gray-600">
            {resumeData.personalInfo.email && (
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" style={{ color: accent }} />
                <span>{resumeData.personalInfo.email}</span>
              </div>
            )}
            {resumeData.personalInfo.phone && (
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" style={{ color: accent }} />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
            )}
            {resumeData.personalInfo.location && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" style={{ color: accent }} />
                <span>{resumeData.personalInfo.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="max-w-4xl mx-auto px-12 py-6"
        style={{ borderTop: `1px solid ${withOpacity(accent, "22") ?? "#e5e7eb"}` }}
      >
        {/* Professional Summary */}
        {resumeData.personalInfo.summary && (
          <div className="mb-7">
            <h2
              className="text-[13px] font-semibold mb-3 text-gray-900 uppercase tracking-wide pb-2"
              style={{ borderBottom: `2px solid ${accent}` }}
            >
              About Me
            </h2>
            <p className="text-[12.5px] text-gray-700 leading-[1.7]">
              {resumeData.personalInfo.summary}
            </p>
          </div>
        )}

        {/* Skills Section */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div className="mb-7">
            <h2
              className="text-[13px] font-semibold mb-3 text-gray-900 uppercase tracking-wide pb-2"
              style={{ borderBottom: `2px solid ${accent}` }}
            >
              Technical Skills
            </h2>
            <div className="text-[12.5px] text-gray-700 leading-[1.7]">
              {resumeData.skills.map(skill => skill.name).join(" • ")}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <div className="mb-7">
            <h2
              className="text-[13px] font-semibold mb-3 text-gray-900 uppercase tracking-wide pb-2"
              style={{ borderBottom: `2px solid ${accent}` }}
            >
              Professional Experience
            </h2>
            {resumeData.experience.map((exp, index) => (
              <div
                key={index}
                className="mb-5 last:mb-0 pl-4 border-l-2"
                style={{ borderColor: accentBorder }}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-[14px] font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-[12.5px] font-medium text-gray-700">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium">
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

        {/* Education Section */}
        {resumeData.education && resumeData.education.length > 0 && (
          <div className="mb-7">
            <h2
              className="text-[13px] font-semibold mb-3 text-gray-900 uppercase tracking-wide pb-2"
              style={{ borderBottom: `2px solid ${accent}` }}
            >
              Education
            </h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[13px] font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-[12px] text-gray-600">{edu.field}</p>
                    )}
                    <p className="text-[12.5px] text-gray-700">{edu.school}</p>
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium">
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
              <h2
                className="text-[13px] font-semibold mb-3 text-gray-900 uppercase tracking-wide pb-2"
                style={{ borderBottom: `2px solid ${accent}` }}
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
