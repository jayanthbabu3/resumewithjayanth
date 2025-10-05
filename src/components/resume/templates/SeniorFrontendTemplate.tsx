import type { ResumeData } from "@/pages/Editor";
import { Sparkles, Palette, MonitorSmartphone, Mail, Phone, MapPin } from "lucide-react";
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

export const SeniorFrontendTemplate = ({ resumeData, themeColor = "#ec4899" }: TemplateProps) => {
  const photo = resumeData.personalInfo.photo;
  const skillLevels = resumeData.skills.slice(0, 6).map((skill, index) => ({
    skill,
    level: Math.max(55, 95 - index * 7),
  }));

  const experience = resumeData.experience;
  const featuredSections = resumeData.sections || [];

  return (
    <div className="w-full min-h-[297mm] bg-white text-slate-900 font-sans">
      <div className="grid lg:grid-cols-[34%,66%] gap-2 px-8 py-8">
        {/* Sidebar */}
        <aside className="space-y-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-7 text-slate-900 shadow-sm">
            <div className="flex flex-col items-center text-center gap-4">
              <ProfilePhoto
                src={photo}
                sizeClass="h-28 w-28"
                borderClass="border-4 border-white"
              />
              <div className="space-y-1">
                <h1 className="text-[26px] font-semibold tracking-tight leading-tight">
                  {resumeData.personalInfo.fullName}
                </h1>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-500">
                  {resumeData.personalInfo.title}
                </p>
              </div>
              <div className="w-full space-y-1.5 text-[11px]">
                {[
                  { icon: Mail, value: resumeData.personalInfo.email },
                  { icon: Phone, value: resumeData.personalInfo.phone },
                  { icon: MapPin, value: resumeData.personalInfo.location },
                ]
                  .filter(item => !!item.value)
                  .map(({ icon: Icon, value }) => (
                    <div
                      key={value}
                      className="flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-slate-700 border border-slate-200"
                    >
                      <Icon className="h-3.5 w-3.5" style={{ color: themeColor }} />
                      <span className="text-[11px] font-medium leading-tight">{value}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {resumeData.personalInfo.summary && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2.5">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                <Sparkles className="h-4 w-4" style={{ color: themeColor }} />
                Summary
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                {resumeData.personalInfo.summary}
              </p>
            </div>
          )}

          <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              <Palette className="h-4 w-4" style={{ color: themeColor }} />
              Core Skills
            </div>
            <div className="space-y-2.5">
              {skillLevels.map(({ skill, level }) => (
                <div key={skill} className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-600">
                    <span>{skill}</span>
                    <span>{level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${level}%`, backgroundColor: themeColor }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {featuredSections.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                <MonitorSmartphone className="h-4 w-4" style={{ color: themeColor }} />
                Highlights
              </div>
              <div className="space-y-3.5">
                {featuredSections.map(section => (
                  <div key={section.id}>
                    <h3 className="text-sm font-semibold text-slate-800 mb-1">{section.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600 whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="space-y-4.5">
          {experience.length > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-white overflow-hidden mb-2">
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-100">
                <h2 className="text-base font-semibold tracking-tight text-slate-800">Professional Experience</h2>
                <span className="text-[10px] uppercase tracking-[0.35em] text-slate-500">2014 — Present</span>
              </div>
              <div className="px-5 py-4 space-y-4">
                {experience.map(item => (
                  <div key={item.id} className="relative pl-6">
                    <span
                      className="absolute left-0 top-2 block h-3 w-3 rounded-full"
                      style={{ backgroundColor: themeColor }}
                    />
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{item.position}</h3>
                        <p className="text-sm font-medium text-slate-600">{item.company}</p>
                      </div>
                      <p className="text-xs font-medium text-slate-500">
                        {formatDate(item.startDate)} — {item.current ? "Present" : formatDate(item.endDate)}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {resumeData.skills.length > 6 && (
            <section className="rounded-2xl border border-slate-200 bg-white p-4 mb-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 mb-2.5">Toolbox</h2>
              <div className="flex flex-wrap gap-1.5">
                {resumeData.skills.slice(6).map(skill => (
                  <span
                    key={skill}
                    className="px-2.5 py-[3px] text-[11px] rounded-full border border-slate-200 bg-slate-50 text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {resumeData.education.length > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold tracking-tight mb-3 text-slate-800">Education</h2>
              <div className="space-y-3">
                {resumeData.education.map(edu => (
                  <div key={edu.id} className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">{edu.degree}</h3>
                      {edu.field && <p className="text-xs text-slate-600">{edu.field}</p>}
                      <p className="text-sm font-medium text-slate-700">{edu.school}</p>
                    </div>
                    <p className="text-xs font-medium text-slate-500 mt-2 md:mt-0">
                      {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};
