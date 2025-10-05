import type { ResumeData } from "@/pages/Editor";

interface GraduateTemplateProps {
  resumeData: ResumeData;
}

export const GraduateTemplate = ({ resumeData }: GraduateTemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="w-full h-full bg-background p-12 overflow-auto">
      <div className="max-w-[850px] mx-auto space-y-8">
        {/* Header Section with Accent Bar */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-1.5 h-full bg-gradient-to-b from-primary to-primary/50 rounded-full" />
          <div className="pl-8 space-y-3">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {resumeData.personalInfo.fullName}
            </h1>
            {resumeData.personalInfo.title && (
              <p className="text-lg text-muted-foreground font-medium">{resumeData.personalInfo.title}</p>
            )}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {resumeData.personalInfo.email && <span className="flex items-center gap-2">{resumeData.personalInfo.email}</span>}
              {resumeData.personalInfo.phone && <span className="flex items-center gap-2">{resumeData.personalInfo.phone}</span>}
              {resumeData.personalInfo.location && <span className="flex items-center gap-2">{resumeData.personalInfo.location}</span>}
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Education & Skills */}
          <div className="col-span-1 space-y-6">
            {/* Education */}
            {resumeData.education && resumeData.education.length > 0 && (
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-primary pb-2 border-b-2 border-primary/20">
                  EDUCATION
                </h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="space-y-1">
                      <div className="font-semibold text-sm leading-tight">{edu.degree}</div>
                      {edu.field && <div className="text-xs text-muted-foreground">{edu.field}</div>}
                      <div className="text-xs text-muted-foreground">{edu.school}</div>
                      <div className="text-xs text-muted-foreground">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skills */}
            {resumeData.skills && resumeData.skills.length > 0 && (
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-primary pb-2 border-b-2 border-primary/20">
                  SKILLS
                </h2>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Summary & Experience */}
          <div className="col-span-2 space-y-6">
            {/* Professional Summary */}
            {resumeData.personalInfo.summary && (
              <section className="space-y-3">
                <h2 className="text-lg font-bold text-primary pb-2 border-b-2 border-primary/20">
                  PROFILE
                </h2>
                <p className="text-sm leading-relaxed text-foreground/90">{resumeData.personalInfo.summary}</p>
              </section>
            )}

            {/* Experience */}
            {resumeData.experience && resumeData.experience.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-lg font-bold text-primary pb-2 border-b-2 border-primary/20">
                  EXPERIENCE
                </h2>
                <div className="space-y-5">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-base">{exp.position}</h3>
                          <div className="text-sm text-primary font-medium">{exp.company}</div>
                        </div>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">
                          {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                        </div>
                      </div>
                      {exp.description && (
                        <div className="text-sm leading-relaxed text-foreground/80 pl-4 border-l-2 border-primary/20 whitespace-pre-line">
                          {exp.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Custom Sections */}
            {resumeData.sections &&
              resumeData.sections.map((section, index) => (
                <section key={index} className="space-y-3">
                  <h2 className="text-lg font-bold text-primary pb-2 border-b-2 border-primary/20">
                    {section.title.toUpperCase()}
                  </h2>
                  <div className="text-sm leading-relaxed text-foreground/90 whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
