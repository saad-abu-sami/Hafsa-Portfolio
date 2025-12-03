import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ theme }) => {
   const [isTransitioning, setIsTransitioning] = useState(true);

   useEffect(() => {
      // Initial page load transition
      const timer = setTimeout(() => {
         setIsTransitioning(false);
      }, 1500);

      return () => clearTimeout(timer);
   }, []);

   const curtainVariants = {
      initial: {
         scaleY: 1,
      },
      animate: {
         scaleY: 0,
         transition: {
            duration: 1.2,
            ease: [0.87, 0, 0.13, 1],
         },
      },
      exit: {
         scaleY: 1,
         transition: {
            duration: 0.8,
            ease: [0.87, 0, 0.13, 1],
         },
      },
   };

   const textVariants = {
      initial: {
         opacity: 0,
         y: 20,
      },
      animate: {
         opacity: 1,
         y: 0,
         transition: {
            delay: 0.3,
            duration: 0.6,
         },
      },
      exit: {
         opacity: 0,
         y: -20,
         transition: {
            duration: 0.4,
         },
      },
   };

   const logoVariants = {
      initial: {
         scale: 0.8,
         opacity: 0,
      },
      animate: {
         scale: 1,
         opacity: 1,
         transition: {
            delay: 0.2,
            duration: 0.8,
            ease: 'easeOut',
         },
      },
      exit: {
         scale: 1.2,
         opacity: 0,
         transition: {
            duration: 0.5,
         },
      },
   };

   return (
      <AnimatePresence mode="wait">
         {isTransitioning && (
            <motion.div
               className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
               initial="initial"
               animate="animate"
               exit="exit"
            >
               {/* Left Curtain */}
               {/* Left Curtain */}
               <motion.div
                  className={`absolute left-0 top-0 h-full w-1/2 origin-top ${theme === 'dark' || theme === 'neon'
                     ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
                     : theme === 'vibrant'
                        ? 'bg-gradient-to-r from-primary via-secondary to-primary'
                        : 'bg-gradient-to-r from-green-900 via-primary-dark to-green-900'
                     }`}
                  variants={curtainVariants}
                  style={{ transformOrigin: 'top' }}
               >
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
               </motion.div>

               {/* Right Curtain */}
               <motion.div
                  className={`absolute right-0 top-0 h-full w-1/2 origin-top ${theme === 'dark' || theme === 'neon'
                     ? 'bg-gradient-to-l from-gray-900 via-gray-800 to-gray-900'
                     : theme === 'vibrant'
                        ? 'bg-gradient-to-l from-primary via-secondary to-primary'
                        : 'bg-gradient-to-l from-green-900 via-primary-dark to-green-900'
                     }`}
                  variants={curtainVariants}
                  style={{ transformOrigin: 'top' }}
               >
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
               </motion.div>

               {/* Center Content */}
               <div className="relative z-10 flex flex-col items-center gap-6">
                  {/* Animated Logo */}
                  <motion.div
                     variants={logoVariants}
                     className="relative"
                  >
                     <div className={`w-24 h-24 rounded-full flex items-center justify-center ${theme === 'dark' || theme === 'neon'
                        ? 'bg-gradient-to-br from-primary-light to-secondary-light'
                        : 'bg-gradient-to-br from-primary to-secondary'
                        } shadow-2xl`}>
                        <svg
                           className="w-16 h-16 text-white"
                           fill="none"
                           stroke="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                           />
                        </svg>
                     </div>
                     {/* Glow Effect */}
                     <div className={`absolute inset-0 rounded-full blur-2xl ${theme === 'dark' || theme === 'neon'
                        ? 'bg-primary-light/30'
                        : 'bg-primary/30'
                        }`} />
                  </motion.div>

                  {/* Welcome Text */}
                  <motion.div
                     variants={textVariants}
                     className="text-center"
                  >
                     <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                        Hafsa Tasnim
                     </h1>
                     <p className="text-lg text-white/80 font-light tracking-wide">
                        Agricultural Portfolio
                     </p>
                  </motion.div>

                  {/* Loading Bar */}
                  <motion.div
                     className="w-48 h-1 bg-white/20 rounded-full overflow-hidden"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 }}
                  >
                     <motion.div
                        className={`h-full ${theme === 'dark' || theme === 'neon'
                           ? 'bg-gradient-to-r from-primary-light to-secondary-light'
                           : theme === 'vibrant'
                              ? 'bg-gradient-to-r from-primary via-secondary to-primary'
                              : 'bg-gradient-to-r from-white to-primary-light'
                           }`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                     />
                  </motion.div>
               </div>

               {/* Sparkle Effects */}
               {[...Array(8)].map((_, i) => (
                  <motion.div
                     key={i}
                     className="absolute w-2 h-2 bg-white rounded-full"
                     initial={{
                        x: '50vw',
                        y: '50vh',
                        opacity: 0,
                        scale: 0,
                     }}
                     animate={{
                        x: `${Math.random() * 100}vw`,
                        y: `${Math.random() * 100}vh`,
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                     }}
                     transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        ease: 'easeOut',
                     }}
                  />
               ))}
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default PageTransition;
