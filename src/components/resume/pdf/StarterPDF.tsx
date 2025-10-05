import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";
import type { ResumeData } from "@/pages/Editor";
import { registerPDFFonts } from "@/lib/pdfFonts";

registerPDFFonts();

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 36,
    fontSize: 10,
    fontFamily: "Inter",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 32,
    paddingBottom: 20,
    borderBottom: "4px solid #e0f2fe",
    textAlign: "center",
  },
  name: {
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 12,
    color: "#1e293b",
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    color: "#64748b",
    marginBottom: 12,
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    fontSize: 9,
    color: "#64748b",
  },
  contactItem: {
    marginHorizontal: 6,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#0EA5E9",
    marginBottom: 12,
    letterSpacing: 1,
  },
  summaryBox: {
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 4,
  },
  summary: {
    fontSize: 9,
    lineHeight: 1.6,
    color: "#334155",
  },
  educationBox: {
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 4,
    marginBottom: 12,
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  degree: {
    fontSize: 11,
    fontWeight: 700,
    color: "#1e293b",
  },
  field: {
    fontSize: 9,
    color: "#64748b",
    marginBottom: 4,
  },
  school: {
    fontSize: 9,
    color: "#0EA5E9",
    fontWeight: 600,
    marginBottom: 4,
  },
  educationDate: {
    fontSize: 9,
    color: "#64748b",
  },
  skillsBox: {
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 4,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillBadge: {
    backgroundColor: "#0EA5E9",
    color: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    fontSize: 9,
    fontWeight: 600,
  },
  experienceItem: {
    marginBottom: 16,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  position: {
    fontSize: 11,
    fontWeight: 700,
    color: "#1e293b",
  },
  company: {
    fontSize: 9,
    color: "#0EA5E9",
    fontWeight: 600,
    marginTop: 2,
  },
  dates: {
    fontSize: 9,
    color: "#64748b",
  },
  description: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#475569",
    paddingLeft: 8,
    borderLeft: "4px solid #e0f2fe",
  },
  customSectionBox: {
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 4,
  },
  customSection: {
    fontSize: 9,
    lineHeight: 1.6,
    color: "#334155",
  },
});

interface StarterPDFProps {
  resumeData: ResumeData;
  themeColor?: string;
}

export const StarterPDF = ({ resumeData }: StarterPDFProps) => {
  const data = resumeData;
  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header} wrap={false}>
          <Text style={styles.name}>{data.personalInfo.fullName}</Text>
          {data.personalInfo.title && <Text style={styles.title}>{data.personalInfo.title}</Text>}
          <View style={styles.contactInfo}>
            {data.personalInfo.email && <Text style={styles.contactItem}>{data.personalInfo.email}</Text>}
            {data.personalInfo.phone && <Text style={styles.contactItem}>•</Text>}
            {data.personalInfo.phone && <Text style={styles.contactItem}>{data.personalInfo.phone}</Text>}
            {data.personalInfo.location && <Text style={styles.contactItem}>•</Text>}
            {data.personalInfo.location && <Text style={styles.contactItem}>{data.personalInfo.location}</Text>}
          </View>
        </View>

        {/* Summary */}
        {data.personalInfo.summary && (
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
            <View style={styles.summaryBox}>
              <Text style={styles.summary}>{data.personalInfo.summary}</Text>
            </View>
          </View>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            {data.education.map((edu, index) => (
              <View key={index} style={styles.educationBox} wrap={false}>
                <View style={styles.educationHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.degree}>{edu.degree}</Text>
                    {edu.field && <Text style={styles.field}>{edu.field}</Text>}
                    <Text style={styles.school}>{edu.school}</Text>
                  </View>
                  <Text style={styles.educationDate}>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <View style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>CORE SKILLS</Text>
            <View style={styles.skillsBox}>
              <View style={styles.skillsContainer}>
                {data.skills.map((skill, index) => (
                  <Text key={index} style={styles.skillBadge}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            {data.experience.map((exp, index) => (
              <View key={index} style={styles.experienceItem} wrap={false}>
                <View style={styles.experienceHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.position}>{exp.position}</Text>
                    <Text style={styles.company}>{exp.company}</Text>
                  </View>
                  <Text style={styles.dates}>
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </Text>
                </View>
                {exp.description && (
                  <Text style={styles.description}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Custom Sections */}
        {data.sections &&
          data.sections.map((section, index) => (
            <View key={index} style={styles.section} wrap={false}>
              <Text style={styles.sectionTitle}>{section.title.toUpperCase()}</Text>
              <View style={styles.customSectionBox}>
                <Text style={styles.customSection}>{section.content}</Text>
              </View>
            </View>
          ))}
      </Page>
    </Document>
  );
};
