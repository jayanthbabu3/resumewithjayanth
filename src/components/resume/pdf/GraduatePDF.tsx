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
    marginBottom: 24,
    paddingLeft: 12,
    borderLeft: "3px solid #0EA5E9",
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 8,
    color: "#1e293b",
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
    color: "#64748b",
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    fontSize: 9,
    color: "#64748b",
  },
  contactItem: {
    marginRight: 4,
  },
  container: {
    flexDirection: "row",
    gap: 24,
  },
  leftColumn: {
    width: "30%",
  },
  rightColumn: {
    width: "70%",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: "#0EA5E9",
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: "2px solid #e0f2fe",
    letterSpacing: 0.5,
  },
  educationItem: {
    marginBottom: 12,
  },
  degree: {
    fontSize: 9,
    fontWeight: 600,
    marginBottom: 3,
    color: "#1e293b",
  },
  field: {
    fontSize: 8,
    color: "#64748b",
    marginBottom: 2,
  },
  school: {
    fontSize: 8,
    color: "#64748b",
    marginBottom: 2,
  },
  educationDate: {
    fontSize: 8,
    color: "#64748b",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillBadge: {
    backgroundColor: "#e0f2fe",
    color: "#0369a1",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 8,
    fontWeight: 500,
  },
  summary: {
    fontSize: 9,
    lineHeight: 1.6,
    color: "#334155",
  },
  experienceItem: {
    marginBottom: 16,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  position: {
    fontSize: 10,
    fontWeight: 700,
    color: "#1e293b",
  },
  company: {
    fontSize: 9,
    color: "#0EA5E9",
    fontWeight: 600,
    marginBottom: 4,
  },
  dates: {
    fontSize: 8,
    color: "#64748b",
  },
  description: {
    fontSize: 9,
    lineHeight: 1.5,
    color: "#475569",
    paddingLeft: 8,
    borderLeft: "2px solid #e0f2fe",
  },
  customSection: {
    fontSize: 9,
    lineHeight: 1.6,
    color: "#334155",
  },
});

interface GraduatePDFProps {
  resumeData: ResumeData;
  themeColor?: string;
}

export const GraduatePDF = ({ resumeData }: GraduatePDFProps) => {
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
            {data.personalInfo.phone && <Text style={styles.contactItem}>{data.personalInfo.phone}</Text>}
            {data.personalInfo.location && <Text style={styles.contactItem}>{data.personalInfo.location}</Text>}
          </View>
        </View>

        {/* Two Column Layout */}
        <View style={styles.container}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {/* Education */}
            {data.education && data.education.length > 0 && (
              <View style={styles.section} wrap={false}>
                <Text style={styles.sectionTitle}>EDUCATION</Text>
                {data.education.map((edu, index) => (
                  <View key={index} style={styles.educationItem}>
                    <Text style={styles.degree}>{edu.degree}</Text>
                    {edu.field && <Text style={styles.field}>{edu.field}</Text>}
                    <Text style={styles.school}>{edu.school}</Text>
                    <Text style={styles.educationDate}>
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
              <View style={styles.section} wrap={false}>
                <Text style={styles.sectionTitle}>SKILLS</Text>
                <View style={styles.skillsContainer}>
                  {data.skills.map((skill, index) => (
                    <Text key={index} style={styles.skillBadge}>
                      {skill}
                    </Text>
                  ))}
                </View>
              </View>
            )}
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
            {/* Summary */}
            {data.personalInfo.summary && (
              <View style={styles.section} wrap={false}>
                <Text style={styles.sectionTitle}>PROFILE</Text>
                <Text style={styles.summary}>{data.personalInfo.summary}</Text>
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
                  <Text style={styles.customSection}>{section.content}</Text>
                </View>
              ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
