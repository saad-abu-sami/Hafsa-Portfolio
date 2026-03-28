import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
   // Theme State (light, dark, calm, focus)
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

   // Accessibility State
   const [fontSize, setFontSize] = useState(localStorage.getItem('fontSize') || 'normal'); // normal, large, extra-large
   const [dyslexiaFont, setDyslexiaFont] = useState(localStorage.getItem('dyslexiaFont') === 'true');
   const [reducedMotion, setReducedMotion] = useState(localStorage.getItem('reducedMotion') === 'true');

   // Voice Navigation State
   const [isVoiceEnabled, setIsVoiceEnabled] = useState(localStorage.getItem('isVoiceEnabled') === 'true');
   const [isVoiceNavVisible, setIsVoiceNavVisible] = useState(localStorage.getItem('isVoiceNavVisible') !== 'false'); // default true

   // AI/Personalization State
   const [visitCount, setVisitCount] = useState(0);
   const [userMood, setUserMood] = useState('neutral'); // neutral, happy, focused

   useEffect(() => {
      // Persist settings
      localStorage.setItem('theme', theme);
      localStorage.setItem('fontSize', fontSize);
      localStorage.setItem('dyslexiaFont', dyslexiaFont);
      localStorage.setItem('reducedMotion', reducedMotion);
      localStorage.setItem('isVoiceEnabled', isVoiceEnabled);
      localStorage.setItem('isVoiceNavVisible', isVoiceNavVisible);

      // Apply Theme
      const root = document.documentElement;
      root.classList.remove('light', 'dark', 'calm', 'focus', 'vibrant', 'neon');
      root.classList.add(theme);

      if (theme === 'dark' || theme === 'neon') {
         root.classList.add('dark');
      } else {
         root.classList.remove('dark');
      }

      // Apply Font Size
      root.classList.remove('text-normal', 'text-large', 'text-xl');
      root.classList.add(`text-${fontSize}`);

      // Apply Dyslexia Font
      if (dyslexiaFont) {
         root.classList.add('font-dyslexic');
      } else {
         root.classList.remove('font-dyslexic');
      }

      // Track Visits (Simple AI/Personalization)
      const visits = parseInt(localStorage.getItem('visitCount') || '0');
      setVisitCount(visits + 1);
      localStorage.setItem('visitCount', visits + 1);

      // Time-based Mood Detection (Simple AI)
      const hour = new Date().getHours();
      if (hour >= 22 || hour < 6) setUserMood('calm');
      else if (hour >= 9 && hour < 17) setUserMood('focused');
      else setUserMood('happy');

      // ...
   }, [theme, fontSize, dyslexiaFont, reducedMotion, isVoiceEnabled, isVoiceNavVisible]);

   const toggleVoice = () => setIsVoiceEnabled(!isVoiceEnabled);
   const toggleVoiceNavVisible = () => setIsVoiceNavVisible(!isVoiceNavVisible);

   return (
      <SettingsContext.Provider value={{
         theme, setTheme,
         fontSize, setFontSize,
         dyslexiaFont, setDyslexiaFont,
         reducedMotion, setReducedMotion,
         isVoiceEnabled, toggleVoice,
         isVoiceNavVisible, toggleVoiceNavVisible,
         visitCount,
         userMood
      }}>
         {children}
      </SettingsContext.Provider>
   );
};
