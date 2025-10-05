import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';
import type { ResumeData } from '@/pages/Editor';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontFamily: 'Inter',
    fontSize: 10,
    color: '#0f172a',
    backgroundColor: '#ffffff',
  },
  sidebar: {
    width: '34%',
    backgroundColor: '#f3f4f6',
    paddingVertical: 28,
    paddingHorizontal: 20,
    color: '#0f172a',
    borderRightWidth: 1,
    borderRightColor: '#e2e8f0',
  },
  photoPlaceholder: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    fontSize: 20,
    fontWeight: 700,
    color: '#475569',
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 4,
  },
  title: {
    fontSize: 9,
    letterSpacing: 1.8,
    textTransform: 'uppercase',
    color: '#475569',
    marginBottom: 16,
  },
  contactItem: {
    fontSize: 9,
    color: '#475569',
    marginBottom: 4,
  },
  sectionHeader: {
    fontSize: 9,
    fontWeight: 700,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    marginBottom: 10,
    color: '#0f172a',
  },
  summary: {
    fontSize: 9,
    color: '#334155',
    lineHeight: 1.4,
    marginBottom: 12,
  },
  skillRow: {
    marginBottom: 10,
  },
  skillLabel: {
    fontSize: 8,
    color: '#475569',
    marginBottom: 4,
  },
  skillTrack: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e2e8f0',
    overflow: 'hidden',
  },
  skillFill: {
    height: '100%',
    borderRadius: 3,
    backgroundColor: '#ec4899',
  },
  highlight: {
    fontSize: 8,
    color: '#475569',
    marginBottom: 5,
    lineHeight: 1.4,
  },
  main: {
    width: '66%',
    backgroundColor: '#ffffff',
    paddingVertical: 32,
    paddingHorizontal: 30,
    color: '#0f172a',
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 12,
    color: '#ec4899',
  },
  timelineItem: {
    marginBottom: 14,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#ec4899',
    borderLeftStyle: 'solid',
  },
  position: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 2,
  },
  company: {
    fontSize: 10,
    fontWeight: 600,
    color: '#475569',
    marginBottom: 3,
  },
  date: {
    fontSize: 8,
    color: '#64748b',
    marginBottom: 6,
  },
  description: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#1f2937',
  },
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  chip: {
    fontSize: 8,
    color: '#0f172a',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderStyle: 'solid',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#f8fafc',
  },
});

const formatDate = (date: string) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
};

interface Props {
  resumeData: ResumeData;
  themeColor?: string;
}

export const SeniorFrontendPDF = ({ resumeData, themeColor = '#ec4899' }: Props) => {
  const photo = resumeData.personalInfo.photo;
  const initials = (resumeData.personalInfo.fullName || '')
    .split(' ')
    .filter(Boolean)
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const skillLevels = resumeData.skills.slice(0, 6).map((skill, index) => ({
    skill,
    level: Math.max(50, 95 - index * 7),
  }));

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
          {photo ? (
            <View style={styles.photoPlaceholder}>
              <Image src={photo} style={{ width: 90, height: 90, borderRadius: 45 }} />
            </View>
          ) : (
            <View style={styles.photoPlaceholder}>
              <Text>{initials || 'SE'}</Text>
            </View>
          )}

          <Text style={styles.name}>{resumeData.personalInfo.fullName || 'Your Name'}</Text>
          <Text style={styles.title}>{resumeData.personalInfo.title || 'Senior Frontend Engineer'}</Text>

          {resumeData.personalInfo.email && (
            <Text style={styles.contactItem}>{resumeData.personalInfo.email}</Text>
          )}
          {resumeData.personalInfo.phone && (
            <Text style={styles.contactItem}>{resumeData.personalInfo.phone}</Text>
          )}
          {resumeData.personalInfo.location && (
            <Text style={styles.contactItem}>{resumeData.personalInfo.location}</Text>
          )}

          {resumeData.personalInfo.summary && (
            <View style={{ marginTop: 18 }}>
              <Text style={styles.sectionHeader}>Summary</Text>
              <Text style={styles.summary}>{resumeData.personalInfo.summary}</Text>
            </View>
          )}

          <View style={{ marginTop: 12 }}>
            <Text style={styles.sectionHeader}>Core Skills</Text>
            {skillLevels.map(({ skill, level }) => (
              <View key={skill} style={styles.skillRow}>
                <Text style={styles.skillLabel}>{skill} · {level}%</Text>
                <View style={styles.skillTrack}>
                  <View style={[styles.skillFill, { width: `${level}%`, backgroundColor: themeColor }]} />
                </View>
              </View>
            ))}
          </View>

          {resumeData.sections.slice(0, 2).map(section => (
            <View key={section.id} style={{ marginTop: 14 }}>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              <Text style={styles.highlight}>{section.content}</Text>
            </View>
          ))}
        </View>

        <View style={styles.main}>
          {resumeData.experience.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
              {resumeData.experience.map(exp => (
                <View key={exp.id} style={styles.timelineItem} wrap={false}>
                  <Text style={styles.position}>{exp.position || 'Role'}</Text>
                  <Text style={styles.company}>{exp.company || 'Company'}</Text>
                  <Text style={styles.date}>
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </Text>
                  {exp.description && <Text style={styles.description}>{exp.description}</Text>}
                </View>
              ))}
            </View>
          )}

          {resumeData.skills.length > 6 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Toolbox</Text>
              <View style={styles.chipGroup}>
                {resumeData.skills.slice(6).map(skill => (
                  <Text key={skill} style={styles.chip}>{skill}</Text>
                ))}
              </View>
            </View>
          )}

          {resumeData.education.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resumeData.education.map(edu => (
                <View key={edu.id} style={{ marginBottom: 10 }}>
                  <Text style={styles.position}>{edu.degree || 'Degree'}</Text>
                  {edu.field && <Text style={styles.company}>{edu.field}</Text>}
                  <Text style={styles.company}>{edu.school || 'School'}</Text>
                  <Text style={styles.date}>
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
