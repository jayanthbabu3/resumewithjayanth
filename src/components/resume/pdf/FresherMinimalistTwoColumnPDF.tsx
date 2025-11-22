import { Document, Page, Text, View, StyleSheet, Image } from '@/lib/pdfRenderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: { paddingTop: PDF_PAGE_MARGINS.top, paddingRight: PDF_PAGE_MARGINS.right, paddingBottom: PDF_PAGE_MARGINS.bottom, paddingLeft: PDF_PAGE_MARGINS.left, fontSize: 10, fontFamily: 'Inter', flexDirection: 'row' },
  leftColumn: { width: '33%', padding: 20, backgroundColor: '#f9fafb' },
  rightColumn: { width: '67%', padding: 20 },
  photo: { width: 80, height: 80, borderRadius: 6, marginBottom: 15, marginLeft: 'auto', marginRight: 'auto', borderWidth: 2, borderColor: themeColor },
  sectionTitle: { fontSize: 14, fontWeight: 700, color: themeColor, marginBottom: 8 },
  contactText: { fontSize: 12.5, color: '#374151', marginBottom: 6 },
  name: { fontSize: 38, fontWeight: 700, color: themeColor, marginBottom: 5 },
  title: { fontSize: 15, color: '#4b5563', marginBottom: 15 },
  description: { fontSize: 13, lineHeight: 1.8, color: '#374151' },
  eduDegree: { fontSize: 12.5, fontWeight: 700, color: '#111827' },
  sectionMargin: { marginBottom: 15 },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props { resumeData: ResumeData; themeColor?: string; }

export const FresherMinimalistTwoColumnPDF = ({ resumeData, themeColor = "#475569" }: Props) => {
  const styles = createStyles(themeColor);
  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.leftColumn}>
          {photo && <Image src={photo} style={styles.photo} />}
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Contact</Text>
            {resumeData.personalInfo.email && <Text style={styles.contactText}>{resumeData.personalInfo.email}</Text>}
            {resumeData.personalInfo.phone && <Text style={styles.contactText}>{resumeData.personalInfo.phone}</Text>}
            {resumeData.personalInfo.location && <Text style={styles.contactText}>{resumeData.personalInfo.location}</Text>}
          </View>
          {resumeData.skills.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Skills</Text>
              {resumeData.skills.map((skill) => hasContent(skill.name) && <Text key={skill.id} style={styles.contactText}>{skill.name}</Text>)}
            </View>
          )}
          {resumeData.education.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resumeData.education.map((edu) => (
                <View key={edu.id} style={{ marginBottom: 10 }}>
                  <Text style={styles.eduDegree}>{edu.degree}</Text>
                  {edu.field && <Text style={{ fontSize: 12, color: '#4b5563' }}>{edu.field}</Text>}
                  <Text style={{ fontSize: 12, color: '#374151' }}>{edu.school}</Text>
                  <Text style={{ fontSize: 11, color: '#6b7280', marginTop: 2 }}>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
        <View style={styles.rightColumn}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
            <Text style={styles.title}>{resumeData.personalInfo.title || "Fresh Graduate"}</Text>
          </View>
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
                <View key={section.id} style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 14, fontWeight: 700, color: themeColor, marginBottom: 2 }}>{section.title}</Text>
                  <Text style={styles.description}>{section.content}</Text>
                </View>
              ))}
            </View>
          )}
          {resumeData.experience.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Internships</Text>
              {resumeData.experience.map((exp) => (
                <View key={exp.id} style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{exp.position || "Position"}</Text>
                  <Text style={{ fontSize: 13, color: '#4b5563', marginBottom: 4 }}>{exp.company || "Company"}</Text>
                  <Text style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}</Text>
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
