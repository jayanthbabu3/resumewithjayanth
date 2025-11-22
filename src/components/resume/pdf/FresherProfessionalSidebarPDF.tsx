import { Document, Page, Text, View, StyleSheet, Image } from '@/lib/pdfRenderer';
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
  leftSidebar: {
    width: '30%',
    backgroundColor: themeColor,
    padding: 20,
  },
  rightContent: {
    width: '70%',
    padding: 20,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  sidebarTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
    paddingBottom: 6,
  },
  sidebarText: {
    fontSize: 12.5,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 8,
  },
  name: {
    fontSize: 40,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 15,
    fontWeight: 500,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: themeColor,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    borderBottomWidth: 2,
    borderBottomColor: themeColor,
    paddingBottom: 6,
  },
  eduBox: {
    backgroundColor: `${themeColor}15`,
    padding: 12,
    borderRadius: 6,
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
  eduSchool: {
    fontSize: 12.5,
    color: '#374151',
    marginBottom: 2,
  },
  eduDate: {
    fontSize: 12,
    color: '#6b7280',
  },
  description: {
    fontSize: 13,
    lineHeight: 1.7,
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

export const FresherProfessionalSidebarPDF = ({ resumeData, themeColor = "#059669" }: Props) => {
  const styles = createStyles(themeColor);
  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Left Sidebar */}
        <View style={styles.leftSidebar}>
          {photo && <Image src={photo} style={styles.photo} />}

          <View style={styles.sectionMargin}>
            <Text style={styles.sidebarTitle}>Contact</Text>
            {resumeData.personalInfo.email && (
              <Text style={styles.sidebarText}>{resumeData.personalInfo.email}</Text>
            )}
            {resumeData.personalInfo.phone && (
              <Text style={styles.sidebarText}>{resumeData.personalInfo.phone}</Text>
            )}
            {resumeData.personalInfo.location && (
              <Text style={styles.sidebarText}>{resumeData.personalInfo.location}</Text>
            )}
          </View>

          {resumeData.skills.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sidebarTitle}>Skills</Text>
              {resumeData.skills.map((skill) => (
                hasContent(skill.name) && (
                  <Text key={skill.id} style={styles.sidebarText}>{skill.name}</Text>
                )
              ))}
            </View>
          )}
        </View>

        {/* Right Content */}
        <View style={styles.rightContent}>
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

          {resumeData.education.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resumeData.education.map((edu) => (
                <View key={edu.id} style={styles.eduBox}>
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

          {resumeData.sections.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Projects</Text>
              {resumeData.sections.map((section) => (
                hasContent(section.content) && (
                  <View key={section.id} style={{ marginBottom: 10 }}>
                    <Text style={styles.description}>{section.content}</Text>
                  </View>
                )
              ))}
            </View>
          )}

          {resumeData.experience.length > 0 && (
            <View style={styles.sectionMargin}>
              <Text style={styles.sectionTitle}>Internships</Text>
              {resumeData.experience.map((exp) => (
                <View key={exp.id} style={{ marginBottom: 12 }}>
                  <Text style={styles.eduDegree}>{exp.position || "Position"}</Text>
                  <Text style={styles.eduField}>{exp.company || "Company"}</Text>
                  <Text style={styles.eduDate}>
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
