
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-gradient-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Floating particles/shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-48 h-48 rounded-full bg-techguru-blue/10 animate-float"></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 rounded-full bg-techguru-purple-light/10 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-techguru-blue/10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full bg-techguru-purple-light/10 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Pack. Optimize.<br />Deploy. Scale Up!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
              Your one-man army for bulletproof cloud, DevOps, and AI solutions.
              Lightning-fast project turnarounds and one-click digital delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-neon text-lg px-8 py-6" size="lg">
                Launch Your Project
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-techguru-blue hover:bg-techguru-blue/10" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-techguru-blue via-techguru-purple-light to-techguru-blue blur-md animate-pulse opacity-70"></div>
              <img 
                src="/lovable-uploads/3601753f-cae6-4218-bbcc-7ea43cbf5661.png" 
                alt="Docker and Cloud Technologies" 
                className="relative z-10 rounded-lg max-w-full w-[450px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-techguru-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
