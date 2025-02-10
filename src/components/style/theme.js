import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F98C22', // Blue color
    },
    secondary: {
      main: '#f5f5f5', // Red color
    },
    text: {
      primary: '#333333', // black color
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Use Poppins as default
  },
});

export default theme;
