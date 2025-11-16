import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const styles = StyleSheet.create({
  page: {
    paddingTop: PDF_PAGE_MARGINS.top,
    paddingRight: PDF_PAGE_MARGINS.right,
    paddingBottom: PDF_PAGE_MARGINS.bottom,
    paddingLeft: PDF_PAGE_MARGINS.left,
    fontFamily: 'Times-Roman',
    fontSize: 10,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7c2d12',
  },
  name: {
    fontSize: 32,
    fontWeight: 700,
    color: '#7c2d12',
    marginBottom: 8,
    textAlign: 'center',
    fontFamily: 'Times-Bold',
  },
  title: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
    fontSize: 9,
    color: '#6b7280',
  },
  separator: {
    marginHorizontal: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: '#7c2d12',
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: 'Times-Bold',
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#374151',
    textAlign: 'center',
  },
  experienceItem: {
    marginBottom: 20,
  },
  experienceHeader: {
    alignItems: 'center',
    marginBottom: 6,
  },
  position: {
    fontSize: 11,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 2,
    textAlign: 'center',
    fontFamily: 'Times-Bold',
  },
  company: {
    fontSize: 10,
    color: '#7c2d12',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 4,
  },
  experienceDate: {
    fontSize: 9,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 6,
  },
  description: {
    fontSize: 9.5,
    lineHeight: 1.6,
    color: '#374151',
  },
  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillItem: {
    fontSize: 9.5,
    color: '#374151',
  },
  educationItem: {
    marginBottom: 12,
    alignItems: 'center',
  },
  educationDegree: {
    fontSize: 10,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 2,
    textAlign: 'center',
    fontFamily: 'Times-Bold',
  },
  educationField: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 2,
    textAlign: 'center',
  },
  educationSchool: {
    fontSize: 9.5,
    color: '#374151',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 4,
  },
  educationDate: {
    fontSize: 8.5,
    color: '#6b7280',
    textAlign: 'center',
  },
});

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month] = date.split("-");
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

interface Props {
  resumeData: ResumeData;
  themeColor?: string;
}

export const ClassicElegantPDF = ({ resumeData, themeColor = "#7c2d12" }: Props) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={[styles.header, { borderBottomColor: themeColor }]}>
          <Text style={[styles.name, { color: themeColor }]}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
          {hasContent(resumeData.personalInfo.title) && (
            <Text style={styles.title}>{resumeData.personalInfo.title}</Text>
          )}

          {/* Contact */}
          <View style={styles.contactContainer}>
            {hasContent(resumeData.personalInfo.email) && (
              <Text>{resumeData.personalInfo.email}</Text>
            )}
            {hasContent(resumeData.personalInfo.email) && hasContent(resumeData.personalInfo.phone) && (
              <Text style={styles.separator}>•</Text>
            )}
            {hasContent(resumeData.personalInfo.phone) && (
              <Text>{resumeData.personalInfo.phone}</Text>
            )}
            {hasContent(resumeData.personalInfo.phone) && hasContent(resumeData.personalInfo.location) && (
              <Text style={styles.separator}>•</Text>
            )}
            {hasContent(resumeData.personalInfo.location) && (
              <Text>{resumeData.personalInfo.location}</Text>
            )}
          </View>
        </View>

        {/* Summary */}
        {hasContent(resumeData.personalInfo.summary) && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: themeColor }]}>Professional Profile</Text>
            <Text style={styles.summary}>{resumeData.personalInfo.summary}</Text>
          </View>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: themeColor }]}>Professional Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.position}>{exp.position || "Position Title"}</Text>
                  <Text style={[styles.company, { color: themeColor }]}>{exp.company || "Company Name"}</Text>
                  <Text style={styles.experienceDate}>
                    {formatDate(exp.startDate)} – {exp.current ? "Present" : formatDate(exp.endDate)}
                  </Text>
                </View>
                {hasContent(exp.description) && <Text style={styles.description}>{exp.description}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: themeColor }]}>Areas of Expertise</Text>
            <View style={styles.skillsContainer}>
              {resumeData.skills.map((skill) => (
                hasContent(skill.name) ? (
                  <Text key={skill.id} style={styles.skillItem}>{skill.name}</Text>
                ) : null
              ))}
            </View>
          </View>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: themeColor }]}>Education</Text>
            {resumeData.education.map((edu) => (
              <View key={edu.id} style={styles.educationItem}>
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                {hasContent(edu.field) && <Text style={styles.educationField}>{edu.field}</Text>}
                <Text style={styles.educationSchool}>{edu.school}</Text>
                <Text style={styles.educationDate}>
                  {formatDate(edu.startDate)} – {formatDate(edu.endDate)}
                </Text>
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
      </Page>
    </Document>
  );
};
