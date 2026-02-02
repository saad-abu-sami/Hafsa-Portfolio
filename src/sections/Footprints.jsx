
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { footprintsData } from '../data/footprintsData.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MapIcon from '@mui/icons-material/Map';
import LandscapeIcon from '@mui/icons-material/Landscape';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import NearMeIcon from '@mui/icons-material/NearMe';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';

const iconMap = {
   Map: MapIcon,
   Landscape: LandscapeIcon,
   PhotoCamera: PhotoCameraIcon,
   NearMe: NearMeIcon,
   Flight: FlightIcon,
   DirectionsBoat: DirectionsBoatIcon
};

const Footprints = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const scrollToProject = (index) => {
      const container = document.getElementById('footprints-container');
      if (container) {
         const cards = container.children;
         if (cards[index]) {
            const card = cards[index];
            const containerCenter = container.clientWidth / 2;
            const cardCenter = card.clientWidth / 2;
            const scrollLeft = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;

            container.scrollTo({
               left: scrollLeft,
               behavior: 'smooth'
            });
         }
      }
   };

   const handleScroll = (e) => {
      const container = e.target;
      const containerCenter = container.scrollLeft + container.clientWidth / 2;

      // We need to account for the fact that children includes potentially other elements if we aren't careful, 
      // but here we map directly.
      const cards = Array.from(container.children);

      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      cards.forEach((card, index) => {
         // Calculate distance from center of container to center of card
         // Note: card.offsetLeft is relative to the scroll parent because it is positioned? 
         // Actually in a flex container, offsetLeft is correct relative to the container usually.
         const cardCenter = card.offsetLeft + card.clientWidth / 2;
         const distance = Math.abs(containerCenter - cardCenter);

         if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
         }
      });

      // Debounce slightly to avoid rapid state updates? 
      // For now, direct update is fine as it drives the indicator.
      if (closestIndex !== currentIndex) {
         setCurrentIndex(closestIndex);
      }
   };

   const nextProject = () => {
      const newIndex = (currentIndex + 1) % footprintsData.length;
      scrollToProject(newIndex);
   };

   const prevProject = () => {
      const newIndex = (currentIndex - 1 + footprintsData.length) % footprintsData.length;
      scrollToProject(newIndex);
   };

   // Keyboard navigation
   useEffect(() => {
      const handleKeyDown = (e) => {
         if (e.key === 'ArrowRight') nextProject();
         if (e.key === 'ArrowLeft') prevProject();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
   }, [currentIndex]);

   return (
      <section id="footprints" className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-950 dark:to-cyan-950 py-20">
         {/* Header */}
         <div className="container mx-auto px-6 mb-12">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center"
            >
               <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                  Footprints
               </h2>
               <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto rounded-full mb-6"></div>
               <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                  A journey across the map • Use ← → keys or scroll to explore
               </p>
            </motion.div>
         </div>

         {/* Project Counter */}
         <div className="absolute top-8 right-8 z-30 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
            <span className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">
               {currentIndex + 1} / {footprintsData.length}
            </span>
         </div>

         {/* Horizontal Scroll Container */}
         <div className="relative">
            <div
               id="footprints-container"
               onScroll={handleScroll}
               className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide px-6 md:px-12 gap-8 pb-8"
               style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
               }}
            >
               {footprintsData.map((trip, index) => {
                  const IconComponent = iconMap[trip.icon] || MapIcon;

                  return (
                     <div
                        key={trip.id}
                        className="flex-shrink-0 w-full md:w-[90vw] max-w-6xl snap-center"
                     >
                        <motion.div
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true, amount: 0.3 }}
                           transition={{ duration: 0.5 }}
                           className="h-full"
                        >
                           <div className="relative h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 group">
                              {/* Background Image */}
                              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
                                 <img
                                    src={trip.image}
                                    alt={trip.title}
                                    loading={index < 2 ? "eager" : "lazy"}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                       e.target.onerror = null;
                                       e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop'; // Fallback travel image
                                    }}
                                 />
                                 {/* Gradient Overlay */}
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                              </div>

                              {/* Content */}
                              <div className="relative h-full flex flex-col justify-between p-6 md:p-12">
                                 {/* Top Section */}
                                 <div className="flex justify-between items-start">
                                    {/* Date Badge */}
                                    <motion.div
                                       initial={{ opacity: 0, x: -20 }}
                                       whileInView={{ opacity: 1, x: 0 }}
                                       transition={{ delay: 0.2 }}
                                       className="bg-cyan-600/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg"
                                    >
                                       <span className="text-white font-bold text-lg">{trip.date}</span>
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                       initial={{ opacity: 0, scale: 0 }}
                                       whileInView={{ opacity: 1, scale: 1 }}
                                       transition={{ delay: 0.3, type: "spring" }}
                                       className="bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg border border-white/30"
                                    >
                                       <IconComponent className="text-white" fontSize="large" />
                                    </motion.div>
                                 </div>

                                 {/* Bottom Section */}
                                 <div>
                                    {/* Number */}
                                    <motion.div
                                       initial={{ opacity: 0 }}
                                       whileInView={{ opacity: 1 }}
                                       transition={{ delay: 0.2 }}
                                       className="text-white/10 font-display font-bold text-5xl md:text-8xl mb-2 md:mb-4 leading-none select-none"
                                    >
                                       {String(index + 1).padStart(2, '0')}
                                    </motion.div>

                                    {/* Tags */}
                                    <motion.div
                                       initial={{ opacity: 0, y: 20 }}
                                       whileInView={{ opacity: 1, y: 0 }}
                                       transition={{ delay: 0.3 }}
                                       className="flex flex-wrap gap-2 mb-2 md:mb-4"
                                    >
                                       {trip.tags.slice(0, 3).map((tag, i) => (
                                          <span
                                             key={i}
                                             className="px-3 py-1 md:px-4 md:py-1.5 bg-white/20 backdrop-blur-md text-white text-xs md:text-sm font-semibold rounded-full border border-white/20"
                                          >
                                             {tag}
                                          </span>
                                       ))}
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                       initial={{ opacity: 0, y: 20 }}
                                       whileInView={{ opacity: 1, y: 0 }}
                                       transition={{ delay: 0.4 }}
                                       className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 md:mb-3 leading-tight"
                                    >
                                       {trip.title}
                                    </motion.h3>

                                    {/* Location & Coordinates */}
                                    <motion.p
                                       initial={{ opacity: 0, y: 20 }}
                                       whileInView={{ opacity: 1, y: 0 }}
                                       transition={{ delay: 0.5 }}
                                       className="text-cyan-300 text-lg font-semibold mb-3 flex items-center gap-2"
                                    >
                                       <NearMeIcon fontSize="small" />
                                       {trip.location} • {trip.coordinates}
                                    </motion.p>

                                    {/* Description */}
                                    <motion.p
                                       initial={{ opacity: 0, y: 20 }}
                                       whileInView={{ opacity: 1, y: 0 }}
                                       transition={{ delay: 0.6 }}
                                       className="text-gray-200 text-base md:text-lg mb-8 max-w-3xl leading-relaxed"
                                    >
                                       {trip.description}
                                    </motion.p>

                                    {/* View Details Button */}
                                    <motion.div
                                       initial={{ opacity: 0, y: 20 }}
                                       whileInView={{ opacity: 1, y: 0 }}
                                       transition={{ delay: 0.7 }}
                                    >
                                       <Link
                                          to={`/footprints/${trip.id}`}
                                          className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md text-white font-bold text-base rounded-full hover:bg-white hover:text-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group border border-white/30"
                                       >
                                          View Trip Details
                                          <ArrowForwardIcon className="group-hover:translate-x-1 transition-transform" fontSize="small" />
                                       </Link>
                                    </motion.div>

                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     </div>
                  );
               })}
            </div>

            {/* Navigation Arrows */}
            <button
               onClick={prevProject}
               className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 transition-all duration-300 hover:scale-110"
               aria-label="Previous trip"
            >
               <ChevronLeftIcon fontSize="large" />
            </button>

            <button
               onClick={nextProject}
               className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl rounded-full p-3 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 transition-all duration-300 hover:scale-110"
               aria-label="Next trip"
            >
               <ChevronRightIcon fontSize="large" />
            </button>
         </div>

         {/* Progress Indicators */}
         <div className="flex justify-center gap-3 mt-12">
            {footprintsData.map((_, index) => (
               <button
                  key={index}
                  onClick={() => scrollToProject(index)}
                  className={`transition-all duration-300 rounded-full ${currentIndex === index
                     ? 'w-12 h-3 bg-cyan-600 shadow-lg'
                     : 'w-3 h-3 bg-gray-300 dark:bg-gray-700 hover:bg-cyan-400'
                     }`}
                  aria-label={`Go to trip ${index + 1}`}
               />
            ))}
         </div>
      </section>
   );
};

export default Footprints;
