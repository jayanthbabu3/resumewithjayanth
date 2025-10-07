import type { ResumeData } from "@/pages/Editor";

export interface AtsMetric {
  id: string;
  label: string;
  score: number;
  maxScore: number;
  detail: string;
  passed: boolean;
  recommendation?: string;
  ratio: number;
}

export interface AtsReport {
  score: number;
  maxScore: number;
  grade: "excellent" | "strong" | "ok" | "weak";
  summary: string;
  metrics: AtsMetric[];
  keywordHits: string[];
  missingKeywords: string[];
}

const keywordLibrary: Record<string, string[]> = {
  backend: [
    "distributed", "microservice", "event", "kafka", "slo", "latency", "scalable",
    "api", "observability", "monitoring", "postgres", "aws", "queue", "resilience",
  ],
  frontend: [
    "react", "typescript", "design system", "performance", "accessibility", "component",
  ],
  fullstack: ["graphql", "node", "full stack", "integration"],
  executive: ["strategy", "leadership", "roadmap"],
  software: [
    "design system", "observability", "performance", "leadership", "analytics", "mentored",
  ],
};

const actionVerbs = [
  "built", "led", "designed", "implemented", "architected", "reduced", "improved",
  "launched", "optimized", "delivered", "directed", "mentored", "orchestrated",
];

const gradeFromScore = (ratio: number): AtsReport["grade"] => {
  if (ratio >= 0.85) return "excellent";
  if (ratio >= 0.7) return "strong";
  if (ratio >= 0.55) return "ok";
  return "weak";
};

const summaryFromGrade = (grade: AtsReport["grade"]): string => {
  switch (grade) {
    case "excellent":
      return "Ready for ATS – only fine-tuning keywords.";
    case "strong":
      return "Strong ATS footing – add a bit more specificity.";
    case "ok":
      return "Decent foundation – tighten structure and keywords.";
    default:
      return "High risk of mis-parsing – shore up critical sections.";
  }
};

const scoreMetric = (
  id: string,
  label: string,
  score: number,
  maxScore: number,
  detail: string,
  recommendation?: string
): AtsMetric => ({
  id,
  label,
  score,
  maxScore,
  detail,
  passed: score >= maxScore * 0.8,
  recommendation,
  ratio: maxScore ? score / maxScore : 0,
});

interface AnalyzerOptions {
  templateId?: string;
}

