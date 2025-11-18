import { Document, Page, Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';
import type { ResumeData } from "@/pages/Editor";
import type { ResumeSection } from "@/types/resume";
import { PDF_PAGE_MARGINS, hasContent } from "@/lib/pdfConfig";

const styles = StyleSheet.create({
  page: {
    paddingTop: PDF_PAGE_MARGINS.top,
    paddingRight: PDF_PAGE_MARGINS.right,
    paddingBottom: PDF_PAGE_MARGINS.bottom,
    paddingLeft: PDF_PAGE_MARGINS.left,
    fontSize: 10,
    fontFamily: 'Inter',
  },
  accentBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#000',
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 15,
  },
  name: {
    fontSize: 26,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    marginBottom: 12,
    color: '#4b5563',
    fontWeight: 300,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    fontSize: 9,
    color: '#374151',
    marginTop: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  socialRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    fontSize: 9,
    marginTop: 6,
  },
  socialLink: {
    color: '#2563eb',
    fontWeight: 600,
  },
  photoWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#000',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  summaryBox: {
    marginBottom: 20,
    padding: 12,
    backgroundColor: '#f9fafb',
    borderLeftWidth: 3,
    borderLeftColor: '#000',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 13,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  experienceItem: {
    marginBottom: 16,
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftColor: '#000',
  },
  jobTitle: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 3,
  },
  company: {
    fontSize: 11,
    fontFamily: 'Inter',
    fontWeight: 600,
    color: '#111827',
    marginBottom: 3,
  },
  date: {
    fontSize: 9,
    color: '#6b7280',
    marginBottom: 6,
  },
  description: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#374151',
  },
  educationItem: {
    marginBottom: 12,
  },
  degree: {
    fontSize: 11,
    fontFamily: 'Inter',
    fontWeight: 700,
    marginBottom: 3,
  },
  school: {
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: 600,
    marginBottom: 2,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#000',
    fontSize: 9,
    fontWeight: 600,
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

export const LegalConsultantPDF = ({ resumeData, themeColor }: Props) => {
  const photo = resumeData.personalInfo.photo;
  const personalInfoWithSocials = resumeData.personalInfo as any;

  const renderDynamicSection = (section: ResumeSection) => {
    if (!section.enabled) return null;
    const sectionData = section.data;

    switch (sectionData.type) {
      case 'certifications':
        return sectionData.items.length > 0 ? (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {sectionData.items.map((cert) => (
              <View key={cert.id} style={styles.educationItem}>
                <Text style={styles.degree}>{cert.name}</Text>
                <Text style={styles.company}>{cert.issuer}</Text>
                <Text style={styles.date}>{formatDate(cert.date)}</Text>
              </View>
            ))}
          </View>
        ) : null;

      case 'languages':
        return sectionData.items.length > 0 ? (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.skillsContainer}>
              {sectionData.items.map((lang) => (
                <Text key={lang.id} style={styles.description}>
                  {lang.language} - {lang.proficiency} •
                </Text>
              ))}
            </View>
          </View>
        ) : null;

      case 'projects':
        return sectionData.items.length > 0 ? (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {sectionData.items.map((project) => (
              <View key={project.id} style={styles.experienceItem}>
                <Text style={styles.jobTitle}>{project.name}</Text>
                {project.description && (
                  <Text style={styles.description}>{project.description}</Text>
                )}
              </View>
            ))}
          </View>
        ) : null;

      case 'custom':
        return hasContent(sectionData.content) ? (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.description}>{sectionData.content}</Text>
          </View>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Accent Bar */}
        <View style={styles.accentBar} />

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{resumeData.personalInfo.fullName || "Your Name"}</Text>
              {resumeData.personalInfo.title && (
                <Text style={styles.title}>{resumeData.personalInfo.title}</Text>
              )}

              {/* Contact */}
              <View style={styles.contactRow}>
                {resumeData.personalInfo.email && (
                  <Text style={styles.contactItem}>✉ {resumeData.personalInfo.email}</Text>
                )}
                {resumeData.personalInfo.phone && (
                  <Text style={styles.contactItem}>☎ {resumeData.personalInfo.phone}</Text>
                )}
                {resumeData.personalInfo.location && (
                  <Text style={styles.contactItem}>📍 {resumeData.personalInfo.location}</Text>
                )}
              </View>

              {/* Social Links */}
              <View style={styles.socialRow}>
                {personalInfoWithSocials.linkedin && (
                  <Link src={personalInfoWithSocials.linkedin} style={styles.socialLink}>
                    <Text>LinkedIn</Text>
                  </Link>
                )}
                {personalInfoWithSocials.github && (
                  <Link src={personalInfoWithSocials.github} style={styles.socialLink}>
                    <Text>GitHub</Text>
                  </Link>
                )}
                {personalInfoWithSocials.website && (
                  <Link src={personalInfoWithSocials.website} style={styles.socialLink}>
                    <Text>Website</Text>
                  </Link>
                )}
              </View>
            </View>

            {photo ? (
              <View style={styles.photoWrapper}>
                <Image src={photo} style={styles.photo} />
              </View>
            ) : null}
          </View>
        </View>

        {/* Summary */}
        {hasContent(resumeData.personalInfo.summary) && (
          <View style={styles.summaryBox}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.description}>{resumeData.personalInfo.summary}</Text>
          </View>
        )}

        {/* Experience */}
        {resumeData.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {resumeData.experience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <Text style={styles.jobTitle}>{exp.position || "Position Title"}</Text>
                <Text style={styles.company}>{exp.company || "Company Name"}</Text>
                <Text style={styles.date}>
                  {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                </Text>
                {hasContent(exp.description) && <Text style={styles.description}>{exp.description}</Text>}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education & Credentials</Text>
            {resumeData.education.map((edu) => (
              <View key={edu.id} style={styles.educationItem}>
                <Text style={styles.degree}>
                  {edu.degree || "Degree"} {edu.field && `in ${edu.field}`}
                </Text>
                <Text style={styles.school}>{edu.school || "School Name"}</Text>
                <Text style={styles.date}>
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Core Skills & Competencies</Text>
            <View style={styles.skillsContainer}>
              {resumeData.skills.map((skill) => (
                hasContent(skill.name) && (
                  <Text key={skill.id} style={styles.skillBadge}>
                    {skill.name}
                  </Text>
                )
              ))}
            </View>
          </View>
        )}

        {/* Custom Sections */}
        {resumeData.sections.map((section) => (
          hasContent(section.title) && hasContent(section.content) && (
            <View key={section.id} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.description}>{section.content}</Text>
            </View>
          )
        ))}

        {/* Dynamic Sections */}
        {resumeData.dynamicSections && Array.isArray(resumeData.dynamicSections) && resumeData.dynamicSections.length > 0 && (
          <>
            {resumeData.dynamicSections
              .filter(section => section.enabled)
              .sort((a, b) => a.order - b.order)
              .map(section => renderDynamicSection(section))}
          </>
        )}
      </Page>
    </Document>
  );
};
