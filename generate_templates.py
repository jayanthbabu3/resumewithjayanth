#!/usr/bin/env python3
"""
Generate 100 unique resume templates with their corresponding PDF versions
"""

import os
from pathlib import Path

# Define all 100 templates with their categories and unique characteristics
TEMPLATES = [
    # ===== UNIVERSAL EXECUTIVE/CORPORATE (30 templates) =====
    {
        "id": "strategic-leadership",
        "name": "StrategicLeadership",
        "category": "Universal",
        "description": "Executive leadership template with strategic focus and premium design",
        "layout": "full-width-accent",
        "theme": "#1e40af"
    },
    {
        "id": "corporate-excellence",
        "name": "CorporateExcellence",
        "category": "Universal",
        "description": "Corporate excellence template with professional two-column layout",
        "layout": "two-column",
        "theme": "#0f172a"
    },
    {
        "id": "executive-prestige",
        "name": "ExecutivePrestige",
        "category": "Universal",
        "description": "Prestigious executive template with elegant serif typography",
        "layout": "centered-elegant",
        "theme": "#7c2d12"
    },
    {
        "id": "global-executive-pro",
        "name": "GlobalExecutivePro",
        "category": "Universal",
        "description": "Global executive template with international appeal",
        "layout": "sidebar-left",
        "theme": "#134e4a"
    },
    {
        "id": "premium-corporate-edge",
        "name": "PremiumCorporateEdge",
        "category": "Universal",
        "description": "Premium corporate template with modern edge and sharp lines",
        "layout": "geometric",
        "theme": "#581c87"
    },
    {
        "id": "enterprise-leader",
        "name": "EnterpriseLeader",
        "category": "Universal",
        "description": "Enterprise leadership template with clean corporate design",
        "layout": "timeline",
        "theme": "#1e3a8a"
    },
    {
        "id": "boardroom-ready",
        "name": "BoardroomReady",
        "category": "Universal",
        "description": "Boardroom-ready executive template with authoritative presence",
        "layout": "minimal-bold",
        "theme": "#4c1d95"
    },
    {
        "id": "c-suite-modern",
        "name": "CSuiteModern",
        "category": "Universal",
        "description": "C-suite modern template with contemporary sophistication",
        "layout": "split-header",
        "theme": "#7c3aed"
    },
    {
        "id": "executive-impact",
        "name": "ExecutiveImpact",
        "category": "Universal",
        "description": "High-impact executive template with bold section headers",
        "layout": "impact-headers",
        "theme": "#dc2626"
    },
    {
        "id": "corporate-visionary",
        "name": "CorporateVisionary",
        "category": "Universal",
        "description": "Visionary corporate template with forward-thinking design",
        "layout": "card-based",
        "theme": "#0891b2"
    },
    {
        "id": "platinum-executive",
        "name": "PlatinumExecutive",
        "category": "Universal",
        "description": "Platinum-tier executive template with luxury feel",
        "layout": "premium-wide",
        "theme": "#64748b"
    },
    {
        "id": "global-leadership",
        "name": "GlobalLeadership",
        "category": "Universal",
        "description": "Global leadership template for international executives",
        "layout": "international",
        "theme": "#059669"
    },
    {
        "id": "senior-executive-pro",
        "name": "SeniorExecutivePro",
        "category": "Universal",
        "description": "Senior executive professional template with gravitas",
        "layout": "classic-modern",
        "theme": "#0c4a6e"
    },
    {
        "id": "corporate-elite-plus",
        "name": "CorporateElitePlus",
        "category": "Universal",
        "description": "Elite corporate template with premium styling",
        "layout": "elite-design",
        "theme": "#4a044e"
    },
    {
        "id": "executive-pinnacle",
        "name": "ExecutivePinnacle",
        "category": "Universal",
        "description": "Peak executive template for top-tier professionals",
        "layout": "pinnacle",
        "theme": "#9f1239"
    },
    {
        "id": "corporate-distinction",
        "name": "CorporateDistinction",
        "category": "Universal",
        "description": "Distinguished corporate template with refined aesthetics",
        "layout": "distinguished",
        "theme": "#1e40af"
    },
    {
        "id": "leadership-summit",
        "name": "LeadershipSummit",
        "category": "Universal",
        "description": "Summit-level leadership template for executives",
        "layout": "summit",
        "theme": "#0d9488"
    },
    {
        "id": "executive-authority",
        "name": "ExecutiveAuthority",
        "category": "Universal",
        "description": "Authoritative executive template with commanding presence",
        "layout": "authority",
        "theme": "#1f2937"
    },
    {
        "id": "corporate-premier",
        "name": "CorporatePremier",
        "category": "Universal",
        "description": "Premier corporate template with first-class design",
        "layout": "premier",
        "theme": "#7c2d12"
    },
    {
        "id": "global-enterprise",
        "name": "GlobalEnterprise",
        "category": "Universal",
        "description": "Global enterprise template for multinational leaders",
        "layout": "enterprise",
        "theme": "#065f46"
    },
    {
        "id": "executive-signature",
        "name": "ExecutiveSignature",
        "category": "Universal",
        "description": "Signature executive template with unique branding",
        "layout": "signature",
        "theme": "#6366f1"
    },
    {
        "id": "corporate-apex",
        "name": "CorporateApex",
        "category": "Universal",
        "description": "Apex corporate template for peak professionals",
        "layout": "apex",
        "theme": "#be123c"
    },
    {
        "id": "strategic-executive-plus",
        "name": "StrategicExecutivePlus",
        "category": "Universal",
        "description": "Enhanced strategic executive template",
        "layout": "strategic-plus",
        "theme": "#1e3a8a"
    },
    {
        "id": "corporate-paradigm",
        "name": "CorporateParadigm",
        "category": "Universal",
        "description": "Paradigm-shifting corporate template",
        "layout": "paradigm",
        "theme": "#6d28d9"
    },
    {
        "id": "executive-magnitude",
        "name": "ExecutiveMagnitude",
        "category": "Universal",
        "description": "High-magnitude executive template",
        "layout": "magnitude",
        "theme": "#15803d"
    },
    {
        "id": "corporate-sovereign",
        "name": "CorporateSovereign",
        "category": "Universal",
        "description": "Sovereign corporate template with regal design",
        "layout": "sovereign",
        "theme": "#4f46e5"
    },
    {
        "id": "leadership-zenith",
        "name": "LeadershipZenith",
        "category": "Universal",
        "description": "Zenith leadership template for top executives",
        "layout": "zenith",
        "theme": "#0369a1"
    },
    {
        "id": "executive-nexus",
        "name": "ExecutiveNexus",
        "category": "Universal",
        "description": "Nexus executive template connecting all achievements",
        "layout": "nexus",
        "theme": "#7c3aed"
    },
    {
        "id": "corporate-vanguard",
        "name": "CorporateVanguard",
        "category": "Universal",
        "description": "Vanguard corporate template leading the way",
        "layout": "vanguard",
        "theme": "#be185d"
    },
    {
        "id": "executive-ascendancy",
        "name": "ExecutiveAscendancy",
        "category": "Universal",
        "description": "Ascendant executive template showing career growth",
        "layout": "ascendancy",
        "theme": "#0f766e"
    },

    # ===== SOFTWARE & TECHNOLOGY (25 templates) =====
    {
        "id": "vue-specialist",
        "name": "VueSpecialist",
        "category": "Software",
        "description": "Vue.js specialist template with modern green theme",
        "layout": "code-focused",
        "theme": "#42b883"
    },
    {
        "id": "svelte-developer",
        "name": "SvelteDeveloper",
        "category": "Software",
        "description": "Svelte developer template with orange accent",
        "layout": "framework-showcase",
        "theme": "#ff3e00"
    },
    {
        "id": "flutter-engineer",
        "name": "FlutterEngineer",
        "category": "Software",
        "description": "Flutter engineer template with blue gradient",
        "layout": "mobile-dev",
        "theme": "#02569b"
    },
    {
        "id": "swift-ios-developer",
        "name": "SwiftIOSDeveloper",
        "category": "Software",
        "description": "Swift iOS developer template with Apple-inspired design",
        "layout": "ios-style",
        "theme": "#f05138"
    },
    {
        "id": "rust-systems-engineer",
        "name": "RustSystemsEngineer",
        "category": "Software",
        "description": "Rust systems engineer template with performance focus",
        "layout": "systems-focused",
        "theme": "#ce422b"
    },
    {
        "id": "scala-backend-engineer",
        "name": "ScalaBackendEngineer",
        "category": "Software",
        "description": "Scala backend engineer template",
        "layout": "backend-focused",
        "theme": "#dc322f"
    },
    {
        "id": "elixir-developer",
        "name": "ElixirDeveloper",
        "category": "Software",
        "description": "Elixir developer template with functional programming focus",
        "layout": "functional-dev",
        "theme": "#4e2a8e"
    },
    {
        "id": "graphql-architect",
        "name": "GraphQLArchitect",
        "category": "Software",
        "description": "GraphQL architect template with API-first design",
        "layout": "api-architect",
        "theme": "#e535ab"
    },
    {
        "id": "typescript-expert",
        "name": "TypeScriptExpert",
        "category": "Software",
        "description": "TypeScript expert template with type-safe emphasis",
        "layout": "typescript-focused",
        "theme": "#3178c6"
    },
    {
        "id": "nextjs-fullstack",
        "name": "NextJSFullstack",
        "category": "Software",
        "description": "Next.js fullstack developer template",
        "layout": "fullstack-modern",
        "theme": "#000000"
    },
    {
        "id": "nestjs-backend",
        "name": "NestJSBackend",
        "category": "Software",
        "description": "NestJS backend developer template",
        "layout": "enterprise-backend",
        "theme": "#e0234e"
    },
    {
        "id": "django-fullstack",
        "name": "DjangoFullstack",
        "category": "Software",
        "description": "Django fullstack developer template",
        "layout": "python-web",
        "theme": "#092e20"
    },
    {
        "id": "spring-boot-developer",
        "name": "SpringBootDeveloper",
        "category": "Software",
        "description": "Spring Boot developer template",
        "layout": "java-enterprise",
        "theme": "#6db33f"
    },
    {
        "id": "postgresql-dba",
        "name": "PostgreSQLDBA",
        "category": "Software",
        "description": "PostgreSQL database administrator template",
        "layout": "database-admin",
        "theme": "#336791"
    },
    {
        "id": "mongodb-specialist",
        "name": "MongoDBSpecialist",
        "category": "Software",
        "description": "MongoDB specialist template with NoSQL focus",
        "layout": "nosql-expert",
        "theme": "#13aa52"
    },
    {
        "id": "redis-engineer",
        "name": "RedisEngineer",
        "category": "Software",
        "description": "Redis engineer template with caching expertise",
        "layout": "cache-specialist",
        "theme": "#dc382d"
    },
    {
        "id": "elasticsearch-expert",
        "name": "ElasticsearchExpert",
        "category": "Software",
        "description": "Elasticsearch expert template with search focus",
        "layout": "search-engineer",
        "theme": "#005571"
    },
    {
        "id": "terraform-devops",
        "name": "TerraformDevOps",
        "category": "Software",
        "description": "Terraform DevOps template with IaC emphasis",
        "layout": "iac-focused",
        "theme": "#7b42bc"
    },
    {
        "id": "ansible-automation",
        "name": "AnsibleAutomation",
        "category": "Software",
        "description": "Ansible automation engineer template",
        "layout": "automation-focus",
        "theme": "#ee0000"
    },
    {
        "id": "jenkins-cicd",
        "name": "JenkinsCICD",
        "category": "Software",
        "description": "Jenkins CI/CD specialist template",
        "layout": "cicd-pipeline",
        "theme": "#d24939"
    },
    {
        "id": "kafka-streaming",
        "name": "KafkaStreaming",
        "category": "Software",
        "description": "Kafka streaming engineer template",
        "layout": "streaming-data",
        "theme": "#231f20"
    },
    {
        "id": "rabbitmq-specialist",
        "name": "RabbitMQSpecialist",
        "category": "Software",
        "description": "RabbitMQ messaging specialist template",
        "layout": "messaging-expert",
        "theme": "#ff6600"
    },
    {
        "id": "grpc-developer",
        "name": "GRPCDeveloper",
        "category": "Software",
        "description": "gRPC developer template with microservices focus",
        "layout": "microservices",
        "theme": "#244c5a"
    },
    {
        "id": "webassembly-engineer",
        "name": "WebAssemblyEngineer",
        "category": "Software",
        "description": "WebAssembly engineer template",
        "layout": "wasm-focused",
        "theme": "#654ff0"
    },
    {
        "id": "unity-game-developer",
        "name": "UnityGameDeveloper",
        "category": "Software",
        "description": "Unity game developer template",
        "layout": "game-dev",
        "theme": "#000000"
    },

    # ===== FRESH GRADUATES (20 templates) =====
    {
        "id": "academic-achiever",
        "name": "AcademicAchiever",
        "category": "Fresher",
        "description": "Academic achiever template highlighting education excellence",
        "layout": "education-first",
        "theme": "#2563eb"
    },
    {
        "id": "graduate-innovator",
        "name": "GraduateInnovator",
        "category": "Fresher",
        "description": "Innovative graduate template with project showcase",
        "layout": "project-showcase",
        "theme": "#7c3aed"
    },
    {
        "id": "campus-leader",
        "name": "CampusLeader",
        "category": "Fresher",
        "description": "Campus leadership template for student leaders",
        "layout": "leadership-focus",
        "theme": "#059669"
    },
    {
        "id": "scholarship-graduate",
        "name": "ScholarshipGraduate",
        "category": "Fresher",
        "description": "Scholarship graduate template highlighting achievements",
        "layout": "achievement-based",
        "theme": "#dc2626"
    },
    {
        "id": "honors-student",
        "name": "HonorsStudent",
        "category": "Fresher",
        "description": "Honors student template with academic distinction",
        "layout": "honors-focused",
        "theme": "#7c2d12"
    },
    {
        "id": "stem-graduate",
        "name": "STEMGraduate",
        "category": "Fresher",
        "description": "STEM graduate template with technical emphasis",
        "layout": "stem-focused",
        "theme": "#0891b2"
    },
    {
        "id": "internship-ready",
        "name": "InternshipReady",
        "category": "Fresher",
        "description": "Internship-ready template for entry-level seekers",
        "layout": "internship-focus",
        "theme": "#16a34a"
    },
    {
        "id": "research-graduate",
        "name": "ResearchGraduate",
        "category": "Fresher",
        "description": "Research-focused graduate template",
        "layout": "research-emphasis",
        "theme": "#4f46e5"
    },
    {
        "id": "entrepreneurial-graduate",
        "name": "EntrepreneurialGraduate",
        "category": "Fresher",
        "description": "Entrepreneurial graduate template with startup experience",
        "layout": "startup-focused",
        "theme": "#ea580c"
    },
    {
        "id": "volunteer-leader",
        "name": "VolunteerLeader",
        "category": "Fresher",
        "description": "Volunteer leadership template for community-focused grads",
        "layout": "volunteer-focus",
        "theme": "#14b8a6"
    },
    {
        "id": "coding-bootcamp-grad",
        "name": "CodingBootcampGrad",
        "category": "Fresher",
        "description": "Coding bootcamp graduate template",
        "layout": "bootcamp-grad",
        "theme": "#8b5cf6"
    },
    {
        "id": "liberal-arts-graduate",
        "name": "LiberalArtsGraduate",
        "category": "Fresher",
        "description": "Liberal arts graduate template",
        "layout": "liberal-arts",
        "theme": "#be123c"
    },
    {
        "id": "business-graduate",
        "name": "BusinessGraduate",
        "category": "Fresher",
        "description": "Business school graduate template",
        "layout": "business-school",
        "theme": "#1e40af"
    },
    {
        "id": "engineering-fresher",
        "name": "EngineeringFresher",
        "category": "Fresher",
        "description": "Engineering fresher template with technical projects",
        "layout": "engineering-fresh",
        "theme": "#0d9488"
    },
    {
        "id": "design-school-grad",
        "name": "DesignSchoolGrad",
        "category": "Fresher",
        "description": "Design school graduate template",
        "layout": "design-grad",
        "theme": "#ec4899"
    },
    {
        "id": "masters-graduate",
        "name": "MastersGraduate",
        "category": "Fresher",
        "description": "Master's degree graduate template",
        "layout": "masters-level",
        "theme": "#0f766e"
    },
    {
        "id": "phd-candidate",
        "name": "PhDCandidate",
        "category": "Fresher",
        "description": "PhD candidate template for doctoral graduates",
        "layout": "phd-level",
        "theme": "#7c2d12"
    },
    {
        "id": "student-athlete",
        "name": "StudentAthlete",
        "category": "Fresher",
        "description": "Student athlete template balancing sports and academics",
        "layout": "athlete-focused",
        "theme": "#0891b2"
    },
    {
        "id": "study-abroad-graduate",
        "name": "StudyAbroadGraduate",
        "category": "Fresher",
        "description": "Study abroad graduate with international experience",
        "layout": "international-grad",
        "theme": "#059669"
    },
    {
        "id": "dual-degree-graduate",
        "name": "DualDegreeGraduate",
        "category": "Fresher",
        "description": "Dual degree graduate template",
        "layout": "dual-degree",
        "theme": "#6366f1"
    },

    # ===== CREATIVE (15 templates) =====
    {
        "id": "portfolio-artist",
        "name": "PortfolioArtist",
        "category": "Creative",
        "description": "Portfolio-focused artist template with visual showcase",
        "layout": "portfolio-grid",
        "theme": "#ec4899"
    },
    {
        "id": "motion-designer",
        "name": "MotionDesigner",
        "category": "Creative",
        "description": "Motion designer template with dynamic layouts",
        "layout": "motion-focus",
        "theme": "#8b5cf6"
    },
    {
        "id": "brand-strategist",
        "name": "BrandStrategist",
        "category": "Creative",
        "description": "Brand strategist template with identity focus",
        "layout": "brand-focused",
        "theme": "#0891b2"
    },
    {
        "id": "content-creator",
        "name": "ContentCreator",
        "category": "Creative",
        "description": "Content creator template for digital creators",
        "layout": "creator-showcase",
        "theme": "#f59e0b"
    },
    {
        "id": "illustrator-artist",
        "name": "IllustratorArtist",
        "category": "Creative",
        "description": "Illustrator artist template with artwork showcase",
        "layout": "illustration-grid",
        "theme": "#06b6d4"
    },
    {
        "id": "video-producer",
        "name": "VideoProducer",
        "category": "Creative",
        "description": "Video producer template with filmmaking focus",
        "layout": "video-portfolio",
        "theme": "#dc2626"
    },
    {
        "id": "copywriter-creative",
        "name": "CopywriterCreative",
        "category": "Creative",
        "description": "Creative copywriter template with writing samples",
        "layout": "writer-showcase",
        "theme": "#7c3aed"
    },
    {
        "id": "art-director-pro",
        "name": "ArtDirectorPro",
        "category": "Creative",
        "description": "Professional art director template",
        "layout": "director-portfolio",
        "theme": "#0f172a"
    },
    {
        "id": "photographer-pro",
        "name": "PhotographerPro",
        "category": "Creative",
        "description": "Professional photographer template",
        "layout": "photo-grid",
        "theme": "#64748b"
    },
    {
        "id": "typographer-specialist",
        "name": "TypographerSpecialist",
        "category": "Creative",
        "description": "Typography specialist template with font showcase",
        "layout": "typography-focus",
        "theme": "#1e293b"
    },
    {
        "id": "digital-artist",
        "name": "DigitalArtist",
        "category": "Creative",
        "description": "Digital artist template for digital creators",
        "layout": "digital-showcase",
        "theme": "#a855f7"
    },
    {
        "id": "creative-director-elite",
        "name": "CreativeDirectorElite",
        "category": "Creative",
        "description": "Elite creative director template",
        "layout": "director-elite",
        "theme": "#be123c"
    },
    {
        "id": "social-media-creative",
        "name": "SocialMediaCreative",
        "category": "Creative",
        "description": "Social media creative template",
        "layout": "social-focused",
        "theme": "#f43f5e"
    },
    {
        "id": "animation-artist",
        "name": "AnimationArtist",
        "category": "Creative",
        "description": "Animation artist template",
        "layout": "animation-showcase",
        "theme": "#6366f1"
    },
    {
        "id": "multimedia-designer",
        "name": "MultimediaDesigner",
        "category": "Creative",
        "description": "Multimedia designer template",
        "layout": "multimedia-grid",
        "theme": "#0891b2"
    },

    # ===== DESIGN (10 templates) =====
    {
        "id": "ux-researcher",
        "name": "UXResearcher",
        "category": "Design",
        "description": "UX researcher template with research methodology focus",
        "layout": "research-focused",
        "theme": "#6366f1"
    },
    {
        "id": "ui-specialist",
        "name": "UISpecialist",
        "category": "Design",
        "description": "UI specialist template with interface design showcase",
        "layout": "ui-showcase",
        "theme": "#8b5cf6"
    },
    {
        "id": "product-designer-pro",
        "name": "ProductDesignerPro",
        "category": "Design",
        "description": "Professional product designer template",
        "layout": "product-focus",
        "theme": "#0891b2"
    },
    {
        "id": "interaction-designer",
        "name": "InteractionDesigner",
        "category": "Design",
        "description": "Interaction designer template",
        "layout": "interaction-focus",
        "theme": "#ec4899"
    },
    {
        "id": "service-designer",
        "name": "ServiceDesigner",
        "category": "Design",
        "description": "Service designer template with systems thinking",
        "layout": "service-design",
        "theme": "#14b8a6"
    },
    {
        "id": "design-systems-architect",
        "name": "DesignSystemsArchitect",
        "category": "Design",
        "description": "Design systems architect template",
        "layout": "systems-architect",
        "theme": "#7c3aed"
    },
    {
        "id": "accessibility-designer",
        "name": "AccessibilityDesigner",
        "category": "Design",
        "description": "Accessibility-focused designer template",
        "layout": "a11y-focused",
        "theme": "#059669"
    },
    {
        "id": "design-lead",
        "name": "DesignLead",
        "category": "Design",
        "description": "Design lead template for leadership roles",
        "layout": "lead-designer",
        "theme": "#0f766e"
    },
    {
        "id": "design-strategist",
        "name": "DesignStrategist",
        "category": "Design",
        "description": "Design strategist template with strategic focus",
        "layout": "strategy-focus",
        "theme": "#1e40af"
    },
    {
        "id": "visual-designer-pro",
        "name": "VisualDesignerPro",
        "category": "Design",
        "description": "Professional visual designer template",
        "layout": "visual-showcase",
        "theme": "#be185d"
    },
]

