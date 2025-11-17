import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: { paddingTop: PDF_PAGE_MARGINS.top, paddingRight: PDF_PAGE_MARGINS.right, paddingBottom: PDF_PAGE_MARGINS.bottom, paddingLeft: PDF_PAGE_MARGINS.left, fontSize: 10, fontFamily: 'Inter' },
  header: { backgroundColor: themeColor, padding: 20, textAlign: 'center', marginBottom: 15 },
  name: { fontSize: 38, fontWeight: 700, color: '#ffffff', marginBottom: 5 },
  title: { fontSize: 15, color: 'rgba(255,255,255,0.9)' },
  container: { flexDirection: 'row' },
  leftColumn: { width: '50%', padding: 15, borderRightWidth: 2, borderRightColor: themeColor },
  rightColumn: { width: '50%', padding: 15 },
  sectionTitle: { fontSize: 14, fontWeight: 700, color: themeColor, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 },
  contactText: { fontSize: 12.5, color: '#374151', marginBottom: 6 },
  eduBox: { backgroundColor: `${themeColor}15`, padding: 10, borderRadius: 6, marginBottom: 8 },
  description: { fontSize: 13, lineHeight: 1.8, color: '#374151' },
  sectionMargin: { marginBottom: 15 },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props { resumeData: ResumeData; themeColor?: string; }

export const FresherSplitLayoutPDF = ({ resumeData, themeColor = "#16a34a" }: Props) => {
  const styles = createStyles(themeColor);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
          <Text style={styles.title}>{resumeData.personalInfo.title || "Fresh Graduate"}</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.leftColumn}>
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Contact</Text>
              {resumeData.personalInfo.email && <Text style={styles.contactText}>{resumeData.personalInfo.email}</Text>}
              {resumeData.personalInfo.phone && <Text style={styles.contactText}>{resumeData.personalInfo.phone}</Text>}
              {resumeData.personalInfo.location && <Text style={styles.contactText}>{resumeData.personalInfo.location}</Text>}
            </View>

            {resumeData.education.length > 0 && (
              <View style={styles.sectionMargin}>
                <Text style={styles.sectionTitle}>Education</Text>
                {resumeData.education.map((edu) => (
                  <View key={edu.id} style={styles.eduBox}>
                    <Text style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>{edu.degree}</Text>
                    {edu.field && <Text style={{ fontSize: 12, color: '#4b5563' }}>{edu.field}</Text>}
                    <Text style={{ fontSize: 12, color: '#374151' }}>{edu.school}</Text>
                    <Text style={{ fontSize: 11.5, color: '#6b7280', marginTop: 2 }}>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</Text>
                  </View>
                ))}
              </View>
            )}

            {resumeData.skills.length > 0 && (
              <View style={styles.sectionMargin}>
                <Text style={styles.sectionTitle}>Skills</Text>
                {resumeData.skills.map((skill) => hasContent(skill.name) && (
                  <Text key={skill.id} style={{ fontSize: 12.5, color: '#1f2937', marginBottom: 5, fontWeight: 500 }}>{skill.name}</Text>
                ))}
              </View>
            )}
          </View>

          <View style={styles.rightColumn}>
            {hasContent(resumeData.personalInfo.summary) && (
              <View style={styles.sectionMargin}>
                <Text style={styles.sectionTitle}>Profile</Text>
                <Text style={styles.description}>{resumeData.personalInfo.summary}</Text>
              </View>
            )}

            {resumeData.sections.length > 0 && (
              <View style={styles.sectionMargin}>
                <Text style={styles.sectionTitle}>Projects</Text>
                {resumeData.sections.map((section) => hasContent(section.content) && (
                  <View key={section.id} style={styles.eduBox}>
                    <Text style={{ fontSize: 13, fontWeight: 700, color: themeColor, marginBottom: 4 }}>{section.title}</Text>
                    <Text style={{ fontSize: 12.5, lineHeight: 1.7, color: '#374151' }}>{section.content}</Text>
                  </View>
                ))}
              </View>
            )}

            {resumeData.experience.length > 0 && (
              <View style={styles.sectionMargin}>
                <Text style={styles.sectionTitle}>Internships</Text>
                {resumeData.experience.map((exp) => (
                  <View key={exp.id} style={styles.eduBox}>
                    <Text style={{ fontSize: 13, fontWeight: 700, color: '#111827' }}>{exp.position || "Position"}</Text>
                    <Text style={{ fontSize: 12, color: '#4b5563', marginBottom: 4 }}>{exp.company || "Company"}</Text>
                    <Text style={{ fontSize: 11.5, color: '#6b7280', marginBottom: 4 }}>{formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}</Text>
                    {hasContent(exp.description) && <Text style={{ fontSize: 12.5, lineHeight: 1.7, color: '#374151' }}>{exp.description}</Text>}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};
