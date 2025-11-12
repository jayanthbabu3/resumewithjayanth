import type { ResumeData } from "@/pages/Editor";
import { InlineEditProvider } from "@/contexts/InlineEditContext";
import { InlineEditableText } from "./InlineEditableText";
import { InlineEditableList } from "./InlineEditableList";
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate";
import { ModernTemplate } from "./templates/ModernTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { ExecutiveTemplate } from "./templates/ExecutiveTemplate";
import { FrontendTemplate } from "./templates/FrontendTemplate";
import { FullstackTemplate } from "./templates/FullstackTemplate";
import { BackendTemplate } from "./templates/BackendTemplate";
import { GraduateTemplate } from "./templates/GraduateTemplate";
import { StarterTemplate } from "./templates/StarterTemplate";
import { FresherTemplate } from "./templates/FresherTemplate";
import { PremiumFresherTemplate } from "./templates/PremiumFresherTemplate";
import { SeniorTemplate } from "./templates/SeniorTemplate";
import { SeniorFrontendTemplate } from "./templates/SeniorFrontendTemplate";
import { SeniorBackendTemplate } from "./templates/SeniorBackendTemplate";
import { SoftwareTemplate } from "./templates/SoftwareTemplate";
import { PremiumUniversalTemplate } from "./templates/PremiumUniversalTemplate";
import { PremiumProTemplate } from "./templates/PremiumProTemplate";
import { FresherEliteTemplate } from "./templates/FresherEliteTemplate";
import { AnalystTemplate } from "./templates/AnalystTemplate";
import { EliteTemplate } from "./templates/EliteTemplate";
import { CorporateExecutiveTemplate } from "./templates/CorporateExecutiveTemplate";
import { RefinedTemplate } from "./templates/RefinedTemplate";
import { PremiumEliteTemplate } from "./templates/PremiumEliteTemplate";
import React from "react";

interface InlineEditableResumeProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
  templateId: string;
  themeColor?: string;
}

const templates = {
  professional: ProfessionalTemplate,
  modern: ModernTemplate,
  minimal: MinimalTemplate,
  executive: ExecutiveTemplate,
  frontend: FrontendTemplate,
  fullstack: FullstackTemplate,
  backend: BackendTemplate,
  graduate: GraduateTemplate,
  starter: StarterTemplate,
  fresher: FresherTemplate,
  "premium-fresher": PremiumFresherTemplate,
  senior: SeniorTemplate,
  "senior-frontend": SeniorFrontendTemplate,
  "senior-backend": SeniorBackendTemplate,
  software: SoftwareTemplate,
  "premium-universal": PremiumUniversalTemplate,
  "premium-pro": PremiumProTemplate,
  "fresher-elite": FresherEliteTemplate,
  analyst: AnalystTemplate,
  elite: EliteTemplate,
  "corporate-executive": CorporateExecutiveTemplate,
  refined: RefinedTemplate,
  "premium-elite": PremiumEliteTemplate,
};

// Future: Can enhance templates automatically by wrapping elements

export const InlineEditableResume = ({
  resumeData,
  setResumeData,
  templateId,
  themeColor = "#7c3aed",
}: InlineEditableResumeProps) => {
  const Template =
    templates[templateId as keyof typeof templates] || ProfessionalTemplate;

  return (
    <InlineEditProvider resumeData={resumeData} setResumeData={setResumeData}>
      <div className="mx-auto w-full max-w-[210mm] rounded-lg bg-white shadow-2xl relative">
        {/* Personal Info Overlay */}
        <div className="absolute top-0 left-0 right-0 p-8 z-10 pointer-events-none">
          <div className="pointer-events-auto space-y-2">
            <InlineEditableText
              path="personalInfo.fullName"
              value={resumeData.personalInfo.fullName}
              className="text-4xl font-bold block"
              placeholder="Your Name"
            />
            <InlineEditableText
              path="personalInfo.title"
              value={resumeData.personalInfo.title}
              className="text-xl block"
              placeholder="Your Title"
            />
            <div className="flex gap-4 text-sm">
              <InlineEditableText
                path="personalInfo.email"
                value={resumeData.personalInfo.email}
                placeholder="email@example.com"
              />
              <InlineEditableText
                path="personalInfo.phone"
                value={resumeData.personalInfo.phone}
                placeholder="Phone"
              />
              <InlineEditableText
                path="personalInfo.location"
                value={resumeData.personalInfo.location}
                placeholder="Location"
              />
            </div>
          </div>
        </div>

        {/* Render original template in background */}
        <div className="opacity-30">
          <Template resumeData={resumeData} themeColor={themeColor} />
        </div>

        {/* Editable content overlay */}
        <div className="absolute top-64 left-0 right-0 bottom-0 p-8 z-10">
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Summary</h3>
              <InlineEditableText
                path="personalInfo.summary"
                value={resumeData.personalInfo.summary}
                multiline
                placeholder="Write your professional summary..."
                className="block"
              />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Experience</h3>
              <InlineEditableList
                path="experience"
                items={resumeData.experience}
                defaultItem={{
                  company: "Company Name",
                  position: "Position",
                  startDate: "2024-01",
                  endDate: "",
                  current: true,
                  description: "Job description here",
                }}
                addButtonLabel="Add Experience"
                renderItem={(exp, index) => (
                  <div className="border rounded p-4 bg-white">
                    <InlineEditableText
                      path={`experience[${index}].position`}
                      value={exp.position}
                      className="font-semibold block"
                    />
                    <InlineEditableText
                      path={`experience[${index}].company`}
                      value={exp.company}
                      className="text-green-600 block"
                    />
                    <div className="flex gap-2 text-sm">
                      <InlineEditableText
                        path={`experience[${index}].startDate`}
                        value={exp.startDate}
                      />
                      <span>-</span>
                      <InlineEditableText
                        path={`experience[${index}].endDate`}
                        value={exp.current ? "Present" : exp.endDate}
                      />
                    </div>
                    <InlineEditableText
                      path={`experience[${index}].description`}
                      value={exp.description}
                      multiline
                      className="mt-2 block"
                    />
                  </div>
                )}
              />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Education</h3>
              <InlineEditableList
                path="education"
                items={resumeData.education}
                defaultItem={{
                  school: "School Name",
                  degree: "Degree",
                  field: "Field of Study",
                  startDate: "2020-09",
                  endDate: "2024-05",
                }}
                addButtonLabel="Add Education"
                renderItem={(edu, index) => (
                  <div className="border rounded p-4 bg-white">
                    <InlineEditableText
                      path={`education[${index}].degree`}
                      value={edu.degree}
                      className="font-semibold block"
                    />
                    <InlineEditableText
                      path={`education[${index}].school`}
                      value={edu.school}
                      className="block"
                    />
                    <InlineEditableText
                      path={`education[${index}].field`}
                      value={edu.field}
                      className="text-sm block"
                    />
                  </div>
                )}
              />
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Skills</h3>
              <InlineEditableList
                path="skills"
                items={resumeData.skills}
                defaultItem={{ name: "New Skill" }}
                addButtonLabel="Add Skill"
                renderItem={(skill, index) => (
                  <div className="inline-block mr-2 mb-2">
                    <InlineEditableText
                      path={`skills[${index}].name`}
                      value={skill.name}
                      className="px-3 py-1 bg-gray-200 rounded-full inline-block"
                    />
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </InlineEditProvider>
  );
};