def generate_display_template(template_info):
    """Generate a React display template file"""
    name = template_info["name"]
    theme = template_info["theme"]

    return f'''import type {{ ResumeData }} from "@/pages/Editor";
import type {{ ResumeSection }} from "@/types/resume";
import {{ Mail, Phone, MapPin }} from "lucide-react";
import {{ ProfilePhoto }} from "./ProfilePhoto";
import {{ InlineEditableText }} from "@/components/resume/InlineEditableText";
import {{ InlineEditableList }} from "@/components/resume/InlineEditableList";
import {{ InlineEditableSkills }} from "@/components/resume/InlineEditableSkills";
import {{ InlineEditableDate }} from "@/components/resume/InlineEditableDate";
import {{ InlineEditableDynamicSection }} from "@/components/resume/InlineEditableDynamicSection";
import {{ HelperSectionVariantRenderer }} from "@/components/resume/HelperSectionVariantRenderer";

interface TemplateProps {{
  resumeData: ResumeData;
  themeColor?: string;
  editable?: boolean;
}}

export const {name}Template = ({{ resumeData, themeColor = "{theme}", editable = false }}: TemplateProps) => {{
  const formatDate = (date: string) => {{
    if (!date) return "";
    const [year, month] = date.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${{monthNames[parseInt(month) - 1]}} ${{year}}`;
  }};

  const photo = resumeData.personalInfo.photo;

  const renderDynamicSection = (section: ResumeSection, sectionIndex: number) => {{
    if (!section.enabled) return null;

    if (editable) {{
      const renderNonEditableContent = () => {{
        return <HelperSectionVariantRenderer section={{section}} formatDate={{formatDate}} />;
      }};

      return (
        <div key={{section.id}} style={{{{ pageBreakInside: 'avoid' }}}}>
          <InlineEditableDynamicSection
            section={{section}}
            sectionIndex={{sectionIndex}}
            formatDate={{formatDate}}
            renderNonEditable={{renderNonEditableContent}}
          />
        </div>
      );
    }}

    return <HelperSectionVariantRenderer key={{section.id}} section={{section}} formatDate={{formatDate}} />;
  }};

  return (
    <div className="w-full h-full bg-white p-12 text-gray-900" style={{{{ pageBreakAfter: 'auto' }}}}>
      {{/* Header */}}
      <div className="mb-8 pb-6 border-b-2" style={{{{ borderColor: themeColor, pageBreakAfter: 'avoid', pageBreakInside: 'avoid' }}}}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            {{editable ? (
              <>
                <InlineEditableText
                  path="personalInfo.fullName"
                  value={{resumeData.personalInfo.fullName || "Your Name"}}
                  className="text-4xl font-bold mb-2 uppercase tracking-wide block"
                  style={{{{ color: themeColor }}}}
                  as="h1"
                />
                {{resumeData.personalInfo.title && (
                  <InlineEditableText
                    path="personalInfo.title"
                    value={{resumeData.personalInfo.title}}
                    className="text-xl text-gray-700 font-medium block"
                    as="p"
                  />
                )}}
              </>
            ) : (
              <>
                <h1 className="text-4xl font-bold mb-2 uppercase tracking-wide" style={{{{ color: themeColor }}}}>
                  {{resumeData.personalInfo.fullName || "Your Name"}}
                </h1>
                {{resumeData.personalInfo.title && (
                  <p className="text-xl text-gray-700 font-medium">
                    {{resumeData.personalInfo.title}}
                  </p>
                )}}
              </>
            )}}
          </div>
          <ProfilePhoto src={{photo}} borderClass="border-2 border-gray-200" />
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
          {{resumeData.personalInfo.email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {{editable ? (
                <InlineEditableText
                  path="personalInfo.email"
                  value={{resumeData.personalInfo.email}}
                  className="inline-block"
                />
              ) : (
                <span>{{resumeData.personalInfo.email}}</span>
              )}}
            </div>
          )}}
          {{resumeData.personalInfo.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {{editable ? (
                <InlineEditableText
                  path="personalInfo.phone"
                  value={{resumeData.personalInfo.phone}}
                  className="inline-block"
                />
              ) : (
                <span>{{resumeData.personalInfo.phone}}</span>
              )}}
            </div>
          )}}
          {{resumeData.personalInfo.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {{editable ? (
                <InlineEditableText
                  path="personalInfo.location"
                  value={{resumeData.personalInfo.location}}
                  className="inline-block"
                />
              ) : (
                <span>{{resumeData.personalInfo.location}}</span>
              )}}
            </div>
          )}}
        </div>
      </div>

      {{/* Professional Summary */}}
      {{resumeData.personalInfo.summary && (
        <div className="mb-8" style={{{{ pageBreakInside: 'avoid' }}}}>
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide border-b pb-2" style={{{{ color: themeColor, borderColor: themeColor, pageBreakAfter: 'avoid' }}}}>
            Professional Summary
          </h2>
          {{editable ? (
            <InlineEditableText
              path="personalInfo.summary"
              value={{resumeData.personalInfo.summary}}
              className="text-sm text-gray-700 leading-relaxed block"
              multiline
              as="p"
            />
          ) : (
            <p className="text-sm text-gray-700 leading-relaxed">
              {{resumeData.personalInfo.summary}}
            </p>
          )}}
        </div>
      )}}

      {{/* Experience */}}
      {{resumeData.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 uppercase tracking-wide border-b pb-2" style={{{{ color: themeColor, borderColor: themeColor, pageBreakAfter: 'avoid' }}}}>
            Professional Experience
          </h2>
          {{editable ? (
            <InlineEditableList
              path="experience"
              items={{resumeData.experience}}
              defaultItem={{{{
                id: Date.now().toString(),
                company: "Company Name",
                position: "Position Title",
                startDate: "2023-01",
                endDate: "2024-01",
                description: "Job description here",
                current: false,
              }}}}
              addButtonLabel="Add Experience"
              renderItem={{(exp, index) => (
                <div style={{{{ pageBreakInside: 'avoid' }}}}>
                  <div className="flex justify-between items-baseline mb-2">
                    <div>
                      <InlineEditableText
                        path={{`experience[${{index}}].position`}}
                        value={{exp.position || "Position Title"}}
                        className="text-base font-bold text-gray-900 block"
                        as="h3"
                      />
                      <InlineEditableText
                        path={{`experience[${{index}}].company`}}
                        value={{exp.company || "Company Name"}}
                        className="text-sm text-gray-700 font-semibold block"
                        as="p"
                      />
                    </div>
                    <div className="text-xs text-gray-600 text-right flex items-center gap-1">
                      <InlineEditableDate
                        path={{`experience[${{index}}].startDate`}}
                        value={{exp.startDate}}
                        formatDisplay={{formatDate}}
                        className="inline-block"
                      />
                      <span> - </span>
                      {{exp.current ? (
                        <span>Present</span>
                      ) : (
                        <InlineEditableDate
                          path={{`experience[${{index}}].endDate`}}
                          value={{exp.endDate}}
                          formatDisplay={{formatDate}}
                          className="inline-block"
                        />
                      )}}
                    </div>
                  </div>
                  {{exp.description && (
                    <InlineEditableText
                      path={{`experience[${{index}}].description`}}
                      value={{exp.description}}
                      className="text-sm text-gray-700 leading-relaxed whitespace-pre-line block"
                      multiline
                      as="p"
                    />
                  )}}
                </div>
              )}}
            />
          ) : (
            <div className="space-y-5">
              {{resumeData.experience.map((exp) => (
                <div key={{exp.id}} style={{{{ pageBreakInside: 'avoid' }}}}>
                  <div className="flex justify-between items-baseline mb-2">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">
                        {{exp.position || "Position Title"}}
                      </h3>
                      <p className="text-sm text-gray-700 font-semibold">
                        {{exp.company || "Company Name"}}
                      </p>
                    </div>
                    <div className="text-xs text-gray-600 text-right">
                      {{formatDate(exp.startDate)}} - {{exp.current ? "Present" : formatDate(exp.endDate)}}
                    </div>
                  </div>
                  {{exp.description && (
                    <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {{exp.description}}
                    </p>
                  )}}
                </div>
              ))}}
            </div>
          )}}
        </div>
      )}}

      {{/* Education */}}
      {{resumeData.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 uppercase tracking-wide border-b pb-2" style={{{{ color: themeColor, borderColor: themeColor, pageBreakAfter: 'avoid' }}}}>
            Education
          </h2>
          {{editable ? (
            <InlineEditableList
              path="education"
              items={{resumeData.education}}
              defaultItem={{{{
                id: Date.now().toString(),
                school: "School Name",
                degree: "Degree",
                field: "Field of Study",
                startDate: "2019-09",
                endDate: "2023-05",
              }}}}
              addButtonLabel="Add Education"
              renderItem={{(edu, index) => (
                <div style={{{{ pageBreakInside: 'avoid' }}}}>
                  <div className="flex justify-between items-baseline mb-1">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">
                        <InlineEditableText
                          path={{`education[${{index}}].degree`}}
                          value={{edu.degree || "Degree"}}
                          className="inline-block"
                        />
                        {{edu.field && (
                          <>
                            {{" in "}}
                            <InlineEditableText
                              path={{`education[${{index}}].field`}}
                              value={{edu.field}}
                              className="inline-block"
                            />
                          </>
                        )}}
                      </h3>
                      <InlineEditableText
                        path={{`education[${{index}}].school`}}
                        value={{edu.school || "School Name"}}
                        className="text-sm text-gray-700 font-semibold block"
                        as="p"
                      />
                    </div>
                    <div className="text-xs text-gray-600 flex items-center gap-1">
                      <InlineEditableDate
                        path={{`education[${{index}}].startDate`}}
                        value={{edu.startDate}}
                        formatDisplay={{formatDate}}
                        className="inline-block"
                      />
                      <span> - </span>
                      <InlineEditableDate
                        path={{`education[${{index}}].endDate`}}
                        value={{edu.endDate}}
                        formatDisplay={{formatDate}}
                        className="inline-block"
                      />
                    </div>
                  </div>
                </div>
              )}}
            />
          ) : (
            <div className="space-y-4">
              {{resumeData.education.map((edu) => (
                <div key={{edu.id}} style={{{{ pageBreakInside: 'avoid' }}}}>
                  <div className="flex justify-between items-baseline mb-1">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">
                        {{edu.degree || "Degree"}} {{edu.field && `in ${{edu.field}}`}}
                      </h3>
                      <p className="text-sm text-gray-700 font-semibold">
                        {{edu.school || "School Name"}}
                      </p>
                    </div>
                    <div className="text-xs text-gray-600">
                      {{formatDate(edu.startDate)}} - {{formatDate(edu.endDate)}}
                    </div>
                  </div>
                </div>
              ))}}
            </div>
          )}}
        </div>
      )}}

      {{/* Skills */}}
      {{resumeData.skills.length > 0 && (
        <div className="mb-8" style={{{{ pageBreakInside: 'avoid' }}}}>
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide border-b pb-2" style={{{{ color: themeColor, borderColor: themeColor, pageBreakAfter: 'avoid' }}}}>
            Skills
          </h2>
          {{editable ? (
            <InlineEditableSkills
              path="skills"
              skills={{resumeData.skills}}
              renderSkill={{(skill, index) =>
                skill.name && (
                  <span className="text-sm text-gray-700 font-medium">
                    {{skill.name}}{{index < resumeData.skills.length - 1 ? " •" : ""}}
                  </span>
                )
              }}
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {{resumeData.skills.map((skill, index) => (
                skill.name && (
                  <span
                    key={{skill.id}}
                    className="text-sm text-gray-700 font-medium"
                  >
                    {{skill.name}}{{index < resumeData.skills.length - 1 ? " •" : ""}}
                  </span>
                )
              ))}}
            </div>
          )}}
        </div>
      )}}

      {{/* Custom Sections */}}
      {{resumeData.sections.map((section, index) => (
        <div key={{section.id}} className="mb-8" style={{{{ pageBreakInside: 'avoid' }}}}>
          <h2 className="text-lg font-bold mb-3 uppercase tracking-wide border-b pb-2" style={{{{ color: themeColor, borderColor: themeColor, pageBreakAfter: 'avoid' }}}}>
            {{editable ? (
              <InlineEditableText
                path={{`sections[${{index}}].title`}}
                value={{section.title}}
                className="inline-block"
              />
            ) : (
              section.title
            )}}
          </h2>
          {{editable ? (
            <InlineEditableText
              path={{`sections[${{index}}].content`}}
              value={{section.content}}
              className="text-sm text-gray-700 leading-relaxed whitespace-pre-line block"
              multiline
              as="p"
            />
          ) : (
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {{section.content}}
            </p>
          )}}
        </div>
      ))}}

      {{/* Dynamic Sections */}}
      {{resumeData.dynamicSections && Array.isArray(resumeData.dynamicSections) && resumeData.dynamicSections.length > 0 && (
        <>
          {{resumeData.dynamicSections
            .filter(section => section.enabled)
            .sort((a, b) => a.order - b.order)
            .map((section, index) => {{
              const actualIndex = resumeData.dynamicSections!.findIndex(s => s.id === section.id);
              return (
                <div key={{section.id}}>
                  {{renderDynamicSection(section, actualIndex)}}
                </div>
              );
            }})}}
        </>
      )}}
    </div>
  );
}};
'''

