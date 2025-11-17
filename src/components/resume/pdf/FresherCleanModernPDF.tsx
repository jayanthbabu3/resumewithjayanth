import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import type { ResumeData } from "@/pages/Editor";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const createStyles = (themeColor: string) => StyleSheet.create({
  page: {
    paddingTop: PDF_PAGE_MARGINS.top,
    paddingRight: PDF_PAGE_MARGINS.right,
    paddingBottom: PDF_PAGE_MARGINS.bottom,
    paddingLeft: PDF_PAGE_MARGINS.left,
    fontSize: 10,
    fontFamily: 'Inter',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: themeColor,
  },
  photo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 3,
    borderColor: themeColor,
  },
  name: {
    fontSize: 38,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 5,
  },
  title: {
    fontSize: 15,
    color: '#4b5563',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    fontSize: 12.5,
    color: '#4b5563',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  skillPill: {
    backgroundColor: themeColor,
    color: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
    fontSize: 12.5,
    fontWeight: 500,
    marginRight: 8,
    marginBottom: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 18,
  },
  eduBox: {
    backgroundColor: `${themeColor}15`,
    padding: 12,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: themeColor,
    marginBottom: 12,
  },
  eduDegree: {
    fontSize: 14,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 2,
  },
  eduField: {
    fontSize: 13,
    fontWeight: 600,
    color: themeColor,
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    lineHeight: 1.8,
    color: '#374151',
  },
  sectionMargin: {
    marginBottom: 18,
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

export const FresherCleanModernPDF = ({ resumeData, themeColor = "#6366f1" }: Props) => {
  const styles = createStyles(themeColor);
  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {photo && <Image src={photo} style={styles.photo} />}
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
            <Text style={styles.sectionTitle}>Career Objective</Text>
            <Text style={styles.description}>{resumeData.personalInfo.summary}</Text>
          </View>
        )}

        {resumeData.skills.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            <View style={styles.skillsContainer}>
              {resumeData.skills.map((skill) => (
                hasContent(skill.name) && (
                  <Text key={skill.id} style={styles.skillPill}>{skill.name}</Text>
                )
              ))}
            </View>
          </View>
        )}

        {resumeData.education.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resumeData.education.map((edu) => (
              <View key={edu.id} style={styles.eduBox}>
                <Text style={styles.eduDegree}>{edu.degree}</Text>
                {edu.field && <Text style={styles.eduField}>{edu.field}</Text>}
                <Text style={styles.description}>{edu.school}</Text>
                <Text style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </Text>
              </View>
            ))}
          </View>
        )}

        {resumeData.sections.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Academic Projects</Text>
            {resumeData.sections.map((section) => (
              hasContent(section.content) && (
                <View key={section.id} style={styles.eduBox}>
                  <Text style={styles.eduField}>{section.title}</Text>
                  <Text style={styles.description}>{section.content}</Text>
                </View>
              )
            ))}
          </View>
        )}

        {resumeData.experience.length > 0 && (
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Internship Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={styles.eduBox}>
                <Text style={styles.eduDegree}>{exp.position || "Position"}</Text>
                <Text style={styles.eduField}>{exp.company || "Company"}</Text>
                <Text style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>
                  {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                </Text>
                {hasContent(exp.description) && (
                  <Text style={styles.description}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};
