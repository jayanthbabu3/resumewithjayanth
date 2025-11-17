import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: { paddingTop: PDF_PAGE_MARGINS.top, paddingRight: PDF_PAGE_MARGINS.right, paddingBottom: PDF_PAGE_MARGINS.bottom, paddingLeft: PDF_PAGE_MARGINS.left, fontSize: 10, fontFamily: 'Inter' },
  header: { backgroundColor: themeColor, padding: 20, marginBottom: 18, borderRadius: 6, flexDirection: 'row', alignItems: 'center', gap: 15 },
  photo: { width: 70, height: 70, borderRadius: 35, borderWidth: 3, borderColor: '#ffffff' },
  name: { fontSize: 40, fontWeight: 700, color: '#ffffff', marginBottom: 5 },
  title: { fontSize: 16, color: 'rgba(255,255,255,0.9)', fontWeight: 500 },
  contactRow: { flexDirection: 'row', gap: 15, fontSize: 12.5, color: 'rgba(255,255,255,0.8)', marginTop: 10 },
  sectionTitle: { fontSize: 15, fontWeight: 700, color: themeColor, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 },
  description: { fontSize: 13, lineHeight: 1.8, color: '#374151' },
  eduBox: { backgroundColor: `${themeColor}15`, padding: 12, borderRadius: 6, marginBottom: 10 },
  eduDegree: { fontSize: 14, fontWeight: 700, color: '#111827' },
  eduField: { fontSize: 13, fontWeight: 600, color: themeColor },
  sectionMargin: { marginBottom: 18 },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props { resumeData: ResumeData; themeColor?: string; }

export const FresherExecutiveStylePDF = ({ resumeData, themeColor = "#7c3aed" }: Props) => {
  const styles = createStyles(themeColor);
  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {photo && <Image src={photo} style={styles.photo} />}
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
            <Text style={styles.title}>{resumeData.personalInfo.title || "Aspiring Professional"}</Text>
            <View style={styles.contactRow}>
              {resumeData.personalInfo.email && <Text>{resumeData.personalInfo.email}</Text>}
              {resumeData.personalInfo.phone && <Text>{resumeData.personalInfo.phone}</Text>}
              {resumeData.personalInfo.location && <Text>{resumeData.personalInfo.location}</Text>}
            </View>
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
            <Text style={styles.sectionTitle}>Core Competencies</Text>
            {resumeData.skills.map((skill) => hasContent(skill.name) && <Text key={skill.id} style={{ fontSize: 13, color: '#1f2937', marginBottom: 4 }}>• {skill.name}</Text>)}
          </View>
        )}

        {resumeData.education.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 10 }}>
                <Text style={styles.eduDegree}>{edu.degree}</Text>
                {edu.field && <Text style={styles.eduField}>{edu.field}</Text>}
                <Text style={styles.description}>{edu.school}</Text>
                <Text style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.sections.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Project Portfolio</Text>
            {resumeData.sections.map((section) => hasContent(section.content) && (
              <View key={section.id} style={styles.eduBox}>
                <Text style={styles.eduField}>{section.title}</Text>
                <Text style={styles.description}>{section.content}</Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.experience.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={styles.eduBox}>
                <Text style={styles.eduDegree}>{exp.position || "Position"}</Text>
                <Text style={styles.eduField}>{exp.company || "Company"}</Text>
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
