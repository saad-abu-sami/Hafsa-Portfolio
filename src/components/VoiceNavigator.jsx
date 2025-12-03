import React, { useEffect, useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import { scroller } from 'react-scroll';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { motion, AnimatePresence } from 'framer-motion';

const VoiceNavigator = () => {
   const { isVoiceEnabled, toggleVoice, setTheme } = useSettings();
   const [isListening, setIsListening] = useState(false);
   const [transcript, setTranscript] = useState('');
   const [feedback, setFeedback] = useState('');

   useEffect(() => {
      if (!isVoiceEnabled) return;

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
         setFeedback("Voice API not supported.");
         return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
         setIsListening(true);
         setFeedback("Listening...");
      };

      recognition.onend = () => {
         setIsListening(false);
         // Auto-restart if still enabled
         if (isVoiceEnabled) {
            try {
               recognition.start();
            } catch (e) {
               console.error("Restart failed", e);
            }
         }
      };

      recognition.onerror = (event) => {
         console.error("Speech recognition error", event.error);
         if (event.error === 'not-allowed') {
            setFeedback("Mic permission denied.");
            toggleVoice(); // Disable if denied
         } else {
            setFeedback(`Error: ${event.error}`);
         }
      };

      recognition.onresult = (event) => {
         const last = event.results.length - 1;
         const command = event.results[last][0].transcript.trim().toLowerCase();
         setTranscript(command);
         processCommand(command);
      };

      try {
         recognition.start();
      } catch (e) {
         console.error("Start failed", e);
      }

      return () => {
         recognition.onend = null; // Prevent auto-restart on cleanup
         recognition.stop();
      };
   }, [isVoiceEnabled]);

   const processCommand = (command) => {
      const sections = ['hero', 'about', 'skills', 'experience', 'contact'];

      // Navigation Commands
      if (command.includes('go to') || command.includes('show') || command.includes('scroll to')) {
         const target = sections.find(sec => command.includes(sec));
         if (target) {
            scroller.scrollTo(target, {
               duration: 800,
               delay: 0,
               smooth: 'easeInOutQuart'
            });
            setFeedback(`Navigating to ${target}...`);
         } else {
            setFeedback("Section not found.");
         }
      }
      // Theme Commands
      else if (command.includes('dark mode')) {
         setTheme('dark');
         setFeedback("Switched to Dark Mode");
      }
      else if (command.includes('light mode')) {
         setTheme('light');
         setFeedback("Switched to Light Mode");
      }
      else if (command.includes('vibrant mode')) {
         setTheme('vibrant');
         setFeedback("Switched to Vibrant Mode");
      }
      else if (command.includes('neon mode')) {
         setTheme('neon');
         setFeedback("Switched to Neon Mode");
      }

      // Clear feedback after delay
      setTimeout(() => {
         setTranscript('');
         setFeedback('');
      }, 3000);
   };

   return (
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-2">
         <AnimatePresence>
            {(transcript || feedback) && (
               <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-black/80 text-white px-4 py-2 rounded-lg backdrop-blur-md text-sm mb-2"
               >
                  <p className="opacity-70 text-xs">Heard: "{transcript}"</p>
                  <p className="font-bold text-primary-light">{feedback}</p>
               </motion.div>
            )}
         </AnimatePresence>

         <motion.div
            animate={{
               boxShadow: isListening ? "0 0 0 4px rgb(var(--color-primary) / 0.4)" : "0 0 0 0px rgb(var(--color-primary) / 0)",
               scale: isListening ? 1.1 : 1
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="bg-primary text-white p-4 rounded-full shadow-lg cursor-pointer"
            onClick={toggleVoice}
         >
            {isListening ? <MicIcon /> : <MicOffIcon />}
         </motion.div>
      </div>
   );
};

export default VoiceNavigator;
