import { Font } from '@react-pdf/renderer';

// Register fonts for PDF generation using direct TTF files
export const registerPDFFonts = () => {
  // Register Inter font family from Fontsource CDN (reliable TTF files)
  Font.register({
    family: 'Inter',
    fonts: [
      {
        src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/inter-latin-300-normal.woff',
        fontWeight: 300,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/inter-latin-400-normal.woff',
        fontWeight: 400,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/inter-latin-600-normal.woff',
        fontWeight: 600,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/inter-latin-700-normal.woff',
        fontWeight: 700,
      },
    ],
  });

  // Register Roboto font family from Fontsource CDN
  Font.register({
    family: 'Roboto',
    fonts: [
      {
        src: 'https://cdn.jsdelivr.net/npm/@fontsource/roboto@5.0.12/files/roboto-latin-300-normal.woff',
        fontWeight: 300,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@fontsource/roboto@5.0.12/files/roboto-latin-400-normal.woff',
        fontWeight: 400,
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/@fontsource/roboto@5.0.12/files/roboto-latin-700-normal.woff',
        fontWeight: 700,
      },
    ],
  });

  Font.registerHyphenationCallback((word) => {
    return [word];
  });
};
