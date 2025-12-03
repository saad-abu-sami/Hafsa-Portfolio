import React from 'react';
import { motion } from 'framer-motion';
import LearningProgress from '../components/LearningProgress';

const About = () => {
   return (
      <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
         <div className="container mx-auto px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-4xl mx-auto"
            >
               <h2 className="text-4xl font-display font-bold text-center text-primary-dark dark:text-primary-light mb-12">About Me</h2>

               <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                     <p>
                        I am an agriculturist with a strong academic foundation in Crop Science, completing both my BSc and MS from Bangladesh Agricultural University (BAU). My undergraduate training gave me a deep understanding of crops, soil, the environment, and their interactions. During my MS, I specialized in crop physiology and climate-resilient cultivation, with research focused on stress physiology and improving plant performance under challenging conditions.
                     </p>
                     <p>
                        Currently, I am beginning my professional journey at Meera Seed Limited as part of the seed industry, where I aim to bridge scientific knowledge with real-world agricultural innovation. Here, I am learning modern cultivation systems—including greenhouse-based climate-resilient technologies—and applying my expertise to support sustainable, eco-friendly agricultural solutions.
                     </p>
                     <p>
                        Over time, I aspire to grow into a crop science specialist, contributing to modern agriculture through green technologies, climate-smart practices, and research-driven insights.
                     </p>
                  </div>

                  <div>
                     <div className="bg-green-50 dark:bg-gray-700 p-8 rounded-2xl border-l-4 border-primary mb-8">
                        <h3 className="text-xl font-bold text-primary-dark dark:text-primary-light mb-4">My Mission</h3>
                        <p className="text-gray-700 dark:text-gray-200 italic">
                           "To bridge the gap between traditional farming and modern agricultural technologies by promoting environmentally safe, climate-resilient practices that strengthen food security for future generations in the face of rising climate challenges."
                        </p>
                     </div>

                     <LearningProgress />
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default About;
