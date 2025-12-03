import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ theme }) => {
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const [isHovering, setIsHovering] = useState(false);
   const [isClicking, setIsClicking] = useState(false);

   useEffect(() => {
      const updateMousePosition = (e) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseDown = () => setIsClicking(true);
      const handleMouseUp = () => setIsClicking(false);

      const handleMouseOver = (e) => {
         const target = e.target;
         if (
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            target.closest('a') ||
            target.closest('button') ||
            target.classList.contains('cursor-pointer')
         ) {
            setIsHovering(true);
         } else {
            setIsHovering(false);
         }
      };

      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseover', handleMouseOver);

      return () => {
         window.removeEventListener('mousemove', updateMousePosition);
         window.removeEventListener('mousedown', handleMouseDown);
         window.removeEventListener('mouseup', handleMouseUp);
         window.removeEventListener('mouseover', handleMouseOver);
      };
   }, []);

   const cursorVariants = {
      default: {
         x: mousePosition.x - 16,
         y: mousePosition.y - 16,
         scale: 1,
      },
      hovering: {
         x: mousePosition.x - 24,
         y: mousePosition.y - 24,
         scale: 1.5,
      },
      clicking: {
         x: mousePosition.x - 12,
         y: mousePosition.y - 12,
         scale: 0.8,
      },
   };

   const trailVariants = {
      default: {
         x: mousePosition.x - 6,
         y: mousePosition.y - 6,
      },
   };

   return (
      <>
         {/* Main Cursor */}
         <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
            variants={cursorVariants}
            animate={isClicking ? 'clicking' : isHovering ? 'hovering' : 'default'}
            transition={{
               type: 'spring',
               stiffness: 500,
               damping: 28,
               mass: 0.5,
            }}
         >
            <div
               className={`w-full h-full rounded-full border-2 ${theme === 'dark' || theme === 'neon'
                  ? 'border-primary-light bg-primary-light/20'
                  : 'border-primary-dark bg-primary-dark/20'
                  } ${isHovering ? 'backdrop-blur-sm' : ''}`}
            />
         </motion.div>

         {/* Cursor Trail/Dot */}
         <motion.div
            className="fixed top-0 left-0 w-3 h-3 pointer-events-none z-[9999]"
            variants={trailVariants}
            animate="default"
            transition={{
               type: 'spring',
               stiffness: 150,
               damping: 15,
               mass: 0.1,
            }}
         >
            <div
               className={`w-full h-full rounded-full ${theme === 'dark' || theme === 'neon'
                  ? 'bg-primary-light shadow-[0_0_10px_rgb(var(--color-primary-light)/0.8)]'
                  : 'bg-primary-dark shadow-[0_0_10px_rgb(var(--color-primary-dark)/0.8)]'
                  }`}
            />
         </motion.div>

         {/* Glow Effect */}
         {isHovering && (
            <motion.div
               className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9998]"
               initial={{ opacity: 0, scale: 0 }}
               animate={{
                  x: mousePosition.x - 32,
                  y: mousePosition.y - 32,
                  opacity: 0.3,
                  scale: 1,
               }}
               exit={{ opacity: 0, scale: 0 }}
               transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
               }}
            >
               <div
                  className={`w-full h-full rounded-full blur-xl ${theme === 'dark' || theme === 'neon'
                     ? 'bg-primary-light'
                     : 'bg-primary-dark'
                     }`}
               />
            </motion.div>
         )}
      </>
   );
};

export default CustomCursor;
