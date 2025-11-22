import { Document, Page, Text, View, StyleSheet, Image } from '@/lib/pdfRenderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: { paddingTop: PDF_PAGE_MARGINS.top, paddingRight: PDF_PAGE_MARGINS.right, paddingBottom: PDF_PAGE_MARGINS.bottom, paddingLeft: PDF_PAGE_MARGINS.left, fontSize: 10, fontFamily: 'Inter', flexDirection: 'row' },
  leftSidebar: { width: '32%', backgroundColor: themeColor, padding: 20 },
  rightContent: { width: '68%', padding: 20 },
  photo: { width: 80, height: 80, borderRadius: 40, marginBottom: 15, marginLeft: 'auto', marginRight: 'auto', borderWidth: 3, borderColor: '#ffffff' },
  sidebarTitle: { fontSize: 14, fontWeight: 700, color: '#ffffff', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.3)', paddingBottom: 6 },
  sidebarText: { fontSize: 12.5, color: 'rgba(255,255,255,0.9)', marginBottom: 8 },
  name: { fontSize: 40, fontWeight: 700, color: themeColor, marginBottom: 5 },
  title: { fontSize: 16, color: '#4b5563', marginBottom: 15, fontWeight: 500 },
  sectionTitle: { fontSize: 15, fontWeight: 700, color: themeColor, marginBottom: 10, borderBottomWidth: 2, borderBottomColor: themeColor, paddingBottom: 5 },
  projectBox: { backgroundColor: `${themeColor}15`, padding: 12, borderRadius: 6, borderLeftWidth: 3, borderLeftColor: themeColor, marginBottom: 12 },
  description: { fontSize: 13, lineHeight: 1.7, color: '#374151' },
  sectionMargin: { marginBottom: 18 },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props { resumeData: ResumeData; themeColor?: string; }

export const FresherElegantSidebarPDF = ({ resumeData, themeColor = "#9333ea" }: Props) => {
  const styles = createStyles(themeColor);
  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.leftSidebar}>
          {photo && <Image src={photo} style={styles.photo} />}
          <View style={styles.sectionMargin}>
            <Text style={styles.sidebarTitle}>Contact</Text>
            {resumeData.personalInfo.email && <Text style={styles.sidebarText}>{resumeData.personalInfo.email}</Text>}
            {resumeData.personalInfo.phone && <Text style={styles.sidebarText}>{resumeData.personalInfo.phone}</Text>}
            {resumeData.personalInfo.location && <Text style={styles.sidebarText}>{resumeData.personalInfo.location}</Text>}
          </View>
          {resumeData.skills.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sidebarTitle}>Skills</Text>
              {resumeData.skills.map((skill) => hasContent(skill.name) && (
                <View key={skill.id} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: 6, borderRadius: 4, marginBottom: 8 }}>
                  <Text style={styles.sidebarText}>{skill.name}</Text>
                </View>
              ))}
            </View>
          )}
          {resumeData.education.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sidebarTitle}>Education</Text>
              {resumeData.education.map((edu) => (
                <View key={edu.id} style={{ marginBottom: 10 }}>
                  <Text style={{ fontSize: 13, fontWeight: 700, color: '#ffffff' }}>{edu.degree}</Text>
                  {edu.field && <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>{edu.field}</Text>}
                  <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>{edu.school}</Text>
                  <Text style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
        <View style={styles.rightContent}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
            <Text style={styles.title}>{resumeData.personalInfo.title || "Aspiring Professional"}</Text>
          </View>
          {hasContent(resumeData.personalInfo.summary) && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Professional Profile</Text>
              <Text style={styles.description}>{resumeData.personalInfo.summary}</Text>
            </View>
          )}
          {resumeData.sections.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Academic Projects</Text>
              {resumeData.sections.map((section) => hasContent(section.content) && (
                <View key={section.id} style={styles.projectBox}>
                  <Text style={{ fontSize: 14, fontWeight: 700, color: themeColor, marginBottom: 5 }}>{section.title}</Text>
                  <Text style={styles.description}>{section.content}</Text>
                </View>
              ))}
            </View>
          )}
          {resumeData.experience.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Professional Experience</Text>
              {resumeData.experience.map((exp) => (
                <View key={exp.id} style={styles.projectBox}>
                  <Text style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{exp.position || "Position"}</Text>
                  <Text style={{ fontSize: 13, fontWeight: 600, color: themeColor, marginBottom: 4 }}>{exp.company || "Company"}</Text>
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
