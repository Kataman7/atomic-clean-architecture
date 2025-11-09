export const portfolioTheme = {
  colors: {
    primary: '#ffffff',
    secondary: '#e1e1e1',
    accent: '#141414',
    background: '#000000',
    hovered: '#ffffff',
  },
  spacing: {
    small: '10px',
    medium: '15px',
    large: '20px',
    xl: '25px',
    xxl: '50px',
    section: '30px', // Espacement entre sections
  },
  fontSize: {
    small: '12px', // 9px pour h5, small pour p
    medium: '16px', // medium pour navBar li
    large: '18px', // large pour h4
    xl: '24px', // pour h2, h3
    xxl: '32px', // pour h1
  },
  border: {
    normal: '2px',
  },
  borderRadius: {
    normal: '0px',
  },
  boxShadow: {
    button: '2px 2px #000000, 4px 4px #ffffff',
    buttonHover: '0px 0px',
  },
  fontFamily: "'Chillax', 'Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', 'serif'",
};

export const lightTheme = {
  colors: {
    primary: '#000000',
    secondary: '#333333',
    accent: '#666666',
    background: '#ffffff',
    hovered: '#000000',
  },
  spacing: {
    small: '10px',
    medium: '15px',
    large: '20px',
    xl: '25px',
    xxl: '50px',
    section: '30px', // Espacement entre sections
  },
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '18px',
    xl: '24px',
    xxl: '32px',
  },
  border: {
    normal: '2px',
  },
  borderRadius: {
    normal: '0px',
  },
  boxShadow: {
    button: '2px 2px #ffffff, 4px 4px #000000',
    buttonHover: '0px 0px',
  },
  fontFamily: "'Chillax', 'Cambria', 'Cochin', 'Georgia', 'Times', 'Times New Roman', 'serif'",
};

export const themes = {
  portfolio: portfolioTheme,
  light: lightTheme,
};