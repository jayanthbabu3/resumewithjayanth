import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import type { ResumeData } from "@/types/resume";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";
import { registerPDFFonts } from "@/lib/pdfFonts";

registerPDFFonts();

interface Props {
  resumeData: ResumeData;
  themeColor?: string;
}

export const PremiumElitePDF = ({
  resumeData,
  themeColor = "#8b5cf6",
}: Props) => {
  // Convert hex color to a lighter version for border (15% opacity effect)
  // Blend with white background to simulate 15% opacity
  const hexToLightHex = (hex: string, opacity: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    // Blend with white (255, 255, 255) at given opacity
    const newR = Math.round(r * opacity + 255 * (1 - opacity));
    const newG = Math.round(g * opacity + 255 * (1 - opacity));
    const newB = Math.round(b * opacity + 255 * (1 - opacity));
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
  };
  
  const themeColorLight = hexToLightHex(themeColor, 0.15); // 15% opacity to match live preview
  
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Inter",
      backgroundColor: "#ffffff",
    },
    headerSection: {
      backgroundColor: themeColor,
      paddingHorizontal: 32,
      paddingTop: 36,
      paddingBottom: 28,
    },
    headerContent: {
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
      marginBottom: 8,
      letterSpacing: -0.5,
    },
    title: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 16,
      opacity: 0.95,
    },
    contactInfo: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 16,
      fontSize: 9,
      opacity: 0.9,
    },
    photoWrapper: {
      width: 80,
      height: 80,
      borderRadius: 16,
      borderWidth: 4,
      borderColor: "#ffffff",
      overflow: "hidden",
      marginLeft: 32,
    },
    photo: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    mainContent: {
      paddingHorizontal: 32,
      paddingVertical: 28,
    },
    summaryBox: {
      backgroundColor: `${themeColor}15`,
      padding: 20,
      borderRadius: 12,
      marginBottom: 28,
    },
    summaryTitle: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      color: themeColor,
      marginBottom: 12,
    },
    summaryText: {
      fontSize: 9.5,
      lineHeight: 1.7,
      color: "#374151",
    },
    contentGrid: {
      flexDirection: "row",
      gap: 28,
    },
    leftColumn: {
      width: "42%",
    },
    rightColumn: {
      flex: 1,
    },
    section: {
      marginBottom: 22,
      breakInside: "avoid",
    },
    sectionTitle: {
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      color: themeColor,
      marginBottom: 16,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: themeColor,
    },
    educationItem: {
      marginBottom: 16,
      paddingLeft: 16,
      borderLeftWidth: 1,
      borderLeftColor: themeColorLight,
      position: "relative",
      breakInside: "avoid",
    },
    timelineDot: {
      position: "absolute",
      left: -5,
      top: 4,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: themeColor,
    },
    degree: {
      fontSize: 10,
      fontWeight: 700,
      color: "#111827",
    },
    field: {
      fontSize: 9,
      color: "#4b5563",
      marginTop: 4,
    },
    school: {
      fontSize: 9.5,
      fontWeight: 600,
      color: themeColor,
      marginTop: 6,
    },
    dateText: {
      fontSize: 8,
      color: "#6b7280",
      marginTop: 4,
      fontWeight: 600,
    },
    gpaText: {
      fontSize: 8,
      color: "#6b7280",
      marginTop: 2,
      fontWeight: 500,
    },
    skillsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    skillBadge: {
      backgroundColor: `${themeColor}20`,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
    },
    skillBadgeText: {
      fontSize: 8,
      fontWeight: 600,
      color: themeColor,
    },
    skillWithRating: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 4,
      width: "100%",
    },
    skillRatingText: {
      fontSize: 7,
      fontWeight: 500,
      color: "#6b7280",
    },
    experienceItem: {
      marginBottom: 20,
      breakInside: "avoid",
    },
    experienceHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 10,
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
      fontWeight: 700,
      color: themeColor,
      marginTop: 4,
    },
    dateBadge: {
      fontSize: 8.5,
      fontWeight: 700,
      color: "#ffffff",
      backgroundColor: themeColor,
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: 8,
    },
    bulletList: {
      marginTop: 8,
      paddingLeft: 14,
    },
    bulletItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 5,
      gap: 6,
    },
    bulletDot: {
      width: 4,
      height: 4,
      borderRadius: 2,
      marginTop: 5,
      backgroundColor: themeColor,
    },
    bulletText: {
      fontSize: 9,
      lineHeight: 1.6,
      color: "#374151",
      flex: 1,
    },
    sectionContent: {
      fontSize: 9,
      lineHeight: 1.7,
      color: "#374151",
    },
  });

  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with Accent Background */}
        <View style={styles.headerSection}>
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>{resumeData.personalInfo.fullName}</Text>
              {resumeData.personalInfo.title && (
                <Text style={styles.title}>{resumeData.personalInfo.title}</Text>
              )}
              <View style={styles.contactInfo}>
                {resumeData.personalInfo.email && (
                  <Text>{resumeData.personalInfo.email}</Text>
                )}
                {resumeData.personalInfo.phone && (
                  <Text>{resumeData.personalInfo.phone}</Text>
                )}
                {resumeData.personalInfo.location && (
                  <Text>{resumeData.personalInfo.location}</Text>
                )}
              </View>
            </View>
            {photo && (
              <View style={styles.photoWrapper}>
                <Image src={photo} style={styles.photo} />
              </View>
            )}
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Professional Summary */}
          {hasContent(resumeData.personalInfo.summary) && (
            <View style={styles.summaryBox}>
              <Text style={styles.summaryTitle}>Professional Summary</Text>
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
                  <Text style={styles.sectionTitle}>Education</Text>
                  {resumeData.education.map((edu, index) => (
                    <View key={index} style={styles.educationItem}>
                      <View style={styles.timelineDot} />
                      <Text style={styles.degree}>{edu.degree}</Text>
                      {hasContent(edu.field) && <Text style={styles.field}>{edu.field}</Text>}
                      <Text style={styles.school}>{edu.school}</Text>
                      <Text style={styles.dateText}>
                        {edu.startDate} - {edu.endDate}
                      </Text>
                      {edu.gpa && (
                        <Text style={styles.gpaText}>
                          GPA: {edu.gpa}
                        </Text>
                      )}
                    </View>
                  ))}
                </View>
              )}

              {/* Skills */}
              {resumeData.skills && resumeData.skills.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Skills & Expertise</Text>
                  <View style={styles.skillsContainer}>
                    {resumeData.skills.map((skill) => (
                      resumeData.skills.some(s => s.rating && s.rating.trim() !== "") ? (
                        // Vertical layout with ratings
                        <View key={skill.id} style={styles.skillWithRating}>
                          <View style={styles.skillBadge}>
                            <Text style={styles.skillBadgeText}>{skill.name}</Text>
                          </View>
                          {skill.rating && skill.rating.trim() !== "" && (
                            <Text style={styles.skillRatingText}>{skill.rating}</Text>
                          )}
                        </View>
                      ) : (
                        // Horizontal layout without ratings
                        <View key={skill.id} style={styles.skillBadge}>
                          <Text style={styles.skillBadgeText}>{skill.name}</Text>
                        </View>
                      )
                    ))}
                  </View>
                </View>
              )}
            </View>

            {/* Right Column */}
            <View style={styles.rightColumn}>
              {/* Experience */}
              {resumeData.experience && resumeData.experience.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Professional Experience</Text>
                  {resumeData.experience.map((exp, index) => (
                    <View key={index} style={styles.experienceItem}>
                      <View style={styles.experienceHeader}>
                        <View style={styles.experienceLeft}>
                          <Text style={styles.position}>{exp.position}</Text>
                          <Text style={styles.company}>{exp.company}</Text>
                        </View>
                        <Text style={styles.dateBadge}>
                          {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                        </Text>
                      </View>
                      {(exp.bulletPoints && exp.bulletPoints.length > 0) ? (
                        <View style={styles.bulletList}>
                          {exp.bulletPoints.map((point, bulletIndex) => (
                            <View key={bulletIndex} style={styles.bulletItem}>
                              <View style={styles.bulletDot} />
                              <Text style={styles.bulletText}>{point}</Text>
                            </View>
                          ))}
                        </View>
                      ) : hasContent(exp.description) && (
                        <View style={styles.bulletList}>
                          {exp.description
                            .split("\n")
                            .map((line) => line.trim())
                            .filter(Boolean)
                            .map((point, bulletIndex) => (
                              <View key={bulletIndex} style={styles.bulletItem}>
                                <View style={styles.bulletDot} />
                                <Text style={styles.bulletText}>{point}</Text>
                              </View>
                            ))}
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              )}

              {/* Additional Sections */}
              {resumeData.sections &&
                resumeData.sections.map((section, index) => (
                  <View key={index} style={styles.section}>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    <Text style={styles.sectionContent}>{section.content}</Text>
                  </View>
                ))}
        )            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
