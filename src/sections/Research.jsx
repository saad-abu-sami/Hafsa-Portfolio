import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { researchData } from '../data/researchData.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Spa, Biotech, Science, Agriculture, WaterDrop, AcUnit, Nature } from '@mui/icons-material';

// Icon mapping
const iconMap = {
   Spa: Spa,
   Biotech: Biotech,
   Science: Science,
   Agriculture: Agriculture,
   WaterDrop: WaterDrop,
   AcUnit: AcUnit,
   Eco: Nature
};

const Research = () => {
   const [expandedCard, setExpandedCard] = useState(null);

   const toggleExpand = (id) => {
      setExpandedCard(expandedCard === id ? null : id);
   };

   return (
      <section id="research" className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-emerald-950 transition-colors duration-300 overflow-hidden">
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-20"
            >
               <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="inline-block mb-4"
               >
                  <span className="px-6 py-2 bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary-light rounded-full text-sm font-semibold tracking-wider uppercase">
                     Research Portfolio
                  </span>
               </motion.div>

               <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary via-green-600 to-emerald-600 bg-clip-text text-transparent">
                     Research & Publications
                  </span>
               </h2>

               <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8"></div>

               <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  Exploring the frontiers of agricultural science through stress physiology, climate resilience, and sustainable crop production
               </p>

               {/* Stats */}
               <div className="flex flex-wrap justify-center gap-8 mt-12">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="text-center"
                  >
                     <div className="text-4xl font-bold text-primary dark:text-primary-light mb-1">7</div>
                     <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Research Projects</div>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.3 }}
                     className="text-center"
                  >
                     <div className="text-4xl font-bold text-primary dark:text-primary-light mb-1">3</div>
                     <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Publications</div>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.4 }}
                     className="text-center"
                  >
                     <div className="text-4xl font-bold text-primary dark:text-primary-light mb-1">5+</div>
                     <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Crop Species</div>
                  </motion.div>
               </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
               {researchData.map((project, index) => (
                  <motion.div
                     key={project.id}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.6, delay: index * 0.1 }}
                     className="group"
                  >
                     <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                        {/* Image Section */}
                        <div className="relative h-64 overflow-hidden">
                           <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                           />
                           {/* Gradient Overlay */}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                           {/* Year Badge */}
                           <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                              <span className="text-primary dark:text-primary-light font-bold text-sm">{project.date}</span>
                           </div>

                           {/* Icon */}
                           <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm p-3 rounded-full shadow-lg text-primary dark:text-primary-light transform group-hover:rotate-12 transition-transform duration-300">
                              {React.createElement(iconMap[project.icon], { fontSize: "large" })}
                           </div>

                           {/* Project Number */}
                           <div className="absolute bottom-4 left-4 text-white/30 font-display font-bold text-6xl leading-none">
                              {String(index + 1).padStart(2, '0')}
                           </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 flex-1 flex flex-col">
                           {/* Tags */}
                           <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag, i) => (
                                 <span
                                    key={i}
                                    className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary-light text-xs font-semibold rounded-full"
                                 >
                                    {tag}
                                 </span>
                              ))}
                           </div>

                           {/* Title */}
                           <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-primary-light transition-colors leading-tight">
                              {project.title}
                           </h3>

                           {/* Keywords */}
                           <div className="mb-4">
                              <div className="flex flex-wrap gap-2">
                                 {project.keywords.map((keyword, i) => (
                                    <span
                                       key={i}
                                       className="text-sm font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-lg"
                                    >
                                       {keyword}
                                    </span>
                                 ))}
                              </div>
                           </div>

                           {/* Summary - Expandable */}
                           <div className="mb-6 flex-1">
                              <AnimatePresence mode="wait">
                                 <motion.p
                                    initial={false}
                                    className={`text-gray-600 dark:text-gray-300 leading-relaxed ${expandedCard === project.id ? '' : 'line-clamp-3'
                                       }`}
                                 >
                                    {project.summary}
                                 </motion.p>
                              </AnimatePresence>

                              {project.summary.length > 150 && (
                                 <button
                                    onClick={() => toggleExpand(project.id)}
                                    className="mt-2 text-primary dark:text-primary-light font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                                 >
                                    {expandedCard === project.id ? 'Show Less' : 'Read More'}
                                    <KeyboardArrowDownIcon
                                       className={`transform transition-transform ${expandedCard === project.id ? 'rotate-180' : ''
                                          }`}
                                       fontSize="small"
                                    />
                                 </button>
                              )}
                           </div>

                           {/* Impact Statement */}
                           <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-green-500/5 dark:from-primary/10 dark:to-green-500/10 rounded-xl border-l-4 border-primary">
                              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                                 🎯 Impact
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                                 {project.impact}
                              </p>
                           </div>

                           {/* Action Buttons */}
                           <div className="flex flex-wrap gap-3">
                              <Link
                                 to={`/research/${project.id}`}
                                 className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group/btn"
                              >
                                 View Details
                                 <ArrowForwardIcon className="group-hover/btn:translate-x-1 transition-transform" fontSize="small" />
                              </Link>

                              {project.publicationLink && (
                                 <a
                                    href={project.publicationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 text-primary dark:text-primary-light font-bold text-sm rounded-xl border-2 border-primary dark:border-primary-light hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group/btn"
                                 >
                                    Publication
                                    <OpenInNewIcon className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fontSize="small" />
                                 </a>
                              )}
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="text-center mt-20"
            >
               <div className="inline-block p-8 bg-gradient-to-r from-primary/10 via-green-500/10 to-primary/10 dark:from-primary/20 dark:via-green-500/20 dark:to-primary/20 rounded-2xl border border-primary/20 dark:border-primary/30">
                  <p className="text-gray-700 dark:text-gray-200 text-lg mb-4 font-medium">
                     Interested in collaboration or want to learn more about my research?
                  </p>
                  <Link
                     to="/contact"
                     className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                  >
                     Get in Touch
                     <ArrowForwardIcon className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default Research;
