
import React from 'react';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Chatbot Integration',
      category: 'AI Assistant',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      description: 'Custom AI assistant implementation for a SaaS platform with knowledge base integration.'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Setup',
      category: 'DevOps',
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      description: 'Complete AWS infrastructure setup with CI/CD pipelines and containerized applications.'
    },
    {
      id: 3,
      title: 'Technical Documentation',
      category: 'Documentation',
      imageUrl: 'https://images.unsplash.com/photo-1527576539890-dfa815648363',
      description: 'Comprehensive API documentation and system architecture guides for developer teams.'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-techguru-purple-dark to-techguru-purple-dark/95 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-techguru-blue/5 to-transparent"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-techguru-blue/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-tr from-techguru-purple-light/10 to-transparent blur-2xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(127,90,240,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(127,90,240,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block font-montserrat">
            Portfolio & Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Explore our recent work and successful project implementations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02] hover:-rotate-1"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-techguru-blue to-techguru-purple-light opacity-0 group-hover:opacity-70 rounded-xl blur-sm transition-opacity duration-500"></div>
              <div className="relative bg-techguru-purple-dark/50 border border-gray-700/30 rounded-xl overflow-hidden z-10 h-full">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-techguru-purple-dark to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-techguru-blue/20 text-techguru-blue text-xs font-semibold rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 font-montserrat">{project.title}</h3>
                  <p className="text-gray-300 mb-4 font-inter">{project.description}</p>
                  
                  <a 
                    href="#contact" 
                    className="inline-flex items-center text-techguru-blue hover:text-techguru-blue-light transition-colors"
                  >
                    <span className="mr-2">View Details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
