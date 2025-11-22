import { Document, Page, Text, View, StyleSheet } from '@/lib/pdfRenderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: {
    paddingTop: PDF_PAGE_MARGINS.top,
    paddingRight: PDF_PAGE_MARGINS.right,
    paddingBottom: PDF_PAGE_MARGINS.bottom,
    paddingLeft: PDF_PAGE_MARGINS.left,
    fontFamily: 'Inter',
    fontSize: 10,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 6,
    textAlign: 'center',
  },
  title: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 12,
    textAlign: 'center',
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
    color: '#9ca3af',
    marginHorizontal: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#d1d5db',
    marginVertical: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.6,
    color: '#374151',
  },
  experienceItem: {
    marginBottom: 16,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
    gap: 10,
  },
  position: {
    fontSize: 11,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 2,
  },
  company: {
    fontSize: 10,
    color: '#374151',
  },
  experienceDate: {
    fontSize: 9,
    color: '#6b7280',
  },
  description: {
    fontSize: 9.5,
    lineHeight: 1.6,
    color: '#374151',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    fontSize: 9.5,
    color: '#374151',
  },
  educationItem: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  educationContent: {
    flex: 1,
  },
  educationDegree: {
    fontSize: 10,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 2,
  },
  educationField: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 2,
  },
  educationSchool: {
    fontSize: 9.5,
    color: '#374151',
  },
  educationDate: {
    fontSize: 9,
    color: '#6b7280',
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

export const ProfessionalClassicPDF = ({ resumeData, themeColor = "#374151" }: Props) => {
  const styles = createStyles(themeColor);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
          {hasContent(resumeData.personalInfo.title) && <Text style={styles.title}>{resumeData.personalInfo.title}</Text>}
          <View style={styles.contactContainer}>
            {hasContent(resumeData.personalInfo.email) && <Text>{resumeData.personalInfo.email}</Text>}
            {hasContent(resumeData.personalInfo.email) && hasContent(resumeData.personalInfo.phone) && (
              <Text style={styles.separator}>|</Text>
            )}
            {hasContent(resumeData.personalInfo.phone) && <Text>{resumeData.personalInfo.phone}</Text>}
            {hasContent(resumeData.personalInfo.phone) && hasContent(resumeData.personalInfo.location) && (
              <Text style={styles.separator}>|</Text>
            )}
            {hasContent(resumeData.personalInfo.location) && <Text>{resumeData.personalInfo.location}</Text>}
          </View>
        </View>

        <View style={styles.divider} />

        {hasContent(resumeData.personalInfo.summary) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.summary}>{resumeData.personalInfo.summary}</Text>
          </View>
        )}

        {resumeData.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.position}>{exp.position || "Position Title"}</Text>
                    <Text style={styles.company}>{exp.company || "Company Name"}</Text>
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

        {resumeData.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              {resumeData.skills.map((skill, index) => (
                hasContent(skill.name) ? (
                  <Text key={skill.id} style={styles.skillItem}>
                    {skill.name}{index < resumeData.skills.length - 1 ? ", " : ""}
                  </Text>
                ) : null
              ))}
            </View>
          </View>
        )}

        {resumeData.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.map((edu) => (
              <View key={edu.id} style={styles.educationItem}>
                <View style={styles.educationContent}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  {hasContent(edu.field) && <Text style={styles.educationField}>{edu.field}</Text>}
                  <Text style={styles.educationSchool}>{edu.school}</Text>
                </View>
                <Text style={styles.educationDate}>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.sections.map((section) => (
          hasContent(section.title) && hasContent(section.content) && (
            <View key={section.id} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.summary}>{section.content}</Text>
            </View>
          )
        ))}
      </Page>
    </Document>
  );
};
