import React, { memo, useState } from 'react';
import type { ResumeData } from "@/types/resume";
import { InlineEditProvider } from "@/contexts/InlineEditContext";

// Import all valid templates
import { ArtisticVisionTemplate } from "./resume/templates/ArtisticVisionTemplate";
import { BackendTemplate } from "./resume/templates/BackendTemplate";
import { BoldHeadlineTemplate } from "./resume/templates/BoldHeadlineTemplate";
import { BorderFrameUniversalTemplate } from "./resume/templates/BorderFrameUniversalTemplate";
import { BorderedEleganceTemplate } from "./resume/templates/BorderedEleganceTemplate";
import { BusinessEliteTemplate } from "./resume/templates/BusinessEliteTemplate";
import { BusinessModernTemplate } from "./resume/templates/BusinessModernTemplate";
import { CleanCorporateTemplate } from "./resume/templates/CleanCorporateTemplate";
import { CodeCraftsmanTemplate } from "./resume/templates/CodeCraftsmanTemplate";
import { ColumnDivideTemplate } from "./resume/templates/ColumnDivideTemplate";
import { CompactProfessionalTemplate } from "./resume/templates/CompactProfessionalTemplate";
import { ContemporarySplitTemplate } from "./resume/templates/ContemporarySplitTemplate";
import { CorporateBlueTemplate } from "./resume/templates/CorporateBlueTemplate";
import { CorporateCleanTemplate } from "./resume/templates/CorporateCleanTemplate";
import { CreativeAccentTemplate } from "./resume/templates/CreativeAccentTemplate";
import { CreativeCanvasTemplate } from "./resume/templates/CreativeCanvasTemplate";
import { CreativeCraftedTemplate } from "./resume/templates/CreativeCraftedTemplate";
import { CreativeHorizonTemplate } from "./resume/templates/CreativeHorizonTemplate";
import { DesignMaestroTemplate } from "./resume/templates/DesignMaestroTemplate";
import { DesignPinnacleTemplate } from "./resume/templates/DesignPinnacleTemplate";
import { DesignSphereTemplate } from "./resume/templates/DesignSphereTemplate";
import { DevArchitectureTemplate } from "./resume/templates/DevArchitectureTemplate";
import { ElegantProfessionalTemplate } from "./resume/templates/ElegantProfessionalTemplate";
import { ElegantSerifTemplate } from "./resume/templates/ElegantSerifTemplate";
import { EngineeringManagerTemplate } from "./resume/templates/EngineeringManagerTemplate";
import { ExecutiveLetterheadUniversalTemplate } from "./resume/templates/ExecutiveLetterheadUniversalTemplate";
import { ExecutiveMinimalTemplate } from "./resume/templates/ExecutiveMinimalTemplate";
import { FresherAchievementTemplate } from "./resume/templates/FresherAchievementTemplate";
import { FresherBoldHeaderTemplate } from "./resume/templates/FresherBoldHeaderTemplate";
import { FresherCardBasedTemplate } from "./resume/templates/FresherCardBasedTemplate";
import { FresherCenteredElegantTemplate } from "./resume/templates/FresherCenteredElegantTemplate";
import { FresherCleanModernTemplate } from "./resume/templates/FresherCleanModernTemplate";
import { FresherColorAccentTemplate } from "./resume/templates/FresherColorAccentTemplate";
import { FresherCompactProTemplate } from "./resume/templates/FresherCompactProTemplate";
import { FresherCreativeEdgeTemplate } from "./resume/templates/FresherCreativeEdgeTemplate";
import { FresherDarkProfessionalTemplate } from "./resume/templates/FresherDarkProfessionalTemplate";
import { FresherElegantSidebarTemplate } from "./resume/templates/FresherElegantSidebarTemplate";
import { FresherExecutiveStyleTemplate } from "./resume/templates/FresherExecutiveStyleTemplate";
import { FresherGeometricTemplate } from "./resume/templates/FresherGeometricTemplate";
import { FresherMinimalGridTemplate } from "./resume/templates/FresherMinimalGridTemplate";
import { FresherMinimalistTwoColumnTemplate } from "./resume/templates/FresherMinimalistTwoColumnTemplate";
import { FresherModernClassicTemplate } from "./resume/templates/FresherModernClassicTemplate";
import { FresherModernTwoColumnTemplate } from "./resume/templates/FresherModernTwoColumnTemplate";
import { FresherProfessionalGridTemplate } from "./resume/templates/FresherProfessionalGridTemplate";
import { FresherProfessionalMinimalTemplate } from "./resume/templates/FresherProfessionalMinimalTemplate";
import { FresherProfessionalSidebarTemplate } from "./resume/templates/FresherProfessionalSidebarTemplate";
import { FresherSkillsFirstTemplate } from "./resume/templates/FresherSkillsFirstTemplate";
import { FresherSplitLayoutTemplate } from "./resume/templates/FresherSplitLayoutTemplate";
import { FresherTechModernTemplate } from "./resume/templates/FresherTechModernTemplate";
import { FresherTechSplitTemplate } from "./resume/templates/FresherTechSplitTemplate";
import { FresherTemplate } from "./resume/templates/FresherTemplate";
import { FresherTimelineTemplate } from "./resume/templates/FresherTimelineTemplate";
import { FresherTwoToneTemplate } from "./resume/templates/FresherTwoToneTemplate";
import { FrontendArchitectTemplate } from "./resume/templates/FrontendArchitectTemplate";
import { FrontendTemplate } from "./resume/templates/FrontendTemplate";
import { FullstackTemplate } from "./resume/templates/FullstackTemplate";
import { GradientHeaderUniversalTemplate } from "./resume/templates/GradientHeaderUniversalTemplate";
import { GraduateTemplate } from "./resume/templates/GraduateTemplate";
import { JavaDeveloperTemplate } from "./resume/templates/JavaDeveloperTemplate";
import { LeadBackendEngineerTemplate } from "./resume/templates/LeadBackendEngineerTemplate";
import { LeadFrontendEngineerTemplate } from "./resume/templates/LeadFrontendEngineerTemplate";
import { MinimalTemplate } from "./resume/templates/MinimalTemplate";
import { MinimalistProTemplate } from "./resume/templates/MinimalistProTemplate";
import { ModernBusinessTemplate } from "./resume/templates/ModernBusinessTemplate";
import { ModernProfessionalTemplate } from "./resume/templates/ModernProfessionalTemplate";
import { ModernTemplate } from "./resume/templates/ModernTemplate";
import { PlatformEngineerTemplate } from "./resume/templates/PlatformEngineerTemplate";
import { PremiumEliteTemplate } from "./resume/templates/PremiumEliteTemplate";
import { PremiumFresherTemplate } from "./resume/templates/PremiumFresherTemplate";
import { PremiumProTemplate } from "./resume/templates/PremiumProTemplate";
import { PremiumUniversalTemplate } from "./resume/templates/PremiumUniversalTemplate";
import { PrincipalSoftwareEngineerTemplate } from "./resume/templates/PrincipalSoftwareEngineerTemplate";
import { ProfessionalClassicTemplate } from "./resume/templates/ProfessionalClassicTemplate";
import { ProfessionalGridTemplate } from "./resume/templates/ProfessionalGridTemplate";
import { ProfessionalTemplate } from "./resume/templates/ProfessionalTemplate";
import { ProfessionalTimelineTemplate } from "./resume/templates/ProfessionalTimelineTemplate";
import { PythonDeveloperTemplate } from "./resume/templates/PythonDeveloperTemplate";
import { QAAutomationEngineerTemplate } from "./resume/templates/QAAutomationEngineerTemplate";
import { ReactDeveloperTemplate } from "./resume/templates/ReactDeveloperTemplate";
import { RefinedTemplate } from "./resume/templates/RefinedTemplate";
import { SeniorBackendTemplate } from "./resume/templates/SeniorBackendTemplate";
import { SeniorFrontendTemplate } from "./resume/templates/SeniorFrontendTemplate";
import { SeniorJavaDeveloperTemplate } from "./resume/templates/SeniorJavaDeveloperTemplate";
import { SeniorMobileEngineerTemplate } from "./resume/templates/SeniorMobileEngineerTemplate";
import { SeniorTemplate } from "./resume/templates/SeniorTemplate";
import { SidebarAccentTemplate } from "./resume/templates/SidebarAccentTemplate";
import { SoftwareTemplate } from "./resume/templates/SoftwareTemplate";
import { SolutionsArchitectTemplate } from "./resume/templates/SolutionsArchitectTemplate";
import { StarterTemplate } from "./resume/templates/StarterTemplate";
import { SwissStyleUniversalTemplate } from "./resume/templates/SwissStyleUniversalTemplate";

