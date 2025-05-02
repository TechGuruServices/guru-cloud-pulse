
import React from 'react';

const AboutSection: React.FC = () => {
  const expertiseItems = [
    "6+ years of DevOps and cloud architecture experience",
    "Certified AWS Solutions Architect & Docker expert",
    "Specialized in serverless architecture and microservices",
    "Full-stack development background with modern frameworks",
    "AI/ML integration and deployment specialist",
    "CI/CD pipeline optimization and automation"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-techguru-purple-dark to-techguru-purple-dark/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">
            About TechGuru
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your partner in technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-techguru-blue via-techguru-purple-light to-techguru-blue opacity-30 blur-xl"></div>
            <div className="relative">
              <img 
                src="/lovable-uploads/60933458-0ec4-4a75-b25e-5945b35b63e6.png" 
                alt="TechGuru Expert" 
                className="rounded-2xl shadow-xl max-w-full w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Technical Excellence & Innovation
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              TechGuru is a specialized technical consultancy focused on delivering exceptional cloud, DevOps, and AI solutions. With a mission to simplify complex technologies, we help businesses deploy and scale their applications efficiently.
            </p>
            
            <h4 className="text-xl font-semibold mb-4 text-techguru-blue">Areas of Expertise:</h4>
            <ul className="space-y-3 mb-8">
              {expertiseItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-techguru-blue mr-2">→</span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className="btn-primary inline-block"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
