import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#1E3A8A',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#2DD4BF',
          },
          background: {
            default: mode === 'dark' ? '#0B1120' : '#F8FAFC',
            paper: mode === 'dark' ? '#111827' : '#ffffff',
          },
          text: {
            primary: mode === 'dark' ? '#F8FAFC' : '#0F172A',
            secondary: mode === 'dark' ? '#CBD5E1' : '#475569',
          },
          divider: mode === 'dark' ? 'rgba(148, 163, 184, 0.18)' : 'rgba(15, 23, 42, 0.08)',
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
        <Box sx={{ flexGrow: 1, overflow: 'hidden', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {renderActivePage()}
            </motion.div>
          </AnimatePresence>
        </Box>
        <Footer setActiveTab={setActiveTab} />
      </Box>
    </ThemeProvider>
  );
}
