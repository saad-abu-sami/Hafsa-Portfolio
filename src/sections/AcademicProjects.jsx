import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { academicProjectsData } from '../data/academicProjectsData.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { School, Science, Spa, LocalFlorist } from '@mui/icons-material';

const iconMap = {
   School: School,
   Science: Science,
   Eco: Spa,
   WaterDrop: Spa,
   LocalFlorist: LocalFlorist,
   Agriculture: LocalFlorist
};

const AcademicProjects = () => {
   const scrollContainerRef = useRef(null);

   const scroll = (direction) => {
      if (scrollContainerRef.current) {
         const scrollAmount = 400;
         scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
         });
      }
   };

   return (
      <section id="academic-projects" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
         <div className="container mx-auto px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center mb-16"
            >
               <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-dark dark:text-primary-light mb-4">
                  Academic Projects
               </h2>
               <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
               <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                  Hands-on learning experiences that shaped my agricultural expertise.
               </p>
            </motion.div>

            <div className="relative">
               {/* Scroll Buttons */}
               <button
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors -ml-4 hidden md:block"
                  aria-label="Scroll left"
               >
                  <ChevronLeftIcon className="text-primary dark:text-primary-light" />
               </button>

               <button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors -mr-4 hidden md:block"
                  aria-label="Scroll right"
               >
                  <ChevronRightIcon className="text-primary dark:text-primary-light" />
               </button>

               {/* Horizontal Scrollable Container */}
               <div
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                  style={{
                     scrollbarWidth: 'none',
                     msOverflowStyle: 'none',
                  }}
               >
                  {academicProjectsData.map((project, index) => (
                     <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex-shrink-0 w-80 md:w-96 snap-start group"
                     >
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                           <div className="relative h-48 overflow-hidden">
                              <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-primary dark:text-primary-light">
                                 {React.createElement(iconMap[project.icon], { fontSize: "large" })}
                              </div>
                              <img
                                 src={project.image}
                                 alt={project.title}
                                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                                 {project.year}
                              </div>
                           </div>

                           <div className="p-6 flex-1 flex flex-col">
                              <div className="flex flex-wrap gap-2 mb-3">
                                 {project.tags.slice(0, 2).map((tag, i) => (
                                    <span key={i} className="text-xs font-medium px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary-light rounded-full">
                                       {tag}
                                    </span>
                                 ))}
                              </div>

                              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors line-clamp-2">
                                 {project.title}
                              </h3>

                              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                 {project.course} • Grade: {project.grade}
                              </p>

                              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
                                 {project.summary}
                              </p>

                              <Link
                                 to={`/academic-project/${project.id}`}
                                 className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-auto"
                              >
                                 View Details <ArrowForwardIcon fontSize="small" />
                              </Link>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>

               {/* Scroll Indicator */}
               <div className="flex justify-center gap-2 mt-6">
                  {academicProjectsData.map((_, index) => (
                     <div
                        key={index}
                        className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"
                     ></div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default AcademicProjects;
