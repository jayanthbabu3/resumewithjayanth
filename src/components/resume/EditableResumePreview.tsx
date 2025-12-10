import { type ResumeData } from "@/types/resume";
import { ProfessionalTemplate } from "./templates/ProfessionalTemplate";
import { ModernTemplate } from "./templates/ModernTemplate";
import { MinimalTemplate } from "./templates/MinimalTemplate";
import { FrontendTemplate } from "./templates/FrontendTemplate";
import { FullstackTemplate } from "./templates/FullstackTemplate";
import { BackendTemplate } from "./templates/BackendTemplate";
import { GraduateTemplate } from "./templates/GraduateTemplate";
import { StarterTemplate } from "./templates/StarterTemplate";
import { FresherTemplate } from "./templates/FresherTemplate";
import { SeniorTemplate } from "./templates/SeniorTemplate";
import { SeniorFrontendTemplate } from "./templates/SeniorFrontendTemplate";
import { SeniorBackendTemplate } from "./templates/SeniorBackendTemplate";
import { SoftwareTemplate } from "./templates/SoftwareTemplate";
import { PremiumUniversalTemplate } from "./templates/PremiumUniversalTemplate";
import { PremiumProTemplate } from "./templates/PremiumProTemplate";
import { RefinedTemplate } from "./templates/RefinedTemplate";
import { PremiumEliteTemplate } from "./templates/PremiumEliteTemplate";
import { CreativeAccentTemplate } from "./templates/CreativeAccentTemplate";
import { BoldHeadlineTemplate } from "./templates/BoldHeadlineTemplate";
import { ElegantSerifTemplate } from "./templates/ElegantSerifTemplate";
import { ContemporarySplitTemplate } from "./templates/ContemporarySplitTemplate";
import { FresherMinimalGridTemplate } from "./templates/FresherMinimalGridTemplate";
import { FresherDarkProfessionalTemplate } from "./templates/FresherDarkProfessionalTemplate";
import { FresherColorAccentTemplate } from "./templates/FresherColorAccentTemplate";
import { FresherTimelineTemplate } from "./templates/FresherTimelineTemplate";
import { FresherSkillsFirstTemplate } from "./templates/FresherSkillsFirstTemplate";
import { FresherCardBasedTemplate } from "./templates/FresherCardBasedTemplate";
import { FresherTwoToneTemplate } from "./templates/FresherTwoToneTemplate";
import { FresherCenteredElegantTemplate } from "./templates/FresherCenteredElegantTemplate";
import { FresherGeometricTemplate } from "./templates/FresherGeometricTemplate";
import { FresherAchievementTemplate } from "./templates/FresherAchievementTemplate";
import { FresherModernTwoColumnTemplate } from "./templates/FresherModernTwoColumnTemplate";
import { FresherProfessionalSidebarTemplate } from "./templates/FresherProfessionalSidebarTemplate";
import { FresherCleanModernTemplate } from "./templates/FresherCleanModernTemplate";
import { FresherTechSplitTemplate } from "./templates/FresherTechSplitTemplate";
import { FresherExecutiveStyleTemplate } from "./templates/FresherExecutiveStyleTemplate";
import { FresherBoldHeaderTemplate } from "./templates/FresherBoldHeaderTemplate";
import { FresherMinimalistTwoColumnTemplate } from "./templates/FresherMinimalistTwoColumnTemplate";
import { FresherCreativeEdgeTemplate } from "./templates/FresherCreativeEdgeTemplate";
import { FresherProfessionalGridTemplate } from "./templates/FresherProfessionalGridTemplate";
import { FresherModernClassicTemplate } from "./templates/FresherModernClassicTemplate";
import { FresherSplitLayoutTemplate } from "./templates/FresherSplitLayoutTemplate";
import { FresherCompactProTemplate } from "./templates/FresherCompactProTemplate";
import { FresherElegantSidebarTemplate } from "./templates/FresherElegantSidebarTemplate";
import { FresherTechModernTemplate } from "./templates/FresherTechModernTemplate";
import { FresherProfessionalMinimalTemplate } from "./templates/FresherProfessionalMinimalTemplate";
import { GradientHeaderUniversalTemplate } from "./templates/GradientHeaderUniversalTemplate";
import { LeadBackendEngineerTemplate } from "./templates/LeadBackendEngineerTemplate";
import { LeadFrontendEngineerTemplate } from "./templates/LeadFrontendEngineerTemplate";
import { PrincipalSoftwareEngineerTemplate } from "./templates/PrincipalSoftwareEngineerTemplate";
import { EngineeringManagerTemplate } from "./templates/EngineeringManagerTemplate";
import { SolutionsArchitectTemplate } from "./templates/SolutionsArchitectTemplate";
import { SeniorMobileEngineerTemplate } from "./templates/SeniorMobileEngineerTemplate";
import { FrontendArchitectTemplate } from "./templates/FrontendArchitectTemplate";
import { CorporateBlueTemplate } from "./templates/CorporateBlueTemplate";
import { MinimalistProTemplate } from "./templates/MinimalistProTemplate";
import { BusinessModernTemplate } from "./templates/BusinessModernTemplate";
import { CleanCorporateTemplate } from "./templates/CleanCorporateTemplate";
import { ModernProfessionalTemplate } from "./templates/ModernProfessionalTemplate";
import { ElegantProfessionalTemplate } from "./templates/ElegantProfessionalTemplate";
import { ProfessionalGridTemplate } from "./templates/ProfessionalGridTemplate";
import { BusinessEliteTemplate } from "./templates/BusinessEliteTemplate";
import { CorporateCleanTemplate } from "./templates/CorporateCleanTemplate";
import { ProfessionalClassicTemplate } from "./templates/ProfessionalClassicTemplate";
import { ModernBusinessTemplate } from "./templates/ModernBusinessTemplate";
import { ExecutiveMinimalTemplate } from "./templates/ExecutiveMinimalTemplate";
import { SidebarAccentTemplate } from "./templates/SidebarAccentTemplate";
import { BorderedEleganceTemplate } from "./templates/BorderedEleganceTemplate";
import { ColumnDivideTemplate } from "./templates/ColumnDivideTemplate";
import { CompactProfessionalTemplate } from "./templates/CompactProfessionalTemplate";
import { CodeCraftsmanTemplate } from "./templates/CodeCraftsmanTemplate";
import { DevArchitectureTemplate } from "./templates/DevArchitectureTemplate";
import { CreativeCanvasTemplate } from "./templates/CreativeCanvasTemplate";
import { DesignMaestroTemplate } from "./templates/DesignMaestroTemplate";
import { ArtisticVisionTemplate } from "./templates/ArtisticVisionTemplate";
import { DesignPinnacleTemplate } from "./templates/DesignPinnacleTemplate";
import { CreativeCraftedTemplate } from "./templates/CreativeCraftedTemplate";
import { DesignSphereTemplate } from "./templates/DesignSphereTemplate";
import { CreativeHorizonTemplate } from "./templates/CreativeHorizonTemplate";
import { SwissStyleUniversalTemplate } from "./templates/SwissStyleUniversalTemplate";
import { ExecutiveLetterheadUniversalTemplate } from "./templates/ExecutiveLetterheadUniversalTemplate";
import { BorderFrameUniversalTemplate } from "./templates/BorderFrameUniversalTemplate";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface EditableResumePreviewProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
  templateId: string;
  themeColor?: string;
}

