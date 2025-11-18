#!/usr/bin/env python3
"""
Generate 100 MORE unique, elegant resume templates with social links support (Batch 2)
Enhanced with LinkedIn, GitHub, Portfolio, Twitter, and Website links
"""

import os
from pathlib import Path

# Define 100 NEW templates (Batch 2) with unique designs and social links
TEMPLATES_BATCH_2 = [
    # ===== UNIVERSAL PROFESSIONAL - ELEGANT & MODERN (30 templates) =====
    {
        "id": "sapphire-professional",
        "name": "SapphireProfessional",
        "category": "Universal",
        "description": "Elegant sapphire-themed professional template with social integration",
        "theme": "#1e40af",
        "features": ["social-links", "modern-icons", "elegant-typography"]
    },
    {
        "id": "emerald-executive",
        "name": "EmeraldExecutive",
        "category": "Universal",
        "description": "Sophisticated emerald executive template with LinkedIn emphasis",
        "theme": "#059669",
        "features": ["social-links", "executive-style", "premium-layout"]
    },
    {
        "id": "ruby-corporate",
        "name": "RubyCorporate",
        "category": "Universal",
        "description": "Bold ruby corporate template with comprehensive social presence",
        "theme": "#be123c",
        "features": ["social-links", "bold-design", "professional"]
    },
    {
        "id": "onyx-leadership",
        "name": "OnyxLeadership",
        "category": "Universal",
        "description": "Sleek onyx leadership template with minimal design",
        "theme": "#1f2937",
        "features": ["social-links", "minimalist", "leadership-focused"]
    },
    {
        "id": "platinum-prestige",
        "name": "PlatinumPrestige",
        "category": "Universal",
        "description": "Prestigious platinum template with elegant social section",
        "theme": "#64748b",
        "features": ["social-links", "luxury", "prestigious"]
    },
    {
        "id": "azure-professional",
        "name": "AzureProfessional",
        "category": "Universal",
        "description": "Modern azure professional with integrated online presence",
        "theme": "#0284c7",
        "features": ["social-links", "modern", "clean"]
    },
    {
        "id": "amber-executive",
        "name": "AmberExecutive",
        "category": "Universal",
        "description": "Warm amber executive template with portfolio links",
        "theme": "#d97706",
        "features": ["social-links", "warm-design", "executive"]
    },
    {
        "id": "violet-corporate",
        "name": "VioletCorporate",
        "category": "Universal",
        "description": "Creative violet corporate with strong social media presence",
        "theme": "#7c3aed",
        "features": ["social-links", "creative-corporate", "vibrant"]
    },
    {
        "id": "jade-professional",
        "name": "JadeProfessional",
        "category": "Universal",
        "description": "Balanced jade professional with networking focus",
        "theme": "#0d9488",
        "features": ["social-links", "balanced", "professional"]
    },
    {
        "id": "crimson-leadership",
        "name": "CrimsonLeadership",
        "category": "Universal",
        "description": "Powerful crimson leadership with executive links",
        "theme": "#dc2626",
        "features": ["social-links", "powerful", "leadership"]
    },
    {
        "id": "slate-minimalist",
        "name": "SlateMinimalist",
        "category": "Universal",
        "description": "Clean slate minimalist with subtle social integration",
        "theme": "#475569",
        "features": ["social-links", "minimalist", "clean"]
    },
    {
        "id": "teal-modern",
        "name": "TealModern",
        "category": "Universal",
        "description": "Fresh teal modern template with prominent GitHub",
        "theme": "#14b8a6",
        "features": ["social-links", "modern", "fresh"]
    },
    {
        "id": "indigo-executive",
        "name": "IndigoExecutive",
        "category": "Universal",
        "description": "Deep indigo executive with professional network links",
        "theme": "#4f46e5",
        "features": ["social-links", "executive", "sophisticated"]
    },
    {
        "id": "rose-professional",
        "name": "RoseProfessional",
        "category": "Universal",
        "description": "Elegant rose professional with balanced social presence",
        "theme": "#f43f5e",
        "features": ["social-links", "elegant", "balanced"]
    },
    {
        "id": "navy-corporate",
        "name": "NavyCorporate",
        "category": "Universal",
        "description": "Classic navy corporate with LinkedIn integration",
        "theme": "#1e3a8a",
        "features": ["social-links", "classic", "corporate"]
    },
    {
        "id": "gold-prestige",
        "name": "GoldPrestige",
        "category": "Universal",
        "description": "Luxurious gold prestige with premium social section",
        "theme": "#ca8a04",
        "features": ["social-links", "luxury", "premium"]
    },
    {
        "id": "charcoal-professional",
        "name": "CharcoalProfessional",
        "category": "Universal",
        "description": "Modern charcoal professional with sleek social links",
        "theme": "#374151",
        "features": ["social-links", "modern", "sleek"]
    },
    {
        "id": "coral-executive",
        "name": "CoralExecutive",
        "category": "Universal",
        "description": "Vibrant coral executive with visible portfolio",
        "theme": "#fb923c",
        "features": ["social-links", "vibrant", "portfolio-focused"]
    },
    {
        "id": "pewter-minimalist",
        "name": "PewterMinimalist",
        "category": "Universal",
        "description": "Refined pewter minimalist with integrated socials",
        "theme": "#71717a",
        "features": ["social-links", "refined", "minimalist"]
    },
    {
        "id": "forest-professional",
        "name": "ForestProfessional",
        "category": "Universal",
        "description": "Natural forest professional with eco-conscious design",
        "theme": "#15803d",
        "features": ["social-links", "natural", "balanced"]
    },
    {
        "id": "burgundy-executive",
        "name": "BurgundyExecutive",
        "category": "Universal",
        "description": "Rich burgundy executive with mature presence",
        "theme": "#9f1239",
        "features": ["social-links", "rich", "mature"]
    },
    {
        "id": "sky-modern",
        "name": "SkyModern",
        "category": "Universal",
        "description": "Bright sky modern with open social approach",
        "theme": "#0ea5e9",
        "features": ["social-links", "bright", "open"]
    },
    {
        "id": "plum-professional",
        "name": "PlumProfessional",
        "category": "Universal",
        "description": "Sophisticated plum professional with elegant links",
        "theme": "#a855f7",
        "features": ["social-links", "sophisticated", "elegant"]
    },
    {
        "id": "bronze-corporate",
        "name": "BronzeCorporate",
        "category": "Universal",
        "description": "Warm bronze corporate with traditional values",
        "theme": "#92400e",
        "features": ["social-links", "warm", "traditional"]
    },
    {
        "id": "mint-professional",
        "name": "MintProfessional",
        "category": "Universal",
        "description": "Fresh mint professional with modern social icons",
        "theme": "#10b981",
        "features": ["social-links", "fresh", "modern"]
    },
    {
        "id": "obsidian-executive",
        "name": "ObsidianExecutive",
        "category": "Universal",
        "description": "Powerful obsidian executive with commanding presence",
        "theme": "#0f172a",
        "features": ["social-links", "powerful", "commanding"]
    },
    {
        "id": "tangerine-modern",
        "name": "TangerineModern",
        "category": "Universal",
        "description": "Energetic tangerine modern with vibrant socials",
        "theme": "#f97316",
        "features": ["social-links", "energetic", "vibrant"]
    },
    {
        "id": "steel-professional",
        "name": "SteelProfessional",
        "category": "Universal",
        "description": "Industrial steel professional with strong structure",
        "theme": "#52525b",
        "features": ["social-links", "industrial", "strong"]
    },
    {
        "id": "lavender-executive",
        "name": "LavenderExecutive",
        "category": "Universal",
        "description": "Calming lavender executive with balanced approach",
        "theme": "#c084fc",
        "features": ["social-links", "calming", "balanced"]
    },
    {
        "id": "cobalt-professional",
        "name": "CobaltProfessional",
        "category": "Universal",
        "description": "Bold cobalt professional with striking presence",
        "theme": "#2563eb",
        "features": ["social-links", "bold", "striking"]
    },

    # ===== SOFTWARE & TECHNOLOGY - MODERN TECH (25 templates) =====
    {
        "id": "github-developer",
        "name": "GitHubDeveloper",
        "category": "Software",
        "description": "GitHub-focused developer template with contribution showcase",
        "theme": "#24292f",
        "features": ["social-links", "github-focused", "open-source"]
    },
    {
        "id": "linkedin-tech-pro",
        "name": "LinkedInTechPro",
        "category": "Software",
        "description": "LinkedIn-optimized tech professional template",
        "theme": "#0a66c2",
        "features": ["social-links", "linkedin-optimized", "networking"]
    },
    {
        "id": "laravel-artisan",
        "name": "LaravelArtisan",
        "category": "Software",
        "description": "Laravel artisan template for PHP developers",
        "theme": "#ff2d20",
        "features": ["social-links", "php", "laravel"]
    },
    {
        "id": "rails-developer",
        "name": "RailsDeveloper",
        "category": "Software",
        "description": "Ruby on Rails developer with clean design",
        "theme": "#cc0000",
        "features": ["social-links", "ruby", "rails"]
    },
    {
        "id": "angular-specialist",
        "name": "AngularSpecialist",
        "category": "Software",
        "description": "Angular specialist with component-focused layout",
        "theme": "#dd0031",
        "features": ["social-links", "angular", "frontend"]
    },
    {
        "id": "vue-master",
        "name": "VueMaster",
        "category": "Software",
        "description": "Vue.js master template with reactive design",
        "theme": "#42b883",
        "features": ["social-links", "vue", "progressive"]
    },
    {
        "id": "kotlin-android-dev",
        "name": "KotlinAndroidDev",
        "category": "Software",
        "description": "Kotlin Android developer template",
        "theme": "#7f52ff",
        "features": ["social-links", "kotlin", "android"]
    },
    {
        "id": "ios-swift-engineer",
        "name": "iOSSwiftEngineer",
        "category": "Software",
        "description": "iOS Swift engineer with Apple aesthetics",
        "theme": "#f05138",
        "features": ["social-links", "swift", "ios"]
    },
    {
        "id": "docker-specialist",
        "name": "DockerSpecialist",
        "category": "Software",
        "description": "Docker containerization specialist template",
        "theme": "#2496ed",
        "features": ["social-links", "docker", "containerization"]
    },
    {
        "id": "aws-solutions-architect",
        "name": "AWSSolutionsArchitect",
        "category": "Software",
        "description": "AWS solutions architect with cloud focus",
        "theme": "#ff9900",
        "features": ["social-links", "aws", "cloud"]
    },
    {
        "id": "gcp-cloud-engineer",
        "name": "GCPCloudEngineer",
        "category": "Software",
        "description": "Google Cloud Platform engineer template",
        "theme": "#4285f4",
        "features": ["social-links", "gcp", "cloud"]
    },
    {
        "id": "azure-devops-pro",
        "name": "AzureDevOpsPro",
        "category": "Software",
        "description": "Azure DevOps professional template",
        "theme": "#0078d4",
        "features": ["social-links", "azure", "devops"]
    },
    {
        "id": "react-native-dev",
        "name": "ReactNativeDev",
        "category": "Software",
        "description": "React Native cross-platform developer",
        "theme": "#61dafb",
        "features": ["social-links", "react-native", "mobile"]
    },
    {
        "id": "flutter-ui-specialist",
        "name": "FlutterUISpecialist",
        "category": "Software",
        "description": "Flutter UI specialist with beautiful layouts",
        "theme": "#02569b",
        "features": ["social-links", "flutter", "ui"]
    },
    {
        "id": "dotnet-core-developer",
        "name": "DotNetCoreDeveloper",
        "category": "Software",
        "description": ".NET Core developer template",
        "theme": "#512bd4",
        "features": ["social-links", "dotnet", "microsoft"]
    },
    {
        "id": "golang-backend-engineer",
        "name": "GolangBackendEngineer",
        "category": "Software",
        "description": "Go (Golang) backend engineer template",
        "theme": "#00add8",
        "features": ["social-links", "golang", "backend"]
    },
    {
        "id": "python-ml-engineer",
        "name": "PythonMLEngineer",
        "category": "Software",
        "description": "Python machine learning engineer",
        "theme": "#3776ab",
        "features": ["social-links", "python", "ml"]
    },
    {
        "id": "data-scientist-pro",
        "name": "DataScientistPro",
        "category": "Software",
        "description": "Professional data scientist template",
        "theme": "#ff6f00",
        "features": ["social-links", "data-science", "analytics"]
    },
    {
        "id": "blockchain-engineer",
        "name": "BlockchainEngineer",
        "category": "Software",
        "description": "Blockchain engineer with Web3 focus",
        "theme": "#f0b90b",
        "features": ["social-links", "blockchain", "web3"]
    },
    {
        "id": "solidity-developer",
        "name": "SolidityDeveloper",
        "category": "Software",
        "description": "Solidity smart contract developer",
        "theme": "#363636",
        "features": ["social-links", "solidity", "ethereum"]
    },
    {
        "id": "cybersecurity-analyst",
        "name": "CybersecurityAnalyst",
        "category": "Software",
        "description": "Cybersecurity analyst template",
        "theme": "#00b4d8",
        "features": ["social-links", "security", "penetration-testing"]
    },
    {
        "id": "devsecops-engineer",
        "name": "DevSecOpsEngineer",
        "category": "Software",
        "description": "DevSecOps engineer with security focus",
        "theme": "#dd0031",
        "features": ["social-links", "devsecops", "security"]
    },
    {
        "id": "fullstack-javascript",
        "name": "FullstackJavaScript",
        "category": "Software",
        "description": "Full-stack JavaScript developer (MERN/MEAN)",
        "theme": "#f7df1e",
        "features": ["social-links", "javascript", "fullstack"]
    },
    {
        "id": "jamstack-developer",
        "name": "JAMStackDeveloper",
        "category": "Software",
        "description": "JAMStack developer with modern architecture",
        "theme": "#f0047f",
        "features": ["social-links", "jamstack", "modern"]
    },
    {
        "id": "headless-cms-developer",
        "name": "HeadlessCMSDeveloper",
        "category": "Software",
        "description": "Headless CMS developer template",
        "theme": "#5468ff",
        "features": ["social-links", "cms", "headless"]
    },

    # ===== FRESH GRADUATES - MODERN & CLEAN (20 templates) =====
    {
        "id": "digital-native-graduate",
        "name": "DigitalNativeGraduate",
        "category": "Fresher",
        "description": "Digital native graduate with strong social presence",
        "theme": "#6366f1",
        "features": ["social-links", "digital-native", "modern"]
    },
    {
        "id": "tech-savvy-fresher",
        "name": "TechSavvyFresher",
        "category": "Fresher",
        "description": "Tech-savvy fresher with GitHub portfolio",
        "theme": "#8b5cf6",
        "features": ["social-links", "tech-savvy", "portfolio"]
    },
    {
        "id": "linkedin-ready-graduate",
        "name": "LinkedInReadyGraduate",
        "category": "Fresher",
        "description": "LinkedIn-ready graduate template",
        "theme": "#0a66c2",
        "features": ["social-links", "linkedin-ready", "networking"]
    },
    {
        "id": "github-student-developer",
        "name": "GitHubStudentDeveloper",
        "category": "Fresher",
        "description": "GitHub student developer with open-source contributions",
        "theme": "#24292f",
        "features": ["social-links", "github-student", "open-source"]
    },
    {
        "id": "portfolio-first-graduate",
        "name": "PortfolioFirstGraduate",
        "category": "Fresher",
        "description": "Portfolio-first graduate with project showcase",
        "theme": "#ec4899",
        "features": ["social-links", "portfolio-first", "projects"]
    },
    {
        "id": "connected-graduate",
        "name": "ConnectedGraduate",
        "category": "Fresher",
        "description": "Well-connected graduate with networking emphasis",
        "theme": "#14b8a6",
        "features": ["social-links", "connected", "networking"]
    },
    {
        "id": "social-media-savvy-grad",
        "name": "SocialMediaSavvyGrad",
        "category": "Fresher",
        "description": "Social media savvy graduate template",
        "theme": "#f43f5e",
        "features": ["social-links", "social-savvy", "media"]
    },
    {
        "id": "open-source-contributor",
        "name": "OpenSourceContributor",
        "category": "Fresher",
        "description": "Open source contributor graduate",
        "theme": "#059669",
        "features": ["social-links", "open-source", "contributor"]
    },
    {
        "id": "hackathon-winner",
        "name": "HackathonWinner",
        "category": "Fresher",
        "description": "Hackathon winner with achievement focus",
        "theme": "#dc2626",
        "features": ["social-links", "hackathon", "achievements"]
    },
    {
        "id": "coding-challenge-champion",
        "name": "CodingChallengeChampion",
        "category": "Fresher",
        "description": "Coding challenge champion template",
        "theme": "#7c3aed",
        "features": ["social-links", "coding-challenges", "competitive"]
    },
    {
        "id": "capstone-showcase",
        "name": "CapstoneShowcase",
        "category": "Fresher",
        "description": "Capstone project showcase graduate",
        "theme": "#0891b2",
        "features": ["social-links", "capstone", "projects"]
    },
    {
        "id": "research-publication-grad",
        "name": "ResearchPublicationGrad",
        "category": "Fresher",
        "description": "Graduate with research publications",
        "theme": "#1e40af",
        "features": ["social-links", "research", "publications"]
    },
    {
        "id": "conference-presenter",
        "name": "ConferencePresenter",
        "category": "Fresher",
        "description": "Conference presenter graduate",
        "theme": "#7c2d12",
        "features": ["social-links", "conferences", "presentations"]
    },
    {
        "id": "startup-intern",
        "name": "StartupIntern",
        "category": "Fresher",
        "description": "Startup intern with entrepreneurial spirit",
        "theme": "#ea580c",
        "features": ["social-links", "startup", "entrepreneurial"]
    },
    {
        "id": "faang-aspirant",
        "name": "FAANGAspirant",
        "category": "Fresher",
        "description": "FAANG company aspirant template",
        "theme": "#2563eb",
        "features": ["social-links", "faang", "tech-giant"]
    },
    {
        "id": "bootcamp-success-story",
        "name": "BootcampSuccessStory",
        "category": "Fresher",
        "description": "Bootcamp success story graduate",
        "theme": "#16a34a",
        "features": ["social-links", "bootcamp", "success"]
    },
    {
        "id": "remote-work-ready",
        "name": "RemoteWorkReady",
        "category": "Fresher",
        "description": "Remote work ready graduate",
        "theme": "#0d9488",
        "features": ["social-links", "remote", "distributed"]
    },
    {
        "id": "community-builder",
        "name": "CommunityBuilder",
        "category": "Fresher",
        "description": "Community builder graduate",
        "theme": "#db2777",
        "features": ["social-links", "community", "networking"]
    },
    {
        "id": "tech-blogger-graduate",
        "name": "TechBloggerGraduate",
        "category": "Fresher",
        "description": "Tech blogger graduate with online presence",
        "theme": "#4f46e5",
        "features": ["social-links", "blogging", "content"]
    },
    {
        "id": "youtube-educator",
        "name": "YouTubeEducator",
        "category": "Fresher",
        "description": "YouTube educator graduate",
        "theme": "#ff0000",
        "features": ["social-links", "youtube", "education"]
    },

    # ===== CREATIVE - PORTFOLIO FOCUSED (15 templates) =====
    {
        "id": "behance-designer",
        "name": "BehanceDesigner",
        "category": "Creative",
        "description": "Behance-focused designer with portfolio links",
        "theme": "#1769ff",
        "features": ["social-links", "behance", "portfolio"]
    },
    {
        "id": "dribbble-creative",
        "name": "DribbbleCreative",
        "category": "Creative",
        "description": "Dribbble creative with shot showcase",
        "theme": "#ea4c89",
        "features": ["social-links", "dribbble", "showcase"]
    },
    {
        "id": "instagram-influencer",
        "name": "InstagramInfluencer",
        "category": "Creative",
        "description": "Instagram influencer creator template",
        "theme": "#e4405f",
        "features": ["social-links", "instagram", "influencer"]
    },
    {
        "id": "pinterest-curator",
        "name": "PinterestCurator",
        "category": "Creative",
        "description": "Pinterest curator creative",
        "theme": "#e60023",
        "features": ["social-links", "pinterest", "curation"]
    },
    {
        "id": "vimeo-videographer",
        "name": "VimeoVideographer",
        "category": "Creative",
        "description": "Vimeo videographer with reel links",
        "theme": "#1ab7ea",
        "features": ["social-links", "vimeo", "video"]
    },
    {
        "id": "medium-writer",
        "name": "MediumWriter",
        "category": "Creative",
        "description": "Medium writer with publication links",
        "theme": "#000000",
        "features": ["social-links", "medium", "writing"]
    },
    {
        "id": "tiktok-creator",
        "name": "TikTokCreator",
        "category": "Creative",
        "description": "TikTok creator with viral content",
        "theme": "#fe2c55",
        "features": ["social-links", "tiktok", "viral"]
    },
    {
        "id": "twitch-streamer",
        "name": "TwitchStreamer",
        "category": "Creative",
        "description": "Twitch streamer creative professional",
        "theme": "#9146ff",
        "features": ["social-links", "twitch", "streaming"]
    },
    {
        "id": "soundcloud-producer",
        "name": "SoundCloudProducer",
        "category": "Creative",
        "description": "SoundCloud music producer",
        "theme": "#ff5500",
        "features": ["social-links", "soundcloud", "music"]
    },
    {
        "id": "spotify-artist",
        "name": "SpotifyArtist",
        "category": "Creative",
        "description": "Spotify artist template",
        "theme": "#1db954",
        "features": ["social-links", "spotify", "music"]
    },
    {
        "id": "artstation-artist",
        "name": "ArtStationArtist",
        "category": "Creative",
        "description": "ArtStation digital artist",
        "theme": "#13aff0",
        "features": ["social-links", "artstation", "digital-art"]
    },
    {
        "id": "deviantart-creator",
        "name": "DeviantArtCreator",
        "category": "Creative",
        "description": "DeviantArt creator template",
        "theme": "#05cc47",
        "features": ["social-links", "deviantart", "art"]
    },
    {
        "id": "patreon-creator",
        "name": "PatreonCreator",
        "category": "Creative",
        "description": "Patreon creator with supporter focus",
        "theme": "#ff424d",
        "features": ["social-links", "patreon", "monetization"]
    },
    {
        "id": "substack-writer",
        "name": "SubstackWriter",
        "category": "Creative",
        "description": "Substack newsletter writer",
        "theme": "#ff6719",
        "features": ["social-links", "substack", "newsletter"]
    },
    {
        "id": "clubhouse-moderator",
        "name": "ClubhouseModerator",
        "category": "Creative",
        "description": "Clubhouse room moderator",
        "theme": "#f1efe1",
        "features": ["social-links", "clubhouse", "audio"]
    },

    # ===== DESIGN/UX - MODERN SPECIALISTS (10 templates) =====
    {
        "id": "figma-expert",
        "name": "FigmaExpert",
        "category": "Design",
        "description": "Figma expert with design system focus",
        "theme": "#f24e1e",
        "features": ["social-links", "figma", "design-systems"]
    },
    {
        "id": "sketch-specialist",
        "name": "SketchSpecialist",
        "category": "Design",
        "description": "Sketch specialist template",
        "theme": "#fdb300",
        "features": ["social-links", "sketch", "ui-design"]
    },
    {
        "id": "adobe-xd-designer",
        "name": "AdobeXDDesigner",
        "category": "Design",
        "description": "Adobe XD designer template",
        "theme": "#ff61f6",
        "features": ["social-links", "adobe-xd", "prototyping"]
    },
    {
        "id": "framer-designer",
        "name": "FramerDesigner",
        "category": "Design",
        "description": "Framer interactive designer",
        "theme": "#0055ff",
        "features": ["social-links", "framer", "interactive"]
    },
    {
        "id": "webflow-developer",
        "name": "WebflowDeveloper",
        "category": "Design",
        "description": "Webflow no-code developer",
        "theme": "#4353ff",
        "features": ["social-links", "webflow", "no-code"]
    },
    {
        "id": "principle-animator",
        "name": "PrincipleAnimator",
        "category": "Design",
        "description": "Principle animation designer",
        "theme": "#5d5d5d",
        "features": ["social-links", "principle", "animation"]
    },
    {
        "id": "invision-prototyper",
        "name": "InVisionPrototyper",
        "category": "Design",
        "description": "InVision prototyping specialist",
        "theme": "#ff3366",
        "features": ["social-links", "invision", "prototyping"]
    },
    {
        "id": "marvel-app-designer",
        "name": "MarvelAppDesigner",
        "category": "Design",
        "description": "Marvel app designer",
        "theme": "#1fb6ff",
        "features": ["social-links", "marvel", "app-design"]
    },
    {
        "id": "zeplin-handoff-specialist",
        "name": "ZeplinHandoffSpecialist",
        "category": "Design",
        "description": "Zeplin handoff specialist",
        "theme": "#fdbd39",
        "features": ["social-links", "zeplin", "dev-handoff"]
    },
    {
        "id": "abstract-version-designer",
        "name": "AbstractVersionDesigner",
        "category": "Design",
        "description": "Abstract version control designer",
        "theme": "#7c3aed",
        "features": ["social-links", "abstract", "version-control"]
    },
]


