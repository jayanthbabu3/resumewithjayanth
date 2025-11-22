import { Document, Page, Text, View, StyleSheet, Image } from '@/lib/pdfRenderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: {
    paddingTop: PDF_PAGE_MARGINS.top,
    paddingRight: PDF_PAGE_MARGINS.right,
    paddingBottom: PDF_PAGE_MARGINS.bottom,
    paddingLeft: PDF_PAGE_MARGINS.left,
    fontSize: 10,
    fontFamily: 'Inter',
    flexDirection: 'row',
  },
  leftColumn: {
    width: '40%',
    padding: 20,
    borderRightWidth: 3,
    borderRightColor: themeColor,
  },
  rightColumn: {
    width: '60%',
    padding: 20,
  },
  name: {
    fontSize: 36,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 5,
  },
  title: {
    fontSize: 15,
    color: '#4b5563',
    marginBottom: 15,
    fontWeight: 500,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  contactText: {
    fontSize: 12.5,
    color: '#374151',
    marginBottom: 6,
  },
  skillBox: {
    backgroundColor: `${themeColor}20`,
    padding: 6,
    borderRadius: 4,
    marginBottom: 8,
  },
  skillText: {
    fontSize: 12.5,
    color: '#1f2937',
    fontWeight: 500,
  },
  eduBox: {
    backgroundColor: `${themeColor}15`,
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  eduDegree: {
    fontSize: 14,
    fontWeight: 700,
    color: '#111827',
  },
  eduField: {
    fontSize: 13,
    fontWeight: 600,
    color: themeColor,
  },
  description: {
    fontSize: 13,
    lineHeight: 1.7,
    color: '#374151',
  },
  sectionMargin: {
    marginBottom: 15,
  },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props {
  resumeData: ResumeData;
  themeColor?: string;
}

export const FresherTechSplitPDF = ({ resumeData, themeColor = "#0891b2" }: Props) => {
  const styles = createStyles(themeColor);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.leftColumn}>
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
            <Text style={styles.title}>{resumeData.personalInfo.title || "Tech Enthusiast"}</Text>
          </View>

          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Contact Info</Text>
            {resumeData.personalInfo.email && <Text style={styles.contactText}>{resumeData.personalInfo.email}</Text>}
            {resumeData.personalInfo.phone && <Text style={styles.contactText}>{resumeData.personalInfo.phone}</Text>}
            {resumeData.personalInfo.location && <Text style={styles.contactText}>{resumeData.personalInfo.location}</Text>}
          </View>

          {resumeData.skills.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Technical Skills</Text>
              {resumeData.skills.map((skill) => (
                hasContent(skill.name) && (
                  <View key={skill.id} style={styles.skillBox}>
                    <Text style={styles.skillText}>{skill.name}</Text>
                  </View>
                )
              ))}
            </View>
          )}
        </View>

        <View style={styles.rightColumn}>
          {resumeData.education.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resumeData.education.map((edu) => (
                <View key={edu.id} style={styles.eduBox}>
                  <Text style={styles.eduDegree}>{edu.degree}</Text>
                  {edu.field && <Text style={styles.eduField}>{edu.field}</Text>}
                  <Text style={styles.description}>{edu.school}</Text>
                  <Text style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {resumeData.sections.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Technical Projects</Text>
              {resumeData.sections.map((section) => (
                hasContent(section.content) && (
                  <View key={section.id} style={{ marginBottom: 10 }}>
                    <Text style={styles.eduField}>{section.title}</Text>
                    <Text style={styles.description}>{section.content}</Text>
                  </View>
                )
              ))}
            </View>
          )}

          {resumeData.experience.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Internships</Text>
              {resumeData.experience.map((exp) => (
                <View key={exp.id} style={{ marginBottom: 10 }}>
                  <Text style={styles.eduDegree}>{exp.position || "Position"}</Text>
                  <Text style={styles.eduField}>{exp.company || "Company"}</Text>
                  <Text style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </Text>
                  {hasContent(exp.description) && <Text style={styles.description}>{exp.description}</Text>}
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
