
import React from 'react';
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from 'react';

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Pack. Optimize. Deploy. Scale Up!';
  const typingSpeed = 100; // milliseconds per character
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;

    if (isTyping) {
      typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(false);
            setTimeout(() => {
              setTypedText('');
              currentIndex = 0;
              setIsTyping(true);
            }, 1500);
          }, 2000);
        }
      }, typingSpeed);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [isTyping]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
      }
    }, 530);

    return () => clearInterval(cursorBlinkInterval);
  }, []);

  return (
    <section id="home" className="hero-gradient-bg min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Floating particles/3D elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-48 h-48 rounded-full bg-techguru-blue/10 blur-md animate-float-slow"></div>
        <div className="absolute top-1/3 left-2/3 w-64 h-64 rounded-full bg-techguru-purple-light/20 blur-lg animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 left-1/5 w-32 h-32 rounded-full bg-techguru-blue/15 blur-md animate-float-slow" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-techguru-purple-light/10 to-techguru-blue/10 blur-xl animate-pulse-slow"></div>
        
        {/* 3D geometric shapes */}
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-tr from-techguru-blue/20 to-transparent transform rotate-45 animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/5 w-16 h-16 bg-gradient-to-bl from-techguru-purple-light/20 to-transparent rounded-md transform rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-techguru-blue to-techguru-purple-light font-montserrat">
              <span className="block">TechGuru</span>
              <div className="h-16 md:h-20 flex items-center justify-center lg:justify-start">
                <span className="inline-block">{typedText}</span>
                <span ref={cursorRef} className="inline-block w-1 h-10 bg-techguru-blue ml-1 transition-opacity"></span>
              </div>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl font-inter">
              Your one-man army for bulletproof cloud, DevOps, and AI solutions.
              Lightning-fast project turnarounds and one-click digital delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-neon text-lg px-8 py-6 relative overflow-hidden group" size="lg">
                <span className="absolute inset-0 bg-gradient-to-r from-techguru-blue to-techguru-purple-light opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                <span className="relative z-10">Launch Your Project</span>
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-techguru-blue hover:bg-techguru-blue/10 backdrop-blur-sm glassmorphism" size="lg">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative transform hover:scale-105 transition-transform duration-700 hover:rotate-1">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-techguru-blue via-techguru-purple-light to-techguru-blue blur-xl opacity-70 animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/3601753f-cae6-4218-bbcc-7ea43cbf5661.png" 
                alt="Docker and Cloud Technologies" 
                className="relative z-10 rounded-lg max-w-full w-[450px] glassmorphism-image"
              />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-techguru-blue/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -top-2 -left-2 w-12 h-12 bg-techguru-purple-light/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with enhanced styling */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
        <span className="text-white mb-2 font-inter">Scroll Down</span>
        <svg className="w-6 h-6 text-techguru-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
