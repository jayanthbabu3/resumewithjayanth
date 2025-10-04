import { Font } from '@react-pdf/renderer';

// Register fonts for PDF generation
export const registerPDFFonts = () => {
  // react-pdf comes with built-in fonts that are guaranteed to work:
  // Helvetica, Helvetica-Bold, Helvetica-Oblique, Helvetica-BoldOblique
  // Times-Roman, Times-Bold, Times-Italic, Times-BoldItalic
  // Courier, Courier-Bold, Courier-Oblique, Courier-BoldOblique
  
  // These built-in fonts are reliable and render correctly
  // We'll use different fonts for different templates for variety
  
  Font.registerHyphenationCallback((word) => {
    return [word];
  });
};
