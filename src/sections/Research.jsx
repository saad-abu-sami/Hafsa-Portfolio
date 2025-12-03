import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { researchData } from '../data/researchData.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Research = () => {
   return (
      <section id="research" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
         <div className="container mx-auto px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center mb-16"
            >
               <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-dark dark:text-primary-light mb-4">
                  Research & Publications
               </h2>
               <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
               <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                  Exploring the frontiers of agricultural science to build a sustainable future.
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
               {researchData.map((item, index) => (
                  <motion.div
                     key={item.id}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                     <div className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-primary dark:text-primary-light">
                        {item.icon}
                     </div>

                     <div className="h-48 overflow-hidden">
                        <img
                           src={item.image}
                           alt={item.title}
                           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                     </div>

                     <div className="p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                           {item.tags.map((tag, i) => (
                              <span key={i} className="text-xs font-medium px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary-light rounded-full">
                                 {tag}
                              </span>
                           ))}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                           {item.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                           {item.summary}
                        </p>

                        <Link
                           to={`/research/${item.id}`}
                           className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                        >
                           Read Full Research <ArrowForwardIcon fontSize="small" />
                        </Link>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Research;
