import React from 'react';
import { GraduationCap, Zap, Shield, LifeBuoy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "TRAINED STAFF",
      description: "Our staff is well trained in bus transportations and safety Measures."
    },
    {
      icon: Zap,
      title: "FLEXIBLE SERVICE",
      description: "Our team is the most flexible & disciplined one that aims at respecting time."
    },
    {
      icon: Shield,
      title: "SECURITY",
      description: "Every bus have GPS system & Speed Governor device which ensures road safety & RTO norms."
    },
    {
      icon: LifeBuoy,
      title: "BACKUP",
      description: "We make sure that we have a backup ready in case of any emergency or breakdown."
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose BusBees</h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Our commitment to excellence drives everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-white p-8 rounded-2xl text-black hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl group"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-black/10 group-hover:bg-white/10 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-black group-hover:text-white transition-all duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 tracking-wide text-black group-hover:text-white transition-all duration-300">{feature.title}</h3>
                    <p className="text-lg leading-relaxed text-black group-hover:text-white transition-all duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;