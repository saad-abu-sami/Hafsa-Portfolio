import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';

import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import SettingsPanel from './components/SettingsPanel';
import VoiceNavigator from './components/VoiceNavigator';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SettingsProvider, useSettings } from './context/SettingsContext';

import { Routes, Route } from 'react-router-dom';
import Research from './sections/Research';
import ResearchDetail from './pages/ResearchDetail';
import Footprints from './sections/Footprints';
import FootprintsDetail from './pages/FootprintsDetail';

// Create a wrapper component to use the useSettings hook
const AppContent = () => {
   const { theme } = useSettings();

   const muiTheme = React.useMemo(() => createTheme({
      palette: {
         mode: theme === 'dark' || theme === 'neon' ? 'dark' : 'light',
         primary: {
            main: theme === 'vibrant' ? '#FF3366' : theme === 'neon' ? '#00FF99' : theme === 'dark' ? '#4CAF50' : '#2E7D32',
         },
         secondary: {
            main: theme === 'vibrant' ? '#33CCFF' : theme === 'neon' ? '#CC00FF' : theme === 'dark' ? '#81C784' : '#81C784',
         },
         background: {
            default: theme === 'dark' ? '#111827' : theme === 'neon' ? '#0A0A0A' : theme === 'vibrant' ? '#FFF0F5' : '#F1F8E9',
            paper: theme === 'dark' ? '#1F2937' : theme === 'neon' ? '#1A1A1A' : theme === 'vibrant' ? '#FFFFFF' : '#ffffff',
         }
      },
      typography: {
         fontFamily: 'Inter, sans-serif',
         h1: { fontFamily: 'Playfair Display, serif' },
         h2: { fontFamily: 'Playfair Display, serif' },
         h3: { fontFamily: 'Playfair Display, serif' },
      },
   }), [theme]);

   return (
      <ThemeProvider theme={muiTheme}>
         <div className="min-h-screen transition-colors duration-300 overflow-x-hidden cursor-none">
            <PageTransition theme={theme} />
            <CustomCursor theme={theme} />
            <VoiceNavigator />
            <SettingsPanel />

            <Routes>
               <Route path="/" element={
                  <>
                     <Navbar theme={theme} />
                     <main>
                        <Hero />
                        <About />
                        <Skills />
                        <Research />
                        <Footprints />
                        <Experience />
                        <Achievements />
                        <Contact />
                     </main>
                     <Footer />
                  </>
               } />
               <Route path="/research/:id" element={<ResearchDetail />} />
               <Route path="/footprints/:id" element={<FootprintsDetail />} />
            </Routes>
         </div>
      </ThemeProvider>
   );
};

function App() {
   return (
      <SettingsProvider>
         <AppContent />
      </SettingsProvider>
   );
}

export default App;
