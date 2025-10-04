import { Button } from "@/components/ui/button";
import { FileText, Briefcase, Palette, Layout, Sparkles, ArrowRight, Code, Layers, Server } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";

const templates = [
  {
    id: "professional",
    name: "Professional",
    subtitle: "The Classic Choice",
    description: "Traditional single-column format ideal for corporate environments, finance, consulting, and business roles",
    icon: Briefcase,
    color: "from-blue-500 to-blue-600",
    accentColor: "bg-blue-500",
    highlights: ["Single Column Layout", "ATS-Optimized", "Clean & Professional"]
  },
  {
    id: "modern",
    name: "Modern",
    subtitle: "Creative Impact",
    description: "Two-column contemporary design perfect for tech, creative industries, and modern workplaces",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
    accentColor: "bg-purple-500",
    highlights: ["Two-Column Design", "Sidebar Layout", "Modern Typography"]
  },
  {
    id: "minimal",
    name: "Minimal",
    subtitle: "Clean & Simple",
    description: "Sophisticated simplicity with generous whitespace that emphasizes your achievements",
    icon: Layout,
    color: "from-emerald-500 to-teal-500",
    accentColor: "bg-emerald-500",
    highlights: ["Generous Whitespace", "Easy to Scan", "Timeless Design"]
  },
  {
    id: "executive",
    name: "Executive",
    subtitle: "Leadership Edition",
    description: "Bold and commanding design crafted for senior positions, C-level roles, and leadership",
    icon: Palette,
    color: "from-indigo-600 to-violet-600",
    accentColor: "bg-indigo-600",
    highlights: ["Strong Visual Presence", "Premium Aesthetic", "Executive Style"]
  },
  {
    id: "frontend",
    name: "Frontend Developer",
    subtitle: "Tech-Focused Premium",
    description: "Modern tech-focused design with skills grid layout, perfect for frontend developers",
    icon: Code,
    color: "from-indigo-600 to-indigo-700",
    accentColor: "bg-indigo-600",
    highlights: ["Skills Grid Display", "Tech-Optimized", "Premium Modern Look"]
  },
  {
    id: "fullstack",
    name: "Full Stack Engineer",
    subtitle: "Complete Tech Profile",
    description: "Purple-themed professional layout showcasing comprehensive technical expertise",
    icon: Layers,
    color: "from-purple-600 to-purple-700",
    accentColor: "bg-purple-600",
    highlights: ["Single Column Design", "Color Theme Options", "Professional Tech Look"]
  },
  {
    id: "backend",
    name: "Backend Developer",
    subtitle: "Server-Side Specialist",
    description: "Clean technical design focused on backend development, APIs, and system architecture",
    icon: Server,
    color: "from-emerald-600 to-green-600",
    accentColor: "bg-emerald-600",
    highlights: ["Technical & Clean", "API-Focused Layout", "Backend Optimized"]
  }
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="border-b border-border/50 bg-muted/20">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Choose Your Resume Style
            </h1>
            <p className="text-lg text-muted-foreground">
              Select a template that best represents your professional identity
            </p>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {templates.map((template, index) => {
            const Icon = template.icon;
            return (
              <div
                key={template.id}
                className="group relative rounded-2xl border-2 border-border bg-card hover:border-primary transition-all duration-300 overflow-hidden hover:shadow-premium animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with gradient */}
                <div className={`relative p-6 bg-gradient-to-r ${template.color} text-white`}>
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="relative flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold">{template.name}</h3>
                      <p className="text-white/90 text-sm font-medium">{template.subtitle}</p>
                    </div>
                    <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {template.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {template.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`h-1.5 w-1.5 rounded-full ${template.accentColor}`} />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => navigate(`/editor/${template.id}`)}
                    className="w-full bg-primary hover:bg-primary-hover group-hover:shadow-md transition-all"
                    size="lg"
                  >
                    Create with {template.name}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="max-w-2xl mx-auto mt-16 text-center space-y-3 p-6 rounded-xl bg-muted/30">
          <FileText className="h-8 w-8 text-primary mx-auto" />
          <h3 className="text-xl font-semibold">Fully Customizable</h3>
          <p className="text-muted-foreground text-sm">
            Don't worry about choosing the perfect template now. You can modify colors, 
            fonts, sections, and layout at any time while building your resume.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
