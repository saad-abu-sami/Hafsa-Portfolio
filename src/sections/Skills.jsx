import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Counter = ({ value }) => {
   const [hasAnimated, setHasAnimated] = useState(false);

   return (
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
         {({ isVisible }) => {
            if (isVisible && !hasAnimated) {
               setHasAnimated(true);
            }
            return (
               <span>
                  {hasAnimated ? <CountUp end={value} duration={2} /> : 0}
               </span>
            );
         }}
      </VisibilitySensor>
   );
};

const SkillBar = ({ name, value, delay, color }) => (
   <div className="mb-8">
      <div className="flex justify-between items-end mb-2">
         <span className="font-medium text-gray-700 dark:text-gray-200 text-lg">{name}</span>
         <div className="flex items-baseline gap-1 text-primary-dark dark:text-primary-light">
            <span className="text-2xl font-bold">
               <Counter value={value} />
            </span>
            <span className="text-sm font-medium">%</span>
         </div>
      </div>
      <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
         <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
            className={`h-full rounded-full ${color}`}
         />
      </div>
   </div>
);

const TiltCard = ({ children, className }) => {
   const x = useMotionValue(0);
   const y = useMotionValue(0);

   const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
   const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

   const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
   const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

   const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
   };

   const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
   };

   return (
      <motion.div
         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         className={className}
      >
         <div style={{ transform: "translateZ(50px)" }}>
            {children}
         </div>
      </motion.div>
   );
};

const Skills = () => {
   const agriSkills = [
      { name: 'Field-Based Crop Management', value: 80 },
      { name: 'Agronomic practices for healthy crop development', value: 80 },
      { name: 'Controlled Environment Agriculture', value: 85 },
      { name: 'Greenhouse management', value: 90 },
      { name: 'Hydroponic system operation', value: 83 },
      { name: 'Climate-resilient and sustainable plant production', value: 85 },
   ];

   const techSkills = [
      { name: 'R programming', value: 75 },
      { name: 'Sigmaplot', value: 80 },
      { name: 'MS Excel', value: 95 },
      { name: 'Scientific manuscript writing', value: 82 },
      { name: 'MS Word', value: 94 },
   ];

   return (
      <section id="skills" className="py-20 bg-background dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
         {/* Background Pattern */}
         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2E7D32_1px,transparent_1px)] [background-size:16px_16px]"></div>

         <div className="container mx-auto px-6 relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
            >
               <h2 className="text-4xl font-display font-bold text-primary-dark dark:text-primary-light mb-4">My Skills</h2>
               <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Combining traditional agricultural knowledge with modern technology to drive innovation.
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 perspective-1000">
               {/* Agricultural Skills */}
               <TiltCard className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-green-100 dark:border-gray-700 transform transition-all duration-200 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-2">
                     <span className="w-2 h-8 bg-primary rounded-full"></span>
                     Agricultural Expertise
                  </h3>
                  <div>
                     {agriSkills.map((skill, index) => (
                        <SkillBar
                           key={skill.name}
                           name={skill.name}
                           value={skill.value}
                           delay={index * 0.1}
                           color="bg-primary"
                        />
                     ))}
                  </div>
               </TiltCard>

               {/* Technical Skills */}
               <TiltCard className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-green-100 dark:border-gray-700 transform transition-all duration-200 hover:shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-2">
                     <span className="w-2 h-8 bg-secondary rounded-full"></span>
                     Technical Proficiency
                  </h3>
                  <div>
                     {techSkills.map((skill, index) => (
                        <SkillBar
                           key={skill.name}
                           name={skill.name}
                           value={skill.value}
                           delay={index * 0.1}
                           color="bg-secondary"
                        />
                     ))}
                  </div>
               </TiltCard>
            </div>
         </div>
      </section>
   );
};

export default Skills;
