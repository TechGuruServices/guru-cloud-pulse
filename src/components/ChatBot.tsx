
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([
    { text: "Hi, I'm your TechGuru assistant—how can I help you today?", sender: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    // Stop pulsing effect after 5 seconds
    const timer = setTimeout(() => {
      setIsPulsing(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: newMessage, sender: 'user' }]);
    setNewMessage('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { 
          text: "Thanks for reaching out! This is a demo chatbot. To speak with our team directly, please use the contact form above.", 
          sender: 'bot' 
        }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-techguru-blue text-white p-4 rounded-full shadow-lg hover:bg-techguru-blue-light transition-all ${
          isPulsing ? 'animate-neon-pulse' : ''
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-techguru-purple-dark/95 backdrop-blur-md rounded-lg shadow-2xl border border-techguru-blue/30 flex flex-col animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between bg-techguru-blue p-4 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/5ff34453-7603-4fd0-88ba-c12a1c31757c.png" 
                alt="TechGuru Logo" 
                className="h-6 w-6" 
              />
              <span className="font-bold text-white">TechGuru Assistant</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sender === 'user' 
                    ? 'bg-techguru-blue text-white rounded-br-none' 
                    : 'bg-gray-700 text-white rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="bg-gray-800/60 border-gray-700 text-white"
              />
              <Button type="submit" variant="default" className="bg-techguru-blue hover:bg-techguru-blue-light">
                Send
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
