import { Document, Page, View, Text, StyleSheet, Svg, Path, Image } from '@react-pdf/renderer';
import type { ResumeData } from '@/pages/Editor';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#111827',
  },
  leftColumn: {
    width: '62%',
    paddingVertical: 42,
    paddingHorizontal: 40,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    borderBottomStyle: 'solid',
    marginBottom: 22,
  },
  name: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    fontSize: 9,
    color: '#4b5563',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 10,
    color: '#0f172a',
  },
  summary: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.5,
  },
  experienceItem: {
    marginBottom: 16,
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftStyle: 'solid',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  position: {
    fontSize: 11,
    fontWeight: 700,
    color: '#111827',
  },
  company: {
    fontSize: 10,
    fontWeight: 600,
    color: '#334155',
    marginBottom: 4,
  },
  dateRange: {
    fontSize: 8,
    fontWeight: 600,
    color: '#6b7280',
  },
  experienceDescription: {
    fontSize: 9,
    color: '#4b5563',
    lineHeight: 1.5,
  },
  educationItem: {
    marginBottom: 14,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftStyle: 'dashed',
    borderLeftColor: '#cbd5f5',
  },
  educationTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#1f2937',
  },
  educationField: {
    fontSize: 9,
    color: '#4b5563',
  },
  educationSchool: {
    fontSize: 9,
    color: '#1f2937',
    fontWeight: 600,
  },
  educationDates: {
    fontSize: 8,
    color: '#6b7280',
    marginTop: 2,
  },
  rightColumn: {
    width: '38%',
    paddingVertical: 42,
    paddingHorizontal: 32,
    color: '#f8fafc',
  },
  avatar: {
    height: 72,
    width: 72,
    borderRadius: 36,
    backgroundColor: '#ffffff22',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatarInitials: {
    fontSize: 20,
    fontWeight: 700,
    color: '#ffffff',
  },
  sidebarBlurb: {
    fontSize: 8,
    color: '#f8fafc',
    textAlign: 'center',
    lineHeight: 1.4,
  },
  photoWrapper: {
    width: 72,
    height: 72,
    borderRadius: 36,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#ffffff55',
    marginBottom: 10,
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  sidebarSection: {
    marginTop: 24,
  },
  sidebarTitle: {
    fontSize: 9,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1.6,
    marginBottom: 10,
  },
  sidebarContent: {
    fontSize: 9,
    lineHeight: 1.5,
    color: '#f8fafc',
  },
  skillChipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillChip: {
    fontSize: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffffff44',
    backgroundColor: '#ffffff11',
  },
});

const formatDate = (date: string): string => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const renderContactIcon = (icon: 'phone' | 'mail' | 'location', color: string) => {
  switch (icon) {
    case 'phone':
      return (
        <Svg width="10" height="10" viewBox="0 0 24 24">
          <Path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
        </Svg>
      );
    case 'mail':
      return (
        <Svg width="10" height="10" viewBox="0 0 24 24">
          <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke={color} strokeWidth="2" />
          <Path d="m22 6-10 7L2 6" fill="none" stroke={color} strokeWidth="2" />
        </Svg>
      );
    default:
      return (
        <Svg width="10" height="10" viewBox="0 0 24 24">
          <Path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" fill="none" stroke={color} strokeWidth="2" />
          <Path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="none" stroke={color} strokeWidth="2" />
        </Svg>
      );
  }
};

interface Props {
  resumeData: ResumeData;
  themeColor?: string;
}

export const SeniorPDF = ({ resumeData, themeColor = '#0f766e' }: Props) => {
  const initials = (resumeData.personalInfo.fullName || '')
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const sidebarBackground = themeColor;
  const accentBorder = `${themeColor}55`;
  const photo = resumeData.personalInfo.photo;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.leftColumn}>
          <View style={styles.header}>
            <Text style={styles.name}>{resumeData.personalInfo.fullName || 'Your Name'}</Text>
            <Text style={[styles.title, { color: themeColor }]}>{resumeData.personalInfo.title || 'Senior Software Engineer'}</Text>
            <View style={styles.contactRow}>
              {resumeData.personalInfo.phone && (
                <View style={styles.contactItem}>
                  {renderContactIcon('phone', '#4b5563')}
                  <Text>{resumeData.personalInfo.phone}</Text>
                </View>
              )}
              {resumeData.personalInfo.email && (
                <View style={styles.contactItem}>
                  {renderContactIcon('mail', '#4b5563')}
                  <Text>{resumeData.personalInfo.email}</Text>
                </View>
              )}
              {resumeData.personalInfo.location && (
                <View style={styles.contactItem}>
                  {renderContactIcon('location', '#4b5563')}
                  <Text>{resumeData.personalInfo.location}</Text>
                </View>
              )}
            </View>
          </View>

          {resumeData.personalInfo.summary && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Summary</Text>
              <Text style={styles.summary}>{resumeData.personalInfo.summary}</Text>
            </View>
          )}

          {resumeData.experience.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Professional Experience</Text>
              {resumeData.experience.map((exp) => (
                <View key={exp.id} style={[styles.experienceItem, { borderLeftColor: accentBorder }]}> 
                  <View style={styles.experienceHeader}>
                    <View>
                      <Text style={styles.position}>{exp.position || 'Role'}</Text>
                      <Text style={styles.company}>{exp.company || 'Company'}</Text>
                    </View>
                    <Text style={styles.dateRange}>
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </Text>
                  </View>
                  {exp.description && (
                    <Text style={styles.experienceDescription}>{exp.description}</Text>
                  )}
                </View>
              ))}
            </View>
          )}

          {resumeData.education.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resumeData.education.map((edu) => (
                <View key={edu.id} style={[styles.educationItem, { borderLeftColor: accentBorder }]}> 
                  <Text style={styles.educationTitle}>{edu.degree || 'Degree'}</Text>
                  {edu.field ? <Text style={styles.educationField}>{edu.field}</Text> : null}
                  <Text style={styles.educationSchool}>{edu.school || 'School'}</Text>
                  <Text style={styles.educationDates}>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        <View style={[styles.rightColumn, { backgroundColor: sidebarBackground }]}>
          <View style={{ alignItems: 'center', marginBottom: 16 }}>
            {photo ? (
              <View style={styles.photoWrapper}>
                <Image src={photo} style={styles.photo} />
              </View>
            ) : (
              <View style={styles.avatar}>
                <Text style={styles.avatarInitials}>{initials || 'SE'}</Text>
              </View>
            )}
            <Text style={styles.sidebarBlurb}>
              Driving technical excellence and shipping impactful products.
            </Text>
          </View>

          {resumeData.sections.length > 0 && (
            <View>
              {resumeData.sections.map((section) => (
                <View key={section.id} style={styles.sidebarSection}>
                  <Text style={styles.sidebarTitle}>{section.title}</Text>
                  <Text style={styles.sidebarContent}>{section.content}</Text>
                </View>
              ))}
            </View>
          )}

          {resumeData.skills.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarTitle}>Skills & Tools</Text>
              <View style={styles.skillChipContainer}>
                {resumeData.skills.map((skill, index) => (
                  <Text key={`${skill}-${index}`} style={styles.skillChip}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
