import React from 'react';
import { Users, Bus, Building, Calendar } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      number: "2,345",
      suffix: "+",
      label: "We currently provide school bus service to more than 2345 students on a regular basis.",
      icon: Users
    },
    {
      number: "27",
      suffix: "+",
      label: "As on date we are effectively managing fleet of 27 School/ Staff buses.",
      icon: Bus
    },
    {
      number: "78",
      suffix: "+",
      label: "We have a trained workforce of over 78 employees.",
      icon: Building
    },
    {
      number: "29",
      suffix: "+",
      label: "We've been in the transportation business for over 29 years.",
      icon: Calendar
    }
  ];

  return (
    <section 
      id="stats" 
      className="py-20 bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/159658/yellow-school-bus-rural-road-school-bus-159658.jpeg')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Impact</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Numbers that speak for our commitment and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-center group"
              >
                <div className="mb-6">
                  <IconComponent className="h-12 w-12 text-white group-hover:text-black mx-auto mb-4 group-hover:scale-110 transition-all duration-300" />
                  <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-black mb-2 transition-all duration-300">
                    {stat.number}
                    <span className="text-white group-hover:text-black">{stat.suffix}</span>
                  </div>
                </div>
                <p className="text-white group-hover:text-black leading-relaxed text-sm transition-all duration-300">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;