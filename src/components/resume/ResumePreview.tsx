import type { ResumeData } from "@/types/resume";
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

interface ResumePreviewProps {
  resumeData: ResumeData;
  templateId: string;
  themeColor?: string;
}

export const ResumePreview = ({
  resumeData,
  templateId,
  themeColor = "#2563eb",
}: ResumePreviewProps) => {
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
    <div className="w-full h-full bg-white">
      <Template
        resumeData={resumeData}
        themeColor={themeColor}
        editable={false}
      />
    </div>
  );
};
