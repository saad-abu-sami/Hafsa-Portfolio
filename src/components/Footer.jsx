import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SpaIcon from '@mui/icons-material/Spa';

const Footer = () => {
   return (
      <footer className="bg-primary-dark dark:bg-gray-950 text-white py-12 relative overflow-hidden transition-colors duration-300">
         {/* Animated Background Elements */}
         <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute -bottom-10 -left-10 animate-float">
               <SpaIcon style={{ fontSize: 150 }} />
            </div>
            <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '2s' }}>
               <SpaIcon style={{ fontSize: 100 }} />
            </div>
         </div>

         <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6">
               <SpaIcon />
               <span className="font-display font-bold text-2xl">Hafsa Tasnim</span>
            </div>

            <div className="flex gap-4 mb-8">
               <IconButton
                  component="a"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'white', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1) translateY(-3px)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' } }}
               >
                  <FacebookIcon />
               </IconButton>
               <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/hafsa-tasnim-4535241b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'white', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1) translateY(-3px)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' } }}
               >
                  <LinkedInIcon />
               </IconButton>
               <IconButton
                  component="a"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'white', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1) translateY(-3px)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' } }}
               >
                  <TwitterIcon />
               </IconButton>
               <IconButton
                  component="a"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'white', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1) translateY(-3px)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' } }}
               >
                  <InstagramIcon />
               </IconButton>
            </div>

            <p className="text-gray-300 text-sm text-center">
               © {new Date().getFullYear()} Hafsa Tasnim. All rights reserved.
               <br />
               Built with React & Tailwind CSS.
            </p>
         </div>
      </footer>
   );
};

export default Footer;
