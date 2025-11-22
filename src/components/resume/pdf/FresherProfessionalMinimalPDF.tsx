import { Document, Page, Text, View, StyleSheet } from '@/lib/pdfRenderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: { paddingTop: PDF_PAGE_MARGINS.top, paddingRight: PDF_PAGE_MARGINS.right, paddingBottom: PDF_PAGE_MARGINS.bottom, paddingLeft: PDF_PAGE_MARGINS.left, fontSize: 10, fontFamily: 'Inter' },
  header: { textAlign: 'center', marginBottom: 18, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: themeColor },
  name: { fontSize: 38, fontWeight: 700, color: themeColor, marginBottom: 5 },
  title: { fontSize: 15, color: '#4b5563', marginBottom: 10 },
  contactRow: { flexDirection: 'row', justifyContent: 'center', gap: 20, fontSize: 12.5, color: '#4b5563' },
  sectionTitle: { fontSize: 15, fontWeight: 700, color: themeColor, marginBottom: 10, textTransform: 'uppercase' },
  description: { fontSize: 13, lineHeight: 1.8, color: '#374151' },
  skillPill: { borderWidth: 1, borderColor: themeColor, color: themeColor, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12, fontSize: 13, fontWeight: 500, marginRight: 8, marginBottom: 8 },
  sectionMargin: { marginBottom: 18 },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props { resumeData: ResumeData; themeColor?: string; }

export const FresherProfessionalMinimalPDF = ({ resumeData, themeColor = "#65a30d" }: Props) => {
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
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.description}>{resumeData.personalInfo.summary}</Text>
          </View>
        )}

        {resumeData.skills.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Core Skills</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {resumeData.skills.map((skill) => hasContent(skill.name) && (
                <Text key={skill.id} style={styles.skillPill}>{skill.name}</Text>
              ))}
            </View>
          </View>
        )}

        {resumeData.education.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 12 }}>
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
              <View key={section.id} style={{ marginBottom: 12 }}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: themeColor, marginBottom: 4 }}>{section.title}</Text>
                <Text style={styles.description}>{section.content}</Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.experience.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 12 }}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{exp.position || "Position"}</Text>
                <Text style={{ fontSize: 13, color: '#374151' }}>{exp.company || "Company"}</Text>
                <Text style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}</Text>
                {hasContent(exp.description) && <Text style={styles.description}>{exp.description}</Text>}
              </View>
            ))}
          </View>
        )}

        <View style={styles.sectionMargin}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          <Text style={{ fontSize: 13, color: '#374151' }}>• Professional Certification - Issuing Organization (Year)</Text>
        </View>

        <View style={styles.sectionMargin}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <Text style={{ fontSize: 13, color: '#374151', marginBottom: 4 }}>• Academic excellence award or distinction</Text>
          <Text style={{ fontSize: 13, color: '#374151' }}>• Participation in competitions or events</Text>
        </View>
      </Page>
    </Document>
  );
};