interface TemplatePreviewProps {
  templateId: string;
  themeColor?: string;
  sampleData?: ResumeData;
  className?: string;
}

// Default sample data
const defaultSampleData: ResumeData = {
  personalInfo: {
    fullName: "John Smith",
    title: "Software Engineer",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    summary: "Experienced software engineer with 5+ years of expertise in full-stack development. Passionate about building scalable applications and mentoring junior developers.",
    photo: null,
  },
  experience: [
    {
      id: "exp-1",
      company: "Tech Solutions Inc",
      position: "Senior Software Engineer",
      startDate: "2021-01",
      endDate: "present",
      current: true,
      description: "Lead development of microservices architecture\nMentor junior developers and conduct code reviews\nImplement CI/CD pipelines reducing deployment time by 60%",
    },
    {
      id: "exp-2",
      company: "StartupXYZ",
      position: "Software Engineer",
      startDate: "2018-06",
      endDate: "2020-12",
      current: false,
      description: "Developed RESTful APIs using Node.js and Express\nBuilt responsive front-end applications with React\nOptimized database queries improving performance by 40%",
    },
  ],
  education: [
    {
      id: "edu-1",
      school: "University of California",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2014-09",
      endDate: "2018-05",
    },
  ],
  skills: [
    { id: "skill-1", name: "JavaScript" },
    { id: "skill-2", name: "TypeScript" },
    { id: "skill-3", name: "React" },
    { id: "skill-4", name: "Node.js" },
    { id: "skill-5", name: "Python" },
    { id: "skill-6", name: "AWS" },
    { id: "skill-7", name: "Docker" },
    { id: "skill-8", name: "PostgreSQL" },
  ],
  sections: [],
};

