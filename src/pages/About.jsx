import React from 'react';
import AboutSection from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';

const About = () => {
   return (
      <div className="pt-16">
         <AboutSection />
         <Skills />
         <Experience />
      </div>
   );
};

export default About;
