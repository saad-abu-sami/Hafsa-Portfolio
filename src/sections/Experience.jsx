import React from 'react';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import ScienceIcon from '@mui/icons-material/Science';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const experiences = [
   {
      role: 'Intern',
      company: 'Bangladesh Rice Research Institute (BRRI)',
      period: 'Jan 2023 - Apr 2023',
      description: 'Assisted in field trials for new rice varieties. Collected data on plant height, tiller number, and yield components.',
      icon: <WorkIcon />,
      color: 'bg-blue-100 text-blue-600',
   },
   {
      role: 'Lab Assistant',
      company: 'Plant Tissue Culture Lab, SAU',
      period: 'Jun 2022 - Dec 2022',
      description: 'Maintained sterile conditions, prepared media, and monitored explant growth. Gained hands-on experience in micropropagation.',
      icon: <ScienceIcon />,
      color: 'bg-green-100 text-green-600',
   },
   {
      role: 'Volunteer',
      company: 'Green Earth Initiative',
      period: '2021 - Present',
      description: 'Organizing tree plantation drives and awareness campaigns about sustainable farming practices in rural areas.',
      icon: <VolunteerActivismIcon />,
      color: 'bg-orange-100 text-orange-600',
   },
];

const Experience = () => {
   return (
      <section id="experience" className="py-20 bg-background dark:bg-gray-900 relative transition-colors duration-300">
         <div className="container mx-auto px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-4xl font-display font-bold text-primary-dark dark:text-primary-light mb-4">Experience</h2>
               <p className="text-gray-600 dark:text-gray-400">Practical engagement in the field and laboratory.</p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-8">
               {experiences.map((exp, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.2 }}
                     className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 flex gap-6 items-start hover:shadow-lg transition-all"
                  >
                     <div className={`p-4 rounded-xl ${exp.color} shrink-0`}>
                        {exp.icon}
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.role}</h3>
                        <p className="text-primary dark:text-primary-light font-medium mb-2">{exp.company}</p>
                        <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Experience;
