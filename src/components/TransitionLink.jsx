import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTransition } from '../context/TransitionContext';

const TransitionLink = ({ to, children, className, ...props }) => {
   const navigate = useNavigate();
   const location = useLocation();
   const { startTransition, endTransition } = useTransition();

   const handleClick = (e) => {
      e.preventDefault();
      if (location.pathname === to) return;

      startTransition(); // Trigger curtain close

      // Wait for curtain to close (matches animation duration)
      setTimeout(() => {
         navigate(to);

         // Wait for new page to mount then open curtain
         setTimeout(() => {
            endTransition();
         }, 200);
      }, 1000);
   };

   return (
      <a href={to} onClick={handleClick} className={className} {...props}>
         {children}
      </a>
   );
};

export default TransitionLink;
