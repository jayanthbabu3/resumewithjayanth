import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: { paddingTop: PDF_PAGE_MARGINS.top, paddingRight: PDF_PAGE_MARGINS.right, paddingBottom: PDF_PAGE_MARGINS.bottom, paddingLeft: PDF_PAGE_MARGINS.left, fontSize: 10, fontFamily: 'Inter' },
  header: { backgroundColor: themeColor, padding: 25, textAlign: 'center', marginBottom: 18 },
  name: { fontSize: 40, fontWeight: 700, color: '#ffffff', marginBottom: 8 },
  title: { fontSize: 16, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 },
  contactRow: { flexDirection: 'row', justifyContent: 'center', gap: 20, fontSize: 13, color: 'rgba(255,255,255,0.9)' },
  sectionTitle: { fontSize: 15, fontWeight: 700, color: themeColor, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5, borderBottomWidth: 2, borderBottomColor: themeColor, paddingBottom: 6 },
  description: { fontSize: 13, lineHeight: 1.8, color: '#374151' },
  eduBox: { backgroundColor: `${themeColor}15`, padding: 12, borderRadius: 6, marginBottom: 10 },
  eduDegree: { fontSize: 15, fontWeight: 700, color: '#111827' },
  eduField: { fontSize: 14, fontWeight: 600, color: themeColor },
  sectionMargin: { marginBottom: 18 },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props { resumeData: ResumeData; themeColor?: string; }

export const FresherBoldHeaderPDF = ({ resumeData, themeColor = "#dc2626" }: Props) => {
  const styles = createStyles(themeColor);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
          <Text style={styles.title}>{resumeData.personalInfo.title || "Entry-Level Professional"}</Text>
          <View style={styles.contactRow}>
            {resumeData.personalInfo.email && <Text>{resumeData.personalInfo.email}</Text>}
            {resumeData.personalInfo.phone && <Text>{resumeData.personalInfo.phone}</Text>}
            {resumeData.personalInfo.location && <Text>{resumeData.personalInfo.location}</Text>}
          </View>
        </View>

        {hasContent(resumeData.personalInfo.summary) && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Objective</Text>
            <Text style={styles.description}>{resumeData.personalInfo.summary}</Text>
          </View>
        )}

        {resumeData.education.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.map((edu) => (
              <View key={edu.id} style={styles.eduBox}>
                <Text style={styles.eduDegree}>{edu.degree}</Text>
                {edu.field && <Text style={styles.eduField}>{edu.field}</Text>}
                <Text style={styles.description}>{edu.school}</Text>
                <Text style={{ fontSize: 12.5, color: '#6b7280', marginTop: 2 }}>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.skills.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              {resumeData.skills.map((skill) => hasContent(skill.name) && (
                <Text key={skill.id} style={{ fontSize: 13, color: themeColor, borderWidth: 2, borderColor: themeColor, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 4, fontWeight: 500 }}>{skill.name}</Text>
              ))}
            </View>
          </View>
        )}

        {resumeData.sections.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {resumeData.sections.map((section) => hasContent(section.content) && (
              <View key={section.id} style={{ marginBottom: 12 }}>
                <Text style={styles.eduField}>{section.title}</Text>
                <Text style={styles.description}>{section.content}</Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.experience.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 12 }}>
                <Text style={styles.eduDegree}>{exp.position || "Position"}</Text>
                <Text style={styles.eduField}>{exp.company || "Company"}</Text>
                <Text style={{ fontSize: 12.5, color: '#6b7280', marginBottom: 4 }}>{formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}</Text>
                {hasContent(exp.description) && <Text style={styles.description}>{exp.description}</Text>}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};
