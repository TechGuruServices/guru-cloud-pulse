
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import SplashScreen from '../components/SplashScreen';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    // Check user preference
    const userPreference = localStorage.getItem('theme');
    if (userPreference === 'light') {
      setIsDarkTheme(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkTheme) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="min-h-screen">
      {showSplash && <SplashScreen onDismiss={() => setShowSplash(false)} />}
      
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <PortfolioSection />
      <StatsSection />
      <ContactSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
