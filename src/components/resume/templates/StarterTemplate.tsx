import type { ResumeData } from "@/pages/Editor";

interface StarterTemplateProps {
  resumeData: ResumeData;
}

export const StarterTemplate = ({ resumeData }: StarterTemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="w-full h-full bg-background p-12 overflow-auto">
      <div className="max-w-[800px] mx-auto">
        {/* Header with Modern Design */}
        <div className="mb-10 pb-8 border-b-4 border-primary/30">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">{resumeData.personalInfo.fullName}</h1>
            {resumeData.personalInfo.title && (
              <p className="text-xl text-muted-foreground font-medium">{resumeData.personalInfo.title}</p>
            )}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
              {resumeData.personalInfo.phone && <span>•</span>}
              {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
              {resumeData.personalInfo.location && <span>•</span>}
              {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Professional Summary */}
          {resumeData.personalInfo.summary && (
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                Professional Summary
              </h2>
              <div className="bg-muted/30 p-5 rounded-lg">
                <p className="text-sm leading-relaxed">{resumeData.personalInfo.summary}</p>
              </div>
            </section>
          )}

          {/* Education - Prominent for Freshers */}
          {resumeData.education && resumeData.education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                Education
              </h2>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="bg-muted/20 p-5 rounded-lg space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{edu.degree}</h3>
                        {edu.field && <div className="text-sm text-muted-foreground">{edu.field}</div>}
                        <div className="text-primary font-semibold">{edu.school}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills with Visual Emphasis */}
          {resumeData.skills && resumeData.skills.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                Core Skills
              </h2>
              <div className="bg-muted/20 p-5 rounded-lg">
                <div className="flex flex-wrap gap-3">
                  {resumeData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Experience */}
          {resumeData.experience && resumeData.experience.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                Experience
              </h2>
              <div className="space-y-5">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{exp.position}</h3>
                        <div className="text-primary font-semibold">{exp.company}</div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                      </div>
                    </div>
                    {exp.description && (
                      <div className="text-sm leading-relaxed pl-4 border-l-4 border-primary/30 whitespace-pre-line">
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
              <section key={index}>
                <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-wide">
                  {section.title}
                </h2>
                <div className="bg-muted/20 p-5 rounded-lg text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            ))}
        </div>
      </div>
    </div>
  );
};
