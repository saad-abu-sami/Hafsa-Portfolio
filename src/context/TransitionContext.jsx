import React, { createContext, useContext, useState } from 'react';

const TransitionContext = createContext();

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
   const [isTransitioning, setIsTransitioning] = useState(false);

   const startTransition = () => {
      setIsTransitioning(true);
      // We don't auto-reset here; the PageTransition component will handle the "exit" phase
      // or we can handle it here.
      // Let's handle the "end" of the transition in the PageTransition component
      // after the animation completes.
   };

   const endTransition = () => {
      setIsTransitioning(false);
   };

   return (
      <TransitionContext.Provider value={{ isTransitioning, startTransition, endTransition }}>
         {children}
      </TransitionContext.Provider>
   );
};
