#!/usr/bin/env python3
"""
Generate registration code for all 100 templates
"""

# Template IDs and metadata
TEMPLATES = [
    # Universal (30)
    {"id": "strategic-leadership", "name": "StrategicLeadership", "category": "Universal", "categorySlug": "universal-professional", "description": "Executive leadership template with strategic focus and premium design"},
    {"id": "corporate-excellence", "name": "CorporateExcellence", "category": "Universal", "categorySlug": "universal-professional", "description": "Corporate excellence template with professional two-column layout"},
    {"id": "executive-prestige", "name": "ExecutivePrestige", "category": "Universal", "categorySlug": "universal-professional", "description": "Prestigious executive template with elegant serif typography"},
    {"id": "global-executive-pro", "name": "GlobalExecutivePro", "category": "Universal", "categorySlug": "universal-professional", "description": "Global executive template with international appeal"},
    {"id": "premium-corporate-edge", "name": "PremiumCorporateEdge", "category": "Universal", "categorySlug": "universal-professional", "description": "Premium corporate template with modern edge and sharp lines"},
    {"id": "enterprise-leader", "name": "EnterpriseLeader", "category": "Universal", "categorySlug": "universal-professional", "description": "Enterprise leadership template with clean corporate design"},
    {"id": "boardroom-ready", "name": "BoardroomReady", "category": "Universal", "categorySlug": "universal-professional", "description": "Boardroom-ready executive template with authoritative presence"},
    {"id": "c-suite-modern", "name": "CSuiteModern", "category": "Universal", "categorySlug": "universal-professional", "description": "C-suite modern template with contemporary sophistication"},
    {"id": "executive-impact", "name": "ExecutiveImpact", "category": "Universal", "categorySlug": "universal-professional", "description": "High-impact executive template with bold section headers"},
    {"id": "corporate-visionary", "name": "CorporateVisionary", "category": "Universal", "categorySlug": "universal-professional", "description": "Visionary corporate template with forward-thinking design"},
    {"id": "platinum-executive", "name": "PlatinumExecutive", "category": "Universal", "categorySlug": "universal-professional", "description": "Platinum-tier executive template with luxury feel"},
    {"id": "global-leadership", "name": "GlobalLeadership", "category": "Universal", "categorySlug": "universal-professional", "description": "Global leadership template for international executives"},
    {"id": "senior-executive-pro", "name": "SeniorExecutivePro", "category": "Universal", "categorySlug": "universal-professional", "description": "Senior executive professional template with gravitas"},
    {"id": "corporate-elite-plus", "name": "CorporateElitePlus", "category": "Universal", "categorySlug": "universal-professional", "description": "Elite corporate template with premium styling"},
    {"id": "executive-pinnacle", "name": "ExecutivePinnacle", "category": "Universal", "categorySlug": "universal-professional", "description": "Peak executive template for top-tier professionals"},
    {"id": "corporate-distinction", "name": "CorporateDistinction", "category": "Universal", "categorySlug": "universal-professional", "description": "Distinguished corporate template with refined aesthetics"},
    {"id": "leadership-summit", "name": "LeadershipSummit", "category": "Universal", "categorySlug": "universal-professional", "description": "Summit-level leadership template for executives"},
    {"id": "executive-authority", "name": "ExecutiveAuthority", "category": "Universal", "categorySlug": "universal-professional", "description": "Authoritative executive template with commanding presence"},
    {"id": "corporate-premier", "name": "CorporatePremier", "category": "Universal", "categorySlug": "universal-professional", "description": "Premier corporate template with first-class design"},
    {"id": "global-enterprise", "name": "GlobalEnterprise", "category": "Universal", "categorySlug": "universal-professional", "description": "Global enterprise template for multinational leaders"},
    {"id": "executive-signature", "name": "ExecutiveSignature", "category": "Universal", "categorySlug": "universal-professional", "description": "Signature executive template with unique branding"},
    {"id": "corporate-apex", "name": "CorporateApex", "category": "Universal", "categorySlug": "universal-professional", "description": "Apex corporate template for peak professionals"},
    {"id": "strategic-executive-plus", "name": "StrategicExecutivePlus", "category": "Universal", "categorySlug": "universal-professional", "description": "Enhanced strategic executive template"},
    {"id": "corporate-paradigm", "name": "CorporateParadigm", "category": "Universal", "categorySlug": "universal-professional", "description": "Paradigm-shifting corporate template"},
    {"id": "executive-magnitude", "name": "ExecutiveMagnitude", "category": "Universal", "categorySlug": "universal-professional", "description": "High-magnitude executive template"},
    {"id": "corporate-sovereign", "name": "CorporateSovereign", "category": "Universal", "categorySlug": "universal-professional", "description": "Sovereign corporate template with regal design"},
    {"id": "leadership-zenith", "name": "LeadershipZenith", "category": "Universal", "categorySlug": "universal-professional", "description": "Zenith leadership template for top executives"},
    {"id": "executive-nexus", "name": "ExecutiveNexus", "category": "Universal", "categorySlug": "universal-professional", "description": "Nexus executive template connecting all achievements"},
    {"id": "corporate-vanguard", "name": "CorporateVanguard", "category": "Universal", "categorySlug": "universal-professional", "description": "Vanguard corporate template leading the way"},
    {"id": "executive-ascendancy", "name": "ExecutiveAscendancy", "category": "Universal", "categorySlug": "universal-professional", "description": "Ascendant executive template showing career growth"},

    # Software (25)
    {"id": "vue-specialist", "name": "VueSpecialist", "category": "Software", "categorySlug": "software-technology", "description": "Vue.js specialist template with modern green theme"},
    {"id": "svelte-developer", "name": "SvelteDeveloper", "category": "Software", "categorySlug": "software-technology", "description": "Svelte developer template with orange accent"},
    {"id": "flutter-engineer", "name": "FlutterEngineer", "category": "Software", "categorySlug": "software-technology", "description": "Flutter engineer template with blue gradient"},
    {"id": "swift-ios-developer", "name": "SwiftIOSDeveloper", "category": "Software", "categorySlug": "software-technology", "description": "Swift iOS developer template with Apple-inspired design"},
    {"id": "rust-systems-engineer", "name": "RustSystemsEngineer", "category": "Software", "categorySlug": "software-technology", "description": "Rust systems engineer template with performance focus"},
    {"id": "scala-backend-engineer", "name": "ScalaBackendEngineer", "category": "Software", "categorySlug": "software-technology", "description": "Scala backend engineer template"},
    {"id": "elixir-developer", "name": "ElixirDeveloper", "category": "Software", "categorySlug": "software-technology", "description": "Elixir developer template with functional programming focus"},
    {"id": "graphql-architect", "name": "GraphQLArchitect", "category": "Software", "categorySlug": "software-technology", "description": "GraphQL architect template with API-first design"},
    {"id": "typescript-expert", "name": "TypeScriptExpert", "category": "Software", "categorySlug": "software-technology", "description": "TypeScript expert template with type-safe emphasis"},
    {"id": "nextjs-fullstack", "name": "NextJSFullstack", "category": "Software", "categorySlug": "software-technology", "description": "Next.js fullstack developer template"},
    {"id": "nestjs-backend", "name": "NestJSBackend", "category": "Software", "categorySlug": "software-technology", "description": "NestJS backend developer template"},
    {"id": "django-fullstack", "name": "DjangoFullstack", "category": "Software", "categorySlug": "software-technology", "description": "Django fullstack developer template"},
    {"id": "spring-boot-developer", "name": "SpringBootDeveloper", "category": "Software", "categorySlug": "software-technology", "description": "Spring Boot developer template"},
    {"id": "postgresql-dba", "name": "PostgreSQLDBA", "category": "Software", "categorySlug": "software-technology", "description": "PostgreSQL database administrator template"},
    {"id": "mongodb-specialist", "name": "MongoDBSpecialist", "category": "Software", "categorySlug": "software-technology", "description": "MongoDB specialist template with NoSQL focus"},
    {"id": "redis-engineer", "name": "RedisEngineer", "category": "Software", "categorySlug": "software-technology", "description": "Redis engineer template with caching expertise"},
    {"id": "elasticsearch-expert", "name": "ElasticsearchExpert", "category": "Software", "categorySlug": "software-technology", "description": "Elasticsearch expert template with search focus"},
    {"id": "terraform-devops", "name": "TerraformDevOps", "category": "Software", "categorySlug": "software-technology", "description": "Terraform DevOps template with IaC emphasis"},
    {"id": "ansible-automation", "name": "AnsibleAutomation", "category": "Software", "categorySlug": "software-technology", "description": "Ansible automation engineer template"},
    {"id": "jenkins-cicd", "name": "JenkinsCICD", "category": "Software", "categorySlug": "software-technology", "description": "Jenkins CI/CD specialist template"},
    {"id": "kafka-streaming", "name": "KafkaStreaming", "category": "Software", "categorySlug": "software-technology", "description": "Kafka streaming engineer template"},
    {"id": "rabbitmq-specialist", "name": "RabbitMQSpecialist", "category": "Software", "categorySlug": "software-technology", "description": "RabbitMQ messaging specialist template"},
    {"id": "grpc-developer", "name": "GRPCDeveloper", "category": "Software", "categorySlug": "software-technology", "description": "gRPC developer template with microservices focus"},
    {"id": "webassembly-engineer", "name": "WebAssemblyEngineer", "category": "Software", "categorySlug": "software-technology", "description": "WebAssembly engineer template"},
    {"id": "unity-game-developer", "name": "UnityGameDeveloper", "category": "Software", "categorySlug": "software-technology", "description": "Unity game developer template"},

    # Fresher (20)
    {"id": "academic-achiever", "name": "AcademicAchiever", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Academic achiever template highlighting education excellence"},
    {"id": "graduate-innovator", "name": "GraduateInnovator", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Innovative graduate template with project showcase"},
    {"id": "campus-leader", "name": "CampusLeader", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Campus leadership template for student leaders"},
    {"id": "scholarship-graduate", "name": "ScholarshipGraduate", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Scholarship graduate template highlighting achievements"},
    {"id": "honors-student", "name": "HonorsStudent", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Honors student template with academic distinction"},
    {"id": "stem-graduate", "name": "STEMGraduate", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "STEM graduate template with technical emphasis"},
    {"id": "internship-ready", "name": "InternshipReady", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Internship-ready template for entry-level seekers"},
    {"id": "research-graduate", "name": "ResearchGraduate", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Research-focused graduate template"},
    {"id": "entrepreneurial-graduate", "name": "EntrepreneurialGraduate", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Entrepreneurial graduate template with startup experience"},
    {"id": "volunteer-leader", "name": "VolunteerLeader", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Volunteer leadership template for community-focused grads"},
    {"id": "coding-bootcamp-grad", "name": "CodingBootcampGrad", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Coding bootcamp graduate template"},
    {"id": "liberal-arts-graduate", "name": "LiberalArtsGraduate", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Liberal arts graduate template"},
    {"id": "business-graduate", "name": "BusinessGraduate", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Business school graduate template"},
    {"id": "engineering-fresher", "name": "EngineeringFresher", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Engineering fresher template with technical projects"},
    {"id": "design-school-grad", "name": "DesignSchoolGrad", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Design school graduate template"},
    {"id": "masters-graduate", "name": "MastersGraduate", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Master's degree graduate template"},
    {"id": "phd-candidate", "name": "PhDCandidate", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "PhD candidate template for doctoral graduates"},
    {"id": "student-athlete", "name": "StudentAthlete", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Student athlete template balancing sports and academics"},
    {"id": "study-abroad-graduate", "name": "StudyAbroadGraduate", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Study abroad graduate with international experience"},
    {"id": "dual-degree-graduate", "name": "DualDegreeGraduate", "category": "Fresher", "categorySlug": "fresh-graduates", "description": "Dual degree graduate template"},

    # Creative (15)
    {"id": "portfolio-artist", "name": "PortfolioArtist", "category": "Creative", "categorySlug": "creative-design", "description": "Portfolio-focused artist template with visual showcase"},
    {"id": "motion-designer", "name": "MotionDesigner", "category": "Creative", "categorySlug": "creative-design", "description": "Motion designer template with dynamic layouts"},
    {"id": "brand-strategist", "name": "BrandStrategist", "category": "Creative", "categorySlug": "creative-design", "description": "Brand strategist template with identity focus"},
    {"id": "content-creator", "name": "ContentCreator", "category": "Creative", "categorySlug": "creative-design", "description": "Content creator template for digital creators"},
    {"id": "illustrator-artist", "name": "IllustratorArtist", "category": "Creative", "categorySlug": "creative-design", "description": "Illustrator artist template with artwork showcase"},
    {"id": "video-producer", "name": "VideoProducer", "category": "Creative", "categorySlug": "creative-design", "description": "Video producer template with filmmaking focus"},
    {"id": "copywriter-creative", "name": "CopywriterCreative", "category": "Creative", "categorySlug": "creative-design", "description": "Creative copywriter template with writing samples"},
    {"id": "art-director-pro", "name": "ArtDirectorPro", "category": "Creative", "categorySlug": "creative-design", "description": "Professional art director template"},
    {"id": "photographer-pro", "name": "PhotographerPro", "category": "Creative", "categorySlug": "creative-design", "description": "Professional photographer template"},
    {"id": "typographer-specialist", "name": "TypographerSpecialist", "category": "Creative", "categorySlug": "creative-design", "description": "Typography specialist template with font showcase"},
    {"id": "digital-artist", "name": "DigitalArtist", "category": "Creative", "categorySlug": "creative-design", "description": "Digital artist template for digital creators"},
    {"id": "creative-director-elite", "name": "CreativeDirectorElite", "category": "Creative", "categorySlug": "creative-design", "description": "Elite creative director template"},
    {"id": "social-media-creative", "name": "SocialMediaCreative", "category": "Creative", "categorySlug": "creative-design", "description": "Social media creative template"},
    {"id": "animation-artist", "name": "AnimationArtist", "category": "Creative", "categorySlug": "creative-design", "description": "Animation artist template"},
    {"id": "multimedia-designer", "name": "MultimediaDesigner", "category": "Creative", "categorySlug": "creative-design", "description": "Multimedia designer template"},

    # Design (10)
    {"id": "ux-researcher", "name": "UXResearcher", "category": "Design", "categorySlug": "creative-design", "description": "UX researcher template with research methodology focus"},
    {"id": "ui-specialist", "name": "UISpecialist", "category": "Design", "categorySlug": "creative-design", "description": "UI specialist template with interface design showcase"},
    {"id": "product-designer-pro", "name": "ProductDesignerPro", "category": "Design", "categorySlug": "creative-design", "description": "Professional product designer template"},
    {"id": "interaction-designer", "name": "InteractionDesigner", "category": "Design", "categorySlug": "creative-design", "description": "Interaction designer template"},
    {"id": "service-designer", "name": "ServiceDesigner", "category": "Design", "categorySlug": "creative-design", "description": "Service designer template with systems thinking"},
    {"id": "design-systems-architect", "name": "DesignSystemsArchitect", "category": "Design", "categorySlug": "creative-design", "description": "Design systems architect template"},
    {"id": "accessibility-designer", "name": "AccessibilityDesigner", "category": "Design", "categorySlug": "creative-design", "description": "Accessibility-focused designer template"},
    {"id": "design-lead", "name": "DesignLead", "category": "Design", "categorySlug": "creative-design", "description": "Design lead template for leadership roles"},
    {"id": "design-strategist", "name": "DesignStrategist", "category": "Design", "categorySlug": "creative-design", "description": "Design strategist template with strategic focus"},
    {"id": "visual-designer-pro", "name": "VisualDesignerPro", "category": "Design", "categorySlug": "creative-design", "description": "Professional visual designer template"},
]

def generate_profession_categories_additions():
    """Generate code to add to professionCategories.ts"""
    print("\n=== Template IDs to add to professionCategories.ts ===\n")
    for template in TEMPLATES:
        print(f'      "{template["id"]}",')

def generate_template_meta_additions():
    """Generate code to add to templateMeta.ts"""
    print("\n=== Metadata to add to templateMeta.ts ===\n")
    for template in TEMPLATES:
        print(f'''  "{template["id"]}": {{
    name: "{template["name"]}",
    description: "{template["description"]}",
    category: "{template["category"]}",
    categorySlug: "{template["categorySlug"]}",
  }},''')

def generate_template_preview_imports():
    """Generate import statements for TemplatePreview.tsx"""
    print("\n=== Imports to add to TemplatePreview.tsx ===\n")
    for template in TEMPLATES:
        print(f'import {{ {template["name"]}Template }} from "./resume/templates/{template["name"]}Template";')

def generate_template_preview_map():
    """Generate displayTemplates map entries for TemplatePreview.tsx"""
    print("\n=== displayTemplates map entries for TemplatePreview.tsx ===\n")
    for template in TEMPLATES:
        print(f'  "{template["id"]}": {template["name"]}Template,')

def generate_pdf_imports():
    """Generate PDF import statements for Editor.tsx and LiveEditor.tsx"""
    print("\n=== PDF Imports to add to Editor.tsx and LiveEditor.tsx ===\n")
    for template in TEMPLATES:
        print(f'import {{ {template["name"]}PDF }} from "@/components/resume/pdf/{template["name"]}PDF";')

def generate_pdf_map():
    """Generate pdfMap entries for Editor.tsx and LiveEditor.tsx"""
    print("\n=== pdfMap entries for Editor.tsx and LiveEditor.tsx ===\n")
    for template in TEMPLATES:
        print(f'  "{template["id"]}": {template["name"]}PDF,')

def generate_inline_editable_list():
    """Generate inlineEditableTemplates array for LiveEditor.tsx"""
    print("\n=== inlineEditableTemplates array for LiveEditor.tsx ===\n")
    for template in TEMPLATES:
        print(f'  "{template["id"]}",')

def main():
    print("=" * 80)
    print("REGISTRATION CODE FOR 100 NEW TEMPLATES")
    print("=" * 80)

    generate_profession_categories_additions()
    generate_template_meta_additions()
    generate_template_preview_imports()
    generate_template_preview_map()
    generate_pdf_imports()
    generate_pdf_map()
    generate_inline_editable_list()

    print("\n" + "=" * 80)
    print("DONE! Copy the relevant sections to the appropriate files")
    print("=" * 80)

if __name__ == "__main__":
    main()