export const EditableResumePreview = ({
  resumeData,
  setResumeData,
  templateId,
  themeColor = "#2563eb",
}: EditableResumePreviewProps) => {
  const [editingField, setEditingField] = useState<string | null>(null);

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  const updateExperience = (index: number, field: string, value: any) => {
    const newExperience = [...resumeData.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setResumeData({ ...resumeData, experience: newExperience });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setResumeData({ ...resumeData, education: newEducation });
  };

  const updateSkill = (index: number, value: string) => {
    const newSkills = [...resumeData.skills];
    newSkills[index] = { ...newSkills[index], name: value };
    setResumeData({ ...resumeData, skills: newSkills });
  };

  const updateSection = (index: number, field: string, value: string) => {
    const newSections = [...resumeData.sections];
    newSections[index] = { ...newSections[index], [field]: value };
    setResumeData({ ...resumeData, sections: newSections });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          id: Date.now().toString(),
          company: "Company Name",
          position: "Position",
          startDate: "2024-01",
          endDate: "",
          current: true,
          description: "Job description here",
        },
      ],
    });
  };

  const removeExperience = (index: number) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((_, i) => i !== index),
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: Date.now().toString(),
          school: "School Name",
          degree: "Degree",
          field: "Field of Study",
          startDate: "2020-09",
          endDate: "2024-05",
        },
      ],
    });
  };

  const removeEducation = (index: number) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((_, i) => i !== index),
    });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [
        ...resumeData.skills,
        {
          id: Date.now().toString(),
          name: "New Skill",
        },
      ],
    });
  };

  const removeSkill = (index: number) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((_, i) => i !== index),
    });
  };

  const addSection = () => {
    setResumeData({
      ...resumeData,
      sections: [
        ...resumeData.sections,
        {
          id: Date.now().toString(),
          title: "New Section",
          content: "Section content here",
        },
      ],
    });
  };

  const removeSection = (index: number) => {
    setResumeData({
      ...resumeData,
      sections: resumeData.sections.filter((_, i) => i !== index),
    });
  };

  const templates: Record<string, React.ComponentType<any>> = {
    professional: ProfessionalTemplate,
    modern: ModernTemplate,
    minimal: MinimalTemplate,
    frontend: FrontendTemplate,
    fullstack: FullstackTemplate,
    backend: BackendTemplate,
    graduate: GraduateTemplate,
    starter: StarterTemplate,
    fresher: FresherTemplate,
    senior: SeniorTemplate,
    "senior-frontend": SeniorFrontendTemplate,
    "senior-backend": SeniorBackendTemplate,
    software: SoftwareTemplate,
    "premium-universal": PremiumUniversalTemplate,
    "premium-pro": PremiumProTemplate,
    refined: RefinedTemplate,
    "premium-elite": PremiumEliteTemplate,
    "creative-accent": CreativeAccentTemplate,
    "bold-headline": BoldHeadlineTemplate,
    "elegant-serif": ElegantSerifTemplate,
    "contemporary-split": ContemporarySplitTemplate,
    "fresher-minimal-grid": FresherMinimalGridTemplate,
    "fresher-dark-professional": FresherDarkProfessionalTemplate,
    "fresher-color-accent": FresherColorAccentTemplate,
    "fresher-timeline": FresherTimelineTemplate,
    "fresher-skills-first": FresherSkillsFirstTemplate,
    "fresher-card-based": FresherCardBasedTemplate,
    "fresher-two-tone": FresherTwoToneTemplate,
    "fresher-centered-elegant": FresherCenteredElegantTemplate,
    "fresher-geometric": FresherGeometricTemplate,
    "fresher-achievement": FresherAchievementTemplate,
    "fresher-modern-two-column": FresherModernTwoColumnTemplate,
    "fresher-professional-sidebar": FresherProfessionalSidebarTemplate,
    "fresher-clean-modern": FresherCleanModernTemplate,
    "fresher-tech-split": FresherTechSplitTemplate,
    "fresher-executive-style": FresherExecutiveStyleTemplate,
    "fresher-bold-header": FresherBoldHeaderTemplate,
    "fresher-minimalist-two-column": FresherMinimalistTwoColumnTemplate,
    "fresher-creative-edge": FresherCreativeEdgeTemplate,
    "fresher-professional-grid": FresherProfessionalGridTemplate,
    "fresher-modern-classic": FresherModernClassicTemplate,
    "fresher-split-layout": FresherSplitLayoutTemplate,
    "fresher-compact-pro": FresherCompactProTemplate,
    "fresher-elegant-sidebar": FresherElegantSidebarTemplate,
    "fresher-tech-modern": FresherTechModernTemplate,
    "fresher-professional-minimal": FresherProfessionalMinimalTemplate,
    "lead-backend-engineer": LeadBackendEngineerTemplate,
    "lead-frontend-engineer": LeadFrontendEngineerTemplate,
    "principal-software-engineer": PrincipalSoftwareEngineerTemplate,
    "engineering-manager": EngineeringManagerTemplate,
    "solutions-architect": SolutionsArchitectTemplate,
    "senior-mobile-engineer": SeniorMobileEngineerTemplate,
    "frontend-architect": FrontendArchitectTemplate,
    "corporate-blue": CorporateBlueTemplate,
    "minimalist-pro": MinimalistProTemplate,
    "business-modern": BusinessModernTemplate,
    "clean-corporate": CleanCorporateTemplate,
    "modern-professional": ModernProfessionalTemplate,
    "elegant-professional": ElegantProfessionalTemplate,
    "professional-grid": ProfessionalGridTemplate,
    "business-elite": BusinessEliteTemplate,
    "corporate-clean": CorporateCleanTemplate,
    "professional-classic": ProfessionalClassicTemplate,
    "modern-business": ModernBusinessTemplate,
    "executive-minimal": ExecutiveMinimalTemplate,
    "sidebar-accent": SidebarAccentTemplate,
    "bordered-elegance": BorderedEleganceTemplate,
    "column-divide": ColumnDivideTemplate,
    "compact-professional": CompactProfessionalTemplate,
    "code-craftsman": CodeCraftsmanTemplate,
    "dev-architecture": DevArchitectureTemplate,
    "creative-canvas": CreativeCanvasTemplate,
    "design-maestro": DesignMaestroTemplate,
    "artistic-vision": ArtisticVisionTemplate,
    "design-pinnacle": DesignPinnacleTemplate,
    "creative-crafted": CreativeCraftedTemplate,
    "design-sphere": DesignSphereTemplate,
    "creative-horizon": CreativeHorizonTemplate,
    "swiss-style-universal": SwissStyleUniversalTemplate,
    "executive-letterhead-universal": ExecutiveLetterheadUniversalTemplate,
    "border-frame-universal": BorderFrameUniversalTemplate,
    "gradient-header-universal": GradientHeaderUniversalTemplate,
  };

  const Template = templates[templateId] || ProfessionalTemplate;

  return (
    <div className="grid h-full grid-cols-12 gap-6 p-6">
      {/* Editing Panel */}
      <div className="col-span-4 space-y-6 overflow-auto rounded-lg border bg-card p-6">
        <div>
          <h2 className="mb-4 text-lg font-semibold">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <Input
                value={resumeData.personalInfo.fullName}
                onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
              />
            </div>
            <div>
              <Label>Title</Label>
              <Input
                value={resumeData.personalInfo.title}
                onChange={(e) => updatePersonalInfo("title", e.target.value)}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                value={resumeData.personalInfo.email}
                onChange={(e) => updatePersonalInfo("email", e.target.value)}
              />
            </div>
            <div>
              <Label>Phone</Label>
              <Input
                value={resumeData.personalInfo.phone}
                onChange={(e) => updatePersonalInfo("phone", e.target.value)}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                value={resumeData.personalInfo.location}
                onChange={(e) => updatePersonalInfo("location", e.target.value)}
              />
            </div>
            <div>
              <Label>Summary</Label>
              <Textarea
                value={resumeData.personalInfo.summary}
                onChange={(e) => updatePersonalInfo("summary", e.target.value)}
                rows={4}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Experience</h2>
            <Button size="sm" onClick={addExperience}>
              <Plus className="mr-1 h-4 w-4" /> Add
            </Button>
          </div>
          <div className="space-y-4">
            {resumeData.experience.map((exp, index) => (
              <div key={exp.id} className="rounded border p-4">
                <div className="mb-2 flex justify-end">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeExperience(index)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(index, "company", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Position"
                    value={exp.position}
                    onChange={(e) =>
                      updateExperience(index, "position", e.target.value)
                    }
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Start Date"
                      value={exp.startDate}
                      onChange={(e) =>
                        updateExperience(index, "startDate", e.target.value)
                      }
                    />
                    <Input
                      placeholder="End Date"
                      value={exp.endDate}
                      onChange={(e) =>
                        updateExperience(index, "endDate", e.target.value)
                      }
                    />
                  </div>
                  <Textarea
                    placeholder="Description"
                    value={exp.description}
                    onChange={(e) =>
                      updateExperience(index, "description", e.target.value)
                    }
                    rows={3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Education</h2>
            <Button size="sm" onClick={addEducation}>
              <Plus className="mr-1 h-4 w-4" /> Add
            </Button>
          </div>
          <div className="space-y-4">
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="rounded border p-4">
                <div className="mb-2 flex justify-end">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeEducation(index)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="School"
                    value={edu.school}
                    onChange={(e) =>
                      updateEducation(index, "school", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) =>
                      updateEducation(index, "degree", e.target.value)
                    }
                  />
                  <Input
                    placeholder="Field of Study"
                    value={edu.field}
                    onChange={(e) =>
                      updateEducation(index, "field", e.target.value)
                    }
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Start Date"
                      value={edu.startDate}
                      onChange={(e) =>
                        updateEducation(index, "startDate", e.target.value)
                      }
                    />
                    <Input
                      placeholder="End Date"
                      value={edu.endDate}
                      onChange={(e) =>
                        updateEducation(index, "endDate", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Skills</h2>
            <Button size="sm" onClick={addSkill}>
              <Plus className="mr-1 h-4 w-4" /> Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <div
                key={skill.id}
                className="flex items-center gap-1 rounded-full border px-3 py-1"
              >
                <Input
                  className="h-6 w-24 border-0 p-0 text-sm"
                  value={skill.name}
                  onChange={(e) => updateSkill(index, e.target.value)}
                />
                <button
                  onClick={() => removeSkill(index)}
                  className="text-destructive hover:text-destructive/80"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Custom Sections</h2>
            <Button size="sm" onClick={addSection}>
              <Plus className="mr-1 h-4 w-4" /> Add
            </Button>
          </div>
          <div className="space-y-4">
            {resumeData.sections.map((section, index) => (
              <div key={section.id} className="rounded border p-4">
                <div className="mb-2 flex justify-end">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeSection(index)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Section Title"
                    value={section.title}
                    onChange={(e) =>
                      updateSection(index, "title", e.target.value)
                    }
                  />
                  <Textarea
                    placeholder="Content"
                    value={section.content}
                    onChange={(e) =>
                      updateSection(index, "content", e.target.value)
                    }
                    rows={3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="col-span-8 overflow-auto rounded-lg border bg-white p-6">
        <Template
          resumeData={resumeData}
          themeColor={themeColor}
          editable={false}
        />
      </div>
    </div>
  );
};
