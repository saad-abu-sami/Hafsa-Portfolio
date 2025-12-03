import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShareIcon from '@mui/icons-material/Share';
import { researchData } from '../data/researchData.jsx';

const ResearchDetail = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const research = researchData.find(item => item.id === parseInt(id));

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   if (!research) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="text-center">
               <h2 className="text-3xl font-bold mb-4">Research Not Found</h2>
               <button
                  onClick={() => navigate('/')}
                  className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
               >
                  Go Home
               </button>
            </div>
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-12 transition-colors duration-300">
         <div className="container mx-auto px-6 max-w-4xl">
            <motion.button
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               onClick={() => navigate('/')}
               className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light mb-8 transition-colors group"
            >
               <ArrowBackIcon className="group-hover:-translate-x-1 transition-transform" />
               Back to Portfolio
            </motion.button>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
            >
               <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-xl">
                  <img
                     src={research.image}
                     alt={research.title}
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                     <div className="flex items-center gap-4 mb-3 text-sm md:text-base opacity-90">
                        <span className="flex items-center gap-1">
                           <CalendarTodayIcon fontSize="small" /> {research.date}
                        </span>
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        <span>{research.tags.join(', ')}</span>
                     </div>
                     <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                        {research.title}
                     </h1>
                  </div>
               </div>

               <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                     <div
                        className="prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: research.fullContent }}
                     />
                  </div>

                  <div className="space-y-6">
                     <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 sticky top-24">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                           Publication Details
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                           This research has been published in peer-reviewed journals and presented at international conferences.
                        </p>
                        <a
                           href={research.publicationLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block w-full py-3 bg-primary hover:bg-primary-dark text-white text-center rounded-xl font-semibold transition-colors shadow-lg shadow-primary/30"
                        >
                           View Publication
                        </a>
                        <button className="w-full mt-3 py-3 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                           <ShareIcon fontSize="small" /> Share Research
                        </button>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default ResearchDetail;
