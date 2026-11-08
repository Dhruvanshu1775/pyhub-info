import './App.css';

// src/App.js (Example)
import { ThemeProvider } from '@mui/material/styles';
import customTheme from './theme';
import LandingPage from '../src/components/frontendPage'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
