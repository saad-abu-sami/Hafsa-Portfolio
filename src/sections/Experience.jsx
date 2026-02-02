import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import { experiences } from '../data/experienceData';

const Experience = () => {
   const [expandedId, setExpandedId] = useState(null);
   const [filter, setFilter] = useState('All');

   const categories = ['All', 'Intern', 'Research Assistant', 'Volunteer', 'Other'];

   const filteredExperiences = filter === 'All'
      ? experiences
      : experiences.filter(exp => exp.category === filter);

   const toggleExpand = (id) => {
      setExpandedId(expandedId === id ? null : id);
   };

   return (
      <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-950 dark:to-green-950 relative transition-colors duration-300">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2E7D32_1px,transparent_1px)] [background-size:16px_16px]"></div>

         <div className="container mx-auto px-6 relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12"
            >
               <h2 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-primary via-green-600 to-primary-dark bg-clip-text text-transparent mb-4">
                  Experience
               </h2>
               <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6"></div>
               <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Practical engagement in the field and laboratory
               </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="flex flex-wrap justify-center gap-3 mb-12"
            >
               {categories.map((category) => (
                  <button
                     key={category}
                     onClick={() => setFilter(category)}
                     className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${filter === category
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary'
                        }`}
                  >
                     {category}
                  </button>
               ))}
            </motion.div>

            {/* Experience Cards */}
            <div className="max-w-5xl mx-auto space-y-6">
               <AnimatePresence mode="popLayout">
                  {filteredExperiences.map((exp, index) => {
                     const IconComponent = exp.icon;
                     const isExpanded = expandedId === exp.id;

                     return (
                        <motion.div
                           key={exp.id}
                           layout
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -20 }}
                           transition={{ delay: index * 0.1, layout: { duration: 0.3 } }}
                           className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 ${exp.borderColor} overflow-hidden hover:shadow-2xl transition-all duration-300 group`}
                        >
                           {/* Main Content - Always Visible */}
                           <div className="p-6 md:p-8">
                              <div className="flex gap-6 items-start">
                                 {/* Icon */}
                                 <div className={`p-4 rounded-xl ${exp.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    {IconComponent && <IconComponent fontSize="large" />}
                                 </div>

                                 {/* Content */}
                                 <div className="flex-1 min-w-0">
                                    {/* Category Badge */}
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${exp.color}`}>
                                       {exp.category}
                                    </span>

                                    {/* Role & Company */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                                       {exp.role}
                                    </h3>
                                    <p className="text-primary dark:text-primary-light font-semibold text-lg mb-2">
                                       {exp.company}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                       {exp.period} • {exp.location}
                                    </p>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                       {exp.description}
                                    </p>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                       {exp.skills.map((skill, i) => (
                                          <span
                                             key={i}
                                             className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                                          >
                                             {skill}
                                          </span>
                                       ))}
                                    </div>

                                    {/* Expand Button */}
                                    <button
                                       onClick={() => toggleExpand(exp.id)}
                                       className="inline-flex items-center gap-2 text-primary dark:text-primary-light font-semibold hover:gap-3 transition-all duration-300"
                                    >
                                       {isExpanded ? 'Show Less' : 'Show More Details'}
                                       <ExpandMoreIcon
                                          className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                                             }`}
                                       />
                                    </button>
                                 </div>
                              </div>
                           </div>

                           {/* Expandable Section - Responsibilities & Gallery */}
                           <AnimatePresence>
                              {isExpanded && (
                                 <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden bg-gray-50/50 dark:bg-gray-800/50"
                                 >
                                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                       <div className="flex flex-col md:flex-row gap-8 pt-6 border-t-2 border-gray-100 dark:border-gray-700">

                                          {/* Responsibilities */}
                                          <div className="flex-1">
                                             <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                                                Key Responsibilities
                                             </h4>
                                             <ul className="space-y-3">
                                                {exp.responsibilities.map((resp, i) => (
                                                   <motion.li
                                                      key={i}
                                                      initial={{ opacity: 0, x: -20 }}
                                                      animate={{ opacity: 1, x: 0 }}
                                                      transition={{ delay: i * 0.1 }}
                                                      className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                                                   >
                                                      <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></span>
                                                      <span>{resp}</span>
                                                   </motion.li>
                                                ))}
                                             </ul>
                                          </div>

                                          {/* Gallery Section - Using WorkIcon which we know is safe */}
                                          <div className="flex-1">
                                             <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                                                <WorkIcon className="text-primary" />
                                                Work Gallery
                                             </h4>

                                             <div className="grid grid-cols-2 gap-3">
                                                {/* Existing Images */}
                                                {exp.gallery && exp.gallery.map((img, i) => (
                                                   <motion.div
                                                      key={i}
                                                      initial={{ opacity: 0, scale: 0.8 }}
                                                      animate={{ opacity: 1, scale: 1 }}
                                                      transition={{ delay: i * 0.1 }}
                                                      className="relative aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm cursor-pointer"
                                                   >
                                                      <img
                                                         src={img}
                                                         alt={`${exp.role} work ${i + 1}`}
                                                         className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                      />
                                                   </motion.div>
                                                ))}

                                                {/* Upload Placeholder */}
                                                <motion.button
                                                   whileHover={{ scale: 1.02 }}
                                                   whileTap={{ scale: 0.98 }}
                                                   onClick={() => alert("This gallery feature allows displaying work photos.")}
                                                   className="aspect-video rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center gap-2 text-gray-400 dark:text-gray-500 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors duration-300 bg-white dark:bg-gray-800/50"
                                                >
                                                   <span className="text-2xl font-light">+</span>
                                                   <span className="text-sm font-medium">Add Photo</span>
                                                </motion.button>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        </motion.div>
                     );
                  })}
               </AnimatePresence>
            </div>

            {/* No Results Message */}
            {filteredExperiences.length === 0 && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
               >
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                     No experiences found in this category.
                  </p>
               </motion.div>
            )}
         </div>
      </section>
   );
};

export default Experience;
