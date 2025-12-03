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
   { name: 'Academic Projects', to: 'academic-projects' },
   { name: 'Experience', to: 'experience' },
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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
               {navLinks.map((link) => (
                  <Link
                     key={link.name}
                     to={link.to}
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500}
                     activeClass="text-primary dark:text-primary-light font-bold"
                     className="cursor-pointer text-gray-700 dark:text-gray-100 hover:text-primary dark:hover:text-primary-light transition-colors font-medium relative group"
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

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
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

         {/* Mobile Menu */}
         {isOpen && (
            <motion.div
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: 'auto' }}
               className="md:hidden glass dark:glass-dark absolute w-full border-t border-gray-200 dark:border-gray-700"
            >
               <div className="flex flex-col items-center py-4 gap-4">
                  {navLinks.map((link) => (
                     <Link
                        key={link.name}
                        to={link.to}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer text-gray-700 dark:text-gray-100 hover:text-primary font-medium"
                     >
                        {link.name}
                     </Link>
                  ))}
               </div>
            </motion.div>
         )}
      </motion.nav>
   );
};

export default Navbar;
