
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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
    <section id="contact" className="py-20 bg-gradient-to-b from-techguru-purple-dark/95 to-techguru-purple-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">
            Let's Get Started
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fill out the form below and we'll be in touch to discuss your project
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-techguru-blue via-techguru-purple-light to-techguru-blue opacity-50 blur-sm"></div>
            <form 
              onSubmit={handleSubmit}
              className="bg-techguru-purple-dark/80 p-8 rounded-xl backdrop-blur-sm relative border border-gray-700 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Your full name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-400 focus:border-techguru-blue"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Your email address</Label>
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
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-400 focus:border-techguru-blue"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">Subject</Label>
                  <Select value={formData.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger id="subject" className="bg-gray-800/60 border-gray-700 text-white focus:border-techguru-blue">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="cloud-services">Cloud Services</SelectItem>
                      <SelectItem value="docker-kubernetes">Docker/Kubernetes</SelectItem>
                      <SelectItem value="ai-integration">AI Integration</SelectItem>
                      <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
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
                <Label className="text-white mb-2 block">Preferred Contact Method</Label>
                <RadioGroup 
                  value={formData.contactMethod} 
                  onValueChange={handleRadioChange}
                  className="flex flex-wrap gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-option" className="text-techguru-blue" />
                    <Label htmlFor="email-option" className="text-white">Email</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-option" className="text-techguru-blue" />
                    <Label htmlFor="phone-option" className="text-white">Phone</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                type="submit" 
                className="btn-neon w-full text-lg py-6" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
