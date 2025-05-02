
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-techguru-purple-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img 
                src="/lovable-uploads/5ff34453-7603-4fd0-88ba-c12a1c31757c.png" 
                alt="TechGuru Logo" 
                className="h-10 w-10 mr-3" 
              />
              <span className="text-2xl font-bold text-white">TechGuru</span>
            </a>
          </div>

          {isMobile ? (
            <>
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleTheme} 
                  className="p-2 rounded-full hover:bg-techguru-purple-light/20"
                  aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkTheme ? (
                    <Sun className="h-5 w-5 text-yellow-300" />
                  ) : (
                    <Moon className="h-5 w-5 text-techguru-purple-light" />
                  )}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white focus:outline-none"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
              </div>
              {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-techguru-purple-dark/95 backdrop-blur-lg shadow-xl animate-slide-up">
                  <div className="container mx-auto px-6 py-4 space-y-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 nav-link"
                      >
                        {link.name}
                      </a>
                    ))}
                    <Button className="btn-neon w-full">Get Started</Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="nav-link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={toggleTheme} 
                  className="p-2 rounded-full hover:bg-techguru-purple-light/20"
                  aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkTheme ? (
                    <Sun className="h-5 w-5 text-yellow-300" />
                  ) : (
                    <Moon className="h-5 w-5 text-techguru-purple-light" />
                  )}
                </button>
                <Button className="btn-neon">Get Started</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
