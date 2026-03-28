import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useSettings } from '../context/SettingsContext';
import { scroller } from 'react-scroll';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { motion, AnimatePresence } from 'framer-motion';

// All navigable sections matched to their react-scroll IDs
const SECTION_MAP = {
   home:         'hero',
   hero:         'hero',
   top:          'hero',
   about:        'about',
   skill:        'skills',
   skills:       'skills',
   research:     'research',
   footprint:    'footprints',
   footprints:   'footprints',
   experience:   'experience',
   achievement:  'achievements',
   achievements: 'achievements',
   contact:      'contact',
};

const VoiceNavigator = () => {
   const { isVoiceEnabled, toggleVoice, setTheme, isVoiceNavVisible } = useSettings();
   const [isListening, setIsListening]   = useState(false);
   const [transcript, setTranscript]     = useState('');
   const [feedback, setFeedback]         = useState('');
   const recognitionRef                  = useRef(null);
   const restartTimerRef                 = useRef(null);

   const setFeedbackWithTimeout = useCallback((msg) => {
      setFeedback(msg);
      clearTimeout(restartTimerRef.current);
      restartTimerRef.current = setTimeout(() => {
         setTranscript('');
         setFeedback('');
      }, 3000);
   }, []);

   // ... processCommand remains ...
   const processCommand = useCallback((command) => {
      const lower = command.toLowerCase();

      // ── Navigation ────────────────────────────────────────────
      const triggerPhrases = ['go to', 'show me', 'scroll to', 'navigate to', 'open'];
      const navTriggered = triggerPhrases.some(p => lower.includes(p));

      if (navTriggered || Object.keys(SECTION_MAP).some(k => lower.includes(k))) {
         const key = Object.keys(SECTION_MAP).find(k => lower.includes(k));
         if (key) {
            const sectionId = SECTION_MAP[key];
            scroller.scrollTo(sectionId, {
               duration: 800,
               delay: 0,
               smooth: 'easeInOutQuart',
               offset: -70,
            });
            setFeedbackWithTimeout(`Navigating to ${key}…`);
            return;
         }
      }

      // ── Theme Commands ────────────────────────────────────────
      if (lower.includes('dark mode') || lower.includes('dark theme')) {
         setTheme('dark');
         setFeedbackWithTimeout('Switched to Dark Mode');
         return;
      }
      if (lower.includes('light mode') || lower.includes('light theme')) {
         setTheme('light');
         setFeedbackWithTimeout('Switched to Light Mode');
         return;
      }
      if (lower.includes('vibrant')) {
         setTheme('vibrant');
         setFeedbackWithTimeout('Switched to Vibrant Mode');
         return;
      }
      if (lower.includes('neon')) {
         setTheme('neon');
         setFeedbackWithTimeout('Switched to Neon Mode');
         return;
      }

      setFeedbackWithTimeout("Command not recognised. Try \"go to contact\".");
   }, [setFeedbackWithTimeout, setTheme]);

   // ── Start / stop recognition ──────────────────────────────────
   useEffect(() => {
      const SpeechRecognition =
         window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
         if (isVoiceEnabled) setFeedbackWithTimeout('Voice API not supported in this browser.');
         return;
      }

      if (!isVoiceEnabled) {
         // Cleanly stop any running instance
         if (recognitionRef.current) {
            recognitionRef.current._manualStop = true;
            recognitionRef.current.stop();
            recognitionRef.current = null;
         }
         setIsListening(false);
         setTranscript('');
         setFeedback('');
         return;
      }

      // Build a fresh instance
      const recognition = new SpeechRecognition();
      recognition.continuous      = true;
      recognition.interimResults  = false;
      recognition.lang            = 'en-US';
      recognition._manualStop     = false;

      recognition.onstart = () => {
         setIsListening(true);
         setFeedback('Listening…');
      };

      recognition.onend = () => {
         setIsListening(false);
         if (!recognition._manualStop) {
            // Brief pause before restarting (avoids rapid-restart errors)
            setTimeout(() => {
               try { recognition.start(); } catch (_) {}
            }, 300);
         }
      };

      recognition.onerror = (event) => {
         if (event.error === 'not-allowed') {
            setFeedbackWithTimeout('Mic permission denied. Please allow microphone access.');
            toggleVoice();
         } else if (event.error !== 'no-speech') {
            setFeedbackWithTimeout(`Error: ${event.error}`);
         }
      };

      recognition.onresult = (event) => {
         const last    = event.results.length - 1;
         const command = event.results[last][0].transcript.trim();
         setTranscript(command);
         processCommand(command);
      };

      recognitionRef.current = recognition;

      try {
         recognition.start();
      } catch (e) {
         console.error('Voice start failed', e);
      }

      return () => {
         recognition._manualStop = true;
         recognition.stop();
         recognitionRef.current = null;
      };
   }, [isVoiceEnabled]); // eslint-disable-line react-hooks/exhaustive-deps

   if (!isVoiceNavVisible) return null;

   return (
      /**
       * Positioned:
       *   - fixed, bottom-24 right-6  → sits well above the WhatsApp footer link / scroll-end
       *   - z-40 so it sits below the Navbar (z-50) but above page content
       */
      <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-2">
         {/* Transcript / Feedback Bubble */}
         <AnimatePresence>
            {(transcript || feedback) && (
               <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  className="bg-black/80 text-white px-4 py-2 rounded-xl backdrop-blur-md text-sm max-w-xs shadow-lg"
               >
                  {transcript && (
                     <p className="opacity-60 text-xs truncate">
                        Heard: &ldquo;{transcript}&rdquo;
                     </p>
                  )}
                  {feedback && (
                     <p className="font-semibold text-primary-light">{feedback}</p>
                  )}
               </motion.div>
            )}
         </AnimatePresence>

         {/* Mic Button */}
         <motion.button
            aria-label={isVoiceEnabled ? 'Disable voice navigation' : 'Enable voice navigation'}
            onClick={toggleVoice}
            animate={{
               boxShadow: isListening
                  ? [
                     '0 0 0 0px rgba(79,209,197,0.5)',
                     '0 0 0 12px rgba(79,209,197,0)',
                  ]
                  : '0 4px 14px rgba(0,0,0,0.25)',
            }}
            transition={
               isListening
                  ? { repeat: Infinity, duration: 1.2, ease: 'easeOut' }
                  : { duration: 0.3 }
            }
            style={{
               background: isVoiceEnabled
                  ? 'linear-gradient(135deg,#4fd1c5,#38a169)'
                  : 'linear-gradient(135deg,#6b7280,#374151)',
            }}
            className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer border-2 border-white/20 hover:scale-105 active:scale-95 transition-transform"
         >
            {isListening ? (
               <MicIcon fontSize="medium" />
            ) : (
               <MicOffIcon fontSize="medium" />
            )}
         </motion.button>
      </div>
   );
};

export default VoiceNavigator;
