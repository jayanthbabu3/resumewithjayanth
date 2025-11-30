import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import { ResumeData } from "@/types/resume";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";
import { registerPDFFonts } from "@/lib/pdfFonts";

registerPDFFonts();

interface PDFBoldHeadlineTemplateProps {
  resumeData: ResumeData;
  themeColor?: string;
}

// Helper to blend hex color with white for opacity effect
const blendColors = (hex: string, opacity: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const whiteR = 255;
  const whiteG = 255;
  const whiteB = 255;

  const blendedR = Math.round(r * opacity + whiteR * (1 - opacity));
  const blendedG = Math.round(g * opacity + whiteG * (1 - opacity));
  const blendedB = Math.round(b * opacity + whiteB * (1 - opacity));

  return `#${((1 << 24) + (blendedR << 16) + (blendedG << 8) + blendedB).toString(16).slice(1)}`;
};

export const PDFBoldHeadlineTemplate = ({
  resumeData,
  themeColor = "#dc2626",
}: PDFBoldHeadlineTemplateProps) => {
  const accent = themeColor;
  const accentLight = blendColors(accent, 0.1);

  const styles = StyleSheet.create({
    page: {
      paddingTop: PDF_PAGE_MARGINS.top,
      paddingRight: PDF_PAGE_MARGINS.right,
      paddingBottom: PDF_PAGE_MARGINS.bottom,
      paddingLeft: PDF_PAGE_MARGINS.left,
      fontSize: 10,
      fontFamily: "Inter",
      backgroundColor: "#ffffff",
    },
    headerSection: {
      backgroundColor: "#111827",
      paddingTop: 40,
      paddingRight: PDF_PAGE_MARGINS.right,
      paddingBottom: 40,
      paddingLeft: PDF_PAGE_MARGINS.left,
      marginLeft: -PDF_PAGE_MARGINS.left,
      marginRight: -PDF_PAGE_MARGINS.right,
      marginTop: -PDF_PAGE_MARGINS.top,
    },
    headerContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    headerLeft: {
      flex: 1,
    },
    name: {
      fontSize: 28,
      fontWeight: 900,
      color: "#ffffff",
      marginBottom: 8,
      letterSpacing: -0.5,
    },
    title: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      color: accent,
      marginBottom: 16,
    },
    contactInfo: {
      flexDirection: "row",
      flexWrap: "wrap",
      fontSize: 9,
      color: "#d1d5db",
    },
    contactItem: {
      marginRight: 20,
    },
    photoWrapper: {
      position: "relative",
      marginLeft: 24,
    },
    photoBorder: {
      position: "absolute",
      bottom: -6,
      right: -6,
      width: "100%",
      height: "100%",
      backgroundColor: accent,
    },
    photo: {
      width: 72,
      height: 72,
      objectFit: "cover",
      position: "relative",
      zIndex: 10,
      borderWidth: 3,
      borderColor: "#ffffff",
    },
    summaryBox: {
      backgroundColor: accentLight,
      marginTop: 20,
      paddingTop: 20,
      paddingRight: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      marginBottom: 20,
    },
    summaryTitle: {
      fontSize: 12,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      color: "#111827",
      marginBottom: 8,
    },
    summaryText: {
      fontSize: 9,
      lineHeight: 1.5,
      color: "#374151",
      fontWeight: 500,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: 0.5,
      color: "#111827",
      marginBottom: 12,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: accent,
    },
    experienceItem: {
      marginBottom: 15,
    },
    experienceHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 6,
    },
    experienceLeft: {
      flex: 1,
      marginRight: 12,
    },
    position: {
      fontSize: 11,
      fontWeight: 700,
      color: "#111827",
      marginBottom: 2,
    },
    company: {
      fontSize: 10,
      fontWeight: 700,
      color: accent,
      marginTop: 2,
    },
    dateBadge: {
      fontSize: 9,
      fontWeight: 700,
      color: "#ffffff",
      backgroundColor: accent,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 4,
    },
    bulletList: {
      marginTop: 8,
      paddingLeft: 16,
    },
    bulletItem: {
      flexDirection: "row",
      marginBottom: 4,
    },
    bulletDot: {
      width: 3,
      height: 3,
      borderRadius: 1.5,
      backgroundColor: "#374151",
      marginRight: 6,
      marginTop: 4,
    },
    bulletText: {
      fontSize: 9,
      lineHeight: 1.5,
      color: "#374151",
      flex: 1,
    },
    twoColumnGrid: {
      flexDirection: "row",
    },
    column: {
      flex: 1,
    },
    columnLeft: {
      flex: 1,
      marginRight: 30,
    },
    columnRight: {
      flex: 1,
      marginLeft: 30,
    },
    educationItem: {
      marginBottom: 12,
    },
    degree: {
      fontSize: 11,
      fontWeight: 700,
      color: "#111827",
      marginBottom: 2,
    },
    field: {
      fontSize: 10,
      fontWeight: 600,
      color: accent,
      marginTop: 2,
    },
    school: {
      fontSize: 9,
      color: "#4b5563",
      marginTop: 3,
    },
    educationDate: {
      fontSize: 9,
      color: "#6b7280",
      marginTop: 2,
    },
    gpaText: {
      fontSize: 9,
      color: "#6b7280",
      marginTop: 1,
    },
    skillsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    skillBadge: {
      fontSize: 9,
      fontWeight: 700,
      color: "#ffffff",
      backgroundColor: accent,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 4,
    },
    skillWithRating: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 4,
      width: "100%",
    },
    skillRatingText: {
      fontSize: 8,
      color: "#6b7280",
    },
    sectionContent: {
      fontSize: 9,
      lineHeight: 1.5,
      color: "#374151",
    },
  });

  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Bold Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              <Text style={styles.name}>{resumeData.personalInfo.fullName}</Text>
              {resumeData.personalInfo.title && (
                <Text style={styles.title}>{resumeData.personalInfo.title}</Text>
              )}
              <View style={styles.contactInfo}>
                {resumeData.personalInfo.email && (
                  <Text style={styles.contactItem}>{resumeData.personalInfo.email}</Text>
                )}
                {resumeData.personalInfo.phone && (
                  <Text style={styles.contactItem}>{resumeData.personalInfo.phone}</Text>
                )}
                {resumeData.personalInfo.location && (
                  <Text style={styles.contactItem}>{resumeData.personalInfo.location}</Text>
                )}
              </View>
            </View>

            {photo && (
              <View style={styles.photoWrapper}>
                <View style={styles.photoBorder} />
                <Image src={photo} style={styles.photo} />
              </View>
            )}
          </View>
        </View>

        {/* Main Content */}
        <View>
          {/* Summary */}
          {hasContent(resumeData.personalInfo.summary) && (
            <View style={styles.summaryBox}>
              <Text style={styles.summaryTitle}>About Me</Text>
              <Text style={styles.summaryText}>{resumeData.personalInfo.summary}</Text>
            </View>
          )}

          {/* Experience */}
          {resumeData.experience && resumeData.experience.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work Experience</Text>
              {resumeData.experience.map((exp, index) => {
                const bulletPoints = (exp.bulletPoints && exp.bulletPoints.length > 0) 
                  ? exp.bulletPoints 
                  : (exp.description || "")
                    .split("\n")
                    .map((line) => line.trim())
                    .filter(Boolean);

                return (
                  <View key={exp.id} style={styles.experienceItem}>
                    <View style={styles.experienceHeader}>
                      <View style={styles.experienceLeft}>
                        <Text style={styles.position}>{exp.position}</Text>
                        <Text style={styles.company}>{exp.company}</Text>
                      </View>
                      <Text style={styles.dateBadge}>
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </Text>
                    </View>
                    {bulletPoints.length > 0 && (
                      <View style={styles.bulletList}>
                        {bulletPoints.map((point, i) => (
                          <View key={i} style={styles.bulletItem}>
                            <View style={styles.bulletDot} />
                            <Text style={styles.bulletText}>{point}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          )}

          {/* Two Column Layout */}
          <View style={styles.twoColumnGrid}>
            {/* Education */}
            {resumeData.education && resumeData.education.length > 0 && (
              <View style={styles.columnLeft}>
                <Text style={styles.sectionTitle}>Education</Text>
                {resumeData.education.map((edu, index) => (
                  <View key={edu.id} style={styles.educationItem}>
                    <Text style={styles.degree}>{edu.degree}</Text>
                    {hasContent(edu.field) && (
                      <Text style={styles.field}>{edu.field}</Text>
                    )}
                    <Text style={styles.school}>{edu.school}</Text>
                    <Text style={styles.educationDate}>
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
              <View style={styles.columnRight}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.skillsContainer}>
                  {resumeData.skills.map((skill) => (
                    resumeData.skills.some(s => s.rating && s.rating.trim() !== "") ? (
                      // Vertical layout with ratings
                      <View key={skill.id} style={styles.skillWithRating}>
                        <Text style={styles.skillBadge}>{skill.name}</Text>
                        {skill.rating && skill.rating.trim() !== "" && (
                          <Text style={styles.skillRatingText}>{skill.rating}</Text>
                        )}
                      </View>
                    ) : (
                      // Horizontal layout without ratings
                      <Text key={skill.id} style={styles.skillBadge}>
                        {skill.name}
                      </Text>
                    )
                  ))}
                </View>
              </View>
            )}
          </View>

          {/* Additional Sections */}
          {resumeData.sections &&
            resumeData.sections.map((section, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <Text style={styles.sectionContent}>{section.content}</Text>
              </View>
            ))}
        </View>
      </Page>
    </Document>
  );
};
