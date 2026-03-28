import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import SpaIcon from '@mui/icons-material/Spa';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
                  href="https://www.facebook.com/share/17Nuwxo95n/"
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
                  href="https://x.com/HTasnim42190"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'white', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1) translateY(-3px)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' } }}
               >
                  <XIcon />
               </IconButton>
               <IconButton
                  component="a"
                  href="https://www.instagram.com/htasnimjuthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'white', transition: 'all 0.3s ease', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', transform: 'scale(1.1) translateY(-3px)', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' } }}
               >
                  <InstagramIcon />
               </IconButton>
            </div>

         </div>

         {/* Bottom Bar — pr-24 clears the fixed voice-nav button (right-6) */}
         <div
            className="w-full mt-10 border-t border-white/10 pt-5 pb-4 pl-8 pr-24 relative z-10 flex flex-wrap items-center justify-between gap-y-3 gap-x-6"
            style={{ fontSize: '0.72rem', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.45)' }}
         >
            {/* Left: copyright */}
            <span className="uppercase tracking-widest">
               © {new Date().getFullYear()} &nbsp;•&nbsp; Hafsa Tasnim &nbsp;•&nbsp; All rights reserved
            </span>

            {/* Right group: Developed by SAMI + WhatsApp */}
            <div className="flex flex-wrap items-center gap-5">
               {/* Developed by SAMI */}
               <span className="uppercase tracking-widest">
                  Developed by&nbsp;
                  <span
                     style={{
                        color: '#4fd1c5',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textShadow: '0 0 8px rgba(79,209,197,0.6)',
                     }}
                  >
                     SAMI
                  </span>
               </span>

               {/* WhatsApp pill link */}
               <a
                  href="https://wa.me/8801400159183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 hover:border-[#25d366] hover:text-[#25d366] transition-all duration-300"
                  style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.55)' }}
               >
                  <WhatsAppIcon style={{ fontSize: '0.9rem' }} />
                  <span>WhatsApp Me</span>
               </a>
            </div>
         </div>

      </footer>
   );
};

export default Footer;
