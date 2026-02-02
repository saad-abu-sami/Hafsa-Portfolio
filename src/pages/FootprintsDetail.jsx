
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';
import CategoryIcon from '@mui/icons-material/Category';
import NearMeIcon from '@mui/icons-material/NearMe';
import { footprintsData } from '../data/footprintsData.jsx';

const FootprintsDetail = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const trip = footprintsData.find(item => item.id === parseInt(id));

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   if (!trip) {
      return (
         <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="text-center">
               <h2 className="text-3xl font-bold mb-4">Trip Not Found</h2>
               <button
                  onClick={() => navigate('/')}
                  className="px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors"
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
               className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 mb-8 transition-colors group"
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
                     src={trip.image}
                     alt={trip.title}
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                     <div className="flex items-center gap-4 mb-3 text-sm md:text-base opacity-90">
                        <span className="flex items-center gap-1">
                           <CalendarTodayIcon fontSize="small" /> {trip.date}
                        </span>
                        <span className="w-1 h-1 bg-white rounded-full"></span>
                        <span className="flex items-center gap-1">
                           <PlaceIcon fontSize="small" /> {trip.location}
                        </span>
                     </div>
                     <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                        {trip.title}
                     </h1>
                  </div>
               </div>

               <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                     <div
                        className="prose dark:prose-invert max-w-none prose-headings:text-cyan-600 dark:prose-headings:text-cyan-400 prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-4 prose-h3:mt-8 prose-p:mb-4 prose-ul:mb-4 prose-li:mb-2"
                        dangerouslySetInnerHTML={{ __html: trip.fullContent }}
                     />
                  </div>

                  <div className="space-y-6">
                     <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 sticky top-24">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                           Trip Details
                        </h3>

                        <div className="space-y-4">
                           <div className="flex items-start gap-3">
                              <CategoryIcon className="text-cyan-600 dark:text-cyan-400 mt-1" />
                              <div>
                                 <p className="text-sm text-gray-500 dark:text-gray-400">Category</p>
                                 <p className="font-semibold text-gray-800 dark:text-white">{trip.category}</p>
                              </div>
                           </div>

                           <div className="flex items-start gap-3">
                              <PlaceIcon className="text-cyan-600 dark:text-cyan-400 mt-1" />
                              <div>
                                 <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                 <p className="font-semibold text-gray-800 dark:text-white">{trip.location}</p>
                              </div>
                           </div>

                           <div className="flex items-start gap-3">
                              <NearMeIcon className="text-cyan-600 dark:text-cyan-400 mt-1" />
                              <div>
                                 <p className="text-sm text-gray-500 dark:text-gray-400">Coordinates</p>
                                 <p className="font-semibold text-gray-800 dark:text-white">{trip.coordinates}</p>
                              </div>
                           </div>

                           <div className="flex items-start gap-3">
                              <CalendarTodayIcon className="text-cyan-600 dark:text-cyan-400 mt-1" />
                              <div>
                                 <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                                 <p className="font-semibold text-gray-800 dark:text-white">{trip.date}</p>
                              </div>
                           </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                           <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Tags</p>
                           <div className="flex flex-wrap gap-2">
                              {trip.tags.map((tag, i) => (
                                 <span key={i} className="text-xs font-medium px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-full">
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default FootprintsDetail;