def generate_pdf_template(template_info):
    """Generate a React PDF template file"""
    name = template_info["name"]

    return f'''import {{ Document, Page, Text, View, StyleSheet, Svg, Path, Image }} from '@react-pdf/renderer';
import type {{ ResumeData }} from "@/pages/Editor";
import type {{ ResumeSection }} from "@/types/resume";
import {{ PDF_PAGE_MARGINS, hasContent }} from "@/lib/pdfConfig";

const styles = StyleSheet.create({{
  page: {{
    paddingTop: PDF_PAGE_MARGINS.top,
    paddingRight: PDF_PAGE_MARGINS.right,
    paddingBottom: PDF_PAGE_MARGINS.bottom,
    paddingLeft: PDF_PAGE_MARGINS.left,
    fontSize: 10,
    fontFamily: 'Inter',
  }},
  header: {{
    marginBottom: 20,
    borderBottom: 2,
    borderBottomColor: '#000',
    paddingBottom: 15,
  }},
  headerContent: {{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  }},
  name: {{
    fontSize: 24,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 1,
  }},
  title: {{
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  }},
  contactRow: {{
    flexDirection: 'row',
    gap: 15,
    fontSize: 9,
    color: '#666',
  }},
  contactItem: {{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  }},
  photoWrapper: {{
    width: 72,
    height: 72,
    borderRadius: 36,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#e5e7eb',
  }},
  photo: {{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }},
  section: {{
    marginBottom: 20,
  }},
  sectionTitle: {{
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 8,
    textTransform: 'uppercase',
    borderBottom: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    letterSpacing: 0.5,
  }},
  experienceItem: {{
    marginBottom: 15,
  }},
  jobTitle: {{
    fontSize: 11,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 2,
  }},
  company: {{
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: 600,
    color: '#333',
    marginBottom: 2,
  }},
  date: {{
    fontSize: 9,
    color: '#666',
    marginBottom: 5,
  }},
  description: {{
    fontSize: 9,
    lineHeight: 1.4,
    color: '#333',
  }},
  educationItem: {{
    marginBottom: 10,
  }},
  degree: {{
    fontSize: 11,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 2,
  }},
  school: {{
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: 600,
    color: '#333',
  }},
  skillsContainer: {{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  }},
  skill: {{
    fontSize: 9,
    color: '#333',
  }},
}});

const formatDate = (date: string) => {{
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${{monthNames[parseInt(month) - 1]}} ${{year}}`;
}};

interface Props {{
  resumeData: ResumeData;
  themeColor?: string;
}}

export const {name}PDF = ({{ resumeData, themeColor }}: Props) => {{
  const photo = resumeData.personalInfo.photo;

  const renderDynamicSection = (section: ResumeSection) => {{
    if (!section.enabled) return null;

    const sectionData = section.data;

    switch (sectionData.type) {{
      case 'certifications':
        return sectionData.items.length > 0 ? (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            {{sectionData.items.map((cert) => (
              <View key={{cert.id}} style={{styles.educationItem}}>
                <Text style={{styles.degree}}>{{cert.name}}</Text>
                <Text style={{styles.company}}>{{cert.issuer}}</Text>
                <Text style={{styles.date}}>{{formatDate(cert.date)}}</Text>
                {{cert.credentialId && (
                  <Text style={{styles.description}}>ID: {{cert.credentialId}}</Text>
                )}}
              </View>
            ))}}
          </View>
        ) : null;

      case 'languages':
        return sectionData.items.length > 0 ? (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            <View style={{styles.skillsContainer}}>
              {{sectionData.items.map((lang, index) => (
                <Text key={{lang.id}} style={{styles.skill}}>
                  {{lang.language}} - {{lang.proficiency}}
                  {{index < sectionData.items.length - 1 ? " •" : ""}}
                </Text>
              ))}}
            </View>
          </View>
        ) : null;

      case 'projects':
        return sectionData.items.length > 0 ? (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            {{sectionData.items.map((project) => (
              <View key={{project.id}} style={{styles.experienceItem}}>
                <Text style={{styles.jobTitle}}>{{project.name}}</Text>
                {{project.description && (
                  <Text style={{styles.description}}>{{project.description}}</Text>
                )}}
                {{project.techStack && project.techStack.length > 0 && (
                  <Text style={{styles.description}}>
                    Tech: {{project.techStack.join(", ")}}
                  </Text>
                )}}
              </View>
            ))}}
          </View>
        ) : null;

      case 'awards':
        return sectionData.items.length > 0 ? (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            {{sectionData.items.map((award) => (
              <View key={{award.id}} style={{styles.educationItem}}>
                <Text style={{styles.degree}}>{{award.title}}</Text>
                <Text style={{styles.company}}>{{award.issuer}}</Text>
                <Text style={{styles.date}}>{{formatDate(award.date)}}</Text>
                {{award.description && (
                  <Text style={{styles.description}}>{{award.description}}</Text>
                )}}
              </View>
            ))}}
          </View>
        ) : null;

      case 'volunteer':
        return sectionData.items.length > 0 ? (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            {{sectionData.items.map((vol) => (
              <View key={{vol.id}} style={{styles.experienceItem}}>
                <Text style={{styles.jobTitle}}>{{vol.role}}</Text>
                <Text style={{styles.company}}>{{vol.organization}}</Text>
                <Text style={{styles.date}}>
                  {{formatDate(vol.startDate)}} - {{vol.current ? "Present" : formatDate(vol.endDate)}}
                </Text>
                {{vol.description && (
                  <Text style={{styles.description}}>{{vol.description}}</Text>
                )}}
              </View>
            ))}}
          </View>
        ) : null;

      case 'publications':
        return sectionData.items.length > 0 ? (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            {{sectionData.items.map((pub) => (
              <View key={{pub.id}} style={{styles.educationItem}}>
                <Text style={{styles.degree}}>{{pub.title}}</Text>
                <Text style={{styles.company}}>{{pub.publisher}}</Text>
                <Text style={{styles.date}}>{{formatDate(pub.date)}}</Text>
                {{pub.description && (
                  <Text style={{styles.description}}>{{pub.description}}</Text>
                )}}
              </View>
            ))}}
          </View>
        ) : null;

      case 'speaking':
        return sectionData.items.length > 0 ? (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            {{sectionData.items.map((talk) => (
              <View key={{talk.id}} style={{styles.educationItem}}>
                <Text style={{styles.degree}}>{{talk.topic}}</Text>
                <Text style={{styles.company}}>{{talk.event}}</Text>
                <Text style={{styles.date}}>
                  {{formatDate(talk.date)}} • {{talk.location}}
                </Text>
              </View>
            ))}}
          </View>
        ) : null;

      case 'patents':
        return sectionData.items.length > 0 ? (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            {{sectionData.items.map((patent) => (
              <View key={{patent.id}} style={{styles.educationItem}}>
                <Text style={{styles.degree}}>{{patent.title}}</Text>
                <Text style={{styles.company}}>
                  {{patent.patentNumber}} • {{patent.status}}
                </Text>
                <Text style={{styles.date}}>{{formatDate(patent.date)}}</Text>
                {{patent.description && (
                  <Text style={{styles.description}}>{{patent.description}}</Text>
                )}}
              </View>
            ))}}
          </View>
        ) : null;

      case 'portfolio':
        return sectionData.items.length > 0 ? (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            {{sectionData.items.map((item) => (
              <View key={{item.id}} style={{styles.educationItem}}>
                <Text style={{styles.description}}>
                  {{item.platform}}: {{item.url}}
                </Text>
              </View>
            ))}}
          </View>
        ) : null;

      case 'custom':
        return hasContent(sectionData.content) ? (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            <Text style={{styles.description}}>{{sectionData.content}}</Text>
          </View>
        ) : null;

      default:
        return null;
    }}
  }};

  return (
    <Document>
      <Page size="A4" style={{styles.page}}>
      {{/* Header */}}
      <View style={{styles.header}}>
        <View style={{styles.headerContent}}>
          <View>
            <Text style={{styles.name}}>{{resumeData.personalInfo.fullName || "Your Name"}}</Text>
            {{resumeData.personalInfo.title && (
              <Text style={{styles.title}}>{{resumeData.personalInfo.title}}</Text>
            )}}
          </View>
          {{photo ? (
            <View style={{styles.photoWrapper}}>
              <Image src={{photo}} style={{styles.photo}} />
            </View>
          ) : null}}
        </View>
        <View style={{styles.contactRow}}>
          {{resumeData.personalInfo.email && (
            <View style={{styles.contactItem}}>
              <Svg width="10" height="10" viewBox="0 0 24 24">
                <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="#666" strokeWidth="2" />
                <Path d="m22 6-10 7L2 6" fill="none" stroke="#666" strokeWidth="2" />
              </Svg>
              <Text>{{resumeData.personalInfo.email}}</Text>
            </View>
          )}}
          {{resumeData.personalInfo.phone && (
            <View style={{styles.contactItem}}>
              <Svg width="10" height="10" viewBox="0 0 24 24">
                <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="#666" strokeWidth="2" />
              </Svg>
              <Text>{{resumeData.personalInfo.phone}}</Text>
            </View>
          )}}
          {{resumeData.personalInfo.location && (
            <View style={{styles.contactItem}}>
              <Svg width="10" height="10" viewBox="0 0 24 24">
                <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="#666" strokeWidth="2" />
                <Path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="none" stroke="#666" strokeWidth="2" />
              </Svg>
              <Text>{{resumeData.personalInfo.location}}</Text>
            </View>
          )}}
        </View>
      </View>

      {{/* Summary */}}
      {{hasContent(resumeData.personalInfo.summary) && (
        <View style={{styles.section}}>
          <Text style={{styles.sectionTitle}}>Professional Summary</Text>
          <Text style={{styles.description}}>{{resumeData.personalInfo.summary}}</Text>
        </View>
      )}}

      {{/* Experience */}}
      {{resumeData.experience.length > 0 && (
        <View style={{styles.section}}>
          <Text style={{styles.sectionTitle}}>Professional Experience</Text>
          {{resumeData.experience.map((exp) => (
            <View key={{exp.id}} style={{styles.experienceItem}}>
              <Text style={{styles.jobTitle}}>{{exp.position || "Position Title"}}</Text>
              <Text style={{styles.company}}>{{exp.company || "Company Name"}}</Text>
              <Text style={{styles.date}}>
                {{formatDate(exp.startDate)}} - {{exp.current ? "Present" : formatDate(exp.endDate)}}
              </Text>
              {{hasContent(exp.description) && <Text style={{styles.description}}>{{exp.description}}</Text>}}
            </View>
          ))}}
        </View>
      )}}

      {{/* Education */}}
      {{resumeData.education.length > 0 && (
        <View style={{styles.section}}>
          <Text style={{styles.sectionTitle}}>Education</Text>
          {{resumeData.education.map((edu) => (
            <View key={{edu.id}} style={{styles.educationItem}}>
              <Text style={{styles.degree}}>
                {{edu.degree || "Degree"}} {{edu.field && `in ${{edu.field}}`}}
              </Text>
              <Text style={{styles.school}}>{{edu.school || "School Name"}}</Text>
              <Text style={{styles.date}}>
                {{formatDate(edu.startDate)}} - {{formatDate(edu.endDate)}}
              </Text>
            </View>
          ))}}
        </View>
      )}}

      {{/* Skills */}}
      {{resumeData.skills.length > 0 && (
        <View style={{styles.section}}>
          <Text style={{styles.sectionTitle}}>Skills</Text>
          <View style={{styles.skillsContainer}}>
            {{resumeData.skills.map((skill, index) => (
              hasContent(skill.name) && (
                <Text key={{skill.id}} style={{styles.skill}}>
                  {{skill.name}}{{index < resumeData.skills.length - 1 ? " •" : ""}}
                </Text>
              )
            ))}}
          </View>
        </View>
      )}}

      {{/* Custom Sections */}}
      {{resumeData.sections.map((section) => (
        hasContent(section.title) && hasContent(section.content) && (
          <View key={{section.id}} style={{styles.section}}>
            <Text style={{styles.sectionTitle}}>{{section.title}}</Text>
            <Text style={{styles.description}}>{{section.content}}</Text>
          </View>
        )
      ))}}

      {{/* Dynamic Sections */}}
      {{resumeData.dynamicSections && Array.isArray(resumeData.dynamicSections) && resumeData.dynamicSections.length > 0 && (
        <>
          {{resumeData.dynamicSections
            .filter(section => section.enabled)
            .sort((a, b) => a.order - b.order)
            .map(section => renderDynamicSection(section))}}
        </>
      )}}
      </Page>
    </Document>
  );
}};
'''

