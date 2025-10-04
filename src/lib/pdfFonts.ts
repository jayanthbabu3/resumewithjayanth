import { Font } from '@react-pdf/renderer';

// Register hyphenation callback for better text wrapping
export const registerPDFFonts = () => {
  // Use built-in fonts which are more reliable
  // Available: Helvetica, Helvetica-Bold, Helvetica-Oblique, Helvetica-BoldOblique
  // Times-Roman, Times-Bold, Times-Italic, Times-BoldItalic
  // Courier, Courier-Bold, Courier-Oblique, Courier-BoldOblique
  
  Font.registerHyphenationCallback((word) => {
    // Prevent breaking of words
    if (word.length > 12) {
      return [word];
    }
    return [word];
  });
};
