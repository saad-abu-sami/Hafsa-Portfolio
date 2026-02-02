import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShareIcon from '@mui/icons-material/Share';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Spa, Biotech, Science, Agriculture, WaterDrop, AcUnit, Nature } from '@mui/icons-material';
import { researchData } from '../data/researchData.jsx';

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

   const handleShare = () => {
      if (navigator.share) {
         navigator.share({
            title: research.title,
            text: research.summary,
            url: window.location.href,
         });
      } else {
         navigator.clipboard.writeText(window.location.href);
         alert('Link copied to clipboard!');
      }
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-white dark:from-gray-950 dark:via-emerald-950/30 dark:to-gray-950 pt-24 pb-12 transition-colors duration-300">
         <div className="container mx-auto px-6 max-w-6xl">
            {/* Back Button */}
            <motion.button
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               onClick={() => navigate('/')}
               className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light mb-8 transition-colors group font-semibold"
            >
               <ArrowBackIcon className="group-hover:-translate-x-1 transition-transform" />
               Back to Portfolio
            </motion.button>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
            >
               {/* Hero Image Section */}
               <div className="relative h-72 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
                  <img
                     src={research.image}
                     alt={research.title}
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Floating Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                     <div className="flex flex-wrap items-center gap-4 mb-4 text-sm md:text-base">
                        <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                           <CalendarTodayIcon fontSize="small" /> {research.date}
                        </span>
                        <div className="flex items-center gap-2">
                           {React.createElement(iconMap[research.icon], { fontSize: "large" })}
                        </div>
                     </div>
                     <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4">
                        {research.title}
                     </h1>
                     <div className="flex flex-wrap gap-2">
                        {research.tags.map((tag, i) => (
                           <span key={i} className="px-3 py-1 bg-white/90 text-primary-dark text-sm font-semibold rounded-full">
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Content Grid */}
               <div className="grid lg:grid-cols-3 gap-12">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-8">
                     {/* Keywords Section */}
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                     >
                        <div className="flex items-center gap-2 mb-4">
                           <LocalOfferIcon className="text-primary dark:text-primary-light" />
                           <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Key Research Areas</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                           {research.keywords.map((keyword, i) => (
                              <span
                                 key={i}
                                 className="px-5 py-2.5 bg-gradient-to-r from-primary/10 to-green-500/10 dark:from-primary/20 dark:to-green-500/20 text-primary-dark dark:text-primary-light font-semibold rounded-xl border border-primary/20 dark:border-primary/30 text-base"
                              >
                                 {keyword}
                              </span>
                           ))}
                        </div>
                     </motion.div>

                     {/* Summary Section */}
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                     >
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Research Summary</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                           {research.summary}
                        </p>
                     </motion.div>

                     {/* Impact Section */}
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-primary/5 via-green-500/5 to-emerald-500/5 dark:from-primary/10 dark:via-green-500/10 dark:to-emerald-500/10 p-8 rounded-2xl shadow-lg border-l-4 border-primary"
                     >
                        <div className="flex items-center gap-2 mb-4">
                           <TrendingUpIcon className="text-primary dark:text-primary-light" fontSize="large" />
                           <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Research Impact</h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-lg font-medium italic">
                           {research.impact}
                        </p>
                     </motion.div>

                     {/* Short Name */}
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
                     >
                        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">Project Identifier</h3>
                        <p className="text-xl font-bold text-primary dark:text-primary-light">
                           {research.shortName}
                        </p>
                     </motion.div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                     {/* Publication Card */}
                     <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24"
                     >
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                           Publication Details
                        </h3>

                        {research.publicationLink ? (
                           <>
                              {research.publicationText && (
                                 <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                                    {research.publicationText}
                                 </p>
                              )}
                              <a
                                 href={research.publicationLink}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="block w-full py-3 bg-primary hover:bg-primary-dark text-white text-center rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mb-3 flex items-center justify-center gap-2"
                              >
                                 View Publication
                                 <OpenInNewIcon fontSize="small" />
                              </a>
                           </>
                        ) : (
                           <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                              This research is currently under review for publication in peer-reviewed journals.
                           </p>
                        )}

                        <button
                           onClick={handleShare}
                           className="w-full py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                        >
                           <ShareIcon fontSize="small" /> Share Research
                        </button>
                     </motion.div>

                     {/* Quick Stats */}
                     <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-primary/10 to-green-500/10 dark:from-primary/20 dark:to-green-500/20 p-6 rounded-2xl border border-primary/20 dark:border-primary/30"
                     >
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Research Highlights</h3>
                        <div className="space-y-3">
                           <div className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-300 text-sm">Year</span>
                              <span className="font-bold text-primary dark:text-primary-light">{research.date}</span>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-300 text-sm">Focus Areas</span>
                              <span className="font-bold text-primary dark:text-primary-light">{research.keywords.length}</span>
                           </div>
                           <div className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-300 text-sm">Status</span>
                              <span className="font-bold text-green-600 dark:text-green-400">
                                 {research.publicationLink ? 'Published' : 'In Progress'}
                              </span>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </div>

               {/* Related Research CTA */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-16 text-center bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
               >
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                     Explore More Research
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                     Discover other projects exploring stress physiology, climate resilience, and sustainable agriculture
                  </p>
                  <button
                     onClick={() => navigate('/#research')}
                     className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                     View All Research
                     <ArrowBackIcon className="rotate-180" />
                  </button>
               </motion.div>
            </motion.div>
         </div>
      </div>
   );
};

export default ResearchDetail;
