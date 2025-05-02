
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/techguru', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/techguru', label: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/techguru', label: 'Twitter' }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-techguru-purple-dark py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 flex items-center">
            <img 
              src="/lovable-uploads/5ff34453-7603-4fd0-88ba-c12a1c31757c.png" 
              alt="TechGuru Logo" 
              className="h-10 w-10 mr-3" 
            />
            <span className="text-2xl font-bold text-white">TechGuru</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-700 hover:border-techguru-blue hover:text-techguru-blue transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p className="mb-4">
            <span className="gradient-text font-bold">Pack. Optimize. Deploy. Scale Up!</span>
          </p>
          <p>&copy; {currentYear} TechGuru Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
