import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
  Svg,
  Circle,
} from "@react-pdf/renderer";
import type { ResumeData } from "@/pages/Editor";
import { registerPDFFonts } from "@/lib/pdfFonts";

registerPDFFonts();

interface Props {
  resumeData: ResumeData;
  themeColor?: string;
}

export const FresherElitePDF = ({
  resumeData,
  themeColor = "#6366f1",
}: Props) => {
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Inter",
      backgroundColor: "#f9fafb",
      padding: 40,
    },
    container: {
      backgroundColor: "#ffffff",
      borderRadius: 16,
      overflow: "hidden",
    },
    header: {
      backgroundColor: themeColor,
      paddingHorizontal: 48,
      paddingVertical: 40,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerLeft: {
      flex: 1,
      color: "#ffffff",
    },
    name: {
      fontSize: 28,
      fontWeight: 700,
      color: "#ffffff",
      marginBottom: 8,
    },
    title: {
      fontSize: 13,
      fontWeight: 600,
      color: "#ffffff",
      opacity: 0.95,
      marginBottom: 16,
    },
    contactInfo: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 24,
      fontSize: 9,
      color: "#ffffff",
      opacity: 0.9,
    },
    photoWrapper: {
      width: 96,
      height: 96,
      borderRadius: 48,
      borderWidth: 4,
      borderColor: "#ffffff",
      overflow: "hidden",
      marginLeft: 24,
    },
    photo: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    mainContent: {
      paddingHorizontal: 48,
      paddingVertical: 32,
    },
    summaryContainer: {
      backgroundColor: "#f9fafb",
      borderRadius: 12,
      padding: 24,
      marginBottom: 32,
      borderLeftWidth: 4,
      borderLeftColor: themeColor,
    },
    summaryText: {
      fontSize: 9,
      lineHeight: 1.6,
      color: "#374151",
    },
    contentGrid: {
      flexDirection: "row",
      gap: 32,
    },
    leftColumn: {
      width: "33.333%",
    },
    rightColumn: {
      flex: 1,
    },
    section: {
      marginBottom: 32,
    },
    sectionHeader: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      marginBottom: 16,
    },
    sectionDot: {
      width: 4,
      height: 16,
      backgroundColor: themeColor,
      borderRadius: 2,
    },
    sectionTitle: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      color: themeColor,
    },
    educationCard: {
      backgroundColor: "#ffffff",
      borderRadius: 8,
      padding: 16,
      borderWidth: 1,
      borderColor: "#e5e7eb",
      marginBottom: 16,
    },
    degree: {
      fontSize: 10,
      fontWeight: 700,
      color: "#111827",
      marginBottom: 4,
    },
    field: {
      fontSize: 8,
      color: "#4b5563",
      marginBottom: 8,
    },
    school: {
      fontSize: 8,
      fontWeight: 600,
      color: themeColor,
      marginBottom: 4,
    },
    dateText: {
      fontSize: 8,
      color: "#6b7280",
    },
    skillItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12,
    },
    skillName: {
      fontSize: 9,
      fontWeight: 600,
      color: "#111827",
    },
    skillDots: {
      flexDirection: "row",
      gap: 4,
    },
    skillDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    experienceItem: {
      position: "relative",
      paddingLeft: 24,
      paddingBottom: 24,
      borderLeftWidth: 2,
      borderLeftColor: "#e5e7eb",
    },
    experienceItemLast: {
      position: "relative",
      paddingLeft: 24,
      paddingBottom: 0,
      borderLeftWidth: 0,
    },
    timelineDot: {
      position: "absolute",
      left: -7,
      top: 0,
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: themeColor,
    },
    experienceHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 8,
    },
    experienceLeft: {
      flex: 1,
    },
    position: {
      fontSize: 11,
      fontWeight: 700,
      color: "#111827",
    },
    company: {
      fontSize: 10,
      fontWeight: 600,
      color: themeColor,
      marginTop: 4,
    },
    dateBadge: {
      fontSize: 8,
      fontWeight: 600,
      color: themeColor,
      backgroundColor: `${themeColor}15`,
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 999,
    },
    description: {
      fontSize: 9,
      lineHeight: 1.6,
      color: "#374151",
    },
    projectCard: {
      backgroundColor: "#f9fafb",
      borderRadius: 12,
      padding: 24,
    },
    sectionContent: {
      fontSize: 9,
      lineHeight: 1.6,
      color: "#374151",
    },
  });

  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>{resumeData.personalInfo.fullName}</Text>
              {resumeData.personalInfo.title && (
                <Text style={styles.title}>{resumeData.personalInfo.title}</Text>
              )}
              <View style={styles.contactInfo}>
                {resumeData.personalInfo.email && (
                  <Text>✉ {resumeData.personalInfo.email}</Text>
                )}
                {resumeData.personalInfo.phone && (
                  <Text>📞 {resumeData.personalInfo.phone}</Text>
                )}
                {resumeData.personalInfo.location && (
                  <Text>📍 {resumeData.personalInfo.location}</Text>
                )}
              </View>
            </View>
            {photo && (
              <View style={styles.photoWrapper}>
                <Image src={photo} style={styles.photo} />
              </View>
            )}
          </View>

          <View style={styles.mainContent}>
            {/* Professional Summary */}
            {resumeData.personalInfo.summary && (
              <View style={styles.summaryContainer}>
                <Text style={styles.summaryText}>
                  {resumeData.personalInfo.summary}
                </Text>
              </View>
            )}

            <View style={styles.contentGrid}>
              {/* Left Column */}
              <View style={styles.leftColumn}>
                {/* Education */}
                {resumeData.education && resumeData.education.length > 0 && (
                  <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.sectionDot} />
                      <Text style={styles.sectionTitle}>Education</Text>
                    </View>
                    {resumeData.education.map((edu, index) => (
                      <View key={index} style={styles.educationCard}>
                        <Text style={styles.degree}>{edu.degree}</Text>
                        {edu.field && <Text style={styles.field}>{edu.field}</Text>}
                        <Text style={styles.school}>{edu.school}</Text>
                        <Text style={styles.dateText}>
                          {edu.startDate} - {edu.endDate}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}

                {/* Skills */}
                {resumeData.skills && resumeData.skills.length > 0 && (
                  <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.sectionDot} />
                      <Text style={styles.sectionTitle}>Skills</Text>
                    </View>
                    {resumeData.skills.map((skill) => (
                      <View key={skill.id} style={styles.skillItem}>
                        <Text style={styles.skillName}>{skill.name}</Text>
                        {skill.level && (
                          <View style={styles.skillDots}>
                            {[...Array(5)].map((_, i) => (
                              <View
                                key={i}
                                style={[
                                  styles.skillDot,
                                  {
                                    backgroundColor:
                                      i < Math.ceil(skill.level / 2)
                                        ? themeColor
                                        : "#e5e7eb",
                                  },
                                ]}
                              />
                            ))}
                          </View>
                        )}
                      </View>
                    ))}
                  </View>
                )}
              </View>

              {/* Right Column */}
              <View style={styles.rightColumn}>
                {/* Experience */}
                {resumeData.experience && resumeData.experience.length > 0 && (
                  <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                      <View style={styles.sectionDot} />
                      <Text style={styles.sectionTitle}>Experience</Text>
                    </View>
                    {resumeData.experience.map((exp, index) => (
                      <View 
                        key={index} 
                        style={
                          index === resumeData.experience.length - 1
                            ? styles.experienceItemLast
                            : styles.experienceItem
                        }
                      >
                        <View style={styles.timelineDot} />
                        <View style={styles.experienceHeader}>
                          <View style={styles.experienceLeft}>
                            <Text style={styles.position}>{exp.position}</Text>
                            <Text style={styles.company}>{exp.company}</Text>
                          </View>
                          <Text style={styles.dateBadge}>
                            {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                          </Text>
                        </View>
                        {exp.description && (
                          <Text style={styles.description}>{exp.description}</Text>
                        )}
                      </View>
                    ))}
                  </View>
                )}

                {/* Projects/Sections */}
                {resumeData.sections &&
                  resumeData.sections.map((section, index) => (
                    <View key={index} style={styles.section}>
                      <View style={styles.sectionHeader}>
                        <View style={styles.sectionDot} />
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                      </View>
                      <View style={styles.projectCard}>
                        <Text style={styles.sectionContent}>{section.content}</Text>
                      </View>
                    </View>
                  ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
