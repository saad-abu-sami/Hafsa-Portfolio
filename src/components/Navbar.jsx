import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useSettings } from '../context/SettingsContext';

const navLinks = [
   { name: 'Home', to: 'hero' },
   { name: 'About', to: 'about' },
   { name: 'Skills', to: 'skills' },
   { name: 'Research', to: 'research' },
   { name: 'Footprints', to: 'footprints' },
   { name: 'Experience', to: 'experience' },
   { name: 'Achievements', to: 'achievements' },
   { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const { theme, setTheme } = useSettings();

   const toggleTheme = () => {
      setTheme(theme === 'dark' || theme === 'neon' ? 'light' : 'dark');
   };

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <motion.nav
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.5 }}
         className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass dark:glass-dark py-2' : 'bg-transparent py-4'}`}
      >
         <div className="container mx-auto px-6 flex justify-between items-center">
            <Link
               to="hero"
               smooth={true}
               duration={500}
               className="cursor-pointer flex items-center gap-2 text-primary-dark dark:text-primary-light font-display font-bold text-2xl"
            >
               <LocalFloristIcon fontSize="large" />
               <span>Hafsa.</span>
            </Link>

            {/* Desktop Menu - Hidden on tablets (md) and below, visible on large screens (lg) */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
               {navLinks.map((link) => (
                  <Link
                     key={link.name}
                     to={link.to}
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                     activeClass="text-primary dark:text-primary-light font-bold"
                     className="cursor-pointer text-gray-700 dark:text-gray-100 hover:text-primary dark:hover:text-primary-light transition-colors font-medium relative group text-sm xl:text-base"
                  >
                     {link.name}
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary dark:bg-primary-light transition-all duration-300 group-hover:w-full"></span>
                  </Link>
               ))}

               {/* Theme Toggle with High-Level Animation */}
               <motion.button
                  onClick={toggleTheme}
                  className="relative p-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-yellow-500/20 dark:to-orange-500/20 hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle Dark Mode"
               >
                  <AnimatePresence mode='wait' initial={false}>
                     <motion.div
                        key={theme === 'dark' || theme === 'neon' ? 'dark' : 'light'}
                        initial={{ y: -30, opacity: 0, rotate: -180 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 30, opacity: 0, rotate: 180 }}
                        transition={{
                           duration: 0.3,
                           type: "spring",
                           stiffness: 200,
                           damping: 20
                        }}
                        className="text-primary dark:text-yellow-400"
                     >
                        {theme === 'dark' || theme === 'neon' ? (
                           <LightModeIcon className="animate-pulse" />
                        ) : (
                           <DarkModeIcon />
                        )}
                     </motion.div>
                  </AnimatePresence>
               </motion.button>
            </div>

            {/* Mobile/Tablet Menu Button - Visible on tablets (lg) and below */}
            <div className="lg:hidden flex items-center gap-4">
               <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-primary/10 dark:bg-yellow-500/20"
                  whileTap={{ scale: 0.9 }}
               >
                  {theme === 'dark' || theme === 'neon' ? (
                     <LightModeIcon fontSize="small" className="text-yellow-400" />
                  ) : (
                     <DarkModeIcon fontSize="small" className="text-primary" />
                  )}
               </motion.button>
               <button onClick={() => setIsOpen(!isOpen)} className="text-primary-dark dark:text-primary-light">
                  {isOpen ? <CloseIcon /> : <MenuIcon />}
               </button>
            </div>
         </div>

         {/* Mobile Menu Overlay */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                  animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                  exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                     backgroundColor: 'rgb(var(--color-background) / 0.98)',
                     color: 'rgb(var(--color-text))'
                  }}
                  className="fixed inset-0 top-0 left-0 w-full h-screen backdrop-blur-xl z-[-1] flex flex-col items-center justify-center"
               >
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
                     className="flex flex-col items-center justify-center gap-6 w-full max-w-sm mx-auto"
                  >
                     {navLinks.map((link, index) => (
                        <motion.div
                           key={link.name}
                           initial={{ opacity: 0, x: -30 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.3 }}
                           className="w-full"
                        >
                           <Link
                              to={link.to}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              onClick={() => setIsOpen(false)}
                              className="group relative flex items-center justify-center w-full py-2 cursor-pointer transition-colors duration-300"
                           >
                              <span
                                 className="text-4xl font-display font-bold text-[rgb(var(--color-text))] group-hover:text-[rgb(var(--color-primary))] transition-colors duration-300"
                              >
                                 {link.name}
                              </span>

                              {/* Animated Underline */}
                              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[rgb(var(--color-primary))] rounded-full transition-all duration-300 ease-out group-hover:w-16 opacity-0 group-hover:opacity-100"></span>

                              {/* Hover Glow Effect */}
                              <span className="absolute inset-0 bg-[rgb(var(--color-primary))] opacity-0 group-hover:opacity-5 blur-xl rounded-full transition-opacity duration-300 -z-10 scale-0 group-hover:scale-110"></span>
                           </Link>
                        </motion.div>
                     ))}
                  </motion.div>

                  {/* Decorative Elements matching theme */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.nav>
   );
};

export default Navbar;
