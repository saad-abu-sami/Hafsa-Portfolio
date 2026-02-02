import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import SpaIcon from '@mui/icons-material/Spa';
import { useSettings } from '../context/SettingsContext';

const Hero = () => {
   const ref = useRef(null);
   const { visitCount, userMood } = useSettings();
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
   });

   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

   const getGreeting = () => {
      const hour = new Date().getHours();
      let timeGreeting = 'Hello';

      if (hour >= 5 && hour < 12) timeGreeting = 'Good Morning';
      else if (hour >= 12 && hour < 17) timeGreeting = 'Good Afternoon';
      else if (hour >= 17 && hour < 21) timeGreeting = 'Good Evening';
      else timeGreeting = 'Good Night'; // Covers 9 PM to 5 AM

      if (visitCount > 1) {
         return `Welcome back! ${timeGreeting}`;
      }
      return `${timeGreeting}!`;
   };

   return (
      <section id="hero" ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-24 lg:pb-0">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-green-50 to-background dark:from-gray-900 dark:to-gray-900 opacity-50"></div>
         <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 text-primary/20"
         >
            <SpaIcon style={{ fontSize: 100 }} />
         </motion.div>
         <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-10 text-secondary/20"
         >
            <SpaIcon style={{ fontSize: 150 }} />
         </motion.div>

         <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

            {/* Text Content */}
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="z-10 order-2 lg:order-1 text-center lg:text-left"
            >
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10 text-primary-dark dark:text-primary-light font-medium text-sm md:text-base border border-primary/20"
               >
                  {getGreeting()} 🌱
               </motion.div>
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-800 dark:text-white mb-4 leading-tight">
                  Hi, I'm <span className="text-primary block lg:inline">Hafsa Tasnim</span>
               </h1>
               <h2 className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 font-light">
                  Crop Science | Sustainable Development Enthusiast
               </h2>
               <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-base md:text-lg">
                  Dedicated to advancing <span className="relative inline-block font-semibold text-gray-700 dark:text-gray-200">
                     sustainable agriculture
                     <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <defs>
                           <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#2E7D32" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#81C784" stopOpacity="0.9" />
                           </linearGradient>
                        </defs>
                        <path d="M0 5 Q 50 10 100 5" stroke="url(#grad1)" strokeWidth="3" fill="none" strokeLinecap="round" />
                     </svg>
                  </span> through research in crop physiology and ecology. Passionate about applying technology to solve <span className="relative inline-block font-semibold text-gray-700 dark:text-gray-200">
                     farming challenges
                     <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <defs>
                           <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#81C784" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#2E7D32" stopOpacity="0.9" />
                           </linearGradient>
                        </defs>
                        <path d="M0 5 Q 50 10 100 5" stroke="url(#grad2)" strokeWidth="3" fill="none" strokeLinecap="round" />
                     </svg>
                  </span>.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                  <Button
                     variant="contained"
                     color="primary"
                     size="large"
                     startIcon={<DownloadIcon />}
                     sx={{
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        px: 4,
                        py: 1.5,
                        minWidth: '180px' // Added min-width for consistency
                     }}
                  >
                     Download CV
                  </Button>
                  <Button
                     variant="outlined"
                     color="primary"
                     size="large"
                     startIcon={<EmailIcon />}
                     href="#contact"
                     sx={{
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        borderWidth: 2,
                        px: 4,
                        py: 1.5,
                        minWidth: '180px' // Added min-width for consistency
                     }}
                  >
                     Contact Me
                  </Button>
               </div>
            </motion.div>

            {/* Image/Visual with Parallax and Zoom */}
            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative flex justify-center items-center h-[300px] md:h-[400px] order-1 lg:order-2"
            >
               <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Rotating Border */}
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="absolute inset-[-20px] border-2 border-dashed border-primary/30 rounded-full z-0"
                  ></motion.div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse z-0"></div>

                  {/* Image Container with Parallax */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-gray-200 z-10">
                     <motion.div
                        style={{ y, scale }}
                        className="w-full h-full"
                     >
                        <img
                           src="/hero-image.jpg"
                           alt="Hafsa Tasnim"
                           className="w-full h-full object-cover"
                        />
                     </motion.div>
                  </div>

                  {/* Floating Cards */}
                  <motion.div
                     animate={{ y: [0, -10, 0] }}
                     transition={{ duration: 4, repeat: Infinity }}
                     className="absolute -right-4 md:-right-8 top-10 glass dark:glass-dark p-2 md:p-3 rounded-xl flex items-center gap-2 z-20 shadow-lg"
                  >
                     <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                     <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-white">Research Focused</span>
                  </motion.div>

                  <motion.div
                     animate={{ y: [0, 10, 0] }}
                     transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                     className="absolute -left-4 md:-left-8 bottom-16 md:bottom-20 glass dark:glass-dark p-2 md:p-3 rounded-xl flex items-center gap-2 z-20 shadow-lg"
                  >
                     <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                     <span className="text-xs md:text-sm font-medium text-gray-800 dark:text-white">Sustainable Tech</span>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Hero;
