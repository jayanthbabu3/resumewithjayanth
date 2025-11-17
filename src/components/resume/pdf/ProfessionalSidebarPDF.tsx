import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const styles = StyleSheet.create({
  page: {
    paddingTop: PDF_PAGE_MARGINS.top,
    paddingRight: PDF_PAGE_MARGINS.right,
    paddingBottom: PDF_PAGE_MARGINS.bottom,
    paddingLeft: PDF_PAGE_MARGINS.left,
    fontFamily: 'Inter',
    fontSize: 10,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  sidebar: {
    width: '33%',
    backgroundColor: '#f0fdfa',
    padding: 24,
  },
  mainContent: {
    flex: 1,
    padding: 24,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    alignSelf: 'center',
  },
  sidebarSection: {
    marginBottom: 20,
  },
  sidebarTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: '#0d9488',
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#0d9488',
  },
  contactItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 8,
  },
  skillItem: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 8,
  },
  educationItem: {
    marginBottom: 14,
  },
  educationDegree: {
    fontSize: 9.5,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 2,
  },
  educationField: {
    fontSize: 8.5,
    color: '#4b5563',
    marginBottom: 2,
  },
  educationSchool: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 2,
  },
  educationDate: {
    fontSize: 8,
    color: '#6b7280',
  },
  header: {
    marginBottom: 24,
  },
  name: {
    fontSize: 32,
    fontWeight: 700,
    color: '#0d9488',
    marginBottom: 6,
  },
  title: {
    fontSize: 12,
    color: '#6b7280',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: '#0d9488',
    marginBottom: 12,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#374151',
  },
  experienceItem: {
    marginBottom: 20,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
    gap: 10,
  },
  position: {
    fontSize: 12,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 3,
  },
  company: {
    fontSize: 10,
    fontWeight: 600,
    color: '#0d9488',
  },
  experienceDate: {
    fontSize: 9,
    color: '#6b7280',
  },
  description: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#374151',
  },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props {
  resumeData: ResumeData;
  themeColor?: string;
}

export const ProfessionalSidebarPDF = ({ resumeData, themeColor = "#0d9488" }: Props) => {
  const photo = resumeData.personalInfo.photo;
  const sidebarBg = `${themeColor}15`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left Sidebar */}
        <View style={[styles.sidebar, { backgroundColor: sidebarBg }]}>
          {photo && <Image src={photo} style={styles.photo} />}

          {/* Contact */}
          <View style={styles.sidebarSection}>
            <Text style={[styles.sidebarTitle, { color: themeColor, borderBottomColor: themeColor }]}>Contact</Text>
            {hasContent(resumeData.personalInfo.email) && (
              <Text style={styles.contactItem}>{resumeData.personalInfo.email}</Text>
            )}
            {hasContent(resumeData.personalInfo.phone) && (
              <Text style={styles.contactItem}>{resumeData.personalInfo.phone}</Text>
            )}
            {hasContent(resumeData.personalInfo.location) && (
              <Text style={styles.contactItem}>{resumeData.personalInfo.location}</Text>
            )}
          </View>

          {/* Skills */}
          {resumeData.skills.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={[styles.sidebarTitle, { color: themeColor, borderBottomColor: themeColor }]}>Skills</Text>
              {resumeData.skills.map((skill) => (
                hasContent(skill.name) ? (
                  <Text key={skill.id} style={styles.skillItem}>• {skill.name}</Text>
                ) : null
              ))}
            </View>
          )}

          {/* Education */}
          {resumeData.education.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={[styles.sidebarTitle, { color: themeColor, borderBottomColor: themeColor }]}>Education</Text>
              {resumeData.education.map((edu) => (
                <View key={edu.id} style={styles.educationItem}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  {hasContent(edu.field) && <Text style={styles.educationField}>{edu.field}</Text>}
                  <Text style={styles.educationSchool}>{edu.school}</Text>
                  <Text style={styles.educationDate}>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Right Main Content */}
        <View style={styles.mainContent}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.name, { color: themeColor }]}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
            {hasContent(resumeData.personalInfo.title) && (
              <Text style={styles.title}>{resumeData.personalInfo.title}</Text>
            )}
          </View>

          {/* Summary */}
          {hasContent(resumeData.personalInfo.summary) && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: themeColor }]}>Professional Summary</Text>
              <Text style={styles.summary}>{resumeData.personalInfo.summary}</Text>
            </View>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: themeColor }]}>Work Experience</Text>
              {resumeData.experience.map((exp) => (
                <View key={exp.id} style={styles.experienceItem}>
                  <View style={styles.experienceHeader}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.position}>{exp.position || "Position Title"}</Text>
                      <Text style={[styles.company, { color: themeColor }]}>{exp.company || "Company Name"}</Text>
                    </View>
                    <Text style={styles.experienceDate}>
                      {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                    </Text>
                  </View>
                  {hasContent(exp.description) && <Text style={styles.description}>{exp.description}</Text>}
                </View>
              ))}
            </View>
          )}

          {/* Custom Sections */}
          {resumeData.sections.map((section) => (
            hasContent(section.title) && hasContent(section.content) && (
              <View key={section.id} style={styles.section}>
                <Text style={[styles.sectionTitle, { color: themeColor }]}>{section.title}</Text>
                <Text style={styles.summary}>{section.content}</Text>
              </View>
            )
          ))}
        </View>
      </Page>
    </Document>
  );
};
