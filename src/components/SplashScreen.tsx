
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-techguru-purple-dark bg-opacity-95 backdrop-blur-sm animate-fade-in">
      <div className="text-center">
        <div className="mb-6 flex items-center justify-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-techguru-blue via-techguru-purple-light to-techguru-blue opacity-70 blur-md animate-pulse"></div>
            <img 
              src="/lovable-uploads/5ff34453-7603-4fd0-88ba-c12a1c31757c.png" 
              alt="TechGuru Logo" 
              className="relative z-10 w-full h-full"
            />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-white neon-glow">TechGuru</h1>
        <div className="overflow-hidden mb-8">
          <p className="text-xl text-white tracking-[0.2em] animate-typing whitespace-nowrap overflow-hidden border-r-4 border-techguru-blue animate-blink-caret">
            PACK. OPTIMIZE. DEPLOY. SCALE UP.
          </p>
        </div>
        
        <button
          onClick={onDismiss}
          className="px-6 py-2 bg-techguru-blue text-white rounded-md hover:bg-techguru-blue-light transition-colors"
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