def main():
    # Create templates directory if it doesn't exist
    templates_dir = Path("/home/user/resumewithjayanth/src/components/resume/templates")
    pdf_dir = Path("/home/user/resumewithjayanth/src/components/resume/pdf")

    templates_dir.mkdir(parents=True, exist_ok=True)
    pdf_dir.mkdir(parents=True, exist_ok=True)

    print(f"Generating {len(TEMPLATES)} resume templates...")

    for i, template in enumerate(TEMPLATES, 1):
        # Generate display template
        display_filename = f"{template['name']}Template.tsx"
        display_path = templates_dir / display_filename
        display_content = generate_display_template(template)

        with open(display_path, 'w') as f:
            f.write(display_content)

        # Generate PDF template
        pdf_filename = f"{template['name']}PDF.tsx"
        pdf_path = pdf_dir / pdf_filename
        pdf_content = generate_pdf_template(template)

        with open(pdf_path, 'w') as f:
            f.write(pdf_content)

        print(f"[{i}/{len(TEMPLATES)}] Generated {template['name']} ({template['category']})")

    print(f"\n✅ Successfully generated {len(TEMPLATES)} templates!")
    print(f"   - {len(TEMPLATES)} display templates in {templates_dir}")
    print(f"   - {len(TEMPLATES)} PDF templates in {pdf_dir}")

    # Generate summary by category
    from collections import Counter
    category_counts = Counter(t['category'] for t in TEMPLATES)
    print("\nTemplates by category:")
    for category, count in category_counts.items():
        print(f"   - {category}: {count} templates")

    # Output template IDs for registration
    print("\nTemplate IDs for registration:")
    for template in TEMPLATES:
        print(f'  "{template["id"]}",')

if __name__ == "__main__":
    main()
