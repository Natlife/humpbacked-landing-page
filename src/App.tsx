import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Knowledge from './pages/Knowledge';
import Quiz from './pages/Quiz';
import Challenges from './pages/Challenges';
import About from './pages/About';




















export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('postura_theme_mode');
    return saved === 'light' ? 'light' : 'dark'; 
  });

  useEffect(() => {
    localStorage.setItem('postura_theme_mode', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#ffffff' : '#111111',
            contrastText: mode === 'dark' ? '#111111' : '#ffffff',
          },
          secondary: {
            main: '#6366F1', 
          },
          background: {
            default: mode === 'dark' ? '#121212' : '#f9fafb',
            paper: mode === 'dark' ? '#1a1a1a' : '#ffffff',
          },
          text: {
            primary: mode === 'dark' ? '#f3f4f6' : '#111111',
            secondary: mode === 'dark' ? '#9ca3af' : '#4b5563',
          },
          divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
        },
        typography: {
          fontFamily: "'Inter', sans-serif",
          h1: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
          h2: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
          h3: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
          h4: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
          h5: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
          h6: { fontFamily: "'Plus Jakarta Sans', sans-serif" },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 8,
              },
            },
          },
        },
      }),
    [mode]
  );

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'knowledge':
        return <Knowledge />;
      case 'quiz':
        return <Quiz />;
      case 'challenges':
        return <Challenges />;
      case 'about':
        return <About />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} mode={mode} toggleTheme={toggleTheme} />
        <Box sx={{ flexGrow: 1 }}>{renderActivePage()}</Box>
        <Footer setActiveTab={setActiveTab} />
      </Box>
    </ThemeProvider>
  );
}
