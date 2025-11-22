import { Document, Page, Text, View, StyleSheet, Image } from '@/lib/pdfRenderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: { paddingTop: PDF_PAGE_MARGINS.top, paddingRight: PDF_PAGE_MARGINS.right, paddingBottom: PDF_PAGE_MARGINS.bottom, paddingLeft: PDF_PAGE_MARGINS.left, fontSize: 10, fontFamily: 'Inter' },
  header: { backgroundColor: `${themeColor}20`, padding: 15, borderRadius: 8, marginBottom: 18, flexDirection: 'row', alignItems: 'center', gap: 15 },
  photo: { width: 60, height: 60, borderRadius: 6, borderWidth: 2, borderColor: themeColor },
  name: { fontSize: 38, fontWeight: 700, color: themeColor, marginBottom: 5 },
  title: { fontSize: 15, color: '#374151', marginBottom: 8, fontWeight: 500 },
  contactRow: { flexDirection: 'row', gap: 15, fontSize: 12.5, color: '#4b5563' },
  sectionTitle: { fontSize: 15, fontWeight: 700, color: themeColor, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 },
  skillGrid: { borderWidth: 2, borderColor: themeColor, backgroundColor: `${themeColor}15`, padding: 8, borderRadius: 6, textAlign: 'center', marginRight: 8, marginBottom: 8 },
  projectBox: { backgroundColor: `${themeColor}10`, padding: 12, borderRadius: 6, borderWidth: 2, borderColor: `${themeColor}60`, marginBottom: 10 },
  description: { fontSize: 13, lineHeight: 1.7, color: '#374151' },
  eduBox: { backgroundColor: `${themeColor}15`, padding: 10, borderRadius: 6, marginBottom: 10 },
  sectionMargin: { marginBottom: 18 },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props { resumeData: ResumeData; themeColor?: string; }

export const FresherTechModernPDF = ({ resumeData, themeColor = "#0369a1" }: Props) => {
  const styles = createStyles(themeColor);
  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {photo && <Image src={photo} style={styles.photo} />}
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
            <Text style={styles.title}>{resumeData.personalInfo.title || "Tech Graduate"}</Text>
            <View style={styles.contactRow}>
              {resumeData.personalInfo.email && <Text>{resumeData.personalInfo.email}</Text>}
              {resumeData.personalInfo.phone && <Text>{resumeData.personalInfo.phone}</Text>}
              {resumeData.personalInfo.location && <Text>{resumeData.personalInfo.location}</Text>}
            </View>
          </View>
        </View>

        {resumeData.skills.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Technical Skills Matrix</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {resumeData.skills.map((skill) => hasContent(skill.name) && (
                <View key={skill.id} style={styles.skillGrid}>
                  <Text style={{ fontSize: 13, fontWeight: 500, color: themeColor }}>{skill.name}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {hasContent(resumeData.personalInfo.summary) && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Profile Summary</Text>
            <Text style={styles.description}>{resumeData.personalInfo.summary}</Text>
          </View>
        )}

        {resumeData.sections.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Technical Projects</Text>
            {resumeData.sections.map((section) => hasContent(section.content) && (
              <View key={section.id} style={styles.projectBox}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: themeColor, marginBottom: 6 }}>{section.title}</Text>
                <Text style={styles.description}>{section.content}</Text>
              </View>
            ))}
          </View>
        )}

        <View style={{ flexDirection: 'row', gap: 20 }}>
          {resumeData.education.length > 0 && (
            <View style={{ flex: 1 }}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resumeData.education.map((edu) => (
                <View key={edu.id} style={styles.eduBox}>
                  <Text style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{edu.degree}</Text>
                  {edu.field && <Text style={{ fontSize: 13, fontWeight: 600, color: themeColor }}>{edu.field}</Text>}
                  <Text style={{ fontSize: 12.5, color: '#374151' }}>{edu.school}</Text>
                  <Text style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</Text>
                </View>
              ))}
            </View>
          )}

          {resumeData.experience.length > 0 && (
            <View style={{ flex: 1 }}>
              <Text style={styles.sectionTitle}>Experience</Text>
              {resumeData.experience.map((exp) => (
                <View key={exp.id} style={styles.eduBox}>
                  <Text style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{exp.position || "Position"}</Text>
                  <Text style={{ fontSize: 12.5, fontWeight: 600, color: themeColor, marginBottom: 4 }}>{exp.company || "Company"}</Text>
                  <Text style={{ fontSize: 11.5, color: '#6b7280', marginBottom: 4 }}>{formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}</Text>
                  {hasContent(exp.description) && <Text style={{ fontSize: 12.5, lineHeight: 1.7, color: '#374151' }}>{exp.description}</Text>}
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
