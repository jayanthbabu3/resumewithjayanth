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

interface PDFBorderFrameUniversalTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
}

const createStyles = (themeColor: string) => StyleSheet.create({
  page: {
    padding: 32,
    fontFamily: "Inter",
    fontSize: 13,
    lineHeight: 1.6,
    color: "#1f2937",
    backgroundColor: "#ffffff",
  },
  borderFrame: {
    borderWidth: 4,
    borderColor: themeColor,
    padding: 40,
    height: "100%",
  },
  header: {
    marginBottom: 40,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: themeColor,
    textAlign: "center",
  },
  name: {
    fontSize: 32,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    color: "#4b5563",
    fontWeight: 500,
    marginBottom: 16,
    textAlign: 'center',
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 12,
    color: "#6b7280",
    justifyContent: 'center',
  },
  contactItem: {
    marginHorizontal: 12,
    marginBottom: 4,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export const PDFBorderFrameUniversalTemplate = ({
  resumeData,
  themeColor = "#059669",
}: PDFBorderFrameUniversalTemplateProps) => {
  const styles = createStyles(themeColor);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.borderFrame}>
          <View style={styles.header}>
            <Text style={styles.name}>{resumeData.personalInfo.fullName}</Text>
            {resumeData.personalInfo.title && (
              <Text style={styles.title}>{resumeData.personalInfo.title}</Text>
            )}
            <View style={styles.contactInfo}>
              {resumeData.personalInfo.email && <Text style={styles.contactItem}>{resumeData.personalInfo.email}</Text>}
              {resumeData.personalInfo.phone && <Text style={styles.contactItem}>{resumeData.personalInfo.phone}</Text>}
              {resumeData.personalInfo.location && <Text style={styles.contactItem}>{resumeData.personalInfo.location}</Text>}
            </View>
          </View>

          {resumeData.personalInfo.summary && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Professional Summary</Text>
              <Text style={{ fontSize: 13, lineHeight: 1.7, color: "#374151" }}>{resumeData.personalInfo.summary}</Text>
            </View>
          )}

          {resumeData.experience && resumeData.experience.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Professional Experience</Text>
              {resumeData.experience.map((exp, index) => {
                const bulletPoints = (exp.description || "").split("\n").filter(Boolean);
                return (
                  <View key={index} style={{ marginBottom: 24 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                      <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 4 }}>{exp.position}</Text>
                        <Text style={{ fontSize: 13, color: "#374151" }}>{exp.company}</Text>
                      </View>
                      <Text style={{ fontSize: 11, color: "#6b7280" }}>{exp.startDate} - {exp.current ? "Present" : exp.endDate}</Text>
                    </View>
                    {bulletPoints.length > 0 && (
                      <View style={{ marginLeft: 20, marginTop: 8 }}>
                        {bulletPoints.map((point, i) => (
                          <View key={i} style={{ flexDirection: "row", marginBottom: 4 }}>
                            <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: "#374151", marginRight: 8, marginTop: 6 }} />
                            <Text style={{ flex: 1, fontSize: 12.5, lineHeight: 1.7, color: "#374151" }}>{point}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          )}

          <View style={styles.twoColumnGrid}>
            {resumeData.education && resumeData.education.length > 0 && (
              <View style={styles.column}>
                <Text style={styles.sectionTitle}>Education</Text>
                {resumeData.education.map((edu, index) => (
                  <View key={index} style={{ marginBottom: 16 }}>
                    <Text style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 4 }}>
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </Text>
                    <Text style={{ fontSize: 13, color: "#374151", marginBottom: 2 }}>{edu.school}</Text>
                    <Text style={{ fontSize: 11, color: "#6b7280" }}>{edu.startDate} - {edu.endDate}</Text>
                  </View>
                ))}
              </View>
            )}

            {resumeData.skills && resumeData.skills.length > 0 && (
              <View style={styles.column}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", marginRight: 8 }}>
                  {resumeData.skills.map((skill, index) => (
                    <Text key={index} style={{ fontSize: 13, color: "#111827", marginRight: 4 }}>{skill.name}</Text>
                  ))}
                </View>
              </View>
            )}
          </View>
          {resumeData.sections && resumeData.sections.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={{ fontSize: 13, lineHeight: 1.7, color: "#374151" }}>{section.content}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
