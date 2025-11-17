import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: { paddingTop: PDF_PAGE_MARGINS.top, paddingRight: PDF_PAGE_MARGINS.right, paddingBottom: PDF_PAGE_MARGINS.bottom, paddingLeft: PDF_PAGE_MARGINS.left, fontSize: 10, fontFamily: 'Inter' },
  header: { flexDirection: 'row', marginBottom: 18 },
  headerLeft: { width: '70%', backgroundColor: `${themeColor}20`, padding: 20 },
  headerRight: { width: '30%', backgroundColor: themeColor, padding: 20, alignItems: 'center', justifyContent: 'center' },
  photo: { width: 70, height: 70, borderRadius: 6, borderWidth: 3, borderColor: '#ffffff' },
  name: { fontSize: 40, fontWeight: 700, color: themeColor, marginBottom: 5 },
  title: { fontSize: 16, color: '#374151', fontWeight: 500 },
  contactRow: { flexDirection: 'row', gap: 15, fontSize: 12.5, color: '#4b5563', marginTop: 8 },
  sectionTitle: { fontSize: 16, fontWeight: 700, color: themeColor, marginBottom: 10, borderBottomWidth: 2, borderBottomColor: themeColor, paddingBottom: 5 },
  projectBox: { backgroundColor: `${themeColor}10`, padding: 15, borderRadius: 8, borderWidth: 2, borderColor: `${themeColor}60`, marginBottom: 12 },
  projectTitle: { fontSize: 15, fontWeight: 700, color: themeColor, marginBottom: 8 },
  description: { fontSize: 13, lineHeight: 1.7, color: '#374151' },
  skillPill: { backgroundColor: themeColor, color: '#ffffff', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, fontSize: 13, fontWeight: 500, marginRight: 8, marginBottom: 8 },
  sectionMargin: { marginBottom: 18 },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props { resumeData: ResumeData; themeColor?: string; }

export const FresherCreativeEdgePDF = ({ resumeData, themeColor = "#ec4899" }: Props) => {
  const styles = createStyles(themeColor);
  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
            <Text style={styles.title}>{resumeData.personalInfo.title || "Creative Professional"}</Text>
          </View>
          <View style={styles.headerRight}>
            {photo && <Image src={photo} style={styles.photo} />}
          </View>
        </View>

        <View style={styles.contactRow}>
          {resumeData.personalInfo.email && <Text>{resumeData.personalInfo.email}</Text>}
          {resumeData.personalInfo.phone && <Text>{resumeData.personalInfo.phone}</Text>}
          {resumeData.personalInfo.location && <Text>{resumeData.personalInfo.location}</Text>}
        </View>

        {resumeData.sections.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Featured Projects & Portfolio</Text>
            {resumeData.sections.map((section) => hasContent(section.content) && (
              <View key={section.id} style={styles.projectBox}>
                <Text style={styles.projectTitle}>{section.title}</Text>
                <Text style={styles.description}>{section.content}</Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.skills.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Skills & Expertise</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {resumeData.skills.map((skill) => hasContent(skill.name) && <Text key={skill.id} style={styles.skillPill}>{skill.name}</Text>)}
            </View>
          </View>
        )}

        {resumeData.education.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.map((edu) => (
              <View key={edu.id} style={{ backgroundColor: `${themeColor}15`, padding: 12, borderRadius: 6, marginBottom: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{edu.degree}</Text>
                {edu.field && <Text style={{ fontSize: 13, fontWeight: 600, color: themeColor }}>{edu.field}</Text>}
                <Text style={{ fontSize: 12.5, color: '#374151' }}>{edu.school}</Text>
                <Text style={{ fontSize: 12, color: '#6b7280', marginTop: 2 }}>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.experience.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 12 }}>
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
