import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import type { ResumeData } from "@/pages/Editor";

interface RefinedPDFProps {
  resumeData: ResumeData;
  themeColor?: string;
}

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    lineHeight: 1.6,
    color: "#1f2937",
    padding: 48,
  },
  header: {
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#e5e7eb",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flex: 1,
  },
  name: {
    fontSize: 38,
    fontWeight: 200,
    letterSpacing: -0.8,
    marginBottom: 8,
  },
  title: {
    fontSize: 10,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#374151",
    marginBottom: 16,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  contactItem: {
    fontSize: 9,
    color: "#4b5563",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  photo: {
    width: 80,
    height: 80,
    marginLeft: 32,
    objectFit: "cover",
  },
  section: {
    marginBottom: 28,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionAccent: {
    width: 24,
    height: 2,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 1.8,
  },
  summary: {
    fontSize: 9,
    lineHeight: 1.7,
    color: "#374151",
    fontWeight: 300,
  },
  experienceItem: {
    marginBottom: 20,
    paddingLeft: 16,
    borderLeftWidth: 2,
    borderLeftColor: "#e5e7eb",
    position: "relative",
  },
  timelineDot: {
    position: "absolute",
    left: -5,
    top: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  experienceLeft: {
    flex: 1,
  },
  position: {
    fontSize: 10,
    fontWeight: 600,
    color: "#1f2937",
    marginBottom: 4,
  },
  company: {
    fontSize: 9,
    fontWeight: 500,
  },
  date: {
    fontSize: 8,
    fontWeight: 500,
    color: "#6b7280",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginLeft: 12,
  },
  bulletPoint: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 4,
    marginTop: 8,
    lineHeight: 1.6,
    fontWeight: 300,
  },
  educationItem: {
    marginBottom: 16,
    paddingLeft: 16,
    borderLeftWidth: 2,
    borderLeftColor: "#e5e7eb",
  },
  educationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  degree: {
    fontSize: 10,
    fontWeight: 600,
    color: "#1f2937",
    marginBottom: 4,
  },
  school: {
    fontSize: 9,
    fontWeight: 500,
  },
  gpa: {
    fontSize: 8,
    color: "#4b5563",
    marginTop: 2,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  skillBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 9,
    fontWeight: 300,
    color: "#374151",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 20,
  },
  customContent: {
    fontSize: 9,
    color: "#374151",
    marginBottom: 4,
    fontWeight: 300,
  },
});

export const RefinedPDF = ({
  resumeData,
  themeColor = "#2563eb",
}: RefinedPDFProps) => {
  const { personalInfo, experience, education, skills, sections } = resumeData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={[styles.name, { color: themeColor }]}>
              {personalInfo.fullName}
            </Text>
            <Text style={styles.title}>{personalInfo.title}</Text>
            <View style={styles.contactRow}>
              {personalInfo.email && (
                <View style={styles.contactItem}>
                  <Text style={{ color: themeColor }}>✉ </Text>
                  <Text>{personalInfo.email}</Text>
                </View>
              )}
              {personalInfo.phone && (
                <View style={styles.contactItem}>
                  <Text style={{ color: themeColor }}>☎ </Text>
                  <Text>{personalInfo.phone}</Text>
                </View>
              )}
              {personalInfo.location && (
                <View style={styles.contactItem}>
                  <Text style={{ color: themeColor }}>⌂ </Text>
                  <Text>{personalInfo.location}</Text>
                </View>
              )}
            </View>
          </View>
          {personalInfo.photo && (
            <Image src={personalInfo.photo} style={styles.photo} />
          )}
        </View>

        {/* Professional Summary */}
        {personalInfo.summary && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View
                style={[styles.sectionAccent, { backgroundColor: themeColor }]}
              />
              <Text style={[styles.sectionTitle, { color: themeColor }]}>
                Summary
              </Text>
            </View>
            <Text style={styles.summary}>{personalInfo.summary}</Text>
          </View>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View
                style={[styles.sectionAccent, { backgroundColor: themeColor }]}
              />
              <Text style={[styles.sectionTitle, { color: themeColor }]}>
                Experience
              </Text>
            </View>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <View
                  style={[styles.timelineDot, { backgroundColor: themeColor }]}
                />
                <View style={styles.experienceHeader}>
                  <View style={styles.experienceLeft}>
                    <Text style={styles.position}>{exp.position}</Text>
                    <Text style={[styles.company, { color: themeColor }]}>
                      {exp.company}
                    </Text>
                  </View>
                  <Text style={styles.date}>
                    {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                  </Text>
                </View>
                {exp.description.split("\n").map((line, idx) => (
                  <Text key={idx} style={styles.bulletPoint}>
                    • {line}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View
                style={[styles.sectionAccent, { backgroundColor: themeColor }]}
              />
              <Text style={[styles.sectionTitle, { color: themeColor }]}>
                Education
              </Text>
            </View>
            {education.map((edu) => (
              <View key={edu.id} style={styles.educationItem}>
                <View style={styles.educationHeader}>
                  <View style={styles.experienceLeft}>
                    <Text style={styles.degree}>
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </Text>
                    <Text style={[styles.school, { color: themeColor }]}>
                      {edu.school}
                    </Text>
                  </View>
                  <Text style={styles.date}>
                    {edu.startDate} — {edu.endDate}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View
                style={[styles.sectionAccent, { backgroundColor: themeColor }]}
              />
              <Text style={[styles.sectionTitle, { color: themeColor }]}>
                Skills
              </Text>
            </View>
            <View style={styles.skillsContainer}>
              {skills.map((skill) => (
                <View key={skill.id} style={styles.skillBadge}>
                  <Text>{skill.name}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Custom Sections */}
        {sections.map((section) => (
          <View key={section.id} style={styles.section}>
            <View style={styles.sectionHeader}>
              <View
                style={[styles.sectionAccent, { backgroundColor: themeColor }]}
              />
              <Text style={[styles.sectionTitle, { color: themeColor }]}>
                {section.title}
              </Text>
            </View>
            {section.content.split("\n").map((line, idx) => (
              <Text key={idx} style={styles.customContent}>
                • {line}
              </Text>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
};