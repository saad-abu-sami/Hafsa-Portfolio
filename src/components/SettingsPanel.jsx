import React, { useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import { motion, AnimatePresence } from 'framer-motion';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import MicIcon from '@mui/icons-material/Mic';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PaletteIcon from '@mui/icons-material/Palette';

const SettingsPanel = () => {
   const [isOpen, setIsOpen] = useState(false);
   const {
      theme, setTheme,
      fontSize, setFontSize,
      dyslexiaFont, setDyslexiaFont,
      reducedMotion, setReducedMotion,
      isVoiceEnabled, toggleVoice
   } = useSettings();

   const panelVariants = {
      hidden: { x: '100%', opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
      exit: { x: '100%', opacity: 0 }
   };

   return (
      <>
         {/* Trigger Button */}
         <button
            onClick={() => setIsOpen(true)}
            className="fixed top-24 right-0 z-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-3 rounded-l-xl shadow-lg hover:pr-5 transition-all group border border-r-0 border-gray-200 dark:border-gray-700"
            aria-label="Open Settings"
         >
            <SettingsIcon className="text-gray-600 dark:text-gray-300 group-hover:rotate-90 transition-transform duration-500" />
         </button>

         {/* Backdrop */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
               />
            )}
         </AnimatePresence>

         {/* Panel */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-[60] p-6 overflow-y-auto border-l border-gray-200 dark:border-gray-800"
               >
                  <div className="flex justify-between items-center mb-8">
                     <h2 className="text-2xl font-display font-bold text-gray-800 dark:text-white">Settings</h2>
                     <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                        <CloseIcon className="text-gray-500" />
                     </button>
                  </div>

                  {/* Theme Section */}
                  <div className="mb-8">
                     <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                        <PaletteIcon fontSize="small" /> Appearance
                     </h3>
                     <div className="grid grid-cols-2 gap-3">
                        {['light', 'dark', 'vibrant', 'neon'].map((t) => (
                           <button
                              key={t}
                              onClick={() => setTheme(t)}
                              className={`p-3 rounded-lg border-2 transition-all capitalize ${theme === t
                                 ? 'border-primary bg-primary/10 text-primary font-bold'
                                 : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                                 }`}
                           >
                              {t}
                           </button>
                        ))}
                     </div>
                  </div>

                  {/* Accessibility Section */}
                  <div className="mb-8">
                     <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                        <VisibilityIcon fontSize="small" /> Accessibility
                     </h3>

                     {/* Font Size */}
                     <div className="mb-4">
                        <label className="text-sm text-gray-600 dark:text-gray-300 mb-2 block">Font Size</label>
                        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                           {['normal', 'large', 'xl'].map((size) => (
                              <button
                                 key={size}
                                 onClick={() => setFontSize(size)}
                                 className={`flex-1 py-1 rounded-md text-sm transition-all ${fontSize === size
                                    ? 'bg-white dark:bg-gray-700 shadow-sm text-primary font-bold'
                                    : 'text-gray-500'
                                    }`}
                              >
                                 {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* Toggles */}
                     <div className="space-y-3">
                        <label className="flex items-center justify-between cursor-pointer group">
                           <span className="text-gray-700 dark:text-gray-200">Dyslexia Friendly</span>
                           <input
                              type="checkbox"
                              checked={dyslexiaFont}
                              onChange={(e) => setDyslexiaFont(e.target.checked)}
                              className="w-5 h-5 text-primary rounded focus:ring-primary"
                           />
                        </label>
                        <label className="flex items-center justify-between cursor-pointer group">
                           <span className="text-gray-700 dark:text-gray-200">Reduced Motion</span>
                           <input
                              type="checkbox"
                              checked={reducedMotion}
                              onChange={(e) => setReducedMotion(e.target.checked)}
                              className="w-5 h-5 text-primary rounded focus:ring-primary"
                           />
                        </label>
                     </div>
                  </div>

                  {/* Voice Control */}
                  <div className="mb-8">
                     <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                        <MicIcon fontSize="small" /> Voice Control
                     </h3>
                     <button
                        onClick={toggleVoice}
                        className={`w-full p-4 rounded-xl flex items-center justify-between transition-all ${isVoiceEnabled
                           ? 'bg-primary text-white shadow-lg shadow-primary/30'
                           : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                           }`}
                     >
                        <span className="font-medium">Voice Navigation</span>
                        <div className={`w-12 h-6 rounded-full p-1 transition-colors ${isVoiceEnabled ? 'bg-white/30' : 'bg-gray-300 dark:bg-gray-600'}`}>
                           <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${isVoiceEnabled ? 'translate-x-6' : ''}`} />
                        </div>
                     </button>
                     <p className="text-xs text-gray-400 mt-2">
                        Try saying "Go to About" or "Dark Mode"
                     </p>
                  </div>

               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default SettingsPanel;
