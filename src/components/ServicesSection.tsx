
import React from 'react';
import { File, MessageCircle, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <File className="h-12 w-12 text-techguru-blue" />,
      title: 'TechGuru Docs',
      description: 'Premium technical documentation and knowledge bases for your software, APIs, and systems. Clear, concise, and comprehensive.',
      action: 'Learn More'
    },
    {
      id: 2,
      icon: <MessageCircle className="h-12 w-12 text-techguru-blue" />,
      title: 'AI Assistant Setup',
      description: 'Custom AI chatbot development and integration. Train your AI on your business data and deliver exceptional customer service.',
      action: 'Learn More'
    },
    {
      id: 3,
      icon: <Settings className="h-12 w-12 text-techguru-blue" />,
      title: 'Startup Systems Support',
      description: 'End-to-end technical infrastructure setup for startups. From cloud deployment to DevOps automation and scaling strategies.',
      action: 'Learn More'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-techguru-purple-dark to-techguru-purple-dark/95 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-techguru-blue/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-techguru-blue/5 to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-techguru-purple-light/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/5 w-72 h-72 rounded-full bg-techguru-blue/10 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block font-montserrat">
            Services & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            From cloud deployments to AI integration, we offer comprehensive tech services to power your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-techguru-purple-dark/30 border border-gray-700/50 card-glow backdrop-blur-sm group transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-techguru-blue/10 to-techguru-purple-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-techguru-blue to-techguru-purple-light opacity-0 group-hover:opacity-30 rounded-lg blur-sm transition-opacity duration-500"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="mb-4 bg-techguru-purple-dark/80 p-4 rounded-full inline-block border border-techguru-blue/30 group-hover:border-techguru-blue/80 transition-colors glassmorphism">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white font-montserrat">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-300 text-base min-h-[100px] font-inter">{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="relative z-10">
                <a href="#contact" className="text-techguru-blue hover:text-techguru-blue-light transition-colors font-semibold inline-block relative">
                  {service.action}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-techguru-blue transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
