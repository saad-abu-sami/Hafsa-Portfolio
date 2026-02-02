
import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/achievementsData';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2
      }
   }
};

const cardVariants = {
   hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9
   },
   visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
         type: "spring",
         bounce: 0.4,
         duration: 0.8
      }
   }
};

const Achievements = () => {
   const [open, setOpen] = React.useState(false);
   const [selectedAchievement, setSelectedAchievement] = React.useState(null);

   const handleOpen = (achievement) => {
      setSelectedAchievement(achievement);
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
      setTimeout(() => setSelectedAchievement(null), 200);
   };

   return (
      <section id="achievements" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div
               animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
               transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
               className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            ></motion.div>
            <motion.div
               animate={{ x: [0, -30, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
               transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", delay: 1 }}
               className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
            ></motion.div>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-16"
            >
               <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  Achievements & Awards
               </h2>
               <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6"></div>
               <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                  Recognitions and milestones that mark my journey of excellence and impact.
               </p>
            </motion.div>

            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
               {achievements.map((achievement, index) => {
                  const Icon = achievement.icon || EmojiEventsIcon;
                  return (
                     <motion.div
                        key={achievement.id}
                        variants={cardVariants}
                        custom={index}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 flex flex-col h-full"
                     >
                        {/* Image Section */}
                        <div className="relative h-48 overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                           <motion.img
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-full object-cover"
                           />
                           <div className={`absolute top-4 right-4 z-20 p-2 rounded-lg ${achievement.color} backdrop-blur-sm shadow-lg`}>
                              <Icon />
                           </div>
                           <div className="absolute bottom-4 left-4 z-20 text-white">
                              <span className="text-xs font-bold px-2 py-1 bg-white/20 backdrop-blur-md rounded-full mb-2 inline-block">
                                 {achievement.category}
                              </span>
                              <p className="text-sm font-medium opacity-90">{achievement.date}</p>
                           </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col flex-grow">
                           <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition-colors">
                              {achievement.title}
                           </h3>
                           <p className="text-primary dark:text-primary-light font-medium text-sm mb-3">
                              {achievement.organization}
                           </p>
                           <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                              {achievement.description}
                           </p>

                           <div className="mt-auto">
                              <motion.button
                                 onClick={() => handleOpen(achievement)}
                                 whileHover="hover"
                                 className="relative overflow-hidden w-full py-3 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold group/btn border border-gray-200 dark:border-gray-600 cursor-pointer"
                              >
                                 <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors duration-300">
                                    View Details
                                    <motion.span
                                       variants={{
                                          hover: { x: 5 }
                                       }}
                                    >
                                       <ArrowForwardIcon fontSize="small" />
                                    </motion.span>
                                 </span>
                                 <motion.div
                                    variants={{
                                       hover: { x: 0 }
                                    }}
                                    initial={{ x: "-100%" }}
                                    transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                                    className="absolute inset-0 bg-primary z-0"
                                 />
                              </motion.button>
                           </div>
                        </div>
                     </motion.div>
                  );
               })}
            </motion.div>
         </div>

         {/* Details Dialog */}
         {selectedAchievement && (
            <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
               <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose}></div>
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.9 }}
                  className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl relative z-10 max-h-[90vh] flex flex-col"
               >
                  {/* Modal Header Image */}
                  <div className="relative h-48 md:h-64 shrink-0">
                     <img
                        src={selectedAchievement.image}
                        alt={selectedAchievement.title}
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-md"
                     >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                     </button>
                     <div className="absolute bottom-6 left-6 text-white">
                        <div className="flex gap-2 items-center mb-2">
                           <span className="px-3 py-1 bg-primary/80 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                              {selectedAchievement.category}
                           </span>
                           <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold border border-white/30">
                              {selectedAchievement.date}
                           </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight">
                           {selectedAchievement.title}
                        </h3>
                     </div>
                  </div>

                  {/* Modal Body */}
                  <div className="p-8 overflow-y-auto custom-scrollbar">
                     <div className="flex items-center gap-3 mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                        <span className="font-semibold text-gray-500 dark:text-gray-400 uppercase text-sm">Organized By:</span>
                        <span className="font-bold text-gray-800 dark:text-white text-lg">{selectedAchievement.organization}</span>
                     </div>

                     <div className="prose dark:prose-invert max-w-none">
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                           {selectedAchievement.description}
                        </p>
                     </div>
                  </div>
               </motion.div>
            </div>
         )}
      </section>
   );
};

export default Achievements;
