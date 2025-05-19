
import React, { useEffect, useRef } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = '' }) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          if (counterRef.current) {
            let current = 0;
            const step = value / 50; // Animate in 50 steps
            const timer = setInterval(() => {
              current += step;
              if (current >= value) {
                current = value;
                clearInterval(timer);
              }
              counterRef.current!.textContent = `${Math.floor(current)}${suffix}`;
            }, 30);
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value, suffix]);

  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
        <div ref={counterRef} className="inline-block text-techguru-blue">
          0{suffix}
        </div>
      </div>
      <p className="text-gray-300 text-lg">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { value: 200, label: 'Containers Deployed', suffix: '+' },
    { value: 99.9, label: 'Uptime Percentage', suffix: '%' },
    { value: 50, label: 'Cloud Migrations', suffix: '+' },
    { value: 30, label: 'Enterprise Clients', suffix: '+' }
  ];

  return (
    <section id="stats" className="py-16 bg-techguru-purple-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our achievements speak for themselves
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              suffix={stat.suffix} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
