import { Document, Page, Text, View, StyleSheet, Font, Link } from "@react-pdf/renderer";
import { ResumeData } from "@/pages/Editor";

Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" },
    { src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2", fontWeight: 700 },
  ]
});

interface PDFSwissStyleUniversalTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
}

const createStyles = (themeColor: string) => StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingRight: 40,
    paddingBottom: 40,
    paddingLeft: 40,
    fontFamily: "Inter",
    fontSize: 10,
    lineHeight: 1.5,
    color: "#1f2937",
    backgroundColor: "#ffffff",
  },
  headerGrid: {
    flexDirection: "row",
    marginBottom: 24,
  },
  headerLeft: {
    flex: 1,
    marginRight: 32,
  },
  headerRight: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 1,
    marginBottom: 4,
  },
  title: {
    fontSize: 10,
    color: "#6b7280",
    marginTop: 4,
  },
  contactInfo: {
    fontSize: 9,
    color: "#4b5563",
  },
  contactItem: {
    marginBottom: 2,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 8,
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  position: {
    fontSize: 10,
    fontWeight: 600,
    color: "#111827",
  },
  company: {
    fontSize: 9,
    color: "#374151",
    marginTop: 1,
  },
  dateRange: {
    fontSize: 8,
    color: "#6b7280",
  },
  description: {
    fontSize: 8,
    color: "#4b5563",
    lineHeight: 1.4,
    marginTop: 4,
  },
  descriptionItem: {
    marginBottom: 1,
    paddingLeft: 8,
  },
  educationItem: {
    marginBottom: 8,
  },
  skillItem: {
    fontSize: 8,
    marginBottom: 2,
  },
});

export const PDFSwissStyleUniversalTemplate = ({
  resumeData,
  themeColor = "#dc2626",
}: PDFSwissStyleUniversalTemplateProps) => {
  const styles = createStyles(themeColor);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          {/* Swiss Grid Layout - Name on left, contact on right */}
          <View style={styles.headerGrid}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>{resumeData.personalInfo.fullName}</Text>
              {resumeData.personalInfo.title && (
                <Text style={styles.title}>{resumeData.personalInfo.title}</Text>
              )}
            </View>
            <View style={styles.headerRight}>
              <View style={styles.contactInfo}>
                {resumeData.personalInfo.email && <Text style={styles.contactItem}>{resumeData.personalInfo.email}</Text>}
                {resumeData.personalInfo.phone && <Text style={styles.contactItem}>{resumeData.personalInfo.phone}</Text>}
                {resumeData.personalInfo.location && <Text style={styles.contactItem}>{resumeData.personalInfo.location}</Text>}
              </View>
            </View>
          </View>

          {resumeData.personalInfo.summary && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SUMMARY</Text>
              <Text style={{ fontSize: 9, lineHeight: 1.5, color: "#374151" }}>{resumeData.personalInfo.summary}</Text>
            </View>
          )}

          {resumeData.experience && resumeData.experience.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>EXPERIENCE</Text>
              {resumeData.experience.map((exp, index) => {
                const bulletPoints = (exp.description || "").split("\n").filter(Boolean);
                return (
                  <View key={index} style={styles.experienceItem}>
                    <View style={styles.experienceHeader}>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.position}>{exp.position}</Text>
                        <Text style={styles.company}>{exp.company}</Text>
                      </View>
                      <Text style={styles.dateRange}>{exp.startDate} - {exp.endDate || "Present"}</Text>
                    </View>
                    {bulletPoints.length > 0 && (
                      <View style={styles.description}>
                        {bulletPoints.map((point, i) => (
                          <Text key={i} style={styles.descriptionItem}>• {point}</Text>
                        ))}
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          )}

          {resumeData.education && resumeData.education.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>EDUCATION</Text>
              {resumeData.education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.position}>
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </Text>
                  <Text style={styles.company}>{edu.school}</Text>
                  <Text style={styles.dateRange}>{edu.startDate} - {edu.endDate}</Text>
                </View>
              ))}
            </View>
          )}

          {resumeData.skills && resumeData.skills.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {resumeData.skills.map((skill, index) => (
                  <Text key={index} style={styles.skillItem}>{skill.name}{index < resumeData.skills.length - 1 ? " • " : ""}</Text>
                ))}
              </View>
            </View>
          )}
          {resumeData.sections && resumeData.sections.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title.toUpperCase()}</Text>
              <Text style={{ fontSize: 9, lineHeight: 1.5, color: "#374151" }}>{section.content}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
