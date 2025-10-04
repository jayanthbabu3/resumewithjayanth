import type { ResumeData } from "@/pages/Editor";
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate";
import { ModernTemplate } from "./templates/ModernTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { ExecutiveTemplate } from "./templates/ExecutiveTemplate";

interface ResumePreviewProps {
  resumeData: ResumeData;
  templateId: string;
}

export const ResumePreview = ({ resumeData, templateId }: ResumePreviewProps) => {
  const templates = {
    professional: ProfessionalTemplate,
    modern: ModernTemplate,
    minimal: MinimalTemplate,
    executive: ExecutiveTemplate,
  };

  const Template = templates[templateId as keyof typeof templates] || ProfessionalTemplate;

  return (
    <div className="w-full bg-gray-100 p-8 flex justify-center overflow-auto" id="resume-preview">
      <div className="shadow-2xl">
        <Template resumeData={resumeData} />
      </div>
    </div>
  );
};
