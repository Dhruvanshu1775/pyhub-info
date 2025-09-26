// src/theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    // Set Open Sans as the global base font
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    
    // Apply Poppins specifically to the main heading (H1, H2)
    h1: {
      fontFamily: '"Poppins", "Open Sans", sans-serif',
      fontWeight: 700, // Extra bold for headline
    },
    h2: {
      fontFamily: '"Poppins", "Open Sans", sans-serif',
      fontWeight: 700, // Used for the Hero Headline
    },
    h6: {
      // Used for navigation and logo text
      fontFamily: '"Poppins", "Open Sans", sans-serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: '"Poppins", "Open Sans", sans-serif',
      fontWeight: 600, // Ensure the CTA button is bold
      textTransform: 'none', // Prevent MUI from making button text all caps
    }
    // All other variants (like h5, body1, body2) will inherit Open Sans
  },
});

// Optional: Makes font sizes scale responsively across screen sizes
theme = responsiveFontSizes(theme);

export default theme;