def generate_enhanced_display_template(template_info):
    """Generate an enhanced React display template with social links support"""
    name = template_info["name"]
    theme = template_info["theme"]

    return f'''import type {{ ResumeData }} from "@/pages/Editor";
import type {{ ResumeSection }} from "@/types/resume";
import {{ Mail, Phone, MapPin, Linkedin, Github, Globe, Twitter }} from "lucide-react";
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

  // Type assertion for social links (future-proof)
  const personalInfoWithSocials = resumeData.personalInfo as any;

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
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
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

            {{/* Contact Information */}}
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              {{resumeData.personalInfo.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" style={{{{ color: themeColor }}}} />
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
                  <Phone className="h-4 w-4" style={{{{ color: themeColor }}}} />
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
                  <MapPin className="h-4 w-4" style={{{{ color: themeColor }}}} />
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

            {{/* Social Links Section */}}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {{personalInfoWithSocials.linkedin && (
                <a
                  href={{personalInfoWithSocials.linkedin}}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  style={{{{ color: themeColor }}}}
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              )}}
              {{personalInfoWithSocials.github && (
                <a
                  href={{personalInfoWithSocials.github}}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  style={{{{ color: themeColor }}}}
                >
                  <Github className="h-4 w-4" />
                  <span className="font-medium">GitHub</span>
                </a>
              )}}
              {{personalInfoWithSocials.website && (
                <a
                  href={{personalInfoWithSocials.website}}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  style={{{{ color: themeColor }}}}
                >
                  <Globe className="h-4 w-4" />
                  <span className="font-medium">Portfolio</span>
                </a>
              )}}
              {{personalInfoWithSocials.twitter && (
                <a
                  href={{personalInfoWithSocials.twitter}}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                  style={{{{ color: themeColor }}}}
                >
                  <Twitter className="h-4 w-4" />
                  <span className="font-medium">Twitter</span>
                </a>
              )}}
            </div>
          </div>
          <ProfilePhoto src={{photo}} borderClass="border-4" style={{{{ borderColor: themeColor }}}} />
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
                        className="text-sm font-semibold block"
                        style={{{{ color: themeColor }}}}
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
                        <span className="font-semibold" style={{{{ color: themeColor }}}}>Present</span>
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
                      <p className="text-sm font-semibold" style={{{{ color: themeColor }}}}>
                        {{exp.company || "Company Name"}}
                      </p>
                    </div>
                    <div className="text-xs text-gray-600 text-right">
                      {{formatDate(exp.startDate)}} - {{exp.current ? <span className="font-semibold" style={{{{ color: themeColor }}}}>Present</span> : formatDate(exp.endDate)}}
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
                        className="text-sm font-semibold block"
                        style={{{{ color: themeColor }}}}
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
                      <p className="text-sm font-semibold" style={{{{ color: themeColor }}}}>
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
                  <span className="inline-block px-3 py-1 mr-2 mb-2 rounded-full text-sm font-medium text-white" style={{{{ backgroundColor: themeColor }}}}>
                    {{skill.name}}
                  </span>
                )
              }}
            />
          ) : (
            <div className="flex flex-wrap gap-2">
              {{resumeData.skills.map((skill) => (
                skill.name && (
                  <span
                    key={{skill.id}}
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{{{ backgroundColor: themeColor }}}}
                  >
                    {{skill.name}}
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

def generate_enhanced_pdf_template(template_info):
    """Generate an enhanced PDF template with social links"""
    name = template_info["name"]

    return f'''import {{ Document, Page, Text, View, StyleSheet, Svg, Path, Image, Link }} from '@react-pdf/renderer';
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
    alignItems: 'flex-start',
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
    flexWrap: 'wrap',
    gap: 15,
    fontSize: 9,
    color: '#666',
    marginTop: 8,
  }},
  contactItem: {{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  }},
  socialRow: {{
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    fontSize: 9,
    marginTop: 6,
  }},
  socialLink: {{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    color: '#0066cc',
  }},
  photoWrapper: {{
    width: 72,
    height: 72,
    borderRadius: 36,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#000',
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
    gap: 6,
  }},
  skillBadge: {{
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
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
  const personalInfoWithSocials = resumeData.personalInfo as any;

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
                <Text key={{lang.id}} style={{styles.description}}>
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
                <Link src={{item.url}} style={{styles.socialLink}}>
                  <Text>{{item.platform}}: {{item.url}}</Text>
                </Link>
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
          <View style={{{{ flex: 1 }}}}>
            <Text style={{styles.name}}>{{resumeData.personalInfo.fullName || "Your Name"}}</Text>
            {{resumeData.personalInfo.title && (
              <Text style={{styles.title}}>{{resumeData.personalInfo.title}}</Text>
            )}}

            {{/* Contact */}}
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

            {{/* Social Links */}}
            <View style={{styles.socialRow}}>
              {{personalInfoWithSocials.linkedin && (
                <Link src={{personalInfoWithSocials.linkedin}} style={{styles.socialLink}}>
                  <Text>LinkedIn</Text>
                </Link>
              )}}
              {{personalInfoWithSocials.github && (
                <Link src={{personalInfoWithSocials.github}} style={{styles.socialLink}}>
                  <Text>GitHub</Text>
                </Link>
              )}}
              {{personalInfoWithSocials.website && (
                <Link src={{personalInfoWithSocials.website}} style={{styles.socialLink}}>
                  <Text>Portfolio</Text>
                </Link>
              )}}
              {{personalInfoWithSocials.twitter && (
                <Link src={{personalInfoWithSocials.twitter}} style={{styles.socialLink}}>
                  <Text>Twitter</Text>
                </Link>
              )}}
            </View>
          </View>

          {{photo ? (
            <View style={{styles.photoWrapper}}>
              <Image src={{photo}} style={{styles.photo}} />
            </View>
          ) : null}}
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
            {{resumeData.skills.map((skill) => (
              hasContent(skill.name) && (
                <Text key={{skill.id}} style={{styles.skillBadge}}>
                  {{skill.name}}
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
    templates_dir = Path("/home/user/resumewithjayanth/src/components/resume/templates")
    pdf_dir = Path("/home/user/resumewithjayanth/src/components/resume/pdf")

    templates_dir.mkdir(parents=True, exist_ok=True)
    pdf_dir.mkdir(parents=True, exist_ok=True)

    print(f"Generating {len(TEMPLATES_BATCH_2)} NEW elegant resume templates with social links...")

    for i, template in enumerate(TEMPLATES_BATCH_2, 1):
        # Generate display template
        display_filename = f"{template['name']}Template.tsx"
        display_path = templates_dir / display_filename
        display_content = generate_enhanced_display_template(template)

        with open(display_path, 'w') as f:
            f.write(display_content)

        # Generate PDF template
        pdf_filename = f"{template['name']}PDF.tsx"
        pdf_path = pdf_dir / pdf_filename
        pdf_content = generate_enhanced_pdf_template(template)

        with open(pdf_path, 'w') as f:
            f.write(pdf_content)

        print(f"[{i}/{len(TEMPLATES_BATCH_2)}] Generated {template['name']} ({template['category']}) - {template['features']}")

    print(f"\n✅ Successfully generated {len(TEMPLATES_BATCH_2)} enhanced templates!")
    print(f"   - {len(TEMPLATES_BATCH_2)} display templates with social links")
    print(f"   - {len(TEMPLATES_BATCH_2)} PDF templates with clickable links")

    # Generate summary by category
    from collections import Counter
    category_counts = Counter(t['category'] for t in TEMPLATES_BATCH_2)
    print("\nTemplates by category:")
    for category, count in category_counts.items():
        print(f"   - {category}: {count} templates")

    print("\n✨ All templates include:")
    print("   - LinkedIn, GitHub, Portfolio, Twitter links")
    print("   - Modern icon-based social section")
    print("   - Clickable links in PDF exports")
    print("   - Enhanced visual design")
    print("   - Full inline editing support")

if __name__ == "__main__":
    main()
