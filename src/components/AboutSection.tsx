
import React from 'react';

const AboutSection: React.FC = () => {
  const expertiseItems = [
    "6+ years of DevOps and cloud architecture experience",
    "Certified AWS Solutions Architect & Docker expert",
    "Specialized in serverless architecture and microservices",
    "Technical documentation and knowledge base creation",
    "AI/ML integration and chatbot deployment specialist",
    "Automation workflows and system optimization"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-techguru-purple-dark to-techguru-purple-dark/95 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-techguru-blue/10 to-transparent blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-techguru-purple-light/10 to-transparent blur-3xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(127,90,240,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(127,90,240,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block font-montserrat">
            About TechGuru
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Your partner in technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-techguru-blue via-techguru-purple-light to-techguru-blue opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-700"></div>
            <div className="relative transform group-hover:scale-[1.02] group-hover:rotate-1 transition-transform duration-700">
              <div className="absolute -inset-1 bg-gradient-to-r from-techguru-blue to-techguru-purple-light opacity-30 blur-sm rounded-2xl"></div>
              <img 
                src="/lovable-uploads/60933458-0ec4-4a75-b25e-5945b35b63e6.png" 
                alt="TechGuru Expert" 
                className="rounded-2xl shadow-xl max-w-full w-full relative z-10 glassmorphism-image"
              />
              
              {/* 3D effect elements */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-techguru-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-techguru-purple-light/20 rounded-full blur-lg"></div>
            </div>
          </div>

          <div className="glassmorphism-card p-8 rounded-2xl relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-techguru-blue to-techguru-purple-light opacity-30 rounded-2xl blur-sm"></div>
            <div className="relative bg-techguru-purple-dark/60 backdrop-blur-lg p-6 rounded-xl z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white font-montserrat">
                Technical Excellence & Innovation
              </h3>
              <p className="text-gray-300 mb-6 text-lg font-inter">
                TechGuru is a specialized technical consultancy focused on delivering exceptional cloud, DevOps, and AI solutions. With a mission to simplify complex technologies, we help businesses deploy and scale their applications efficiently.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 text-techguru-blue font-montserrat">Areas of Expertise:</h4>
              <ul className="space-y-3 mb-8">
                {expertiseItems.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="text-techguru-blue mr-3 transform group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-gray-300 font-inter">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className="btn-primary inline-block relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-techguru-blue/80 to-techguru-purple-light/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Work With Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
