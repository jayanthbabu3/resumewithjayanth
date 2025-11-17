import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: { paddingTop: PDF_PAGE_MARGINS.top, paddingRight: PDF_PAGE_MARGINS.right, paddingBottom: PDF_PAGE_MARGINS.bottom, paddingLeft: PDF_PAGE_MARGINS.left, fontSize: 10, fontFamily: 'Inter' },
  header: { textAlign: 'center', marginBottom: 18 },
  name: { fontSize: 38, fontWeight: 700, color: themeColor, marginBottom: 5 },
  title: { fontSize: 15, color: '#4b5563', marginBottom: 10 },
  contactRow: { flexDirection: 'row', justifyContent: 'center', gap: 15, fontSize: 12.5, color: '#4b5563' },
  sectionTitle: { fontSize: 15, fontWeight: 700, color: themeColor, marginBottom: 8, borderBottomWidth: 2, borderBottomColor: themeColor, paddingBottom: 5, textTransform: 'uppercase' },
  description: { fontSize: 13, lineHeight: 1.8, color: '#374151' },
  sectionMargin: { marginBottom: 18 },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props { resumeData: ResumeData; themeColor?: string; }

export const FresherModernClassicPDF = ({ resumeData, themeColor = "#1e40af" }: Props) => {
  const styles = createStyles(themeColor);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
          <Text style={styles.title}>{resumeData.personalInfo.title || "Recent Graduate"}</Text>
          <View style={styles.contactRow}>
            {resumeData.personalInfo.email && <Text>{resumeData.personalInfo.email}</Text>}
            {resumeData.personalInfo.phone && <Text>{resumeData.personalInfo.phone}</Text>}
            {resumeData.personalInfo.location && <Text>{resumeData.personalInfo.location}</Text>}
          </View>
        </View>

        {hasContent(resumeData.personalInfo.summary) && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Career Objective</Text>
            <Text style={styles.description}>{resumeData.personalInfo.summary}</Text>
          </View>
        )}

        {resumeData.skills.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Skills</Text>
            {resumeData.skills.map((skill) => hasContent(skill.name) && (
              <Text key={skill.id} style={{ fontSize: 13, color: '#1f2937', marginBottom: 5 }}>• {skill.name}</Text>
            ))}
          </View>
        )}

        {resumeData.education.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{edu.degree}</Text>
                {edu.field && <Text style={{ fontSize: 13, color: '#4b5563' }}>{edu.field}</Text>}
                <Text style={{ fontSize: 13, color: '#374151' }}>{edu.school}</Text>
                <Text style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.sections.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {resumeData.sections.map((section) => hasContent(section.content) && (
              <View key={section.id} style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: themeColor, marginBottom: 2 }}>{section.title}</Text>
                <Text style={styles.description}>{section.content}</Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.experience.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{exp.position || "Position"}</Text>
                <Text style={{ fontSize: 13, color: '#374151' }}>{exp.company || "Company"}</Text>
                <Text style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}</Text>
                {hasContent(exp.description) && <Text style={styles.description}>{exp.description}</Text>}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};
