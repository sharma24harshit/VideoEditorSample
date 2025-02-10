import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './components/style/theme';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
      <CssBaseline />
    <App />
    </ThemeProvider>
)
