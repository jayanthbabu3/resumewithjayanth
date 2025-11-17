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
    flexDirection: 'row',
  },
  leftColumn: {
    width: '35%',
    backgroundColor: `${themeColor}15`,
    padding: 20,
  },
  rightColumn: {
    width: '65%',
    padding: 20,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 3,
    borderColor: themeColor,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  name: {
    fontSize: 38,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 15,
  },
  contactText: {
    fontSize: 12.5,
    color: '#374151',
    marginBottom: 6,
  },
  skillItem: {
    fontSize: 12.5,
    color: '#1f2937',
    marginBottom: 6,
    fontWeight: 500,
  },
  eduDegree: {
    fontSize: 13,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 2,
  },
  eduField: {
    fontSize: 12,
    color: '#4b5563',
    marginBottom: 2,
  },
  eduSchool: {
    fontSize: 12,
    color: '#374151',
    marginBottom: 2,
  },
  eduDate: {
    fontSize: 11,
    color: '#6b7280',
    marginTop: 2,
  },
  expPosition: {
    fontSize: 14,
    fontWeight: 700,
    color: '#111827',
    marginBottom: 2,
  },
  expCompany: {
    fontSize: 13,
    fontWeight: 600,
    color: themeColor,
    marginBottom: 4,
  },
  expDate: {
    fontSize: 12,
    color: '#4b5563',
  },
  description: {
    fontSize: 13,
    lineHeight: 1.7,
    color: '#374151',
  },
  sectionBox: {
    backgroundColor: `${themeColor}08`,
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  sectionMargin: {
    marginBottom: 15,
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

export const FresherModernTwoColumnPDF = ({ resumeData, themeColor = "#2563eb" }: Props) => {
  const styles = createStyles(themeColor);
  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left Sidebar */}
        <View style={styles.leftColumn}>
          {photo && <Image src={photo} style={styles.photo} />}

          {/* Contact */}
          <View style={styles.sectionMargin}>
            <Text style={styles.sectionTitle}>Contact</Text>
            {resumeData.personalInfo.email && (
              <Text style={styles.contactText}>{resumeData.personalInfo.email}</Text>
            )}
            {resumeData.personalInfo.phone && (
              <Text style={styles.contactText}>{resumeData.personalInfo.phone}</Text>
            )}
            {resumeData.personalInfo.location && (
              <Text style={styles.contactText}>{resumeData.personalInfo.location}</Text>
            )}
          </View>

          {/* Skills */}
          {resumeData.skills.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Skills</Text>
              {resumeData.skills.map((skill) => (
                hasContent(skill.name) && (
                  <Text key={skill.id} style={styles.skillItem}>{skill.name}</Text>
                )
              ))}
            </View>
          )}

          {/* Education */}
          {resumeData.education.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resumeData.education.map((edu) => (
                <View key={edu.id} style={{ marginBottom: 10 }}>
                  <Text style={styles.eduDegree}>{edu.degree}</Text>
                  {edu.field && <Text style={styles.eduField}>{edu.field}</Text>}
                  <Text style={styles.eduSchool}>{edu.school}</Text>
                  <Text style={styles.eduDate}>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Right Main Content */}
        <View style={styles.rightColumn}>
          {/* Header */}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
            <Text style={styles.title}>{resumeData.personalInfo.title || "Recent Graduate"}</Text>
          </View>

          {/* Summary */}
          {hasContent(resumeData.personalInfo.summary) && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Career Objective</Text>
              <Text style={styles.description}>{resumeData.personalInfo.summary}</Text>
            </View>
          )}

          {/* Projects */}
          {resumeData.sections.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Projects</Text>
              {resumeData.sections.map((section) => (
                hasContent(section.content) && (
                  <View key={section.id} style={styles.sectionBox}>
                    <Text style={styles.description}>{section.content}</Text>
                  </View>
                )
              ))}
            </View>
          )}

          {/* Experience */}
          {resumeData.experience.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Experience</Text>
              {resumeData.experience.map((exp) => (
                <View key={exp.id} style={styles.sectionBox}>
                  <Text style={styles.expPosition}>{exp.position || "Position"}</Text>
                  <Text style={styles.expCompany}>{exp.company || "Company"}</Text>
                  <Text style={styles.expDate}>
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </Text>
                  {hasContent(exp.description) && (
                    <Text style={styles.description}>{exp.description}</Text>
                  )}
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
