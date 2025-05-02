
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "TechGuru transformed our deployment pipeline. What used to take days now happens in minutes with their containerization approach. Our team can focus on development instead of infrastructure headaches.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "FinTech Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      content: "The cloud migration was seamless. TechGuru mapped our entire infrastructure, optimized costs, and moved everything without any downtime. We're saving 40% on our cloud expenses now.",
      author: "Michael Chen",
      role: "DevOps Lead",
      company: "RetailSmart",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      content: "Implementing AI features seemed daunting until we brought in TechGuru. They architected an elegant solution that integrated perfectly with our existing systems. User engagement has increased by 200% since launch.",
      author: "Emily Rodriguez",
      role: "Product Manager",
      company: "Health Innovations",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-techguru-purple-dark/95 to-techguru-purple-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear directly from our clients about their experience working with TechGuru
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <div className="relative h-[350px] sm:h-[250px]">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                      index === activeIndex 
                        ? 'opacity-100 translate-x-0' 
                        : index < activeIndex 
                          ? 'opacity-0 -translate-x-full' 
                          : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <blockquote className="mb-8">
                      <p className="text-xl italic text-gray-200 mb-6">"{testimonial.content}"</p>
                      <div className="flex items-center">
                        <div className="mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author} 
                            className="w-14 h-14 rounded-full border-2 border-techguru-blue"
                          />
                        </div>
                        <div>
                          <cite className="text-white font-medium not-italic">{testimonial.author}</cite>
                          <p className="text-gray-400">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-techguru-blue w-6' : 'bg-gray-500'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Previous/Next buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 sm:-left-8 -translate-y-1/2 bg-techguru-purple-dark/80 p-2 rounded-full border border-techguru-blue/30 hover:border-techguru-blue transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-techguru-purple-dark/80 p-2 rounded-full border border-techguru-blue/30 hover:border-techguru-blue transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
