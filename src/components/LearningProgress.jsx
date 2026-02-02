import React from 'react';
import { motion } from 'framer-motion';

const LearningProgress = () => {
   const data = [
      { label: 'Research Papers Read', count: 60, color: 'bg-blue-500' },
      { label: 'Field Hours', count: 500, color: 'bg-green-500' },
      { label: 'Lab Hours', count: 600, color: 'bg-purple-500' },
   ];

   return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 mt-8">
         <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Live Stats
         </h3>
         <div className="space-y-6">
            {data.map((item, index) => (
               <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                     <span className="text-gray-600 dark:text-gray-300 font-medium">{item.label}</span>
                     <span className="font-bold text-gray-800 dark:text-white">{item.count}</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                     <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 2, delay: index * 0.2, ease: "easeOut" }}
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${Math.min(item.count / 10, 100)}%` }} // Mock calculation
                     />
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default LearningProgress;
