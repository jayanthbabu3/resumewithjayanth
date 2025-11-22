import { Document, Page, Text, View, StyleSheet } from '@/lib/pdfRenderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: { paddingTop: PDF_PAGE_MARGINS.top, paddingRight: PDF_PAGE_MARGINS.right, paddingBottom: PDF_PAGE_MARGINS.bottom, paddingLeft: PDF_PAGE_MARGINS.left, fontSize: 10, fontFamily: 'Inter' },
  header: { textAlign: 'center', marginBottom: 15, paddingBottom: 12, borderBottomWidth: 2, borderBottomColor: themeColor },
  name: { fontSize: 38, fontWeight: 700, color: themeColor, marginBottom: 5 },
  title: { fontSize: 15, color: '#4b5563', marginBottom: 8 },
  contactRow: { flexDirection: 'row', justifyContent: 'center', gap: 15, fontSize: 12.5, color: '#4b5563' },
  sectionTitle: { fontSize: 15, fontWeight: 700, color: themeColor, marginBottom: 10 },
  description: { fontSize: 13, lineHeight: 1.8, color: '#374151' },
  gridBox: { borderWidth: 2, borderColor: `${themeColor}60`, padding: 10, borderRadius: 6, textAlign: 'center' },
  eduBox: { borderWidth: 2, borderColor: `${themeColor}60`, backgroundColor: `${themeColor}10`, padding: 10, borderRadius: 6, marginBottom: 10 },
  sectionMargin: { marginBottom: 18 },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props { resumeData: ResumeData; themeColor?: string; }

export const FresherProfessionalGridPDF = ({ resumeData, themeColor = "#0d9488" }: Props) => {
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
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.description}>{resumeData.personalInfo.summary}</Text>
          </View>
        )}

        {resumeData.skills.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              {resumeData.skills.map((skill) => hasContent(skill.name) && (
                <View key={skill.id} style={styles.gridBox}>
                  <Text style={{ fontSize: 13, fontWeight: 500, color: themeColor }}>{skill.name}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {resumeData.education.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.map((edu) => (
              <View key={edu.id} style={styles.eduBox}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{edu.degree}</Text>
                {edu.field && <Text style={{ fontSize: 12.5, color: '#4b5563' }}>{edu.field}</Text>}
                <Text style={{ fontSize: 12.5, color: '#374151' }}>{edu.school}</Text>
                <Text style={{ fontSize: 11.5, color: '#6b7280', marginTop: 2 }}>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</Text>
              </View>
            ))}
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
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={{ borderWidth: 2, borderColor: `${themeColor}60`, padding: 12, borderRadius: 6, marginBottom: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{exp.position || "Position"}</Text>
                <Text style={{ fontSize: 13, fontWeight: 600, color: themeColor, marginBottom: 4 }}>{exp.company || "Company"}</Text>
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
