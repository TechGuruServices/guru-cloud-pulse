
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      contactMethod: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactMethod: 'email'
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-techguru-purple-dark/95 to-techguru-purple-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-techguru-blue/5 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-techguru-blue/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-techguru-purple-light/10 blur-2xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(30,174,219,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(30,174,219,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block font-montserrat">
            Let's Get Started
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
            Fill out the form below and we'll be in touch to discuss your project
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative group transform transition-all duration-500 hover:scale-[1.01]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-techguru-blue via-techguru-purple-light to-techguru-blue rounded-xl opacity-50 blur-sm group-hover:opacity-100 transition-opacity duration-700"></div>
                <form 
                  onSubmit={handleSubmit}
                  className="bg-techguru-purple-dark/50 p-8 rounded-xl backdrop-blur-lg relative border border-gray-700/30 shadow-xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="form-group">
                      <Label htmlFor="name" className="text-white mb-2 block font-inter">Your full name</Label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-400 focus:border-techguru-blue"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-techguru-blue to-techguru-purple-light group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <Label htmlFor="email" className="text-white mb-2 block font-inter">Your email address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-400 focus:border-techguru-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="form-group">
                      <Label htmlFor="phone" className="text-white mb-2 block font-inter">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-400 focus:border-techguru-blue"
                      />
                    </div>

                    <div className="form-group">
                      <Label htmlFor="subject" className="text-white mb-2 block font-inter">Subject</Label>
                      <Select value={formData.subject} onValueChange={handleSelectChange}>
                        <SelectTrigger id="subject" className="bg-gray-800/60 border-gray-700 text-white focus:border-techguru-blue">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                          <SelectItem value="tech-docs">Technical Documentation</SelectItem>
                          <SelectItem value="ai-assistant">AI Assistant Setup</SelectItem>
                          <SelectItem value="startup-systems">Startup Systems</SelectItem>
                          <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label htmlFor="message" className="text-white mb-2 block font-inter">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-400 resize-none focus:border-techguru-blue"
                    />
                  </div>

                  <div className="mb-8">
                    <Label className="text-white mb-2 block font-inter">Preferred Contact Method</Label>
                    <RadioGroup 
                      value={formData.contactMethod} 
                      onValueChange={handleRadioChange}
                      className="flex flex-wrap gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-option" className="text-techguru-blue" />
                        <Label htmlFor="email-option" className="text-white font-inter">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-option" className="text-techguru-blue" />
                        <Label htmlFor="phone-option" className="text-white font-inter">Phone</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-neon w-full text-lg py-6 relative overflow-hidden group" 
                    disabled={isSubmitting}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-techguru-blue to-techguru-purple-light opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                    <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-xl h-fit">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4 font-montserrat">Connect With Us</h3>
                <p className="text-gray-300 mb-4 font-inter">
                  Follow TechGuru on social media or visit our GitHub repository for the latest updates and projects.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-techguru-blue font-semibold mb-3 font-montserrat">Social Media</h4>
                <a 
                  href="https://instagram.com/TechGuru_SERVICES_official" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-white hover:text-techguru-blue transition-colors mb-2"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @TechGuru_SERVICES_official
                </a>
              </div>
              
              <div className="mb-6">
                <h4 className="text-techguru-blue font-semibold mb-3 font-montserrat">GitHub</h4>
                <a 
                  href="https://techguruservices.github.io/contact-form-service/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-white hover:text-techguru-blue transition-colors group"
                >
                  <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                  <span className="relative inline-block">
                    TechGuru GitHub
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-techguru-blue transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                </a>
              </div>
              
              <div>
                <a 
                  href="https://techguruservices.github.io/contact-form-service/"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-neon py-2 px-4 inline-flex items-center text-sm"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View GitHub Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