export const analyzeResumeForATS = (
  resume: ResumeData,
  options: AnalyzerOptions = {}
): AtsReport => {
  const metrics: AtsMetric[] = [];
  let totalScore = 0;
  let totalMax = 0;
  let ratioTotal = 0;

  const safeAdd = (metric: AtsMetric) => {
    metrics.push(metric);
    totalScore += metric.score;
    totalMax += metric.maxScore;
    ratioTotal += metric.ratio;
  };

  const hasName = Boolean(resume.personalInfo.fullName?.trim());
  const hasEmail = Boolean(resume.personalInfo.email?.trim());
  const hasPhone = Boolean(resume.personalInfo.phone?.trim());
  const hasLocation = Boolean(resume.personalInfo.location?.trim());
  const missingContacts: string[] = [];
  if (!hasName) missingContacts.push("name");
  if (!hasEmail) missingContacts.push("email");
  if (!hasPhone) missingContacts.push("phone");
  const contactScore = [hasName, hasEmail, hasPhone].filter(Boolean).length * 3 + (hasLocation ? 1 : 0);
  safeAdd(
    scoreMetric(
      "contact",
      "Contact details",
      contactScore,
      10,
      missingContacts.length
        ? `Missing ${missingContacts.join(', ')}.`
        : hasLocation
          ? "Contact information is complete."
          : "Contact information is complete; add location for geographic filters.",
      missingContacts.length
        ? `Add ${missingContacts.join(' and ')} so ATS can extract contact details.`
        : hasLocation
          ? undefined
          : "Include a location to appear in location-based searches."
    )
  );

  const summaryContent = resume.personalInfo.summary?.trim() || "";
  const summarySentences = summaryContent.split(/\.+/).filter(Boolean);
  const templateKey = options.templateId?.split('-')[0] || 'backend';
  const templateKeywordPool = keywordLibrary[templateKey] || [];
  const summaryHasKeyword = templateKeywordPool.some(keyword => summaryContent.toLowerCase().includes(keyword));
  const summaryScore = summaryContent
    ? Math.min(10, 6 + (summarySentences.length > 1 ? 2 : 0) + (summaryHasKeyword ? 2 : 0))
    : 0;
  safeAdd(
    scoreMetric(
      "summary",
      "Professional summary",
      summaryScore,
      10,
      summaryContent
        ? `Summary present with ${summarySentences.length || 1} sentence${summarySentences.length === 1 ? '' : 's'}.`
        : "Summary missing.",
      summaryContent
        ? summaryScore >= 9
          ? undefined
          : summaryHasKeyword
            ? "Add impact (metrics, outcomes) to make the summary punchier."
            : "Include role-specific keywords and measurable outcomes in the summary."
        : "Add a short keyword-rich summary to aid ranking."
    )
  );

  const experienceCount = resume.experience.length;
  const experienceScore = Math.min(4, experienceCount * 1.5);
  const descriptionsWithBullets = resume.experience.filter(exp => exp.description?.includes("\n"));
  const bulletScore = descriptionsWithBullets.length ? 3 : 1;
  const actionVerbHits = resume.experience
    .flatMap(exp => exp.description?.split(/\n+/) || [])
    .filter(line => actionVerbs.some(verb => line.toLowerCase().includes(verb))).length;
  const actionScore = Math.min(3, actionVerbHits);
  const experienceSuggestions: string[] = [];
  if (!experienceCount) {
    experienceSuggestions.push("Add at least one recent role with bullet accomplishments.");
  } else {
    if (experienceCount < 3) experienceSuggestions.push("Add additional roles if relevant to show progression.");
    if (descriptionsWithBullets.length < experienceCount) experienceSuggestions.push("Use bullet formatting for every role.");
    if (actionVerbHits < experienceCount * 2) experienceSuggestions.push("Strengthen bullets with action verbs and measurable impact.");
  }
  safeAdd(
    scoreMetric(
      "experience",
      "Experience depth",
      experienceScore + bulletScore + actionScore,
      10,
      experienceCount
        ? `${experienceCount} roles listed; ${descriptionsWithBullets.length}/${experienceCount} use bullet formatting.`
        : "No experience entries found.",
      experienceSuggestions.length ? experienceSuggestions.join(' ') : undefined
    )
  );

  const educationScore = resume.education.length ? 10 : 0;
  safeAdd(
    scoreMetric(
      "education",
      "Education section",
      educationScore,
      10,
      educationScore ? "Education listed." : "Education missing.",
      educationScore ? undefined : "Include highest degree and institution."
    )
  );

  const skillCount = resume.skills.length;
  const uniqueSkillNames = new Set(resume.skills.map(skill => skill.name?.toLowerCase().trim()).filter(Boolean));
  const skillScore = Math.min(10, uniqueSkillNames.size * 1.25);
  const skillMax = 10;
  safeAdd(
    scoreMetric(
      "skills",
      "Skills coverage",
      skillScore,
      skillMax,
      `${uniqueSkillNames.size} skills detected across core/toolbox sections.`,
      uniqueSkillNames.size >= 12
        ? undefined
        : uniqueSkillNames.size >= 8
          ? "Expand the toolbox with niche tools or methodologies to reach ~12 skills."
          : "List at least 8 role-relevant skills."
    )
  );

  const templateKeywords = templateKeywordPool;

  const resumeText = [
    resume.personalInfo.summary,
    ...resume.experience.map(exp => `${exp.position} ${exp.description}`),
    resume.skills.map(skill => skill.name).join(' '),
  ]
    .join(' ')
    .toLowerCase();

  const keywordHits = templateKeywords.filter(keyword => resumeText.includes(keyword));
  const missingKeywords = templateKeywords.filter(keyword => !keywordHits.includes(keyword));
  const keywordScore = templateKeywords.length
    ? (keywordHits.length / templateKeywords.length) * 10
    : 8;
  safeAdd(
    scoreMetric(
      "keywords",
      "Role keywords",
      keywordScore,
      templateKeywords.length ? 10 : 8,
      templateKeywords.length
        ? `${keywordHits.length}/${templateKeywords.length} recommended keywords present.`
        : "No template-specific keywords required.",
      missingKeywords.length
        ? `Add keywords such as ${missingKeywords.slice(0, 3).join(', ')}.`
        : undefined
    )
  );

  const hasPdfReadyStructure = resume.experience.every(exp => exp.description.trim().length > 0);
  const formattingScore = hasPdfReadyStructure ? 10 : 4;
  safeAdd(
    scoreMetric(
      "formatting",
      "Structure & formatting",
      formattingScore,
      10,
      hasPdfReadyStructure ? "Consistent bullet descriptions." : "Some experience entries need structured bullets.",
      hasPdfReadyStructure ? undefined : "Ensure every role has bullet descriptions separated by new lines."
    )
  );

  const averageRatio = metrics.length ? ratioTotal / metrics.length : 0;
  const grade = gradeFromScore(averageRatio);

  return {
    score: Math.round(averageRatio * 100) / 10,
    maxScore: 10,
    grade,
    summary: summaryFromGrade(grade),
    metrics,
    keywordHits,
    missingKeywords,
  };
};