// Template mapping
const templateMap: Record<string, React.ComponentType<any>> = {
  'artistic-vision': ArtisticVisionTemplate,
  'backend': BackendTemplate,
  'bold-headline': BoldHeadlineTemplate,
  'border-frame-universal': BorderFrameUniversalTemplate,
  'bordered-elegance': BorderedEleganceTemplate,
  'business-elite': BusinessEliteTemplate,
  'business-modern': BusinessModernTemplate,
  'clean-corporate': CleanCorporateTemplate,
  'code-craftsman': CodeCraftsmanTemplate,
  'column-divide': ColumnDivideTemplate,
  'compact-professional': CompactProfessionalTemplate,
  'contemporary-split': ContemporarySplitTemplate,
  'corporate-blue': CorporateBlueTemplate,
  'corporate-clean': CorporateCleanTemplate,
  'creative-accent': CreativeAccentTemplate,
  'creative-canvas': CreativeCanvasTemplate,
  'creative-crafted': CreativeCraftedTemplate,
  'creative-horizon': CreativeHorizonTemplate,
  'design-maestro': DesignMaestroTemplate,
  'design-pinnacle': DesignPinnacleTemplate,
  'design-sphere': DesignSphereTemplate,
  'dev-architecture': DevArchitectureTemplate,
  'elegant-professional': ElegantProfessionalTemplate,
  'elegant-serif': ElegantSerifTemplate,
  'engineering-manager': EngineeringManagerTemplate,
  'executive-letterhead-universal': ExecutiveLetterheadUniversalTemplate,
  'executive-minimal': ExecutiveMinimalTemplate,
  'fresher-achievement': FresherAchievementTemplate,
  'fresher-bold-header': FresherBoldHeaderTemplate,
  'fresher-card-based': FresherCardBasedTemplate,
  'fresher-centered-elegant': FresherCenteredElegantTemplate,
  'fresher-clean-modern': FresherCleanModernTemplate,
  'fresher-color-accent': FresherColorAccentTemplate,
  'fresher-compact-pro': FresherCompactProTemplate,
  'fresher-creative-edge': FresherCreativeEdgeTemplate,
  'fresher-dark-professional': FresherDarkProfessionalTemplate,
  'fresher-elegant-sidebar': FresherElegantSidebarTemplate,
  'fresher-executive-style': FresherExecutiveStyleTemplate,
  'fresher-geometric': FresherGeometricTemplate,
  'fresher-minimal-grid': FresherMinimalGridTemplate,
  'fresher-minimalist-two-column': FresherMinimalistTwoColumnTemplate,
  'fresher-modern-classic': FresherModernClassicTemplate,
  'fresher-modern-two-column': FresherModernTwoColumnTemplate,
  'fresher-professional-grid': FresherProfessionalGridTemplate,
  'fresher-professional-minimal': FresherProfessionalMinimalTemplate,
  'fresher-professional-sidebar': FresherProfessionalSidebarTemplate,
  'fresher-skills-first': FresherSkillsFirstTemplate,
  'fresher-split-layout': FresherSplitLayoutTemplate,
  'fresher-tech-modern': FresherTechModernTemplate,
  'fresher-tech-split': FresherTechSplitTemplate,
  'fresher': FresherTemplate,
  'fresher-timeline': FresherTimelineTemplate,
  'fresher-two-tone': FresherTwoToneTemplate,
  'frontend-architect': FrontendArchitectTemplate,
  'frontend': FrontendTemplate,
  'fullstack': FullstackTemplate,
  'gradient-header-universal': GradientHeaderUniversalTemplate,
  'graduate': GraduateTemplate,
  'java-developer': JavaDeveloperTemplate,
  'lead-backend-engineer': LeadBackendEngineerTemplate,
  'lead-frontend-engineer': LeadFrontendEngineerTemplate,
  'minimal': MinimalTemplate,
  'minimalist-pro': MinimalistProTemplate,
  'modern-business': ModernBusinessTemplate,
  'modern-professional': ModernProfessionalTemplate,
  'modern': ModernTemplate,
  'platform-engineer': PlatformEngineerTemplate,
  'premium-elite': PremiumEliteTemplate,
  'premium-fresher': PremiumFresherTemplate,
  'premium-pro': PremiumProTemplate,
  'premium-universal': PremiumUniversalTemplate,
  'principal-software-engineer': PrincipalSoftwareEngineerTemplate,
  'professional-classic': ProfessionalClassicTemplate,
  'professional-grid': ProfessionalGridTemplate,
  'professional': ProfessionalTemplate,
  'professional-timeline': ProfessionalTimelineTemplate,
  'python-developer': PythonDeveloperTemplate,
  'qa-automation-engineer': QAAutomationEngineerTemplate,
  'react-developer': ReactDeveloperTemplate,
  'refined': RefinedTemplate,
  'senior-backend': SeniorBackendTemplate,
  'senior-frontend': SeniorFrontendTemplate,
  'senior-java-developer': SeniorJavaDeveloperTemplate,
  'senior-mobile-engineer': SeniorMobileEngineerTemplate,
  'senior': SeniorTemplate,
  'sidebar-accent': SidebarAccentTemplate,
  'software': SoftwareTemplate,
  'solutions-architect': SolutionsArchitectTemplate,
  'starter': StarterTemplate,
  'swiss-style-universal': SwissStyleUniversalTemplate,
};

// Export valid template IDs
export const validTemplateIds = Object.keys(templateMap);

const TemplatePreviewBase = ({
  templateId,
  themeColor = "#2563eb",
  sampleData,
  className = "",
}: TemplatePreviewProps) => {
  const data = sampleData || defaultSampleData;
  const TemplateComponent = templateMap[templateId] || ProfessionalTemplate;

  return (
    <div className={`w-full h-full ${className}`}>
      <InlineEditProvider initialData={data} onUpdate={() => {}}>
        <TemplateComponent
          resumeData={data}
          themeColor={themeColor}
          editable={false}
        />
      </InlineEditProvider>
    </div>
  );
};

export const TemplatePreview = memo(TemplatePreviewBase);