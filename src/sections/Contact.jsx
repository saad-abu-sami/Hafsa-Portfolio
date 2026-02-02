import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TextField, Button, Snackbar, Alert, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const Contact = () => {
   const form = useRef();
   const [open, setOpen] = useState(false);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
      // Sign up at https://www.emailjs.com/
      // 1. Create a Service (e.g., Gmail) -> Get Service ID
      // 2. Create an Email Template -> Get Template ID
      // 3. Go to Account > API Keys -> Get Public Key

      const SERVICE_ID = 'service_ol6hxim';
      const TEMPLATE_ID = 'template_sn0jgwa';
      const PUBLIC_KEY = 'hiPlAGitgJTYMlYL9';

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
         .then((result) => {
            console.log(result.text);
            setOpen(true);
            setError(false);
            setFormData({ name: '', email: '', message: '' });
            setLoading(false);
         }, (error) => {
            console.log(error.text);
            setError(true);
            setOpen(true);
            setLoading(false);
         });
   };

   const handleClose = (event, reason) => {
      if (reason === 'clickaway') return;
      setOpen(false);
   };

   return (
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
         {/* Decorative Background */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/50 dark:bg-green-900/10 -skew-x-12 translate-x-20 -z-10"></div>

         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <h2 className="text-4xl font-display font-bold text-primary-dark dark:text-primary-light mb-6">Get In Touch</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                     Have a question about my research or want to collaborate on a project? Feel free to reach out!
                  </p>

                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div className="flex-1 min-w-0">
                           <h4 className="font-bold text-gray-800 dark:text-white">Email</h4>
                           <p className="text-gray-600 dark:text-gray-400 break-words">hafsatasnim03@gmail.com</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light">
                           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div className="flex-1 min-w-0">
                           <h4 className="font-bold text-gray-800 dark:text-white">Location</h4>
                           <p className="text-gray-600 dark:text-gray-400">4th Floor Building No 2, 6 Natak Sarani, Baily Road, Ramna, Dhaka 1000, Bangladesh</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-green-100 dark:border-gray-700"
               >
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                     <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        variant="outlined"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                     />
                     <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        variant="outlined"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                     />
                     <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
                     />
                     <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading}
                        endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                        sx={{
                           borderRadius: '12px',
                           py: 1.5,
                           background: 'linear-gradient(45deg, #2E7D32 30%, #66BB6A 90%)',
                           boxShadow: '0 3px 5px 2px rgba(46, 125, 50, .3)',
                           transition: 'transform 0.2s',
                           '&:hover': { transform: 'scale(1.02)' }
                        }}
                     >
                        {loading ? 'Sending...' : 'Send Message'}
                     </Button>
                  </form>
               </motion.div>
            </div>
         </div>

         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
               {error ? "Failed to send message. Please try again." : "Message sent successfully!"}
            </Alert>
         </Snackbar>
      </section>
   );
};

export default Contact;
