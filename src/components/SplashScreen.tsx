
import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onDismiss: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onDismiss }) => {
  useEffect(() => {
    // Auto-dismiss after 3.5 seconds
    const timer = setTimeout(() => {
      onDismiss();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-techguru-purple-dark bg-opacity-98 backdrop-blur-sm animate-fade-in">
      {/* Background grid lines - made more subtle but sharper */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,174,219,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(30,174,219,0.07)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40"></div>
      
      {/* Background elements - reduced blur for more definition */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-techguru-blue/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-techguru-purple-light/20 rounded-full blur-2xl"></div>
      
      <div className="text-center relative z-10">
        <div className="mb-6 flex items-center justify-center">
          <div className="relative w-32 h-32 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-techguru-blue via-techguru-purple-light to-techguru-blue opacity-70 blur-md animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-techguru-blue via-techguru-purple-light to-techguru-blue opacity-0 group-hover:opacity-90 blur-lg transition-opacity duration-500"></div>
            <img 
              src="/lovable-uploads/5ff34453-7603-4fd0-88ba-c12a1c31757c.png" 
              alt="TechGuru Logo" 
              className="relative z-10 w-full h-full"
            />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 text-white neon-glow font-montserrat tracking-wider">TechGuru</h1>
        <div className="overflow-hidden mb-8">
          <p className="text-xl text-white tracking-[0.2em] animate-typing whitespace-nowrap overflow-hidden border-r-4 border-techguru-blue animate-blink-caret font-inter">
            PACK. OPTIMIZE. DEPLOY. SCALE UP.
          </p>
        </div>
        
        <button
          onClick={onDismiss}
          className="px-6 py-2 bg-transparent text-techguru-blue border border-techguru-blue rounded-md hover:bg-techguru-blue/10 transition-colors duration-300 font-inter relative group overflow-hidden"
        >
          <span className="absolute inset-0 bg-techguru-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
          <span className="relative z-10">Skip</span>
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
