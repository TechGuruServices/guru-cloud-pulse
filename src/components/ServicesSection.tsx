
import React from 'react';
import { Cloud, Github, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <Cloud className="h-12 w-12 text-techguru-blue" />,
      title: 'Cloud Solutions',
      description: 'Seamless cloud deployments & migrations. AWS, Azure, GCP expertise with optimized infrastructure and costs.',
      action: 'Learn More'
    },
    {
      id: 2,
      icon: <Github className="h-12 w-12 text-techguru-blue" />,
      title: 'DevOps & Docker',
      description: 'Containerize your applications for scalable, consistent deployments across any environment.',
      action: 'Learn More'
    },
    {
      id: 3,
      icon: <MessageCircle className="h-12 w-12 text-techguru-blue" />,
      title: 'AI Integration',
      description: 'Implement cutting-edge AI solutions to enhance your products with intelligent features.',
      action: 'Learn More'
    },
    {
      id: 4,
      icon: <Cloud className="h-12 w-12 text-techguru-blue" />,
      title: 'Optimization',
      description: 'Fine-tune your infrastructure and applications for peak performance and minimal costs.',
      action: 'Learn More'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-techguru-purple-dark to-techguru-purple-dark/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">
            Services & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From cloud deployments to AI integration, we offer comprehensive tech services to power your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-techguru-purple-dark/50 border border-gray-700 card-glow backdrop-blur-sm group">
              <CardHeader className="pb-4">
                <div className="mb-4 bg-techguru-purple-dark/80 p-4 rounded-full inline-block border border-techguru-blue/30 group-hover:border-techguru-blue/80 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base min-h-[100px]">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="text-techguru-blue hover:text-techguru-blue-light transition-colors font-semibold">
                  {service.action} →
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
