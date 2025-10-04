import { Font } from '@react-pdf/renderer';

// Register fonts for PDF generation
export const registerPDFFonts = () => {
  // Register Inter font family (modern, professional)
  Font.register({
    family: 'Inter',
    fonts: [
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
        fontWeight: 400,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2',
        fontWeight: 600,
      },
      {
        src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2',
        fontWeight: 700,
      },
    ],
  });

  // Register Roboto font family (clean, readable)
  Font.register({
    family: 'Roboto',
    fonts: [
      {
        src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf',
        fontWeight: 300,
      },
      {
        src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf',
        fontWeight: 400,
      },
      {
        src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc9.ttf',
        fontWeight: 700,
      },
    ],
  });

  // Register Lato font family (elegant, professional)
  Font.register({
    family: 'Lato',
    fonts: [
      {
        src: 'https://fonts.gstatic.com/s/lato/v24/S6u8w4BMUTPHh30AUi-qJCY.ttf',
        fontWeight: 300,
      },
      {
        src: 'https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wWw.ttf',
        fontWeight: 400,
      },
      {
        src: 'https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPHA.ttf',
        fontWeight: 700,
      },
    ],
  });

  // Register Montserrat font family (modern, geometric)
  Font.register({
    family: 'Montserrat',
    fonts: [
      {
        src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wdhyzbi.ttf',
        fontWeight: 300,
      },
      {
        src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wlhyw.ttf',
        fontWeight: 400,
      },
      {
        src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459Wdhyzbi.ttf',
        fontWeight: 600,
      },
      {
        src: 'https://fonts.gstatic.com/s/montserrat/v25/JTUSjIg1_i6t8kCHKm459WRhyzbi.ttf',
        fontWeight: 700,
      },
    ],
  });
};
